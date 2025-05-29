console.log("✅ inject.js loaded and message listener attached");

window.addEventListener("message", (event) => {
  if (event.source !== window) return;

  const { type, payload } = event.data;
  if (type !== "MONKEY_PATCH_METHOD") return;

  console.log("🧠 Received patch command:", payload);

  const { objectPath, methodName, wrapperCode } = payload;

  try {
    const targetObj = objectPath
      .split(".")
      .reduce((obj, prop) => obj?.[prop], window);

    if (!targetObj || typeof targetObj[methodName] !== "function") {
      console.warn(`❌ ${objectPath}.${methodName} is not a function or undefined`);
      return;
    }

    const patchKey = `_patched_${methodName}`;
    if (targetObj[patchKey]) {
      console.log(`ℹ️ ${objectPath}.${methodName} already patched.`);
      return;
    }

    const original = targetObj[methodName];

    // Evaluate user-defined wrapper function
    const wrappedFn = new Function("original", "objectPath", wrapperCode)(original, objectPath);

    targetObj[methodName] = wrappedFn;
    targetObj[patchKey] = true;

    console.log(`✅ Successfully patched ${objectPath}.${methodName}`);
  } catch (err) {
    console.error("💥 Error during patching:", err);
  }
});

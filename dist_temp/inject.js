window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.data.type === "MONKEY_PATCH_GFORM") {
    console.log("🧠 Received patch command in page context");

    if (!window.g_form || typeof g_form.setValue !== 'function') {
      console.warn("❌ g_form.setValue not available.");
      return;
    }

    if (g_form._setValuePatched) {
      console.log("ℹ️ g_form.setValue already patched.");
      return;
    }

    const originalSetValue = g_form.setValue;
    g_form.setValue = function (field, value, displayValue) {
      console.log(`[g_form.setValue] "${field}" = "${value}", displayValue: "${displayValue}"`);
      return originalSetValue.apply(this, arguments);
    };

    g_form._setValuePatched = true;
    console.log("✅ g_form.setValue successfully patched.");
  }
});

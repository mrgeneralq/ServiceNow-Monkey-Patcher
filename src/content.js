(function () {
  // ✅ Only run in the gsft_main iframe
  if (window.frameElement?.id !== "gsft_main") {
    console.log("⏭ Not in gsft_main, skipping inject.js");
    return;
  }

  console.log("📦 In gsft_main, injecting inject.js...");

  try {
    const url = chrome.runtime.getURL("inject.js");
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      console.log("✅ inject.js successfully loaded via src:", url);
      script.remove();
    };

    script.onerror = (e) => {
      console.error("❌ Failed to load inject.js:", e, "URL:", url);
    };

    (document.head || document.documentElement).appendChild(script);
  } catch (err) {
    console.error("💥 Script injection error:", err);
  }
})();

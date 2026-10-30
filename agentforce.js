// Salesforce Agentforce (Embedded Messaging for Web) bootstrap.
function initEmbeddedMessaging() {
  try {
    embeddedservice_bootstrap.settings.language = "en_US";
    embeddedservice_bootstrap.init(
      "00DWC00000FRgHN",
      "Brightcurrent_Website",
      "https://orgfarm-e0b7935f05--agent007sb.sandbox.my.site.com/ESWBrightcurrent1793372135327",
      { scrt2URL: "https://orgfarm-e0b7935f05--agent007sb.sandbox.my.salesforce-scrt.com" }
    );
  } catch (err) {
    console.error("Error loading Embedded Messaging: ", err);
  }
}

const bootstrap = document.createElement("script");
bootstrap.src = "https://orgfarm-e0b7935f05--agent007sb.sandbox.my.site.com/ESWBrightcurrent1793372135327/assets/js/bootstrap.min.js";
bootstrap.onload = initEmbeddedMessaging;
document.body.appendChild(bootstrap);

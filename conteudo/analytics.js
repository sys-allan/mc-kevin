const UMAMI_WEBSITE_ID = "";

if (UMAMI_WEBSITE_ID.trim()) {
  const analyticsScript = document.createElement("script");
  analyticsScript.defer = true;
  analyticsScript.src = "https://cloud.umami.is/script.js";
  analyticsScript.dataset.websiteId = UMAMI_WEBSITE_ID.trim();
  document.head.append(analyticsScript);

  const analyticsDisclosure = document.getElementById("analyticsDisclosure");
  if (analyticsDisclosure) {
    analyticsDisclosure.hidden = false;
  }
} else {
  console.info("Umami desativado. Configure UMAMI_WEBSITE_ID em conteudo/analytics.js para ativar as estatísticas.");
}

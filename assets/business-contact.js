(() => {
  const BUSINESS_INQUIRY_EMAIL = "kimura.business.ai+inquiry@gmail.com";
  const subject = "Kimura AI Lab｜コンテンツ制作についての相談";
  const href = `mailto:${BUSINESS_INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}`;

  document.querySelectorAll("[data-business-inquiry]").forEach((link) => {
    link.setAttribute("href", href);
  });
})();

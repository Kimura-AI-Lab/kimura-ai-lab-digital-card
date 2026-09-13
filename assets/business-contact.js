(() => {
  const BUSINESS_INQUIRY_EMAIL = "kimura.business.ai+inquiry@gmail.com";
  const BUSINESS_LINE_URL = "https://lin.ee/6QQOmGI";
  const subject = "Kimura AI Lab｜コンテンツ制作についての相談";
  const href = `mailto:${BUSINESS_INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}`;

  document.querySelectorAll("[data-business-inquiry]").forEach((link) => {
    link.setAttribute("href", href);
    link.textContent = "メールで相談する";

    const lineLink = document.createElement("a");
    lineLink.className = "btn primary";
    lineLink.href = BUSINESS_LINE_URL;
    lineLink.target = "_blank";
    lineLink.rel = "noopener noreferrer";
    lineLink.setAttribute("aria-label", "Kimura AI LabのLINE公式アカウントを開く");
    lineLink.textContent = "LINEで相談する";

    link.parentNode.insertBefore(lineLink, link);
  });
})();

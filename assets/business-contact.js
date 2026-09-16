(() => {
  const BUSINESS_INQUIRY_EMAIL = "kimura.business.ai+inquiry@gmail.com";
  const BUSINESS_LINE_URL = "https://lin.ee/6QQOmGI";
  const INSTAGRAM_URL = "https://www.instagram.com/kimura_ai_lab/";
  const subject = "Kimura AI Lab｜コンテンツ制作についての相談";
  const href = `mailto:${BUSINESS_INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}`;

  document.querySelectorAll("[data-business-inquiry]").forEach((link) => {
    link.setAttribute("href", href);
    link.textContent = "メールで相談する";

    const container = link.parentNode;
    const hasLineLink = Array.from(container.querySelectorAll("a")).some(
      (item) => item.getAttribute("href") === BUSINESS_LINE_URL
    );

    if (!hasLineLink) {
      const lineLink = document.createElement("a");
      lineLink.className = "btn primary";
      lineLink.href = BUSINESS_LINE_URL;
      lineLink.target = "_blank";
      lineLink.rel = "noopener noreferrer";
      lineLink.setAttribute("aria-label", "Kimura AI LabのLINE公式アカウントを開く");
      lineLink.textContent = "LINEで相談する";

      container.insertBefore(lineLink, link);
    }

    const hasInstagramLink = Array.from(container.querySelectorAll("a")).some(
      (item) => item.getAttribute("href") === INSTAGRAM_URL
    );

    if (hasInstagramLink) return;

    const instagramLink = document.createElement("a");
    instagramLink.className = "btn";
    instagramLink.href = INSTAGRAM_URL;
    instagramLink.target = "_blank";
    instagramLink.rel = "noopener noreferrer";
    instagramLink.setAttribute("aria-label", "Kimura AI LabのInstagramを開く");
    instagramLink.textContent = "Instagram @kimura_ai_lab";

    const noteLink = Array.from(container.querySelectorAll("a")).find(
      (item) => item.getAttribute("href") === "https://note.com/kimura_ai_lab"
    );

    if (noteLink) {
      container.insertBefore(instagramLink, noteLink);
    } else {
      container.appendChild(instagramLink);
    }
  });
})();

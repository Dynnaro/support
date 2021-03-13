module.exports = {
  title: "Help Center",
  themeConfig: {
    logo: "/images/logo.png",
    nav: [{ text: "Freeiam.com", link: "https://www.freeiam.com" }],
    sidebar: [
      {
        title: "General",
        collapsable: false,
        children: prefix("general", ["contact"]),
      },
      {
        title: "How to",
        collapsable: false,
        children: prefix("how-tos", ["rise-ranks"]),
      },
      {
        title: "Discord",
        collapsable: false,
        children: prefix("discord", ["sync-account"]),
      },
    ],
    smoothScroll: true,
    lastUpdated: "Last Updated",
    docsBranch: "main",
  },
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
};

function prefix(prefix, children) {
  return children.map((child) => `${prefix}/${child}`);
}

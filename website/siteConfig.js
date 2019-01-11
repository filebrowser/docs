const siteConfig = {
  title: 'File Browser',
  tagline: 'A website for testing',
  url: 'https://filebrowser.xyz',
  baseUrl: '/',
  projectName: 'filebrowser',
  organizationName: 'FileBrowser',
  headerLinks: [
    {doc: 'features', label: 'Docs'},
    {page: 'help', label: 'Help'},
  ],
  headerIcon: 'img/filebrowser.svg',
  footerIcon: 'img/filebrowser.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2979ff',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png'
};

module.exports = siteConfig

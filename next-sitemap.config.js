/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl:
    'https://audiophile-e-commerce-mq6qrawm2-amir-taherians-projects.vercel.app/',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000, // Limit the number of URLs per sitemap file
  outDir: './public', // Output directory for generated sitemap files
  exclude: [
    '/api/*', // Exclude certain paths from the sitemap
    '/checkout/*',
  ],
};

module.exports = config;

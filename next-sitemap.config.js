/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rtglass.az',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['','/admin', '/dashboard']
};

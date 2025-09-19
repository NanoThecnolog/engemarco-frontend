/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://engemarcosolucoes.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.9,
    exclude: ['/api/*'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};

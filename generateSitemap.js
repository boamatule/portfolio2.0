const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const baseUrl = 'https://boamatule.com'; // Replace with your website's URL

const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about_me', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact_me', changefreq: 'monthly', priority: 0.8 },
  // Add more pages with their respective details
];

// Create a sitemap stream
const stream = new SitemapStream({ hostname: baseUrl });

// Add pages to the sitemap stream
pages.forEach(page => {
  stream.write(page);
});

stream.end();

// Convert the sitemap stream to a string
streamToPromise(stream).then(sitemap => {
  fs.writeFileSync('public/sitemap.xml', sitemap);
});

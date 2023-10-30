module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyAudits: ['largest-contentful-paint'],
    // Add more settings as needed.
  },
  passes: [
    {
      passName: 'defaultPass',
      gatherers: [
        'lcp.js', // If you have custom gatherers.
      ],
    }
  ],
  audits: [
    '/lcp.js',
    'lighthouse:largest-contentful-paint',
    // Add more audits as needed.
  ],
  categories: {
    custom: {
      title: 'Custom Metrics',
      description: 'Custom performance metrics.',
    },
  },
};

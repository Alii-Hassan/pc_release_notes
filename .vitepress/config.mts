import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'PowerCampus Release Notes',
  description: 'Comprehensive documentation for PowerCampus upgrades from version 9.1.1 to 9.3.0',

  // Base path for GitHub Pages - replace 'pc_release_notes' with your repository name
  base: '/pc_release_notes/',

  // Theme-related configurations
  themeConfig: {
    // Site logo
    logo: '/logo.png',

    // Top navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Upgrade Guides', link: '/upgrade-guides/' },
      { text: 'Features', link: '/features/' },
      { text: 'Technical', link: '/technical/' },
      { text: 'Ellucian Support', link: 'https://elluciansupport.service-now.com/' }
    ],

    // Sidebar navigation
    sidebar: {
      '/upgrade-guides/': [
        {
          text: 'Upgrade Guides',
          items: [
            { text: 'Overview', link: '/upgrade-guides/' },
            { text: '9.1.1 to 9.2.4', link: '/upgrade-guides/9.1.1-to-9.2.4' },
            { text: '9.1.1 to 9.3.0', link: '/upgrade-guides/9.1.1-to-9.3.0' },
            { text: '9.1.2 to 9.3.0', link: '/upgrade-guides/9.1.2-to-9.3.0' },
            { text: '9.1.3 to 9.3.0', link: '/upgrade-guides/9.1.3-to-9.3.0' },
            { text: '9.1.4 to 9.3.0', link: '/upgrade-guides/9.1.4-to-9.3.0' },
            { text: '9.2.0 to 9.3.0', link: '/upgrade-guides/9.2.0-to-9.3.0' },
            { text: '9.2.1 to 9.3.0', link: '/upgrade-guides/9.2.1-to-9.3.0' },
            { text: '9.2.2 to 9.3.0', link: '/upgrade-guides/9.2.2-to-9.3.0' },
            { text: '9.2.3 to 9.3.0', link: '/upgrade-guides/9.2.3-to-9.3.0' },
            { text: '9.2.4 to 9.3.0', link: '/upgrade-guides/9.2.4-to-9.3.0' }
          ]
        }
      ],

      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Overview', link: '/features/' },
            {
              text: 'PowerCampus Client',
              collapsed: true,
              items: [
                { text: 'Security & Authentication', link: '/features/client/security' },
                { text: 'Integration & APIs', link: '/features/client/integration' },
                { text: 'UI Improvements', link: '/features/client/ui' }
              ]
            },
            {
              text: 'Self-Service',
              collapsed: true,
              items: [
                { text: 'Student Features', link: '/features/self-service/student' },
                { text: 'Faculty Features', link: '/features/self-service/faculty' },
                { text: 'Security Features', link: '/features/self-service/security' },
                { text: 'User Experience', link: '/features/self-service/ux' }
              ]
            },
            {
              text: 'User Management',
              collapsed: true,
              items: [
                { text: 'User Administration', link: '/features/user-management/admin' },
                { text: 'Security & Integration', link: '/features/user-management/security' }
              ]
            },
            {
              text: 'Regional Services',
              collapsed: true,
              items: [
                { text: 'Electronic Documents', link: '/features/regional/documents' },
                { text: 'Fiscal Records', link: '/features/regional/fiscal' }
              ]
            }
          ]
        }
      ],

      '/technical/': [
        {
          text: 'Technical Resources',
          items: [
            { text: 'Overview', link: '/technical/' },
            { text: 'Deployment Guide', link: '/technical/deployment-guide' },
            { text: 'Compatibility Guide', link: '/technical/compatibility-guide' },
            { text: 'Data Migration Guide', link: '/technical/data-migration-guide' },
            { text: 'Breaking Changes', link: '/technical/breaking-changes' },
            { text: 'Platform Requirements', link: '/technical/platform-requirements' },
            { text: 'Security Considerations', link: '/technical/security' },
            { text: 'Bug Fixes & Resolutions', link: '/technical/resolutions' }
          ]
        }
      ]
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alii-Hassan' }
    ],

    // Footer configuration
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Ali Hassan Salah.`
    },

    // Search configuration
    search: {
      provider: 'local'
    }
  }
});

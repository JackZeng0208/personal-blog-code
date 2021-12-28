module.exports = {
    lang: 'en-US',
    title: 'Rabinovich\'s Blog',
    description: 'This is Jack Zeng\'s personal blog',
    theme: '@vuepress/theme-default',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Rabinovich\'s Blog',
            description: 'Vue-powered Static Site Generator',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Rabinovich的博客',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                },
            },
        ],
    ],
    themeConfig: {
        search: true,
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: 'Front-end Notes',
                link: '/Front-end\ Notes/',
            },
            {
                text: 'Reading Notes',
                link: '/Reading\ Notes/'
            }
        ]
    },
}
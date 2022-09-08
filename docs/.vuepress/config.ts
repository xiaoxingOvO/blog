import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    base: '/blog/',
    lang: 'zh-CN', //站点的语言
    title: 'xx', //站点的标题
    description: '专注记录成长的点点滴滴', //站点的描述
    // head: [['link', { rel: 'icon', href: '/xing.png' }]], //网页图标

    theme: defaultTheme({
        //logo: '/xing.png', //Logo 图片
        repo: 'https://github.com/xiaoxingOvO/blog', //github仓库

        //导航栏
        navbar: [
            // NavbarItem
            {text: '首页',link: '/',},
            {text: 'Java文档',link: '/java/',},
            // NavbarGroup
            {text: '环境搭建',
                children: [
                    {text: 'win10',link: '/dev/win10',},
                    {text: 'ubuntu',link: '/dev/ubuntu',},
                ],
            },
        ],

        sidebar: 'auto', //侧边栏

    }),

})
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // VuePress 配置...
  bundler: viteBundler(),

  theme: plumeTheme({
    // 主题配置...
    lang: 'zh-CN',
    footer: {
      message: "公安备案: 32020502000797 </br> ICP备2021005150号"
    },
    title: 'Z` Blog',
    description: '一夜飞度镜湖月',
    logo: 'https://alicloud-pic.oss-cn-shanghai.aliyuncs.com/BlogImg/avatar.jpg',
    logoDark: 'https://alicloud-pic.oss-cn-shanghai.aliyuncs.com/BlogImg/avatar.jpg',
    hostname: 'blog.zqzqsb.com',

    avatar: {
      url: 'https://alicloud-pic.oss-cn-shanghai.aliyuncs.com/BlogImg/avatar.jpg',
      name: 'Pray0',
      description: '人世间的美好梦想，只有通过诚实劳动才能实现。✨✨',
      circle: true,
      location: 'yangpu shanghai',
      organization: 'fudan university',
    },

    plugins: {
      shiki: {
        languages: ["shell", "yaml", "javascript", "js", "vue", "c++", "cpp", "c", "sh", "bash", "http", "html", "go", "tsx", "jsx", "ts", "rust", "toml"],
      }
    },

    social: [
      { icon: 'github', link: 'https://github.com/Zqzqsb' }
    ],

    navbar: [
      { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
      { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
      {
        text: '笔记',
        icon: 'material-symbols:article-outline',
        items: [
          { text: 'NextJS', icon: 'mdi:react', link: '/notes/NextJS/' },
          { text: 'Rust', icon: 'mdi:language-rust', link: '/notes/Rust/' },
          { text: 'Golang', icon: 'mdi:language-go', link: '/notes/Golang/' },
          //          { text: 'Network', icon: 'mdi:network', link: '/notes/Network/' },
        ]
      }
    ],

    notes: {
      link: '/notes/',
      dir: 'Notes',
      notes: [
        {
          dir: 'NextJS',
          link: 'NextJS',
          text: 'NextJS的学习笔记',
          sidebar: 'auto'
        },

        {
          dir: 'Golang',
          link: 'Golang',
          text: 'Golang的学习笔记',
          sidebar: 'auto'
        },
        {
          dir: 'Rust',
          link: 'Rust',
          text: 'Rust的学习笔记',
          sidebar: 'auto'
        },
        {
          dir: 'Network',
          link: 'Network',
          text: '网络有关的笔记',
          sidebar: 'auto'
        },
      ]
    }
  })
})
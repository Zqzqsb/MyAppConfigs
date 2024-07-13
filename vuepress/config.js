import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  // VuePress 配置...
  bundler: viteBundler(),

  theme: plumeTheme({
    // 主题配置...
    lang: "zh-CN",
    footer: {
      message: "公安备案: 32020502000797 </br> ICP备2021005150号",
    },
    title: "Z` Blog",
    description: "一夜飞度镜湖月",
    logo: "https://alicloud-pic.oss-cn-shanghai.aliyuncs.com/BlogImg/avatar.jpg",
    logoDark:
      "https://alicloud-pic.oss-cn-shanghai.aliyuncs.com/BlogImg/avatar.jpg",
    hostname: "blog.zqzqsb.com",

    avatar: {
      url: "https://alicloud-pic.oss-cn-shanghai.aliyuncs.com/BlogImg/avatar.jpg",
      name: "Pray0",
      description: "人世间的美好梦想，只有通过诚实劳动才能实现。✨✨",
      circle: true,
      location: "yangpu shanghai",
      organization: "fudan university",
    },

    social: [{ icon: "github", link: "https://github.com/Zqzqsb" }],

    navbar: [
      { text: "首页", link: "/", icon: "material-symbols:home-outline" },
      {
        text: "博客",
        link: "/blog/",
        icon: "material-symbols:article-outline",
      },
      {
        text: "笔记",
        icon: "material-symbols:article-outline",
        items: [
          {
            text: "计算机网络",
            icon: "mdi:network",
            link: "/notes/NetWork/",
          },
          {
            text: "Linux",
            icon: "mdi:linux",
            link: "/notes/Linux/",
          },
          { text: "Server", icon: "mdi:server", link: "/notes/Server/" },

          { text: "NextJS", icon: "mdi:react", link: "/notes/NextJS/" },
        ],
      },
    ],

    notes: {
      link: "/notes/",
      dir: "notes",
      notes: [
        {
          dir: "NetWork",
          link: "NetWork",
          text: "网络相关",
          sidebar: "auto",
        },
        {
          dir: "Linux",
          link: "Linux",
          text: "Linux相关",
          sidebar: "auto",
        },
        {
          dir: "Server",
          link: "Server",
          text: "自建服务器",
          sidebar: "auto",
        },
        {
          dir: "NextJS",
          link: "NextJS",
          text: "NextJS的学习笔记",
          sidebar: "auto",
        },
      ],
    },
  }),
});

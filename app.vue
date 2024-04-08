<template>
  <div id="app">
    <!-- Nuxt页面路由 == RouterView -->
    <!-- 缓存页面 最大缓存10级页面 方便用户切换页面不需要每次都重新加载-->
    <NuxtPage :keepalive="{ max: 10 }" />
  </div>
</template>

<script setup lang="ts">
// SEO优化信息 不需要引入 可以直接使用
useSeoMeta({
  // 标签页title 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
  title: "哔哩哔哩Demo",
  // 这个标题通常会作为分享的标题出现
  ogTitle: "这是一个分享时网站会展示的标题",
  // 网站的描述
  description:
    "哔哩哔哩(bilibili.com)是国内知名的视频弹幕网站,这里有及时的动漫新番,活跃的ACG氛围,有创意的Up主。大家可以在这里找到许多欢乐。",
  // 这个描述通常会作为分享的描述出现
  ogDescription: "这是一个分享时会出现的网站描述",
  // 网站被分享时展示的图片
  ogImage: "https://example.com/image.png",
  // 搜索的关键词
  keywords:
    "B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,漫画,在线动漫,高清电影",
  // B站图片有防盗链 需要加referrer绕开
  referrer: "no-referrer",
  // <meta name="referrer" content="no-referrer"/>
});
</script>
<style>
:root {
  /* 全局修改 Vant组件库样式 */
  --van-button-primary-background: #fb7299 !important; /* 主要按钮背景色 */
  --van-button-primary-border-color: #fb7299 !important; /* 主要按钮边框色 */
}

html,
body,
#__nuxt,
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

p {
  margin: 0;
  color: black !important;
}
</style>

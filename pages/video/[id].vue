<template>
  <div class="videoBox">
    <!-- 头部组件 -->
    <AppHeader />

    <!-- 播放器 -->
    <div class="video">
      <van-barrage v-model="defaultList" ref="barrage" :auto-play="false">
        <video
          class="video-play"
          ref="videoRef"
          controls="controls"
          :autoplay="false"
          @play="playVideo"
          @pause="pauseVideo"
          src="https://video.pearvideo.com/mp4/third/20230706/cont-1784445-12033417-151259-hd.mp4"
        ></video>
      </van-barrage>
    </div>

    <div class="correlation">100+个相关视频</div>
    <div>tsetDemo分支</div>
  </div>
</template>

<script setup>
const route = useRoute();
// 路由传递的bvid
const videoBvId = ref(route.params.id);
// 获取相应bvid的视频数据
const { data: videoDetail } = await useFetch(`/api/video/${videoBvId.value}`);
// 弹幕组件dom
const barrage = ref();
// 弹幕数据
const defaultList = ref([
  { id: 100, text: "轻量" },
  { id: 101, text: "可定制的" },
  { id: 102, text: "移动端" },
  { id: 103, text: "Vue" },
  { id: 104, text: "组件库" },
  { id: 105, text: "VantUI" },
  { id: 106, text: "666" },
]);

// SEO优化
useSeoMeta({
  title: `${videoDetail.value.title} - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili`,
});

// 播放视频
const playVideo = () => {
  barrage.value.play();
};

// 暂停视频
const pauseVideo = () => {
  barrage.value.pause();
};
</script>

<style lang="scss" scoped>
.videoBox {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .video-play {
    width: 100%;
    height: auto;
    object-fit: contain;
    background: #fff;
  }

  .correlation {
    width: 100%;
    height: 40px;
    background: #fff;
    line-height: 40px;
    padding: 0 10px;
    color: #9499a0;
  }
}
</style>

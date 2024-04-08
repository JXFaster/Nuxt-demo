<template>
  <div class="homeBox">
    <!-- 头部组件 -->
    <AppHeader />

    <!-- 主体 -->
    <main>
      <!-- tabbar栏 -->
      <van-sticky :offset-top="40">
        <div class="tabbar">
          <van-tabs v-model:active="active">
            <van-tab v-for="item in channelList" :title="item.name"> </van-tab>
          </van-tabs>
        </div>
      </van-sticky>

      <!-- tabbar主体 -->
      <div class="tabbar-main">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="false"
          @load="onLoad"
        >
          <nuxt-link
            v-for="item in list"
            :key="item.aid"
            :to="`/video/${item.bvid}`"
          >
            <div class="card">
              <div class="card-img">
                <img :src="item.pic" />
              </div>
              <div class="count">
                <span>
                  <img src="../assets/播放.png" alt="" />
                  {{ item.stat.view }}
                </span>
                <span>
                  <img src="../assets/弹幕.png" alt="" />
                  {{ item.stat.danmaku }}
                </span>
              </div>
              <div class="card-title">{{ item.title }}</div>
            </div>
          </nuxt-link>
        </van-list>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from ".nuxt/imports";
import { ref } from "vue";
import type { tabbarDataType } from "../types/tabbar";
import type { videoDataType } from "../types/video";
// ------------------------------------------------------------------------------  tabbar
// tabbar 默认高亮项
const active = ref(0);
// tabbar 头部数据
const channelList = ref<tabbarDataType[]>([]);

// 在Nuxt中使用useFetch来请求数据，不需要axios, 后边的部分默认为get请求可以不写
// 这里是请求自己写的接口，如果想请求外部接口更换路径 或者 直接使用axios也可以
const res1: any = await useFetch("/api/channel", {
  method: "GET",
});
// console.log("res1", res1);

// const res = await useFetch("https://api.github.com/search/users?q=JXFaster");
// console.log("res1.data.value.body.data", res1.data.value.body.data);

channelList.value = res1.data.value.body.data;

// ------------------------------------------------------------------------------  card
// card数据
const cardData = ref([]);
const list = ref<videoDataType[]>([]);
// 加载状态
const loading = ref(false);
// 是否完成
const finished = ref(false);
// 页码
const page = ref(1);
// 每页条数
const pageSize = ref(10);

const res2 = await useFetch("/api/video", { method: "GET" });
cardData.value = res2.data.value;

// 触底时触发
const onLoad = () => {
  // 根据页码提取数据;
  const data = res2.data.value.slice(
    (page.value - 1) * pageSize.value,
    page.value * pageSize.value
  );
  list.value.push(...data);
  page.value++;
  loading.value = false;

  if (cardData.value.length == list.value.length) {
    // 加载结束
    finished.value = true;
  }
  // console.log("cardData.value", cardData.value);
  // console.log("list.value", list.value);
};
// 初始化加载 - 主动请求前20条数据，用于首屏渲染，方便SEO抓取数据
onLoad();
</script>

<style lang="scss" scoped>
.homeBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  // 主体
  main {
    flex: 1;
    overflow: auto;
    background: #fff;
    .tabbar {
      --van-tab-active-text-color: #ff6699;
      --van-tabs-bottom-bar-color: #ff6699;
    }

    .tabbar-main {
      width: 100%;
      padding-top: 15px;

      .van-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .card {
          width: 172px;
          height: 151px;
          position: relative;
          box-sizing: border-box;

          .card-img {
            img {
              width: 172px;
              height: 97px;
            }
          }

          .count {
            width: 100%;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            position: absolute;
            left: 0;
            bottom: 60px;

            span {
              color: #fff;
              margin-left: 5px;
              margin-right: 5px;
              img {
                width: 12px;
                height: 12px;
                margin-right: 2px;
              }
            }
          }

          .card-title {
            width: 100%;
            height: 34px;
            font-size: 13px;
            color: black;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.van-list__finished-text {
  width: 100%;
  text-align: center;
}
</style>

<template>
  <van-sticky :offset-top="0">
    <header>
      <div class="header-left">
        <img src="../assets/logo-bilibili-pink.png@132w_60h_1c.png" alt="" />
      </div>
      <div class="header-right">
        <div class="searchIcon"><van-icon name="search" /></div>
        <img src="../assets/ltt.png" alt="" />
        <div class="downBtn">下载App</div>
      </div>
    </header>
  </van-sticky>
</template>

<script setup></script>

<style lang="scss" scoped>
// 头部
header {
  width: 100%;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  background: #fff;
  display: flex;

  > div {
    width: 50%;
    height: 100%;
  }

  .header-left {
    img {
      width: 66px;
      height: 30px;
      margin-top: 5px;
      margin-left: 10px;
    }
  }

  .header-right {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .searchIcon {
      i {
        font-size: 22px;
        color: #d6d6d7;
      }
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    .downBtn {
      width: 72px;
      height: 24px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      line-height: 24px;
      border-radius: 4px;
      background: #ff6699;
    }
  }
}
</style>

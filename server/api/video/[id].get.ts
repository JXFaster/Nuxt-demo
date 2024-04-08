import video from "../../../database/video";

export default defineEventHandler((event) => {
  // 在终端打印event，查看传递过来的数据
  //   console.log("event", event);

  // 获取路由参数
  const { id } = event.context.params || {};

  // 根据id找到视频数据
  return video.find((item) => item.bvid == id);
});

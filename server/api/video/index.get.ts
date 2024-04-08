import videoData from "@/database/video";

// 通过 defineEventHandler 定义接口
export default defineEventHandler(() => {
  return videoData;
});

<template>
  <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">หน้าแรก</h2>
  <p class="text-lg mb-8 text-center text-gray-600">
    ยินดีต้อนรับสู่ Healthy House
  </p>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
  >
    <div
      v-for="item in navItems"
      :key="item.page"
      class="nav-item cursor-pointer relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border"
      @click="navigateTo(item.page)"
    >
      <div
        class="absolute inset-0 flex items-center justify-center bg-cream-200 bg-opacity-75 text-xl font-semibold"
      >
        {{ item.label }}
      </div>
      <video
        :data-src="item.video"
        class="lazy-video absolute rounded-lg inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
        muted
        loop
        disablePictureInPicture
        playsinline
        @mouseover="playVideo($event)"
        @mouseleave="pauseVideo($event)"
      ></video>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (page) => {
  router.push({ name: page });
};

import athleticsVideo from "@/assets/video/athletics.mp4";
import swimmingVideo from "@/assets/video/swimming.mp4";
import footballVideo from "@/assets/video/football.mp4";
import danceVideo from "@/assets/video/dance.mp4";
import cyclingVideo from "@/assets/video/cycling.mp4";
import takrawVideo from "@/assets/video/takraw.mp4";
import golfVideo from "@/assets/video/golf.mp4";
import petanqueVideo from "@/assets/video/petanque.mp4";

const navItems = [
  {
    page: "athletics",
    label: "กรีฑา",
    video: athleticsVideo,
  },
  {
    page: "swimming",
    label: "ว่ายน้ำ",
    video: swimmingVideo,
  },
  {
    page: "football",
    label: "ฟุตบอล",
    video: footballVideo,
  },
  { page: "dance", label: "ลีลาศ", video: danceVideo },
  {
    page: "cycling",
    label: "จักรยาน",
    video: cyclingVideo,
  },
  { page: "takraw", label: "ตะกร้อ", video: takrawVideo },
  { page: "golf", label: "กอล์ฟ", video: golfVideo },
  {
    page: "petanque",
    label: "เปตอง",
    video: petanqueVideo,
  },
];

const playVideo = (event) => {
  event.target.play();
};

const pauseVideo = (event) => {
  event.target.pause();
};

onMounted(() => {
  const lazyVideos = document.querySelectorAll('.lazy-video');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.src = video.dataset.src;
        observer.unobserve(video);
      }
    });
  });

  lazyVideos.forEach(video => {
    observer.observe(video);
  });
});
</script>

<style scoped>
.nav-item {
  height: 200px;
}
</style>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">สาระน่ารู้</h2>
    <p class="mb-8">ข้อมูลที่เป็นประโยชน์เกี่ยวกับสุขภาพ</p>

    <div class="grid grid-cols-2 gap-6 mb-6">
      <div
        v-for="(item, index) in knowledgeItems"
        :key="index"
        class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer flex items-center"
        @click="navigateTo(item.route)"
        :class="{ 'col-span-2': item.colSpan === 2 }"
      >
        <div class="w-1/3 h-48 bg-gray-200">
          <img
            :src="item.image"
            alt="Image description"
            class="w-full h-48 object-cover"
          />
        </div>
        <div class="p-4 text-left w-2/3">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const knowledgeItems = ref([
  {
    route: "exercise-mistakes",
    image: "https://placehold.co/150",
    title: "5 วิธีออกกําลังกายเพื่อลดนํ้าหนักผิด ๆ ที่คนมักไม่รู้ตัว",
    description:
      "รายละเอียดเกี่ยวกับวิธีการออกกำลังกายที่ไม่ถูกต้องและผลกระทบต่อสุขภาพ",
    colSpan: 1,
  },
  {
    route: "colorful-vegetables",
    image: "https://placehold.co/150",
    title: "มหัศจรรย์ของสีสันในผักผลไม้",
    description: "ข้อมูลเกี่ยวกับประโยชน์ของผักและผลไม้ที่มีสีสันต่าง ๆ",
    colSpan: 1,
  },
  {
    route: "good-digestion",
    image: "https://placehold.co/150",
    title: "ขับถ่ายดี สุขภาพปัง",
    description: "เคล็ดลับและประโยชน์ของการขับถ่ายที่ดีต่อสุขภาพ",
    colSpan: 1,
  },
  {
    route: "hair-loss",
    image: "https://placehold.co/150",
    title: "ผมร่วงเรื่องปกติหรือเปล่า ?",
    description: "ข้อมูลเกี่ยวกับสาเหตุและการดูแลรักษาผมร่วง",
    colSpan: 1,
  },
  {
    route: "sweet-eating",
    image: "https://placehold.co/150",
    title: "กินหวาน อย่างเข้าใจ อ่อนหวานก็แข็งแรงได้",
    description: "คำแนะนำเกี่ยวกับการบริโภคน้ำตาลอย่างเหมาะสม",
    colSpan: 2,
  },
]);

function navigateTo(routeName) {
  router.push({ name: routeName });
}
</script>

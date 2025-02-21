<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">เครื่องดื่ม</h1>
    <p class="mb-6">Details about healthy drinks.</p>
    <div class="grid grid-cols-2 gap-4">
      <RouterLink
        v-for="(drink, index) in drinks"
        :key="index"
        :to="drink.path"
        class="p-4 rounded-lg shadow-md"
        :class="{ 'col-span-2': drink.colSpan === 2 }"
      >
        <img :src="drink.image" alt="Drink Image" class="w-full h-48 object-cover rounded-md mb-4" />
        <h2 class="text-xl font-semibold" v-for="n of drink.name">{{ n }}</h2>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { getImageUrl } from '@/utils/image';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      drinks: [
        {
          name: ["น้ำเปล่า ช่วยขจัดสารพิษ","Water – Helps detoxify the body"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/1.Water.png"),
          path: "/health-food/drinks/water",
        },
        {
          name: ["น้ำผักสด ช่วยป้องกันโรคอ้วน","Fresh Vegetable Juice – Helps prevent obesity"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/2vegetable juice.png"),
          path: "/health-food/drinks/Fresh",
        },
        {
          name: ["น้ำแครอท ช่วยบำรุงสายตา","Carrot Juice – Helps nourish the eyes"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/3Carrotjuice.png"),
          path: "/health-food/drinks/Carrot",
        },
        {
          name: ["น้ำมะเขือเทศ ช่วยป้องกันมะเร็งต่อมลูกหมาก","Tomato Juice – Helps prevent prostate cancer"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/4Tomato juice.jpg"),
          path: "/health-food/drinks/Tomato",
        },
        { 
          name: ["น้ำแอปเปิล ช่วยป้องกันโรคมะเร็ง","Apple Juice – Helps prevent cancer"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/5Apple juice.jpg"),
          path: "/health-food/drinks/Apple",
        },
        { 
          name: ["น้ำลูกแพร์ ช่วยป้องกันความเครียด","Pear Juice – Helps prevent stress"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/6Pearjuice.png"),
          path: "/health-food/drinks/Pear",
        },
        { 
          name: ["ชา ช่วยป้องกันโรคฟันผุ","Tea – Helps prevent tooth decay"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/7Tea.jpg"),
          path: "/health-food/drinks/Tea",
        },
        { 
          name: ["นม ช่วยเสริมความแข็งแรงของกระดูก","Milk – Helps strengthen bones"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/8Milk.png"),
          path: "/health-food/drinks/Milk",
        },
        {
          name: ["โยเกิร์ต ช่วยขจัดสารพิษ","Yogurt – Helps detoxify the body"],
          image: getImageUrl("@/assets/images/Food/เครื่องดื่ม/9Yogurt.jpg"),
          path: "/health-food/drinks/Yogurt",
          colSpan: 2,
        },
      ],
    };
  },
};
</script>

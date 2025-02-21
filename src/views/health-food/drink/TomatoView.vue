<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/public/assets/images/Food/เครื่องดื่ม/4Tomato juice.jpg"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">น้ำมะเขือเทศ ช่วยป้องกันมะเร็งต่อมลูกหมาก Tomato Juice – Helps prevent prostate cancer</h1>
    <p class="mb-4">
      น้ำมะเขือเทศมีส่วนช่วยป้องกันมะเร็งต่อมลูกหมาก เนื่องจากมะเขือเทศมีสารไลโคปีนที่ช่วยป้องกันโรคมะเร็ง อีกทั้งยังช่วยป้องกันไม่ให้ผิวแก่ก่อนวัยอีกด้วย ทั้งนี้แนะนำให้มะเขือเทศผ่านความร้อนก่อนเอามาทำเป็นเครื่องดื่ม เพราะจะยิ่งทำให้ร่างกายได้รับไลโคปีนมากขึ้น
    </p>
    <h2 class="text-xl font-semibold mb-2">ส่วนผสม:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>มะเขือเทศสุก 3 ลูก</li>
      <li>น้ำผึ้ง 1 ช้อนชา</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">วิธีทำ:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>ล้างมะเขือเทศให้สะอาด หั่นเป็นชิ้น</li>
      <li>ปั่นรวมกับน้ำเปล่า ½ ถ้วย</li>
      <li>กรองเอาแต่น้ำ เติมน้ำผึ้ง ดื่มทันที</li>
    </ol>
  </div>
</template>
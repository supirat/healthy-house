<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/assets/images/Food/เครื่องดื่ม/6Pearjuice.png"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">น้ำลูกแพร์ ช่วยป้องกันความเครียดPear Juice – Helps prevent stress</h1>
    <p class="mb-4">
      น้ำลูกแพร์ช่วยให้ร่างกายได้รับวิตามินซีและซีลีเนียม ที่ช่วยลดความเครียด และช่วยให้ร่างกายได้รับพลังงานอย่างมาก นอกจากนี้ยังช่วยให้ผิวหน้าขาวใส และช่วยให้ร่างกายได้รับสารอาหารอย่างครบถ้วน
    </p>
    <h2 class="text-xl font-semibold mb-2">ส่วนผสม:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>ลูกแพร์ 1 ลูก</li>
      <li>น้ำผึ้ง 1 ช้อนชา</li>
      <li>น้ำเปล่า ½ ถ้วย</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">วิธีทำ:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>ล้างลูกแพร์ให้สะอาด หั่นเป็นชิ้น</li>
      <li>ปั่นรวมกับน้ำเปล่า ½ ถ้วย</li>
      <li>กรองเอาแต่น้ำ เติมน้ำผึ้ง ดื่มทันที</li>
    </ol>
  </div>
</template>
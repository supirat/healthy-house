<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/public/assets/images/Food/เครื่องดื่ม/2vegetable juice.png"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">น้ำผักสด ช่วยป้องกันโรคอ้วนFresh Vegetable Juice – Helps prevent obesity</h1>
    <p class="mb-4">
      ในส่วนของน้ำผักสดนั้น จัดเป็นเครื่องดื่มที่มีปริมาณน้ำตาลต่ำกว่าน้ำผลไม้สด เหมาะสำหรับสาวๆ ที่ต้องการลดน้ำหนักอย่างมาก โดยเครื่องดื่มชนิดนี้แนะนำให้เลือกใช้ผักสดปลอดสารพิษ เอามาปั่นหรือคั้นโดยไม่เติมน้ำตาล จะส่งผลดีต่อสุขภาพร่างกายอย่างมาก
    </p>
    <h2 class="text-xl font-semibold mb-2">ส่วนผสม:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>ผักโขม 1 ถ้วย</li>
      <li>แตงกวา 1 ลูก</li>
      <li>ขึ้นฉ่าย 2 ก้าน</li>
      <li>มะนาว 1 ลูก</li>
      <li>น้ำเปล่า ½ ถ้วย</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">วิธีทำ:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>ล้างผักให้สะอาด หั่นเป็นชิ้นเล็ก</li>
      <li>ใส่ลงในเครื่องปั่น เติมน้ำเปล่า ปั่นให้ละเอียด</li>
      <li>กรองหรือดื่มได้เลย</li>
    </ol>
  </div>
</template>
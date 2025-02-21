<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/assets/images/Food/เครื่องดื่ม/5Apple juice.jpg"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">น้ำแอปเปิล ช่วยป้องกันโรคมะเร็ง Apple Juice – Helps prevent cancer</h1>
    <p class="mb-4">
      น้ำแอปเปิลช่วยให้ร่างกายฟื้นคืนพลังและมีสมาธิได้ดี แถมยังช่วยป้องกันโรคมะเร็งอีกด้วย 
      ซึ่งแอปเปิลที่ใช้ในการทำเป็นเครื่องดื่มสุขภาพนั้น ไม่ควรเป็นแอปเปิลที่ผ่านการแว็กซ์ 
      หรือหากสาวๆ ไม่มั่นใจว่าแอปเปิลที่ใช้ผ่านการแว็กซ์หรือไม่ แนะนำให้ปอกเปลือกทิ้งจะดีที่สุด
    </p>
    <h2 class="text-xl font-semibold mb-2">ส่วนผสม:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>แอปเปิลแดง 1 ลูก</li>
      <li>น้ำมะนาว ½ ลูก</li>
      <li>น้ำเปล่า ½ ถ้วย</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">วิธีทำ:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>หั่นแอปเปิลเป็นชิ้น ไม่ต้องปอกเปลือก</li>
      <li>ปั่นรวมกับน้ำเปล่า เติมน้ำมะนาว</li>
      <li>ดื่มสด หรือแช่เย็นก่อนดื่ม</li>
    </ol>
  </div>
</template>
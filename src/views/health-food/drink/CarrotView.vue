<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/assets/images/Food/เครื่องดื่ม/3Carrotjuice.png"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">น้ำแครอท ช่วยบำรุงสายตา Carrot Juice – Helps nourish the eyes</h1>
    <p class="mb-4">
      น้ำแครอท เครื่องดื่มสุขภาพ ช่วยในเรื่องของการบำรุงสายตาเพราะในแครอทอุดมไปด้วยสารเบต้าแคโรทีนที่ช่วยในเรื่องของการบำรุงสายตา โดยเฉพาะในเนื้อเยื่อชั้นในของดวงตา (เรติน่า) การดื่มแครอทจึงเป็นการช่วยถนอมสายตาให้แข็งแรงมองเห็นได้ชัดเจน ป้องกันการเกิดโรคตาฟาง ต้อกระจก หรือโรคอื่น ๆ ที่อาจเกิดขึ้นกับดวงตา ซึ่งนอกจากช่วยในเรื่องของการถนอมสายตาก็ยังช่วยเสริมสร้างให้ระบบการทำงานของร่างกายสมบูรณ์แข็งแรงและป้องกันการเกิดโรคต่าง ๆ ได้อีกด้วย สำหรับสาวๆ ที่ต้องการรักษาหรือบำรุงสายตาให้มีสุขภาพดี แนะนำให้ดื่มน้ำแครอท ทั้งนี้ควรกินอาหารที่มีไขมันหลังจากดื่มน้ำแครอท เพื่อให้การดูดซึมวิตามินเอจากแครอททำงานได้ดียิ่งขึ้น แต่ก็ไม่ควรดื่มมากจนเกินไป เพราะจะทำให้วิตามินเอถูกกักเก็บไว้ในตับ
    </p>
    <h2 class="text-xl font-semibold mb-2">ส่วนผสม:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>แครอท 2 หัว</li>
      <li>น้ำมะนาว ½ ลูก</li>
      <li>น้ำผึ้ง 1 ช้อนชา (ไม่ใส่ก็ได้)</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">วิธีทำ:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>ปอกเปลือกแครอท หั่นเป็นชิ้น</li>
      <li>ปั่นแครอทกับน้ำเปล่า ½ ถ้วยจนเนียน</li>
      <li>เติมน้ำมะนาวและน้ำผึ้ง คนให้เข้ากัน</li>
    </ol>
  </div>
</template>
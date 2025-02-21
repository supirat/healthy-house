<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/assets/images/Food/เครื่องดื่ม/7Tea.jpg"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">ชา ช่วยป้องกันโรคฟันผุTea – Helps prevent tooth decay</h1>
    <p class="mb-4">
      น้ำชา เป็นเครื่องดื่มสุขภาพยอดนิยม ชามีหลายประเภทและสามารถนำไปประกอบอาหารคาว หวาน หรือทำเครื่องดื่มต่างๆ แต่การดื่มชาจากใบชาชงกับน้ำร้อนจะให้ประโยชน์มากที่สุด เพราะช่วยเพิ่มความสดชื่น สลายไขมัน ลดความอ้วน ลดระดับคอเลสเตอรอล ป้องกันมะเร็ง และบำรุงผิวพรรณ
      ควรดื่มขณะร้อนหรืออุ่น เพื่อรักษาประสิทธิภาพในการดูดซึมอาหาร เนื่องจากชาเย็นตัวแล้วจะมีสีคล้ำลงและส่งผลเสียต่อกระเพาะและลำไส้เล็ก นอกจากนี้ ชายังช่วยป้องกันฟันผุเนื่องจากมีสารฟลูออไรด์สูง ควรงดดื่มชาที่เหลือค้างคืนเพื่อสุขอนามัยที่ดี
    </p>
    <h2 class="text-xl font-semibold mb-2">ส่วนผสม:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>ใบชา 1 ช้อนชา</li>
      <li>น้ำร้อน 1 ถ้วย</li>
      <li>น้ำผึ้ง 1 ช้อนชา</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">วิธีทำ:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>ต้มน้ำร้อนให้เดือด ใส่ใบชาลงในถ้วย รอ 3-5 นาที</li>
      <li>กรองใบชาออก ใส่น้ำผึ้งคนให้เข้ากัน</li>
      <li>ดื่มทันที หรือเย็นก่อนดื่ม</li>
    </ol>
  </div>
</template>
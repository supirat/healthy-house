<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/assets/images/Food/เครื่องดื่ม/9Yogurt.jpg"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">โยเกิร์ต ช่วยขจัดสารพิษYogurt – Helps detoxify the body</h1>
    <p class="mb-4">
      โยเกิร์ตเป็นเครื่องดื่มที่มีประโยชน์ต่อสุขภาพมากมาย โยเกิร์ตมีแบคทีเรียที่ช่วยในการขับสารพิษออกจากร่างกาย ช่วยในการลดน้ำหนัก และช่วยในการป้องกันโรคต่าง ๆ อีกด้วย โยเกิร์ตยังมีแคลเซียมที่ช่วยในการเสริมสร้างกระดูกและฟอสฟอรัสที่ช่วยในการเสริมสร้างเนื้อเยื่อ นอกจากนี้ยังมีวิตามินบี 12 ที่ช่วยในการเสริมสร้างเม็ดเลือดแดง และช่วยในการลดความเครียด สำหรับสาว ๆ ที่ต้องการลดน้ำหนัก และปรับสุขภาพให้ดีขึ้น แนะนำให้ดื่มโยเกิร์ตอย่างสม่ำเสมอ
    </p>
    <h2 class="text-xl font-semibold mb-2">ส่วนผสม:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>โยเกิร์ตรสธรรมชาติ 1 ถ้วย</li>
      <li>น้ำผึ้ง 1 ช้อนชา</li>
      <li>ผลไม้สด เช่น กล้วย หรือเบอร์รี่</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">วิธีทำ:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>ใส่โยเกิร์ตลงในถ้วย</li>
      <li>เติมน้ำผึ้ง คนให้เข้ากัน</li>
      <li>แช่เย็นก่อนทาน</li>
    </ol>
  </div>
</template>
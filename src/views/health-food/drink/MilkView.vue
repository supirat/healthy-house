<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/assets/images/Food/เครื่องดื่ม/8Milk.png"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h1 class="text-2xl font-bold mb-4">นม ช่วยเสริมความแข็งแรงของกระดูกMilk – Helps strengthen bones</h1>
    <p class="mb-4">
      นมไขมันต่ำ เป็นเครื่องดื่มเพื่อสุขภาพที่มีชื่อเสียงในการช่วยลดน้ำหนักเนื่องจากมีแคลอรีต่ำและไขมันน้อย ทำให้อิ่มท้องได้นาน นอกจากนี้ยังเป็นแหล่งของวิตามินและสารอาหารที่สำคัญต่อร่างกาย แร่ธาตุอย่างเช่นแคลเซียมมีบทบาทในการเสริมสร้างกล้ามเนื้อและกระดูกให้แข็งแรง ป้องกันโรคกระดูกพรุน ส่วนกรดไขมันช่วยส่งเสริมการทำงานของเส้นเลือดให้ยืดหยุ่นและมีประสิทธิภาพ นมไขมันต่ำจึงถือเป็นเครื่องดื่มที่มีทั้งแคลเซียมสูงและโปรตีนที่ย่อยง่าย ซึ่งสามารถป้องกันโรคกระดูกพรุนได้อย่างดี อีกทั้งกรดไขมันในนมยังช่วยปรับปรุงความยืดหยุ่นของเส้นเลือดอีกด้วย
    </p>
    <h2 class="text-xl font-semibold mb-2">วิธีดื่มเพื่อสุขภาพ:</h2>
    <li>ดื่มนมไขมันต่ำหรือนมถั่วเหลืองวันละ 1-2 แก้ว</li>
    <li>ดื่มอุ่น ๆ ก่อนนอนช่วยให้หลับสบาย</li>
  </div>
</template>
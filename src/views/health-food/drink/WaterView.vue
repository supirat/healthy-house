<script setup>
import { getImageUrl } from "@/utils/image";

const imageUrl = getImageUrl("/assets/images/Food/เครื่องดื่ม/1.Water.png"); // Replace "water.jpg" with your actual image file name
</script>

<template>
  <div class="p-6">
    <div class="flex justify-center mb-4">
      <img :src="imageUrl" alt="Water Image" class="w-3/4 h-64 object-cover rounded-md" />
    </div>
    <h2 class="text-2xl font-bold mb-4">น้ำเปล่า ช่วยขจัดสารพิษ Water - Helps detoxify the body</h2>
    <p class="mb-4">
      น้ำเปล่าคือเครื่องดื่มที่ให้ประโยชน์ต่อสุขภาพร่างกายมากที่สุด เพราะน้ำเปล่ามีหน้าที่ในการลำเลียงสารอาหารไปยังเซลล์ต่างๆ อีกทั้งยังมีส่วนช่วยขจัดสารพิษ และช่วยปรับระดับอุณหภูมิในร่างกาย ซึ่งในแต่ละวันสาวๆ ควรดื่มน้ำเปล่าให้ได้วันละ 8 แก้ว หรือประมาณ 1.5 ลิตร
    </p>
    <h2 class="text-xl font-semibold mb-2">วิธีดื่มเพื่อสุขภาพ:</h2>
    <ul class="list-disc list-inside mb-4">
      <li>ควรดื่มน้ำสะอาดวันละ 8-10 แก้ว</li>
      <li>ดื่มน้ำหลังตื่นนอน 1-2 แก้วเพื่อช่วยขับสารพิษ</li>
    </ul>
  </div>
</template>
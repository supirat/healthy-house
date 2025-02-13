<template>
  <div class="container mx-auto p-4">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold">กีฬาตะกร้อเพื่อสุขภาพ (Sepak Takraw for Health) 🏐</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-2">🔹 กติกาพื้นฐานของกีฬาตะกร้อ</h2>
        <ul class="list-disc list-inside">
          <li>จำนวนผู้เล่น: 3 คนต่อทีม (ประเภทตะกร้อทีมเดี่ยว) หรือ 4-5 คน (ตะกร้อทีมชุด)</li>
          <li>พื้นที่สนาม: ขนาด 13.4 x 6.1 เมตร (ใกล้เคียงสนามแบดมินตัน)</li>
          <li>ความสูงของตาข่าย: ชาย – 1.52 เมตร, หญิง – 1.42 เมตร</li>
          <li>การเสิร์ฟ: ใช้เท้าเตะลูกให้ข้ามตาข่าย</li>
          <li>การแตะลูก: สามารถใช้ เท้า หัว ไหล่ เข่า แต่ ห้ามใช้มือหรือแขน</li>
          <li>คะแนน: ระบบ 3 เซ็ต เซ็ตละ 21 คะแนน ทีมที่ชนะ 2 ใน 3 เซ็ตเป็นผู้ชนะ</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-2">🔹 ประเภทของกีฬาตะกร้อ</h2>
        <ul class="list-disc list-inside">
          <li>ตะกร้อทีมเดี่ยว (Regu) – แข่งแบบ 3 คนต่อทีม</li>
          <li>ตะกร้อทีมชุด (Team Event) – ใช้ผู้เล่น 4-5 คน หมุนเวียนกันลงสนาม</li>
          <li>ตะกร้อลอดห่วง (Hoop Takraw) – ยิงลูกตะกร้อเข้าห่วง เน้นทักษะการเตะ</li>
          <li>ตะกร้อชายหาด (Beach Sepak Takraw) – เล่นบนพื้นทราย สนุกและท้าทาย</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-2">💪 ประโยชน์ของกีฬาตะกร้อต่อสุขภาพ</h2>
        <ul class="list-disc list-inside">
          <li>🏃 เสริมสร้างความคล่องตัวและการทรงตัว</li>
          <li>🦵 พัฒนากล้ามเนื้อขาและแกนกลางลำตัว</li>
          <li>❤️ เพิ่มความแข็งแรงของหัวใจและปอด</li>
          <li>🔥 ช่วยเผาผลาญไขมันและควบคุมน้ำหนัก</li>
          <li>🧠 พัฒนาสมองและไหวพริบ</li>
          <li>🤝 ฝึกการทำงานเป็นทีมและช่วยลดความเครียด</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-2">⏳ วิธีเล่นตะกร้อเพื่อสุขภาพ</h2>
        <ul class="list-disc list-inside">
          <li>✅ เล่นตะกร้ออย่างน้อย 30-60 นาที / 3-5 ครั้งต่อสัปดาห์</li>
          <li>✅ อบอุ่นร่างกายก่อนเล่น และยืดกล้ามเนื้อหลังเล่น</li>
          <li>✅ เลือกพื้นสนามที่เหมาะสม เพื่อลดแรงกระแทก</li>
          <li>✅ ดื่มน้ำให้เพียงพอ ป้องกันภาวะขาดน้ำ</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-2">⚠️ ข้อควรระวังในการเล่นตะกร้อ</h2>
        <ul class="list-disc list-inside">
          <li>⚠️ ระวังอาการบาดเจ็บที่ข้อเท้าและเข่า – ควรใช้รองเท้าที่รองรับแรงกระแทกได้ดี</li>
          <li>⚠️ อย่าฝึกท่ากระโดดสูงเกินไป หากร่างกายไม่พร้อม</li>
          <li>⚠️ หากมีอาการบาดเจ็บควรพักและทำกายภาพบำบัด</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-2">📊 เปรียบเทียบการเผาผลาญแคลอรีจากกีฬาต่าง ๆ</h2>
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2">กิจกรรม</th>
              <th class="py-2">แคลอรีที่เผาผลาญ (ต่อชั่วโมง)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">ตะกร้อ</td>
              <td class="border px-4 py-2">500-700 แคลอรี</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">ฟุตบอล</td>
              <td class="border px-4 py-2">600-800 แคลอรี</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">ว่ายน้ำ</td>
              <td class="border px-4 py-2">400-700 แคลอรี</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">ปั่นจักรยาน</td>
              <td class="border px-4 py-2">300-800 แคลอรี</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">วิ่ง (8 กม./ชม.)</td>
              <td class="border px-4 py-2">500-600 แคลอรี</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
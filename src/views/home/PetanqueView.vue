<template>
  <div class="container mx-auto p-4">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold">🏐 กีฬาเปตอง เพื่อสุขภาพ (Pétanque for Health) 🎯</h1>
      <p class="mt-4">เปตอง (Pétanque) เป็นกีฬาที่มีต้นกำเนิดจากประเทศฝรั่งเศส เล่นโดยการโยนลูกโลหะให้ใกล้กับลูกเป้าหมายมากที่สุด เป็นกีฬาที่เหมาะสำหรับทุกวัย โดยเฉพาะผู้สูงอายุ เพราะช่วยฝึกสมาธิ เสริมสร้างกล้ามเนื้อแขน และพัฒนาสมดุลของร่างกาย</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">🔹 กติกาพื้นฐานของกีฬาเปตอง</h2>
        <ul class="list-disc list-inside mt-2">
          <li>จำนวนผู้เล่น:</li>
          <li>แข่งแบบเดี่ยว (1 ต่อ 1)</li>
          <li>แข่งแบบคู่ (2 ต่อ 2)</li>
          <li>แข่งแบบทีม (3 ต่อ 3)</li>
          <li>เป้าหมายของเกม:</li>
          <li>โยนลูกเปตอง (ลูกโลหะ) ให้ใกล้กับลูกเป้าไม้ (Jack หรือ Cochonnet) มากที่สุด</li>
          <li>วิธีการเล่น:</li>
          <li>ผู้เล่นต้องยืนในวงกลมและโยนลูกเปตองจากจุดที่กำหนด</li>
          <li>สามารถใช้เทคนิคการโยนเพื่อกันลูกของคู่แข่งหรือให้ลูกของตนเองอยู่ในตำแหน่งที่ดีที่สุด</li>
          <li>คะแนน:</li>
          <li>ทีมที่มีลูกเปตองใกล้ลูกเป้ามากที่สุด จะได้รับคะแนนตามจำนวนลูกที่อยู่ใกล้กว่าลูกของฝ่ายตรงข้าม</li>
          <li>เล่นจนกว่าทีมใดทีมหนึ่งจะได้ 13 คะแนนก่อน</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">🔹 ประเภทของกีฬาเปตอง</h2>
        <ul class="list-disc list-inside mt-2">
          <li>เปตองแบบแข่งขัน (Competitive Pétanque) – ใช้ในการแข่งขันระดับประเทศและนานาชาติ</li>
          <li>เปตองเพื่อสุขภาพ (Recreational Pétanque) – เล่นเพื่อความสนุกและออกกำลังกาย</li>
          <li>เปตองชายหาด (Beach Pétanque) – เล่นบนพื้นทรายเพื่อเพิ่มความท้าทาย</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">💪 ประโยชน์ของกีฬาเปตองต่อสุขภาพ</h2>
        <ul class="list-disc list-inside mt-2">
          <li>🎯 ช่วยพัฒนาสมาธิและไหวพริบ</li>
          <li>🏋️ เสริมสร้างกล้ามเนื้อแขน ไหล่ และขา</li>
          <li>⚖️ พัฒนาความสมดุลและการเคลื่อนไหวของร่างกาย</li>
          <li>❤️ เพิ่มสุขภาพหัวใจและระบบไหลเวียนโลหิต</li>
          <li>🧘 ลดความเครียดและช่วยให้จิตใจผ่อนคลาย</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">📊 เปรียบเทียบแคลอรีที่เผาผลาญจากกีฬาต่าง ๆ</h2>
        <table class="table-auto w-full mt-2">
          <thead>
            <tr>
              <th class="px-4 py-2">กิจกรรม</th>
              <th class="px-4 py-2">แคลอรีที่เผาผลาญ (ต่อชั่วโมง)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">เปตอง</td>
              <td class="border px-4 py-2">150-250 แคลอรี</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">กอล์ฟ (เดิน)</td>
              <td class="border px-4 py-2">250-400 แคลอรี</td>
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

      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">⏳ วิธีเล่นเปตองเพื่อสุขภาพ</h2>
        <ul class="list-disc list-inside mt-2">
          <li>✅ เล่นเปตอง 30-60 นาที / 3-4 ครั้งต่อสัปดาห์</li>
          <li>✅ วอร์มอัพร่างกายก่อนเริ่มเล่น</li>
          <li>✅ ฝึกเทคนิคการโยนให้เหมาะสมเพื่อลดแรงกระแทก</li>
          <li>✅ เล่นในสนามที่ปลอดภัยและพื้นสนามเหมาะสม</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-xl font-semibold">⚠️ ข้อควรระวังในการเล่นเปตอง</h2>
        <ul class="list-disc list-inside mt-2">
          <li>⚠️ อย่าใช้แรงโยนมากเกินไป – อาจทำให้เกิดอาการบาดเจ็บที่แขน</li>
          <li>⚠️ ควรระวังลูกเปตองกระเด็น – อาจเกิดอันตรายกับผู้เล่นคนอื่น</li>
          <li>⚠️ เลือกพื้นสนามที่เหมาะสม – หลีกเลี่ยงพื้นผิวที่ลื่นหรือขรุขระ</li>
        </ul>
      </div>
    </div>

    <div class="text-center mt-8">
      <h2 class="text-2xl font-bold">🔹 สรุป</h2>
      <p class="mt-4">เปตองเป็นกีฬาที่เหมาะกับทุกวัย โดยเฉพาะผู้สูงอายุ ช่วยพัฒนาสมาธิ การทรงตัว และเสริมสร้างสุขภาพร่างกายโดยรวม หากคุณกำลังมองหากีฬาที่เล่นได้ง่าย สนุก และให้ประโยชน์ด้านสุขภาพ เปตองคือกีฬาที่เหมาะสำหรับคุณ! 🎯🏐</p>
    </div>
  </div>
</template>
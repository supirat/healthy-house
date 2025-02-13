<template>
  <div class="p-6">
    <h3 class="text-2xl font-bold mb-4">
      กีฬากรีฑา (Athletics) เพื่อสุขภาพ 🏃‍♂️🏃‍♀️
    </h3>
    <p class="mb-6">
      กรีฑาเป็นหนึ่งในกีฬาที่เก่าแก่ที่สุดของโลกและเป็นรากฐานของการออกกำลังกายทุกประเภท
      ช่วยเสริมสร้างความแข็งแรงของร่างกาย ระบบไหลเวียนโลหิต และเพิ่มความทนทาน
      เหมาะสำหรับผู้ที่ต้องการออกกำลังกายเพื่อสุขภาพและลดน้ำหนัก
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h4 class="text-xl font-semibold mb-2">ประเภทลู่ (Track Events)</h4>
        <p class="mb-2">การแข่งขันที่เกี่ยวข้องกับการวิ่งในสนาม</p>
        <ul class="list-disc text-left list-inside mb-2">
          <li>✅ ช่วยพัฒนาความเร็วและความทนทาน</li>
          <li>วิ่งระยะสั้น (Sprint) – 100 ม., 200 ม., 400 ม.</li>
          <li>วิ่งระยะกลาง (Middle Distance) – 800 ม., 1500 ม.</li>
          <li>วิ่งระยะไกล (Long Distance) – 5000 ม., 10,000 ม.</li>
          <li>วิ่งผลัด (Relay Race) – 4x100 ม., 4x400 ม.</li>
          <li>วิ่งข้ามรั้ว (Hurdles) – 100 ม. (หญิง), 110 ม. (ชาย), 400 ม.</li>
        </ul>
        <p class="font-semibold">💡 ประโยชน์ต่อสุขภาพ:</p>
        <ul class="list-disc text-left list-inside">
          <li>ช่วยเผาผลาญไขมัน</li>
          <li>เสริมสร้างความแข็งแรงของกล้ามเนื้อขา</li>
          <li>เพิ่มความอึดของหัวใจและปอด</li>
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md">
        <h4 class="text-xl font-semibold mb-2">ประเภทลาน (Field Events)</h4>
        <p class="mb-2">การแข่งขันที่เกี่ยวข้องกับการกระโดดและขว้าง</p>
        <ul class="list-disc text-left list-inside mb-2">
          <li>✅ ช่วยพัฒนาแรงระเบิดและความแข็งแกร่งของกล้ามเนื้อ</li>
          <li>กระโดดสูง (High Jump)</li>
          <li>กระโดดไกล (Long Jump)</li>
          <li>กระโดดค้ำถ่อ (Pole Vault)</li>
          <li>กระโดดสามก้าว (Triple Jump)</li>
          <li>ทุ่มน้ำหนัก (Shot Put)</li>
          <li>ขว้างจักร (Discus Throw)</li>
          <li>ขว้างค้อน (Hammer Throw)</li>
          <li>พุ่งแหลน (Javelin Throw)</li>
        </ul>
        <p class="font-semibold">💡 ประโยชน์ต่อสุขภาพ:</p>
        <ul class="list-disc text-left list-inside">
          <li>ช่วยพัฒนากล้ามเนื้อแกนกลางและขา</li>
          <li>เพิ่มสมดุลและการประสานงานของร่างกาย</li>
          <li>เสริมสร้างความแข็งแกร่งของกระดูก</li>
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md">
        <h4 class="text-xl font-semibold mb-2">
          ประเภทถนน (Road & Combined Events)
        </h4>
        <p class="mb-2">การแข่งขันที่จัดขึ้นนอกสนามกีฬา</p>
        <ul class="list-disc text-left list-inside mb-2">
          <li>✅ เหมาะสำหรับการออกกำลังกายเพื่อสุขภาพระยะยาว</li>
          <li>วิ่งมาราธอน (Marathon) – 42.195 กม.</li>
          <li>เดินทน (Race Walking) – 20 กม., 50 กม.</li>
          <li>กรีฑาประเภทผสม (Combined Events) เช่น</li>
          <li>ทศกรีฑา (Decathlon, 10 รายการ, ชาย)</li>
          <li>แฮพทาลอน (Heptathlon, 7 รายการ, หญิง)</li>
        </ul>
        <p class="font-semibold">💡 ประโยชน์ต่อสุขภาพ:</p>
        <ul class="list-disc text-left list-inside">
          <li>ช่วยเผาผลาญพลังงานและลดน้ำหนัก</li>
          <li>กระตุ้นระบบไหลเวียนโลหิต</li>
          <li>ลดความเสี่ยงของโรคหัวใจและเบาหวาน</li>
        </ul>
      </div>
    </div>

    <div class="bg-white p-4 rounded-lg shadow-md">
      <h4 class="text-2xl font-bold mt-8 mb-4">กีฬากรีฑากับสุขภาพ</h4>
      <ul class="list-disc text-left list-inside mb-6">
        <li>✅ 1. ช่วยลดน้ำหนักและเผาผลาญไขมัน</li>
        <li>
          การวิ่งและกระโดดเป็นการออกกำลังกายที่ใช้พลังงานสูง
          ช่วยเร่งการเผาผลาญและลดไขมันในร่างกาย
        </li>
        <li>✅ 2. เสริมสร้างกล้ามเนื้อและความแข็งแกร่ง</li>
        <li>
          การเล่นกรีฑาเน้นการใช้กล้ามเนื้อหลายส่วน เช่น ขา แขน และแกนกลาง
          ช่วยให้ร่างกายแข็งแรงขึ้น
        </li>
        <li>✅ 3. พัฒนาสุขภาพหัวใจและปอด</li>
        <li>
          การออกกำลังกายแบบคาร์ดิโอจากการวิ่งช่วยเสริมความแข็งแรงของระบบไหลเวียนโลหิต
          ลดความเสี่ยงของโรคหัวใจ
        </li>
        <li>✅ 4. ลดความเครียดและช่วยให้หลับสบาย</li>
        <li>
          การออกกำลังกายช่วยหลั่งสารเอ็นดอร์ฟิน ทำให้รู้สึกผ่อนคลาย
          และช่วยให้หลับง่ายขึ้น
        </li>
        <li>✅ 5. ป้องกันโรคกระดูกพรุน</li>
        <li>
          การออกกำลังกายประเภทกระโดด เช่น กระโดดสูงและกระโดดไกล
          ช่วยเพิ่มความหนาแน่นของกระดูก
        </li>
      </ul>
    </div>

    <div class="bg-white p-4 rounded-lg shadow-md">
      <h4 class="text-2xl font-bold mt-8 mb-4">
        วิธีเริ่มต้นเล่นกรีฑาเพื่อสุขภาพ
      </h4>
      <ul class="list-disc text-left list-inside mb-6">
        <li>1. เริ่มจากการวิ่งระยะสั้น – วันละ 20-30 นาที</li>
        <li>
          2. เพิ่มการออกกำลังกายแบบฝึกแรงต้าน – เช่น ทุ่มน้ำหนัก หรือกระโดดเชือก
        </li>
        <li>
          3. เลือกรองเท้าวิ่งที่เหมาะสม – ลดแรงกระแทกเพื่อป้องกันการบาดเจ็บ
        </li>
        <li>4. วางแผนฝึกซ้อมเป็นประจำ – อย่างน้อย 3-4 วันต่อสัปดาห์</li>
        <li>5. อบอุ่นร่างกายก่อนและยืดเหยียดหลังออกกำลังกาย</li>
      </ul>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <h4 class="text-2xl font-bold mt-8 mb-4">สรุป</h4>
      <p class="mb-4">
        กีฬากรีฑาเป็นทางเลือกที่ดีสำหรับการออกกำลังกายเพื่อสุขภาพ
        ช่วยเสริมสร้างสมรรถภาพร่างกาย<br/>พัฒนาระบบหัวใจและปอด และช่วยเผาผลาญพลังงาน
        เหมาะสำหรับทุกเพศทุกวัย
      </p>
      <p class="mb-4">
        💪 หากต้องการมีสุขภาพที่แข็งแรง กรีฑาคือกีฬาที่ไม่ควรมองข้าม! 🏃‍♀️🏃‍♂️
      </p>
    </div>
  </div>
</template>

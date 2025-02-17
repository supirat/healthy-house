<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">เครื่องดื่ม</h1>
        <p class="mb-6">Details about healthy drinks.</p>
        <div class="grid grid-cols-2 gap-4">
            <div v-for="(drink, index) in drinks" :key="index" class="p-4 border rounded-lg shadow-md" :class="{'col-span-2': drink.colSpan === 2}">
                <h2 class="text-xl font-semibold">{{ drink.name }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drinks: [
                { name: 'น้ำเปล่า ช่วยขจัดสารพิษ Water' },
                { name: 'น้ำผักสด ช่วยป้องกันโรคอ้วน Fresh Vegetable Juice' },
                { name: 'น้ำแครอท ช่วยบำรุงสายตา Carrot Juice' },
                { name: 'น้ำมะเขือเทศ ช่วยป้องกันมะเร็งต่อมลูกหมาก Tomato Juice' },
                { name: 'น้ำแอปเปิล ช่วยป้องกันโรคมะเร็ง Apple Juice' },
                { name: 'น้ำลูกแพร์ ช่วยป้องกันความเครียด Pear Juice' },
                { name: 'ชา ช่วยป้องกันโรคฟันผุ Tea' },
                { name: 'นม ช่วยเสริมความแข็งแรงของกระดูก Milk' },
                { name: 'โยเกิร์ต ช่วยขจัดสารพิษ Yogurt Helps detoxify the body', colSpan: 2 }
            ]
        };
    }
};
</script>

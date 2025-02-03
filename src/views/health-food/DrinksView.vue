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
                { name: 'น้ำปวยเล้ง+แอปเปิ้ลเขียวปั่น' },
                { name: 'น้ำมะเขือเทศ+แตงกวาปั่น' },
                { name: 'น้ำแครอท+ขิง+แอปเปิ้ลเขียวปั่น' },
                { name: 'น้ำแอปเปิ้ล+ผักกาดหอม+น้ำมะนาวปั่น' },
                { name: 'พริกหวาน+แอปเปิ้ล+น้ำมะนาว' },
                { name: 'สับปะรด+แตงกวา+ปวยเล้งปั่น' },
                { name: 'กีวี+ขิง+มะนาว', colSpan: 2 }
            ]
        };
    }
};
</script>

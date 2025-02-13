<script setup>
defineProps({
  food: Object,
});
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <div
      class="p-6 w-full md:w-3/4 mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div class="flex justify-center">
        <img
          v-if="food?.image"
          :src="food.image"
          alt="food"
          class="w-3/4 h-64 object-cover rounded-md"
        />
      </div>
      <h2 class="text-lg font-semibold mb-2">{{ food?.name }}</h2>
      <p class="text-gray-700 mb-2">{{ food?.description }}</p>
    </div>
    <div
      class="p-6 w-full md:w-3/4 mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <h3 class="font-semibold text-left">ส่วนผสม:</h3>
      <ul class="list-disc text-left list-inside mb-2">
        <li v-for="(ingredient, i) in food?.ingredients" :key="i">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div
      class="p-6 w-full md:w-3/4 mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <h3 class="font-semibold text-left">วิธีทำ:</h3>
      <ol class="list-decimal text-left list-inside">
        <li v-for="(step, j) in food?.steps" :key="j">{{ step }}</li>
      </ol>
    </div>
  </div>
</template>

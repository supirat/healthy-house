<script setup>
import sixPackDays from "@/data/schedule/sixPackDays.json";
import jumpRopeDays from "@/data/schedule/jumpRopeDays.json";
import weightTrainingDays from "@/data/schedule/weightTrainingDays.json";
import SquatTableDays from "@/data/schedule/SquatTable.json";
import CyclingTableDays from "@/data/schedule/CyclingTable.json";

import SixPackTable from "@/components/schedule/SixPackTable.vue";
import JumpRopeTable from "@/components/schedule/JumpRopeTable.vue";
import WeightTrainingTable from "@/components/schedule/WeightTrainingTable.vue";
import SquatTable from "@/components/schedule/SquatTable.vue";
import CyclingTable from "@/components/schedule/CyclingTable.vue";
import RedeuceBelly from "@/components/schedule/RedeuceBelly.vue";
</script>

<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">ตารางออกกําลังกาย</h2>
    <p class="mb-8">ตารางเวลาการออกกำลังกายที่แนะนำ</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SixPackTable :data="sixPackDays" />
      <JumpRopeTable :data="jumpRopeDays" />
      <RedeuceBelly></RedeuceBelly>
      <WeightTrainingTable :data="weightTrainingDays" />
      <SquatTable :data="SquatTableDays" />
      <CyclingTable :data="CyclingTableDays" />
    </div>
  </div>
</template>

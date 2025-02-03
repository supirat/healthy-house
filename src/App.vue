<script setup>
import { RouterView } from "vue-router";
import HomeNavigation from "./components/navigation/HomeNav.vue";
import KnowledgeNavigation from "./components/navigation/KnowledgeNav.vue";
import HealthFoodNavigation from "./components/navigation/HealthFoodNav.vue";
import ExerciseNavigation from "./components/navigation/ExerciseNav.vue";
import ScheduleNavigation from "./components/navigation/ScheduleNav.vue";
import AboutNavigation from "./components/navigation/AboutNav.vue";
</script>

<template>
  <div class="text-center mt-8">
    <div class="container mx-auto max-w-custom">
      <img
        src="@/assets/images/header.svg"
        alt="Healthy House Banner"
        class="w-full h-full mb-8 rounded-lg shadow-md"
      />
    </div>
    <nav
      class="container mx-auto mt-8 bg-cream-200 p-4 rounded-lg shadow-md max-w-custom"
    >
      <ul class="flex justify-center items-center space-x-4">
        <li class="relative">
          <HomeNavigation></HomeNavigation>
        </li>
        <li>
          <KnowledgeNavigation></KnowledgeNavigation>
        </li>
        <li>
          <HealthFoodNavigation></HealthFoodNavigation>
        </li>
        <li>
          <ExerciseNavigation></ExerciseNavigation>
        </li>
        <li>
          <ScheduleNavigation></ScheduleNavigation>
        </li>
        <li>
          <AboutNavigation></AboutNavigation>
        </li>
      </ul>
    </nav>
  </div>
  <div
    class="container mx-auto mt-8 p-4 bg-white shadow-md rounded-lg max-w-custom text-center"
  >
    <RouterView />
  </div>
  <footer>
    <div class="container mx-auto max-w-custom my-8">
      <img
        src="@/assets/images/footer.svg"
        alt="Healthy House Banner"
        class="w-full h-full mb-8 rounded-lg shadow-md"
      />
    </div>
  </footer>
</template>

<style>
.dropdown {
  display: none;
}
.relative .dropdown {
  display: block;
}
.max-w-custom {
  max-width: 1200px;
}
</style>

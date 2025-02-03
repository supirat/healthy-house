import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "athletics",
          name: "athletics",
          component: () => import("@/views/home/AthleticsView.vue"),
        },
        {
          path: "swimming",
          name: "swimming",
          component: () => import("@/views/home/SwimmingView.vue"),
        },
        {
          path: "football",
          name: "football",
          component: () => import("@/views/home/FootballView.vue"),
        },
        {
          path: "dance",
          name: "dance",
          component: () => import("@/views/home/DanceView.vue"),
        },
        {
          path: "cycling",
          name: "cycling",
          component: () => import("@/views/home/CyclingView.vue"),
        },
        {
          path: "takraw",
          name: "takraw",
          component: () => import("@/views/home/TakrawView.vue"),
        },
        {
          path: "golf",
          name: "golf",
          component: () => import("@/views/home/GolfView.vue"),
        },
        {
          path: "petanque",
          name: "petanque",
          component: () => import("@/views/home/PetanqueView.vue"),
        },
      ],
    },
    {
      path: "/knowledge",
      children: [
        {
          path: "",
          name: "knowledge",
          component: () => import("@/views/KnowledgeView.vue"),
        },
        {
          path: "exercise-mistakes",
          name: "exercise-mistakes",
          component: () => import("@/views/knowledge/ExerciseMistakesView.vue"),
        },
        {
          path: "colorful-vegetables",
          name: "colorful-vegetables",
          component: () =>
            import("@/views/knowledge/ColorfulVegetablesView.vue"),
        },
        {
          path: "good-digestion",
          name: "good-digestion",
          component: () => import("@/views/knowledge/GoodDigestionView.vue"),
        },
        {
          path: "hair-loss",
          name: "hair-loss",
          component: () => import("@/views/knowledge/HairLossView.vue"),
        },
        {
          path: "sweet-eating",
          name: "sweet-eating",
          component: () => import("@/views/knowledge/SweetEatingView.vue"),
        },
      ],
    },
    {
      path: "/health-food",
      children: [
        {
          path: "",
          name: "health-food",
          component: () => import("@/views/HealthFoodView.vue"),
        },
        {
          path: "food",
          name: "food",
          component: () => import("@/views/health-food/FoodView.vue"),
        },
        {
          path: "drinks",
          name: "drinks",
          component: () => import("@/views/health-food/DrinksView.vue"),
        },
      ],
    },
    {
      path: "/exercise",
      name: "exercise",
      component: () => import("@/views/ExerciseView.vue"),
    },
    {
      path: "/schedule",
      name: "schedule",
      component: () => import("@/views/ScheduleView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;

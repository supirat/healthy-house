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
          children: [
            {
              path: "",
              name: "food",
              component: () => import("@/views/health-food/FoodView.vue"),
            },
            {
              path: "clean-food",
              name: "clean-food",
              component: () =>
                import("@/views/health-food/food/CleanFoodView.vue"),
            },
            {
              path: "vegetarian-food",
              name: "vegetarian-food",
              component: () =>
                import("@/views/health-food/food/VegetarianFoodView.vue"),
            },
            {
              path: "vegan-food",
              name: "vegan-food",
              component: () =>
                import("@/views/health-food/food/VeganFoodView.vue"),
            },
            {
              path: ":category/:name",
              name: "food-menu-receipt",
              component: () =>
                import("@/views/health-food/food/MenuReceiptView.vue"),
            },
          ],
        },
        {
          path: "drinks",
          // component: () => import("@/views/health-food/DrinksView.vue"),
          children: [
            {
              path: "",
              name: "drinks",
              component: () =>
                import("@/views/health-food/drink/DrinksView.vue"),
            },
            {
              path: "water",
              name: "water",
              component: () =>
                import("@/views/health-food/drink/WaterView.vue"),
            },
            {
              path: "Fresh",
              name: "Fresh",
              component: () =>
                import("@/views/health-food/drink/FreshView.vue"),
            },
            {
              path: "Carrot",
              name: "Carrot",
              component: () =>
                import("@/views/health-food/drink/CarrotView.vue"),
            },
            {
              path: "Tomato",
              name: "Tomato",
              component: () =>
                import("@/views/health-food/drink/TomatoView.vue"),
            },
            {
              path: "Apple",
              name: "Apple",
              component: () =>
                import("@/views/health-food/drink/AppleView.vue"),
            },
            {
              path: "Pear",
              name: "Pear",
              component: () => import("@/views/health-food/drink/PearView.vue"),
            },
            {
              path: "Tea",
              name: "Tea",
              component: () => import("@/views/health-food/drink/TeaView.vue"),
            },
            {
              path: "Milk",
              name: "Milk",
              component: () => import("@/views/health-food/drink/MilkView.vue"),
            },
            {
              path: "Yogurt",
              name: "Yogurt",
              component: () =>
                import("@/views/health-food/drink/YogurtView.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/exercise",
      // component: () => import("@/views/Exercise/ExerciseView"),
      children: [
        {
          path: "",
          name: "exercise",
          component: () => import("@/views/Exercise/ExerciseView.vue"),
        },
        {
          path: "Workout",
          name: "Workout",
          component: () => import("@/views/Exercise/WorkoutView.vue"),
        },
        {
          path: "30-Minute",
          name: "30-Minute",
          component: () => import("@/views/Exercise/30-MinuteView.vue"),
        },
        {
          path: "Standing",
          name: "Standing",
          component: () => import("@/views/Exercise/StandingView.vue"),
        },
        {
          path: "Beginner",
          name: "Beginner",
          component: () => import("@/views/Exercise/BeginnerView.vue"),
        },
        {
          path: "HIIT",
          name: "HIIT",
          component: () => import("@/views/Exercise/HIITView.vue"),
        },
        {
          path: "20-Minute",
          name: "20-Minute",
          component: () => import("@/views/Exercise/20-MinuteView.vue"),
        },
        {
          path: "WorkoutVideos",
          name: "WorkoutVideos",
          component: () => import("@/views/Exercise/WorkoutVideosView.vue"),
        },
        {
          path: "25-Minute",
          name: "25-Minute",
          component: () => import("@/views/Exercise/25-MinuteView.vue"),
        }
      ],
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

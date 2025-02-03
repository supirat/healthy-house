<template>
  <div class="relative" ref="dropdown" @mouseleave="closeDropdown">
    <div class="cursor-pointer" @mouseover="openDropdown">
      <NavLink> อาหาร/เครื่องดื่มสุขภาพ </NavLink>
    </div>
    <transition name="fade">
      <div v-if="isDropdownVisible" class="absolute py-2 rounded-b-lg flex-1">
        <NavLink
          class="w-full mb-2"
          to="/health-food/food"
          @click.native="closeDropdown"
        >
          อาหาร
        </NavLink>
        <NavLink
          class="w-full"
          to="/health-food/drinks"
          @click.native="closeDropdown"
        >
          เครื่องดื่มสุขภาพ
        </NavLink>
      </div>
    </transition>
  </div>
</template>

<script>
import NavLink from "../common/NavLink.vue";

export default {
  components: {
    NavLink,
  },
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  methods: {
    openDropdown() {
      this.isDropdownVisible = true;
    },
    closeDropdown() {
      this.isDropdownVisible = false;
    },
    handleClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.closeDropdown();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

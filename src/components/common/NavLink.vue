<template>
  <RouterLink v-if="to" :to="to" v-slot="{ isActive }">
    <button
      :class="[
        'py-2 px-4 rounded-lg transition duration-300 hover:scale-110 cursor-pointer',
        $attrs.class,
        { 'bg-gradient-to-b from-brown-100 to-brown-200': isActive },
        { 'bg-gradient-to-b from-brown-50 to-brown-100': !isActive }
      ]"
    >
      <slot></slot>
    </button>
  </RouterLink>
  <div
    v-else
    :class="[
      'py-2 px-4 rounded-lg transition duration-300 bg-gradient-to-b from-brown-50 to-brown-100 hover:scale-110 cursor-pointer',
      $attrs.class,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "",
    },
  },
};
</script>

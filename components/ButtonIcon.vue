<template>
  <button
    type="button"
    :class="props.color"
    class="p-1 rounded-full border hover:bg-gray-200"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps(["color"]);
</script>

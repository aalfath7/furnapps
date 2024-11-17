<template>
  <button
    type="button"
    :class="props.color + ' ' + props.bgColor"
    class="px-5 py-1 rounded-full border hover:bg-gray-300"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps(["text", "color", "bgColor"]);
</script>

<template>
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
    <img
      v-for="(src, key) of images"
      :key="key"
      :src="src"
      :alt="key"
      class="min-w-0"
      style="margin: 0;"
    >
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      required: true
    }
  }

}
</script>
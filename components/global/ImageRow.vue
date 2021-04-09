<template>
  <div class="grid gap-3" :class="gridColsClasses">
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
    },
    minCols: {
      type: Number,
      default: 2
    }
  },
  computed: {
    gridColsClasses () {
      const classMap = {
        1: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2',
        2: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3',
        3: 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4',
        4: 'grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5',
      }
      return classMap[this.minCols] || classMap[2]
    }
  }

}
</script>
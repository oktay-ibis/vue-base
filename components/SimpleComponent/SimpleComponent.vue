<template>
  <div>
    <h2 v-if="isLarge">{{ title }}</h2>
    <p v-if="!isLarge">{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "SimpleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    isLarge: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
div {
  background-color: lightslategray;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  padding: 8px;
  color: white;
}
</style>

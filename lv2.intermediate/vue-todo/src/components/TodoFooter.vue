<template>
  <footer class="clear-all-container">
    <span class="clear-all-btn" v-on:click="clearTodo"> Clear All</span>
  </footer>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit("clearAllItems");
    },
  },
};
</script>

<style scoped>
.clear-all-container {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clear-all-btn {
  color: #e20303;
  display: block;
  cursor: pointer;
}
</style>
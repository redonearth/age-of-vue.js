<template>
  <div>
    <div v-for="article in this.$store.state.news" :key="article.id">
      {{ article.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style>
</style>
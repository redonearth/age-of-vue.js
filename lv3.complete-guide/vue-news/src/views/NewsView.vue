<template>
  <div>
    <p v-for="article in this.$store.state.news" :key="article.id">
      <a :href="article.url">
        {{ article.title }}
      </a>
      <small>{{ article.time_ago }} by {{ article.user }}</small>
    </p>
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
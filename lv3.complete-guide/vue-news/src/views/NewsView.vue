<template>
  <div>
    <div v-for="article in news">{{ article.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => {
        console.log(response);
        this.news = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
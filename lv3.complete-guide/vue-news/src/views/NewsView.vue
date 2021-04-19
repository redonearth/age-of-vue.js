<template>
  <div>
    <div v-for="article in news">{{ article.title }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
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
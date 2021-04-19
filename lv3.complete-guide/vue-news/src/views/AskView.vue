<template>
  <div>
    <div v-for="ask in questions">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      questions: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.questions = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
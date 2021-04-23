<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const username = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${username}.json`);
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>

<style>
</style>
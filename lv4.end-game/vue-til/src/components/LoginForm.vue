<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">아이디 : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">패스워드 : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {},
  },
};
</script>

<style></style>

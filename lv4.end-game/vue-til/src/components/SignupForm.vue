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
    <div>
      <label for="nickname">닉네임 : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">회원 가입</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    submitForm() {
      console.log('폼 제출');
    },
  },
};
</script>

<style></style>

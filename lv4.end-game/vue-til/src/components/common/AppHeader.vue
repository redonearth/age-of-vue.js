<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isUserLogin">by {{ $store.state.nickname }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          로그아웃
        </a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearNickname');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #7da1fc;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  z-index: 2;
}
a {
  color: #dedede;
  font-size: 1.25rem;
}
a.logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 1.2rem;
  font-weight: normal;
}
.navigations a {
  margin-left: 15px;
}
.logout-button {
  font-size: 1.25rem;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>

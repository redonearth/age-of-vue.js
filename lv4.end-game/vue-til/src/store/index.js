import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickname: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.nickname !== '';
    },
  },
  mutations: {
    setNickname(state, nickname) {
      state.nickname = nickname;
    },
    clearNickname(state) {
      state.nickname = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
});

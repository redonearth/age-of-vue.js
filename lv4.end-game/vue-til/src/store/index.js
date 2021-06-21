import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickname: '',
  },
  mutations: {
    setNickname(state, nickname) {
      state.nickname = nickname;
    },
  },
});

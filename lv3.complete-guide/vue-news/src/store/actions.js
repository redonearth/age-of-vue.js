import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchItem,
} from "../api/index.js";

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const response = await fetchNewsList();
      commit("SET_NEWS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit("SET_JOBS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    try {
      const response = await fetchAskList();
      commit("SET_ASK", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_USER({ commit }, username) {
    try {
      const response = await fetchUserInfo(username);
      commit("SET_USER", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, itemId) {
    try {
      const response = await fetchItem(itemId);
      commit("SET_ITEM", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
};

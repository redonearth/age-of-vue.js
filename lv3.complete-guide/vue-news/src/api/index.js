import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
};

const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
};

const fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`);
};

const fetchList = (pageName) => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
};

const fetchUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
};

const fetchItem = (itemId) => {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
};

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchItem,
};

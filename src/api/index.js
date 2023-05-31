import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPostsApi = async (page) => {
  const data = await axios
    .get(`${BASE_URL}/posts?_page=${page}&_limit=10`)
    .then((res) => res.data);
  return data;
};

export const getCommentsApi = async (postId) => {
  const data = await axios
    .get(`${BASE_URL}/posts/${postId}/comments`)
    .then((res) => res.data);

  return data;
};

export const getUserApi = async (userId) => {
  const data = await axios
    .get(`${BASE_URL}/users/${userId}`)
    .then((res) => res.data);
  return data;
};

export const getUserPostsApi = async (userId) => {
  const data = await axios
    .get(`${BASE_URL}/users/${userId}/posts`)
    .then((res) => res.data);
  return data;
};

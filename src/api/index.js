import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPostsApi = async () => {
  const data = await axios
    .get(`${BASE_URL}/posts?_limit=10`)
    .then((res) => res.data);
  return data;
};

export const getCommentsApi = async (postId) => {
  const data = await axios
    .get(`${BASE_URL}/posts/${postId}/comments`)
    .then((res) => res.data);

  return data;
};

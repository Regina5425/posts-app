import axios from "axios";

export const getPostsApi = async () => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => res.data);
  return data;
};

export const getCommentApi = async (postId) => {
  const data = await axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((res) => res.data);

		return data;
};
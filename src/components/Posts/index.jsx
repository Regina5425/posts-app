import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, resetState } from "../../redux/posts";
import Post from "../Post";
import Loader from "./../Loader/index";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isFetching } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <>
      <h1>Список постов</h1>
      {posts.length === 0 && isFetching ? (
        <Loader />
      ) : (
        <>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      )}
    </>
  );
};

export default Posts;

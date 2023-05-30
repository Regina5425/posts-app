import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, resetState } from "../../redux/posts";
import Loader from "./../Loader/index";
import Search from "../Search";
import Posts from "./../Posts/index";

const PostsLayout = () => {
  const dispatch = useDispatch();
  const { posts, isFetching } = useSelector((state) => state.posts);
  const { searchResults } = useSelector((state) => state.search);
  const value = searchResults[0]?.title;

  useEffect(() => {
    dispatch(getPosts());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <>
      <h1>Список постов</h1>
      <Search inputValue={value ? value : ""} />
      <>
        {searchResults.length !== 0 ? (
          <>
            {searchResults.map((post) => (
              <div key={post.id}>
                <Posts post={post} />
              </div>
            ))}
          </>
        ) : (
          <>
            {posts.length === 0 && isFetching ? (
              <Loader />
            ) : (
              <>
                {posts.map((post) => (
                  <div key={post.id}>
                    <Posts post={post} />
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </>
    </>
  );
};

export default PostsLayout;

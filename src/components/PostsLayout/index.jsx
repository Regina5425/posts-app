import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, resetState } from "../../redux/posts";
import Loader from "./../Loader/index";
import Search from "../Search";
import Posts from "./../Posts/index";

const PostsLayout = () => {
  const dispatch = useDispatch();
  const { posts, isFetching } = useSelector((state) => state.posts);
  const { errorPosts } = useSelector((state) => state.error);
  const { searchResults } = useSelector((state) => state.search);
  const value = searchResults[0]?.title;

  useEffect(() => {
    dispatch(getPosts());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  if (posts.length === 0 && isFetching && !errorPosts) {
    return <Loader />;
  } else if (!posts || posts.length === 0) {
    return errorPosts ? <h2>{errorPosts}</h2> : null;
  }

  return (
    <>
      <h1>Список постов</h1>
      <Search inputValue={value ? value : ""} />
      <>
        {searchResults.length !== 0 ? (
          <>
            {searchResults.map((post) => (
              <div key={post.id}>
                <Posts post={post} error={errorPosts} />
              </div>
            ))}
          </>
        ) : (
          <>
            {posts.map((post) => (
              <div key={post.id}>
                <Posts post={post} error={errorPosts} />
              </div>
            ))}
          </>
        )}
      </>
    </>
  );
};

export default PostsLayout;

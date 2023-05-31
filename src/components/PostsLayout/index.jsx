import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, resetState } from "../../redux/posts";
import Loader from "./../Loader/index";
import Search from "../Search";
import Posts from "./../Posts/index";
import Sort from "./../Sort/index";

const PostsLayout = () => {
  const dispatch = useDispatch();
  const { posts, isFetching } = useSelector((state) => state.posts);
  const { errorPosts } = useSelector((state) => state.error);
  const [value, setValue] = useState("");
  const [sorted, setSorted] = useState(false);

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

  const search = (data, value) => {
    if (value.length === 0) {
      return data;
    }

    return data.filter((item) => {
      return item.title.indexOf(value) > -1;
    });
  };

  const filteredPosts = search(posts, value);
  const copyFilteredPosts = [...filteredPosts];

  const onUpdateSearch = (value) => {
    setValue(value);
  };

  const onSortChange = (value) => {
    setSorted(value);
  };

  return (
    <>
      <h1>Список постов</h1>
      <div className='d-flex justify-content-between align-content-center mb-3'>
        <Search inputValue={value} onUpdateSearch={onUpdateSearch} />
        <Sort sort={sorted} onSortChange={onSortChange} />
      </div>
      {filteredPosts.length === 0 ? <h2>Посты не найдены</h2> : null}
      {sorted ? (
        copyFilteredPosts
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((post) => (
            <div key={post.id}>
              <Posts post={post} error={errorPosts} />
            </div>
          ))
      ) : (
        <>
          {filteredPosts.map((post) => (
            <div key={post.id}>
              <Posts post={post} error={errorPosts} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PostsLayout;

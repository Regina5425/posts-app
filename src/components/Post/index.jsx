import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getComments, resetState } from "../../redux/comments";
import Comments from "./../Comments/index";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { comments, isFetching } = useSelector((state) => state.comments);
  const [toggleComments, setToggleComments] = useState(false);

  const showComments = (postId) => {
    dispatch(getComments(postId));
    setToggleComments(true);
  };

  const hideComments = () => {
    dispatch(resetState());
    setToggleComments(false);
  };

  return (
    <div className='ms-3'>
      <Card.Title className='mb-2'>{post.title}</Card.Title>
      <Card.Text>{post.body}</Card.Text>
      {toggleComments ? (
        <Button variant='dark' onClick={hideComments}>
          Скрыть комментарии
        </Button>
      ) : (
        <Button variant='dark' onClick={() => showComments(post.id)}>
          Комментарии
        </Button>
      )}
      {toggleComments ? (
        <Comments comments={comments} isFetching={isFetching} />
      ) : null}
    </div>
  );
};

export default Post;

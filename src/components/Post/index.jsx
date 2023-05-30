import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import User from "./user.png";
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
	}

  return (
    <ListGroup>
      <ListGroup.Item>
        <div className='d-flex'>
          <LinkContainer to='/user'>
            <Nav.Link>
              <Image
                src={User}
                alt='user'
                roundedCircle
                width={30}
                className='align-self-start'
              />
            </Nav.Link>
          </LinkContainer>
          <div className='ms-3'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
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
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Post;

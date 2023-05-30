import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { getPosts, resetState } from "../../redux/posts";
import Post from "../Post";
import Loader from "./../Loader/index";
import User from "../../assets/user.png";

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
            <div key={post.id}>
              <ListGroup className='mb-3'>
                <ListGroup.Item>
                  <div className='d-flex'>
                    <LinkContainer to={`/about-user/${post.userId}`}>
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
                    <Post post={post} />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Posts;

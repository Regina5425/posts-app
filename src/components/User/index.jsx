import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import UserAvatar from "../../assets/user.png";
import { getUser, getUserPosts, resetState } from "../../redux/user";
import Loader from "./../Loader/index";
import Post from "./../Post/index";

const User = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { user, isFetching, isFetchingPosts, userPosts } = useSelector(
    (state) => state.user
  );
  const { errorUser } = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));

    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  if (Object.keys(user).length === 0 && isFetching && !errorUser) {
    return <Loader />;
  } else if (!user || Object.keys(user).length === 0) {
    return errorUser ? <h2>{errorUser}</h2> : null;
  }

  return (
    <>
      <LinkContainer to='/'>
        <Nav.Link bsPrefix='nav-link'>Назад</Nav.Link>
      </LinkContainer>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <div className='d-flex mb-3'>
            <Image
              src={UserAvatar}
              alt='user'
              roundedCircle
              width={50}
              className='align-self-start'
            />
            <div className='ms-3'>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                {user.email}
              </Card.Subtitle>
            </div>
          </div>
          <div>
            {isFetchingPosts ? (
              <Loader />
            ) : (
              <>
                {userPosts.map((post) => (
                  <div className='post-bootom' key={post.id}>
                    <Post post={post} />
                  </div>
                ))}
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default User;

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Post from "../Post";
import User from "../../assets/user.png";

const Posts = ({post}) => {
  return (
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
  );
};

export default Posts;

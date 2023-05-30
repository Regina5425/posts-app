import React, {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import User from "./user.png";

const Post = ({ post }) => {
  const [toggleComments, setToggleComments] = useState(false);

  const showComments = () => {
    setToggleComments((prev) => !prev);
  };

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
            <Button variant='dark' onClick={showComments}>
              Комментарии
            </Button>
						{toggleComments ? (
							<p>Comments</p>
						) : null}
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Post;

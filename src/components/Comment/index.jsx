import React from "react";

const Comment = ({ comments }) => {
  return (
    <div className='mt-2'>
      <h6 className='text-secondary'>{comments.email}</h6>
      <p>{comments.body}</p>
    </div>
  );
};

export default Comment;

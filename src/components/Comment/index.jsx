import React from "react";

const Comment = ({email, body}) => {
  return (
    <div className='mt-2'>
      <h6 className="text-secondary">{email}</h6>
      <p>{body}</p>
    </div>
  );
};

export default Comment;

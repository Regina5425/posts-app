import Comment from "../Comment";
import Loader from "../Loader";

const Comments = ({ comments, isFetching }) => {
  return (
    <>
      {comments.length === 0 && isFetching ? (
        <Loader />
      ) : (
        <>
          {comments.map((comment) => (
            <Comment key={comment.id} comments={comment} />
          ))}
        </>
      )}
    </>
  );
};

export default Comments;

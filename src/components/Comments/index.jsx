import Comment from "../Comment";
import Loader from "../Loader";
import { useSelector } from "react-redux";

const Comments = ({ comments, isFetching }) => {
  const { errorComments } = useSelector((state) => state.error);

  if (isFetching && !errorComments) {
    return <Loader />;
  } else if (!comments || comments.length === 0) {
    return errorComments ? <h6>{errorComments}</h6> : null;
  }

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comments={comment} />
      ))}
    </>
  );
};

export default Comments;

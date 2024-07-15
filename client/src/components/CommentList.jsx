import axios from "axios";
import { useEffect, useState } from "react";
import CreateComment from "./CreateComment";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
      setComments(res.data);
    };
    fetchData();
  }, [postId]);

  const renderedComments = comments.map((comment) => <li key={comment.id}>{comment.content}</li>);

  return (
    <div>
      <CreateComment postId={postId} comments={comments} setComments={setComments} />
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;

import axios from "axios";
import { useState } from "react";

const CreateComment = ({ postId, comments, setComments }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
    setComments((prevState) => [...prevState, res.data]);

    setContent("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComment;

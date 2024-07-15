import { useState } from "react";
import axios from "axios";

const CreatePost = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/posts", { title });
    setPosts({ ...posts, [res.data.id]: res.data });
    setTitle("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" required />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

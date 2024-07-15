import CreatePost from "@/components/CreatePost";
import ListPosts from "@/components/ListPosts";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:4000/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost posts={posts} setPosts={setPosts} />
      <hr />
      <h1>Posts</h1>
      <ListPosts posts={posts} />
    </div>
  );
};

export default Home;

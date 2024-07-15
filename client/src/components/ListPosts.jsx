import CommentList from "./CommentList";

const ListPosts = ({ posts }) => {
  const renderedPosts = Object.values(posts).map((post) => (
    <div key={post.id} className="card" style={{ width: "30%", marginBottom: "20px" }}>
      <div className="card-body">
        <h3>{post.title}</h3>

        <CommentList postId={post.id} />
      </div>
    </div>
  ));

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};

export default ListPosts;

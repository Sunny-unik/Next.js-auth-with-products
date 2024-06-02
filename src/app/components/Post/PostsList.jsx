import { useEffect, useState } from "react";
import { getPosts } from "../../../utils/api";
import Comments from "./Comments";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getPosts();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <Comments postId={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;

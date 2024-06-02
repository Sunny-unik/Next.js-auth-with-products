"use client";

import PostList from "../components/Post/PostsList";
import withAuth from "../../utils/auth";

const PostsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <PostList />
    </div>
  );
};
export default withAuth(PostsPage);

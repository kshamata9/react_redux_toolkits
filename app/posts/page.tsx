"use client";
import React from "react";
import {
  fetchPostsRequest,
  createPostRequest,
  deletePostRequest,
} from "../features/postsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export default function PostList() {
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.posts);

  React.useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Posts</h2>
      <button
        onClick={() =>
          dispatch(createPostRequest({ title: "New Post", body: "Hello" }))
        }
      >
        Add Post
      </button>
      <table border={1}>
        {posts.map((p) => (
          <tr key={p.id}>
            <td>{p.title}</td>
            <td>
              <button onClick={() => dispatch(deletePostRequest(p.id))}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

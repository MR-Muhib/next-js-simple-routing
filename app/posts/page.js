import React from "react";
import getAllPosts from "../lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div>
      <ul className="">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

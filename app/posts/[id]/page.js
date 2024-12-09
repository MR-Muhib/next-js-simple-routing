import getPost from "@/app/lib/getPost";

import React from "react";

export default async function page({ params }) {
  const { id } = params;

  const post = await getPost(id);
  return (
    <div>
      <h1 className="text-blue-500">{post.title}</h1>
      <h1 className="mt-3">{post.body}</h1>
    </div>
  );
}

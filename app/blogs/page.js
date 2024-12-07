import Link from "next/link";
import React from "react";
// Dynamic pages routing
const blogs = [
  {
    title: "Blog 1",
    id: 1,
  },
  {
    title: "Blog 2",
    id: 2,
  },
];

function Blogs() {
  return (
    <div>
      <h3 className="font-bold text-center mt-5">Blog page</h3>
      <p className="">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <p className="font-semibold ml-5 mb-5">
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Blogs;

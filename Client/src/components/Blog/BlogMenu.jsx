import React, { useEffect } from "react";
import { useBlogStore } from "../../store/useBlogStore";
import { Link } from "react-router-dom";

function BlogMenu() {
  const { blogs, getBlogs } = useBlogStore();

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto p-6 py-8">
      {blogs.map((blog) => (
        <Link to={`/blog/${blog._id}`}>
          <div
            key={blog._id}
            className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            <h1 className="text-xl font-bold mb-2">{blog.title}</h1>
            <h2 className="text-sm text-gray-400 mb-1">
              {new Date(blog.createdAt).toLocaleDateString()}{" "}
            </h2>
            <div className="divider"></div>
            {blog.preview && (
              <p className="text-gray-500 text-sm mb-2">{blog.preview}</p>
            )}
            <p className="text-xs text-gray-400 mt-3">By: {blog.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogMenu;

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
        <div
          key={blog._id}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
        >
          <h2 className="text-sm text-gray-400 mb-1">
            {new Date(blog.createdAt).toLocaleDateString()}{" "}
          </h2>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {blog.title}
          </h1>
          {blog.preview && (
            <p className="text-gray-500 text-sm mb-2">{blog.preview}</p>
          )}
          {/* <p className="text-gray-700 dark:text-gray-300">
            {blog.content.length > 100
              ? blog.content.substring(0, 100) + "..."
              : blog.content}
          </p> */}
          <p className="text-xs text-gray-400 mt-3">By: {blog.email}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Link to={`/blog/${blog._id}`}>Read More →</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogMenu;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { useBlogStore } from "../../store/useBlogStore";
import { userAuthStore } from "../../store/userAuthStore";
import { useThemeStore } from "../../store/useThemeStore";

const BlogContent = () => {
  const { theme } = useThemeStore();
  const { id } = useParams();
  const { selectBlog, blog } = useBlogStore();
  const { checkUserPic } = userAuthStore();

  const [pic, setPic] = useState("");

  useEffect(() => {
    const fetchPic = async () => {
      await selectBlog(id);

      if (!blog.email) return;

      const userPic = await checkUserPic({ email: blog.email });
      console.log("userPic: ", userPic);
      setPic(userPic);
    };
    fetchPic();
  }, [blog.email]);

  return (
    <div className="flex-1 py-8">
      <div className="container">
      </div>
      <div className="max-w-3xl mx-auto mt-10 p-8  py-8 rounded-2xl shadow-2xl bg-base-200">
        {/* Title */}
        <h1 className="text-5xl font-extrabold  mb-4">{blog.title}</h1>

        {/* Author & Date */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            {pic ? (
              <img
                src={pic}
                alt={blog.email}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <span className="loading loading-spinner loading-lg"></span>
            )}

            <div>
              <p className=" font-medium">{blog.email}</p>
              <p className="text-sm ">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <Link
            to="/blog"
            className="px-2 py-1 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition flex items-center gap-2"
          >
            ← Back
          </Link>
        </div>

        {/* Markdown content */}
        <div data-color-mode={theme}>
          <MDEditor.Markdown
            source={blog.content}
            style={{
              lineHeight: 2,
              wordBreak: "break-word",
              maxWidth: "768px",
              margin: "2rem auto",
              padding: "1.5rem",

              borderRadius: "0.75rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Footer / Tags or extra info */}
        {/* <div className="mt-12 border-t pt-6 flex flex-wrap gap-2">
    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
      Blog
    </span>
    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
      Markdown
    </span>
    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
      Tutorial
    </span>
  </div> */}
      </div>
    </div>
  );
};

export default BlogContent;

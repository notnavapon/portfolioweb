import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { useBlogStore } from "../../store/useBlogStore";
import { userAuthStore } from "../../store/userAuthStore";
import { useThemeStore } from "../../store/useThemeStore";

const BlogContent = () => {
  const { theme } = useThemeStore();
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const {
    selectBlog,
    blog,
    title,
    preview,
    content,
    setTitle,
    setPreview,
    setContent,
    editBlog,
    deleteBlog,
    reset
  } = useBlogStore();

  const { checkUserPic } = userAuthStore();
  const [pic, setPic] = useState("");

  const { authUser } = userAuthStore();
  const { email } = authUser;

  const [checkUser , setCheckUser] = useState(false);

  useEffect(() => {
    const fetchPic = async () => {
      await selectBlog(id);
      if (!blog.email) return;

      const userPic = await checkUserPic({ email: blog.email });
      console.log("userPic: ", userPic);
      setPic(userPic);

      if (email === blog.email)
        return (
          setCheckUser(true),
          setTitle(blog.title),
          setPreview(blog.preview),
          setContent(blog.content)
        );
    };
    fetchPic();
  }, [blog.title]);

  const handleChange = (event) => {
    if (event?.target) {
      const { name, value } = event.target;
      if (name === "title") setTitle(value);
      if (name === "preview") setPreview(value);
    } else {
      setContent(event);
    }
  };

  const handleSubmit = async (e) => {
    try {
      await editBlog(id, {
        email: email,
        title: title.trim(),
        preview: preview.trim(),
        content: content.trim(),
      });

      

      // Clear form
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault(); 
    try {
      await deleteBlog(id);
      reset()
      const modal = document.getElementById("my_modal_1");
      if (modal) {
        modal.showModal(); 
      } else {
        console.error("Modal not found");
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
  
    }
  };

  return (
    <div className="flex-1 py-8">
      <div className="max-w-3xl mx-auto mt-10 p-8  py-8 rounded-2xl shadow-2xl bg-base-200">
        {/* edit  */}
        {checkUser && <button className="btn btn-error" onClick={() => setShow((prev) => !prev)}>{show ? "Close Editor": "Open Editor"}</button>}
        {checkUser && show ? (
          <div className="max-w-3xl mx-auto p-6 mt-10 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-colors duration-300">
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
              Edit Blog
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter blog title"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  value={title}
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Preview
                </label>
                <input
                  type="text"
                  placeholder="Enter blog preview"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  value={preview}
                  name="preview"
                  onChange={handleChange}
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Content
                </label>
                <MDEditor value={content} onChange={handleChange} />
              </div>

              {/* Submit Button */}
              <button
                name="submitbutton"
                className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Edit Blog
              </button>

              <button
                onClick={handleDelete}
                className="w-full bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Delete Blog
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Alert</h3>
                  <Link to="/blog/" className="btn">Back to Blog</Link>
                </div>
              </dialog>
            </form>
          </div>
        ):<></>}

        {/* Content */}
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

import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useBlogStore } from "../../store/useBlogStore";
import { userAuthStore } from "../../store/userAuthStore";

const BlogCreate = () => {
  const {
    title,
    preview,
    content,
    setTitle,
    setPreview,
    setContent,
    createBlog,
    reset
  } = useBlogStore();

  const { authUser } = userAuthStore();

  const { email } = authUser;
  // const [email ,setEmail] = useState({
  //   email: authUser?.email,
  // })
  const handleChange = (event) => {
    if (event?.target) {
      const { name, value } = event.target;
      if (name === "title") setTitle(value);
      if (name === "preview") setPreview(value);
    } else {
      // MDEditor จะส่ง string ตรง ๆ
      setContent(event);
    }
  };

  const handleSubmit = async (e) => {

    try {
      await createBlog({
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

  useEffect(()=>{
    reset()
  },[])
  return (
    <>
      {/* Mockup */}
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-colors duration-300">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
          Create Blog
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
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Create Blog
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto p-6 mt-10 space-y-8">
        {/* Blog Post */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h1>
        
          </div>
          
      
          <MDEditor.Markdown
            source={content}
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogCreate;

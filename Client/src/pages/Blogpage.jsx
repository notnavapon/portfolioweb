import { useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

const Blogpage = () => {
  const [show,setShow] = useState(false);

  

  return (
    <div className="flex-1 pt-20">
      <div className="min-h-screen flex flex-col justify-center items-center ">
        {/* Icon */}
        <div className="text-6xl mb-6 animate-bounce">{/* <FaTools /> */}</div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4">Coming Soon</h1>

        {/* Optional button */}
        <a
          href="/"
          className="px-6 py-3  font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Go Back
        </a>
        <button
          href="/"
          className="px-6 py-3  font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          onClick={() => setShow((prev) => !prev)}
        >
          Show Mockup
        </button>

        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-16 translate-y-16"></div>
      </div>

       {show && (
      <>
      {/* Mockup */}
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-colors duration-300">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
          Create Blog
        </h1>
        <form className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Content
            </label>
            <textarea
              rows={6}
              placeholder="Write your blog content..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-100 dark:file:bg-blue-800
                       file:text-blue-700 dark:file:text-blue-200
                       hover:file:bg-blue-200 dark:hover:file:bg-blue-700
                       transition-colors duration-200"
            />
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
              Blog Title Example
            </h1>
            <button>
              <X />
            </button>
          </div>

          <p className="text-gray-800 dark:text-gray-200 mb-4">
            This is an example of blog content. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque euismod, nibh sit amet
            fringilla bibendum, purus purus laoreet nunc, eget ultrices mauris
            velit eget arcu.
          </p>

          {/* Edit Content */}
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            placeholder="Edit your content here..."
            rows={4}
          />

          <hr className="border-gray-300 dark:border-gray-600 my-4" />

          {/* Comments Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Comments
            </h2>

            {/* Comment Item */}
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>User1:</strong> This is a comment example.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>User2:</strong> Another comment goes here.
              </p>
            </div>

            {/* Input Comment */}
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Write a comment..."
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              />
              <button className="px-4 py-2 bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white rounded-lg transition-colors duration-200">
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
       )}
    </div>
  );
};

export default Blogpage;

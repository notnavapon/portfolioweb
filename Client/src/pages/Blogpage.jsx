import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import BlogCreate from "../components/Blog/BlogCreate";
import BlogMenu from "../components/Blog/BlogMenu";

import { userAuthStore } from "../store/userAuthStore";
import { useRoleStore } from "../store/useRoleStore";


const Blogpage = () => {
  const { authUser } = userAuthStore();
  const [show, setShow] = useState(false);
  const { role, getRole } = useRoleStore();

  useEffect(() => {
    const checkRole = async () => {
      await getRole(authUser?.email);
    };

    checkRole();
    // console.log("role on blogpage:" + role);
  }, [show]);

  return (
    <div className="flex-1 pt-20 py-8">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">📚 My Blogs</h1>
          {authUser && (
            <button
              href="/"
              className="px-6 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
              onClick={() => setShow((prev) => !prev)}
            >
              {!show ? "Create Blog" : "Cancle"}
            </button>
          )}
        </div>
        <div className="divider"></div>

        <BlogMenu />
      </div>

      {role === "admin" && show ? (
        <>
          {/* Blog Post content */}
          <BlogCreate />
        </>
      ) : (
        <>
          <dialog id="my_modal_3" className="modal" open={show}>
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={() => setShow((prev) => !prev)}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-center text-5xl">Alert</h3>
              <div className="divider"></div>
              {authUser ? (
                <img src="https://preview.redd.it/can-someone-photoshop-my-face-onto-this-meme-but-keep-the-v0-1kg7g9ub12fa1.jpg?width=640&crop=smart&auto=webp&s=796dd25871385c9f6ca4129504ae396e8b9a288e" />
              ) : (
                ""
              )}

              <p className="py-4 text-center font-bold text-error">
                {authUser
                  ? "You don’t have permission to create a blog"
                  : "Please log in before creating blog."}
              </p>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};

export default Blogpage;

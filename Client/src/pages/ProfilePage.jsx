import { useState, useEffect } from "react";
import { Camera, Mail, User } from "lucide-react";
import { userAuthStore } from "../store/userAuthStore";
import imageCompression from "browser-image-compression";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile, checkAuth } =
    userAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    fullName: authUser?.fullName,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated:", form); // 🔹 ตรงนี้ไว้ยิง API
    setIsEditing(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 1, // ย่อให้ไม่เกิน 1MB
      maxWidthOrHeight: 1024, // ความกว้าง/สูงสูงสุด
      useWebWorker: true,
    };

    try {
      if (!file) return;

      const compressedFile = await imageCompression(file, options);

      setSelectedImg(URL.createObjectURL(compressedFile));

      const formData = new FormData();
      formData.append("profile", compressedFile);

      const res = await updateProfile(formData); // server ต้องรับ multipart/form-data
      setSelectedImg(res.data.profilePic || "/avatar.png");
    } catch (error) {
      console.error("Error compressing file:", error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <div className="flex-1 pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* avatar upload section */}

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser?.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 "
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }
                `}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile ? (
                <span className="loading loading-dots loading-lg"></span>
              ) : (
                "Click the camera icon to update your photo"
              )}
            </p>
          </div>

          <div className="relative p-6 bg-base-100 rounded-xl shadow-md space-y-6">
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2"></div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </div>

                {isEditing ? (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="px-2 py-0.5 text-xs rounded-md bg-green-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-2 py-0.5 text-xs rounded-md bg-red-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-2 py-0.5 text-xs rounded-md bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                  >
                    Edit
                  </button>
                )}
              </div>

              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-base-200 rounded-lg border"
                />
              ) : (
                <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                  {authUser?.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {authUser?.email}
              </p>
            </div>
          </div>
          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

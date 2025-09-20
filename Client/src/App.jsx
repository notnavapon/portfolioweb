import {useEffect, React} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { userAuthStore } from "./store/userAuthStore";
import Chatpage from "./pages/Chatpage";
import ResetPasswordpage from "./pages/ResetPasswordpage";
import BlogPage from "./pages/Blogpage";


import {Loader} from "lucide-react";
import {Toaster} from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";


const App = () => {
  const {authUser, checkAuth , isCheckingAuth, onlineUsers} = userAuthStore()
  console.log(onlineUsers)

  const {theme} = useThemeStore()



  useEffect(()=>{
    checkAuth();
  }, [checkAuth]);

  if(isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <div data-theme={theme} className="flex flex-col min-h-screen">
      <Navbar />
      <div>
      <Routes>
        {/* <Route path="/" element={<Homepage/> }/> */}
        <Route path="/" element={<Homepage/>} />
        <Route path="/chat" element={authUser ? <Chatpage/> : <Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser ? <SignupPage/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to="/"/>}/>
        <Route path="/blog" element={authUser ? <BlogPage/> : <Navigate to="/"/>}/>
        <Route path="/resetpassword" element={!authUser ? <ResetPasswordpage/> : <Navigate to="/"/>}/>
        <Route path="/settings" element={<SettingsPage/> }/>
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to="/login"/>}/>
      </Routes>
      </div>
      <Footer/>
      <Toaster />
    </div>
  );
};

export default App;

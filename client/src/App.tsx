// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css";
import Header from "./components/header/header";
import Post from "./components/post/post";
import Profile from "./components/profile/profile";
import Sidebar from "./components/sidebar/sidebar";
import CreatePost from "./components/create/create";
import FriendList from "./components/friendlist/friendlist";
import TrendingPost from "./components/trendpost/trendpost";
import ProfileWebPage from "./pages/Profile/ProfilePage";
import PostPage from "./pages/Post/PostPage";

const App: React.FC = () => {
  const location = useLocation();
  const profile = {
    name: "Nina Ford",
  };

  const isAuthRoute = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen bg-background2">
      {!isAuthRoute && <Header />}
      <div className="flex flex-1">
        {!isAuthRoute && <Sidebar />}
        <div className={`flex-1 ${!isAuthRoute ? "mt-20 px-5 pr-20" : ""}`}>
          {location.pathname !== "/signup" &&
            location.pathname !== "/signin" &&
            location.pathname !== "/profile" &&
            location.pathname !== "/post" && (
              <div className="grid grid-cols-10 w-full">
                <div className="col-span-3 space-y-4">
                  <Profile />
                  <FriendList />
                </div>
                <div className="col-span-4 space-y-6">
                  <CreatePost />
                  <Post profile={profile} />
                  <Post profile={profile} />
                  <Post profile={profile} />
                </div>
                <div className="col-span-3 space-y-4">
                  <TrendingPost />
                </div>
              </div>
            )}
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<ProfileWebPage />} />
            <Route path="/post" element={<PostPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
  
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

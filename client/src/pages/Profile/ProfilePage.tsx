import React from "react";
import ProfilePage from "../../components/profile/ProfileComponent";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";

const ProfileWebPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background2">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 px-5 pr-10">
          <div className="grid grid-cols-1 gap-4 w-full">
            <div className="space-y-5">
              <ProfilePage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWebPage;

import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import PostFull from "../../components/post/postfull";

const PostPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background2">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 px-5 pr-10 mt-5">
          <div className="grid grid-cols-1 gap-4 w-full">
            <div className="space-y-5">
              <PostFull/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

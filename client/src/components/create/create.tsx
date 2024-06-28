import React from "react";
import { FaPhotoVideo, FaVideo, FaStream, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import ProfilePic from "./01.jpg"; // replace with the path to your profile picture

const CreatePost: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-gradient-to-br from-white to-background rounded-lg shadow-xl">
      <div className="flex items-center gap-3">
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="flex-1 p-2 bg-lightest text-primaryDark rounded-lg focus:ring-primary focus:border-primary border border-accent3 placeholder-secondaryDark"
        />
      </div>
      <div className="flex justify-center mt-3 space-x-8">
        <button className="flex items-center gap-2 px-4 py-2 bg-accent2 text-white rounded-full hover:bg-accent1 focus:outline-none">
          <FaPhotoVideo className="text-light" />
          <span>Photo</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent2 text-white rounded-full hover:bg-accent1 focus:outline-none">
          <FaVideo className="text-light" />
          <span>Video</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent2 text-white rounded-full hover:bg-accent1 focus:outline-none">
          <FaStream className="text-light" />
          <span>Gif</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent2 text-white rounded-full hover:bg-accent1 focus:outline-none">
          <FaCheckCircle className="text-light" />
          <span>Post</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

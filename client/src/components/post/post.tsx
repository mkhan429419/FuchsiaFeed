import React from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark, FaUserPlus } from "react-icons/fa";
import Logo from "./01.jpg";
import Banner from "./02.jpg";

interface Profile {
  name: string;
}

interface Props {
  profile: Profile;
}

const Image: React.FC<{ src: string; alt: string; className: string }> = ({
  src,
  alt,
  className,
}) => <img loading="lazy" src={src} alt={alt} className={className} />;

const Header: React.FC<{
  name: string;
  profileImageSrc: string;
}> = ({ name, profileImageSrc }) => (
  <div className="flex items-center justify-between px-4 py-3">
    <div className="flex items-center">
      <Image
        src={profileImageSrc}
        alt="User avatar"
        className="h-8 w-8 rounded-full"
      />
      <div className="ml-3">
        <span className="text-sm font-semibold antialiased block leading-tight">{name}</span>
        <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
      </div>
    </div>
    <button className="flex items-center px-3 py-1 text-light bg-accent2 rounded-lg hover:bg-accent1 focus:outline-none">
      <FaUserPlus />
      <span className="ml-2 text-sm font-semibold text-white">
        Follow
      </span>
    </button>
  </div>
);

const Post: React.FC<Props> = ({ profile }) => {
  return (
    <div className="bg-white border-none rounded-lg max-w-lg mx-auto shadow-xl">
      <Header
        name={profile.name}
        profileImageSrc={Logo}
      />
      <Image
        src={Banner}
        alt="Content"
        className="w-full"
      />
      <div className="flex items-center justify-between mx-4 mt-3 mb-2">
        <div className="flex gap-5">
          <button className="text-gray-700 hover:text-accent1 p-2 focus:outline-none">
            <FaRegHeart size={24} />
          </button>
          <button className="text-gray-700 hover:text-accent1 p-2 focus:outline-none">
            <FaRegComment size={24} />
          </button>
          <button className="text-gray-700 hover:text-accent1 p-2 focus:outline-none">
            <FaRegPaperPlane size={24} />
          </button>
        </div>
        <button className="text-gray-700 hover:text-accent1 p-2 focus:outline-none">
          <FaRegBookmark size={24} />
        </button>
      </div>
      <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
      <div className="px-4 pb-4">
        <div className="font-semibold text-sm">mkhan666</div>
        <div className="text-sm text-dark mt-1">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </div>
        <a href="#" className="mt-2 text-sm font-medium text-primary hover:underline block">Read more</a>
      </div>
    </div>
  );
};

export default Post;

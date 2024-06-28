import React from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

const PostFull = () => {
  return (
    <div className="bg-white overflow-hidden shadow-xl rounded-lg">
      <div className="grid grid-cols-3 min-w-full">
        <div className="col-span-2 w-full">
          <img
            className="w-full max-w-full min-w-full"
            src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Description"
          />
        </div>
        <div className="col-span-1 relative pl-4">
          <header className="border-b border-grey-400">
            <a
              href="#"
              className="block cursor-pointer py-4 flex items-center text-sm outline-none focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                className="h-9 w-9 rounded-full object-cover"
                alt="user"
              />
              <p className="block ml-2 font-bold">Paul:</p>
              <span className="text-gray-700 font-medium ml-1">
                A pretty shot captured from this morning!
              </span>
            </a>
          </header>
          <div>
            <div className="pt-1">
              <div className="text-sm mb-2 flex flex-start items-center">
                <div>
                  <a
                    href="#"
                    className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt="user"
                    />
                  </a>
                </div>
                <p className="font-bold ml-2">
                  <a className="cursor-pointer">Joshua:</a>
                  <span className="text-gray-700 font-medium ml-1">
                    Good post
                  </span>
                </p>
              </div>
            </div>
            <div className="text-sm mb-2 flex flex-start items-center">
              <div>
                <a
                  href="#"
                  className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://images.pexels.com/photos/3861456/pexels-photo-3861456.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="user"
                  />
                </a>
              </div>
              <p className="font-bold ml-2">
                <a className="cursor-pointer">Kesha:</a>
                <span className="text-gray-700 font-medium ml-1">
                  This is amazing
                </span>
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pl-4">
            <div className="pt-4">
              <div className="mb-2 flex justify-between">
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center cursor-pointer">
                    <FaRegHeart className="text-gray-700 inline-block hover:text-primary h-7 w-7" />
                  </span>
                  <span className="mr-3 inline-flex items-center cursor-pointer">
                    <FaRegComment className="text-gray-700 inline-block hover:text-primary h-7 w-7" />
                  </span>
                  <span className="mr-3 inline-flex items-center cursor-pointer">
                    <FaRegPaperPlane className="text-gray-700 inline-block hover:text-primary h-7 w-7" />
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center cursor-pointer">
                    <FaRegBookmark className="text-gray-700 inline-block hover:text-primary h-7 w-7" />
                  </span>
                </div>
              </div>
              <span className="text-gray-600 text-sm font-bold">
                2344 Likes
              </span>
              <span className="block ml-2 text-xs text-gray-600">
                5 minutes
              </span>
            </div>
            <div className="pt-4 pb-1 pr-3">
              <div className="flex items-start">
                <textarea
                  className="w-full resize-none outline-none appearance-none border-none focus:ring-0 bg-transparent"
                  aria-label="Add a comment..."
                  placeholder="Add a comment..."
                  autoComplete="off"
                  autoCorrect="off"
                  style={{ height: "36px", overflow: "hidden" }}
                ></textarea>
                <button className="mb-2 focus:outline-none border-none bg-transparent text-primary">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFull;

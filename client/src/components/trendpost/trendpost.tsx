import React from "react";
import Logo from "./01.jpg";

const TrendingPost = () => {
  return (
    <div className="w-full max-w-md p-4 bg-gradient-to-br from-white to-background rounded-lg shadow-xl sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-dark">Trending Posts</h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-accent3">
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={Logo} alt="Minions" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary truncate">mkhan678</p>
                <p className="text-sm text- truncate">Pretty shot captured today!</p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={Logo} alt="SeninBarokah" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary truncate">mkhan678</p>
                <p className="text-sm text- truncate">Pretty shot captured today!</p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={Logo} alt="Texos" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary truncate">mkhan678</p>
                <p className="text-sm text- truncate">Pretty shot captured today!</p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={Logo} alt="MUFC" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary truncate">mkhan678</p>
                <p className="text-sm text- truncate">Pretty shot captured today!</p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={Logo} alt="Rangnick" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary truncate">mkhan678</p>
                <p className="text-sm text- truncate">Pretty shot captured today!</p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-12 h-12 rounded-full" src={Logo} alt="ThxOle" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary truncate">mkhan678</p>
                <p className="text-sm text- truncate">Pretty shot captured today!</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-3">
        <a href="#" className="text-sm font-medium text-primary hover:underline">Show More</a>
      </div>
    </div>
  );
};

export default TrendingPost;

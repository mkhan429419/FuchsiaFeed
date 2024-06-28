import React from "react";

const FriendList = () => {
  return (
    <div className="w-full max-w-full p-4 bg-gradient-to-br from-white to-background rounded-lg shadow-xl sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-dark">
          Latest Followers
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-accent3">
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-primary truncate">
                  Neil Sims
                </p>
                <p className="text-sm text-dark truncate">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-primary">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-primary truncate">
                  Bonnie Green
                </p>
                <p className="text-sm text-dark truncate">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-primary">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-2.jpg"
                  alt="Michael image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-primary truncate">
                  Michael Gough
                </p>
                <p className="text-sm text-dark truncate">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-primary">
                $67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-4.jpg"
                  alt="Lana image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-primary truncate">
                  Lana Byrd
                </p>
                <p className="text-sm text-dark truncate">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-primary">
                $367
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt="Thomas image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-primary truncate">
                  Thomas Lean
                </p>
                <p className="text-sm text-dark truncate">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-primary">
                $2367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FriendList;

import React from "react";

const Profile = () => {
  return (
    <>
      <div className="relative max-w-full mx-auto mt-6 min-w-0 break-words bg-gradient-to-br from-white to-background w-full mb-6 rounded-lg shadow-xl sm:p-8">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                    3,360
                  </span>
                  <span className="text-sm text-accent3">Posts</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                    2,454
                  </span>
                  <span className="text-sm text-accent3">Followers</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                    564
                  </span>
                  <span className="text-sm text-accent3">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-dark font-bold leading-normal mb-1">
              Mike Thompson
            </h3>
            <div className="text-xs mt-0 mb-2 text-info font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-accent2 opacity-75"></i>
              Paris, France
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-accent3 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-dark mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

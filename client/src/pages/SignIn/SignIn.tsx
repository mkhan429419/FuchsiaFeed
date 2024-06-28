import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import logo from "./2.png";

const SignIn = () => {
  return (
    <section className="bg-pinkLight h-screen flex">
      <div className="flex flex-col justify-center items-center p-8 w-1/2 bg-pinkLight text-white">
        <img
          src={logo}
          alt="Flowbite logo"
          className="max-w-full h-auto mb-auto mt-auto"
        />
        <div className="flex mt-auto space-x-4"></div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white w-1/2 p-8 rounded-lg shadow-md">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Welcome back
          </h1>
          <div className="flex space-x-4">
            <button className="bg-gray-100 text-gray-900 w-full py-2 rounded-lg flex items-center justify-center space-x-2 border border-gray-300">
              <FaGoogle className="w-5 h-5" />
              <span>Log in with Google</span>
            </button>
            <button className="bg-gray-100 text-gray-900 w-full py-2 rounded-lg flex items-center justify-center space-x-2 border border-gray-300">
              <FaApple className="w-5 h-5" />
              <span>Log in with Apple</span>
            </button>
          </div>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blight hover:bg-bdark focus:ring-4 focus:outline-none focus:ring-light font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in to your account
            </button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                Sign up here
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
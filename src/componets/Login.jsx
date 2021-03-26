import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="md:flex w-full">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-100 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly h-screen">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <img src="https://res.cloudinary.com/desug/image/upload/v1614658900/Book%20/pluginlogo_gnhbmk.png" className="h-10 w-15 " alt="" />
          </div>
          <p className="text-center text-white font-bold text-xl">
            Hello, Pluginers
          </p>
          <p className="flex flex-col items-center justify-center  text-center size text-xl">
            Enter your personal details and start jurney with us
          </p>
          <div className="justify-center">
            <p className="w-full px-3 mb-5 ">
              <a
                className="mx-auto bg-blue-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-full px-10 py-4 font-semibold border-2 border-white-500 "
                href="signUp.html"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        <div className="p-5 bg-white md:flex-1 mt-40">
          <h1 className="font-bold text-3xl text-blue-400 text-center mb-20 ">
            Sign In To Plugin Books
          </h1>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <input
                placeholder="email"
                type="email"
                id="email"
                autofocus
                className="px-4 py-2 transition duration-300 border border-blue-400 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between"></div>
              <input
                placeholder="password"
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-blue-400 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex justify-center">
              <div className="flex mx-3">
                <div className="px-3 mb-5">
                  <div className="justify-center">
                      <Link to="/home">
                      <button className ="mx-auto bg-blue-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-full px-10 py-4 font-semibold border-2 border-white-500 focus:outline-none">        
                    Sign In
                    </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class SignUp extends Component {
    render() {
        return (
            <div className="md:flex w-full bg-blue-500">
            <div className="p-5 bg-blue-500 md:flex-1 mt-40">
              <h1 className="font-bold text-3xl text-white text-center mb-20">
                Sign Up To Plugin Books
              </h1>
              <form action="#" className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <input placeholder="Username" type="text" id="Username" autofocus className="text-white px-4 py-2 transition duration-300 border border-white bg-blue-500 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </div>
                <div className="flex flex-col space-y-1">
                  <input placeholder="Email" type="email" id="email" autofocus className="text-white px-4 py-2 transition duration-300 border border-white bg-blue-500 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between" />
                  <input placeholder="Password" type="password" id="password" className="text-white px-4 py-2 transition duration-300 border border-white bg-blue-500 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <Link to="/home">

                      <button className="block w-full max-w-xs mx-auto bg-white hover:bg-indigo-700 focus:bg-indigo-700 text-blue-500 rounded-full px-3 py-3 font-semibold focus:outline-none">
                        Sign Up
                      </button>
                      </Link>
                    
                  </div>
                </div>
              </form>
            </div>
            <div className="p-4 py-6 text-white bg-white md:w-100 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly h-screen">
              <div className="my-3 text-4xl text-blue-400 font-bold tracking-wider text-center">
                <img src="https://res.cloudinary.com/desug/image/upload/v1614658900/Book%20/pluginlogo_gnhbmk.png" className="h-10 w-15 " alt="" />
              </div>
              <p className="text-center text-blue-400 font-bold text-xl">
                Hello, Pluginers
              </p>
              <p className="flex flex-col items-center justify-center text-blue-400 text-center size text-xl">
                Enter your personal details and start jurney with us
              </p>
              <p className="w-full px-3 mb-5">
                <Link to="/login">
                  <button className="block w-full max-w-xs mx-auto bg-white hover:bg-indigo-700 focus:bg-indigo-700 text-blue-400 border-white-500 rounded-full px-3 py-3 font-semibold border-2 border-blue-400 focus:outline-none">
                    Sign In
                  </button>
                </Link>
              </p>
            </div>
          </div>
        )
    }
}

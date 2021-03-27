import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
        <header className="text-gray-600 body-font shadow-lg mb-8 fixed top-0 w-full z-10 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <div>
              <div className="bg-white flex items-center rounded-full border border-gray-700">
                <input className="rounded-full w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                <div className="p-2">
                  <a href="./Browser.html" className=" text-gray-700 rounded-full p-2 focus:outline-none w-5 h-5 flex items-center justify-center">
                    <i className="fa fa-search" aria-hidden="true" />
                  </a> 
                </div>
              </div>
            </div>
          </nav>
          
          <p className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
              <Link to="/home">
            <img alt="plugin" src="https://res.cloudinary.com/desug/image/upload/v1614658900/Book%20/pluginlogo_gnhbmk.png" srcSet className="h-12" />
            </Link>
          </p>
       
        
          <p className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link to="/profile">
            <img alt="plugin" src="https://res.cloudinary.com/zada/image/upload/v1614357120/avatar_y6a0zh.png" srcSet className="h-12" />
            </Link>
          </p>
          
        </div>
      </header>
      );
  }
}

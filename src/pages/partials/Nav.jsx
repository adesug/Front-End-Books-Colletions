import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
        <div className=" flex flex-row items-center p-4 justify-between bg-white  shadow-lg">
          {/* <div class="ml-8 text-lg text-gray-700 hidden md:flex">My Website</div> */}
          <span className="ml-10 w-screen md:w-1/3 h-10  cursor-pointer border border-gray-300 text-sm rounded-full flex">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
            />
            <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4" />
          </span>
            <Link to="/home">
                <span className="mr-96">
                <img src="https://res.cloudinary.com/desug/image/upload/v1614658900/Book%20/pluginlogo_gnhbmk.png" className="w-10 h-8" alt="" />
                </span>
            </Link>
          
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars" />
          </div>
          <div className="flex flex-row-reverse mr-8 hidden md:flex">
            {/* <div class="bg-white px-4 py-2 m-2" style="background-image: none;">
                    <img src="assets/hmtl.jpg" class="rounded-full h-5 w-5 flex items-center justify-center" alt="">
                </div> */}
            <a href="profil.html">
              <img
                src="assets/Circled User Male Skin Type 7.png"
                className="h-3 h-5"
                alt=""
              />
            </a>
          </div>
        </div>
    );
  }
}

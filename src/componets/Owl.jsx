import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default class Owl extends Component {
  render() {
      return (
    <div className="mt-28">
      <OwlCarousel
      className="owl-theme"
      items="3"
      autoPlay
      dots
      margin={10}
      >
        <div className="flex justify-center flex-row flex-nowrap mt-2 ml-2">
        <div className="section bg-image overflow-hidden text-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-90 rounded-lg mx-2 shadow-xl">
          <div className="grid md:grid-cols-2 w-3/4">
              <Link to="/bookdesc">
            <img className="icon m-5 rounded-lg" src="https://res.cloudinary.com/desug/image/upload/v1614658866/Book%20/book7_w6pasz.jpg" alt="plugin" />
                </Link>
            <div className="pt-4 pl-4">
              <div className="text px-2">
                <div className="text-2xl font-semibold">At The Going Down of the Sun</div>
                <p className="text-grey-darker text-base">Marius Oelsching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row flex-nowrap mt-2 ml-2">
        <div className="section bg-image overflow-hidden text-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-90 rounded-lg mx-2 shadow-xl">
          <div className="grid md:grid-cols-2 w-3/4">
            <img className="icon m-5 rounded-lg" src="https://res.cloudinary.com/desug/image/upload/v1614658866/Book%20/book7_w6pasz.jpg" alt="plugin" />
            <div className="pt-4 pl-4">
              <div className="text px-2">
                <div className="text-2xl font-semibold">At The Going Down of the Sun</div>
                <p className="text-grey-darker text-base">Marius Oelsching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row flex-nowrap mt-2 ml-2">
        <div className="section bg-image overflow-hidden text-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-90 rounded-lg mx-2 shadow-xl">
          <div className="grid md:grid-cols-2 w-3/4">
            <img className="icon m-5 rounded-lg" src="https://res.cloudinary.com/desug/image/upload/v1614658866/Book%20/book7_w6pasz.jpg" alt="" />
            <div className="pt-4 pl-4">
              <div className="text px-2">
                <div className="text-2xl font-semibold">At The Going Down of the Sun</div>
                <p className="text-grey-darker text-base">Marius Oelsching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row flex-nowrap mt-2 ml-2">
        <div className="section bg-image overflow-hidden text-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-90 rounded-lg mx-2 shadow-xl">
          <div className="grid md:grid-cols-2 w-3/4">
            <img className="icon m-5 rounded-lg" src="https://res.cloudinary.com/desug/image/upload/v1614658866/Book%20/book7_w6pasz.jpg" alt="" />
            <div className="pt-4 pl-4">
              <div className="text px-2">
                <div className="text-2xl font-semibold">At The Going Down of the Sun</div>
                <p className="text-grey-darker text-base">Marius Oelsching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </OwlCarousel>
      </div>
    );
  }
}

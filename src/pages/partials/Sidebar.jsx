import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="w-3/12 bg-white rounded p-3 ">
                <ul className="space-y-2 text-sm">
                    <li
                        className={
                            (window.location.pathname === "/profile"
                                ? "text-white bg-blue-500"
                                : "text-blue-500") +
                            " mb-2 px-5 py-3 font-extrabold border-gray-300 rounded-full"
                        }
                    >
                        {" "}
                        <div className="flex items-center px-2 ">
                            <span>
                                <img className="w-1/2"
                                    src="https://res.cloudinary.com/desug/image/upload/v1617333897/Book%20/Group_52_nrwiwh.png"
                                    alt=""
                                />
                            </span>
                            <Link to="/profile">
                                <span >Profil</span>
                            </Link>
                        </div>
                    </li>
                    <li
                        className={
                            (window.location.pathname === "/books"
                                ? "text-white bg-blue-500"
                                : "text-blue-500") +
                            " mb-2 px-5 py-3 font-extrabold border-gray-300 rounded-full "
                        }
                    >
                        <div className="flex items-center px-2 ">
                        <span>
                        <img className="w-1/2"
                                    src="https://res.cloudinary.com/desug/image/upload/v1617333898/Book%20/Group_53_ndc5gu.png"
                                    alt=""
                                />
                        </span>
                            <Link to="/books">
                                <span >Books</span>
                            </Link>
                        </div>
                        
                    </li>
                    <li
                        className={
                            (window.location.pathname === "/outofdate"
                                ? "text-white bg-blue-500"
                                : "text-blue-500") +
                            " mb-2 px-5 py-3 font-extrabold border-gray-300 rounded-full "
                        }
                    >
                        <div className="flex items-center px-2 ">
                        <span>
                        <img className="w-1/2"
                                    src="https://res.cloudinary.com/desug/image/upload/v1617333899/Book%20/Group_54_b3zudr.png"
                                    alt=""
                                />
                        </span>
                        <Link to="/outofdate">
                            <span >Out Of Date</span>
                        </Link>

                        </div>
                       
                    </li>
                    <li
                        className={
                            (window.location.pathname === "/waitingBorrow"
                                ? "text-white bg-blue-500"
                                : "text-blue-500") +
                            " mb-2 px-5 py-3 font-extrabold border-gray-300 rounded-full "
                        }
                    >
                        <div className="flex items-center px-2 ">
                        <span>
                        <img className="w-1/2"
                                    src="https://res.cloudinary.com/desug/image/upload/v1617333902/Book%20/Group_54_1_xkrlwi.png"
                                    alt=""
                                />
                        </span>
                        <Link to="/waitingBorrow">
                            <span >Waiting Borrow</span>
                        </Link>

                        </div>
                       
                    </li>
                    <li
                        className={
                            (window.location.pathname === "/waiting"
                                ? "text-white bg-blue-500"
                                : "text-blue-500") +
                            " mb-2 px-5 py-3 font-extrabold border-gray-300 rounded-full "
                        }
                    >
                        <div className="flex items-center px-2 ">
                        <span>
                        <img className="w-1/2"
                                    src="https://res.cloudinary.com/desug/image/upload/v1617333902/Book%20/Group_54_2_ibjimt.png"
                                    alt=""
                                />
                        </span>
                        <Link to="/waiting">
                            <span >Waiting</span>
                        </Link>

                        </div>
                        
                    </li>
                </ul>
            </div>
        );
    }
}

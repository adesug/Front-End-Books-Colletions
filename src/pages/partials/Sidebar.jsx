import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Sidebar extends Component {
    render() {
        return (
            <div className="w-3/12 bg-white rounded p-3 ">
                <ul className="space-y-2 text-sm">
                <li className={(window.location.pathname === '/profile' ? 'text-white bg-blue-500' : 'text-blue-500') +" mb-2 px-5 py-5 font-extrabold border-gray-300 rounded rounded-full "}>
                        <span>
                            <i className="far fa-user-circle" />
                        </span> 
                        <Link to="/profile">
                        
                            <span className="ml-2">Profil</span>
                        
                        </Link>
                    </li>
                    <li className={(window.location.pathname === '/books' ? 'text-white bg-blue-500' : 'text-blue-500') +" mb-2 px-5 py-5 font-extrabold border-gray-300 rounded rounded-full "}>
                        <span>
                            <i className="fas fa-book" />
                        </span>
                        <Link to= "/books">
                            <span className="ml-2">Books</span>
                        </Link>
                    </li>
                    <li className={(window.location.pathname === '/outofdate' ? 'text-white bg-blue-500' : 'text-blue-500') +" mb-2 px-5 py-5 font-extrabold border-gray-300 rounded rounded-full "}>

                        <span>
                            <i className="far fa-clock" />
                        </span>
                        <Link to = "/outofdate">
                            <span className="ml-2">Out Of Date</span>
                        </Link>    
                        
                    </li>
                    <li className={(window.location.pathname === '/waitingBorrow' ? 'text-white bg-blue-500' : 'text-blue-500') +" mb-2 px-5 py-5 font-extrabold border-gray-300 rounded rounded-full "}>
                        <span>
                            <i className="fas fa-hourglass-half" />
                        </span>
                       <Link to = "/waitingBorrow">
                            <span className="ml-2">Waiting Borrow</span>
                        </Link>
                    </li>
                    <li className={(window.location.pathname === '/waiting' ? 'text-white bg-blue-500' : 'text-blue-500') +" mb-2 px-5 py-5 font-extrabold border-gray-300 rounded rounded-full "}>
                        <span>
                            <i className="fas fa-check" />
                        </span>
                        <Link to="/waiting">
                            <span className="ml-2">Waiting</span>
                            </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

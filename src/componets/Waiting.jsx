import React, { Component } from 'react';
import  {Link}  from "react-router-dom";

export default class Waiting extends Component {
  render() {
    return (
      <div className="w-9/12 bg-white border-l shadow-xl">
                <section className="text-gray-600 body-font overflow-hidde n">
                    <p className="ml-4 font-extrabold mt-5">Your Books</p>
                    <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col ">
                        <div className="container mx-auto ">
                            <div className="flex space-x-4">
                                <div className="flex flex-wrap h-30 w-60 shadow-md bg-white">
                                    <div className="w-1/2">
                                    <img alt ="team"className='bg-left w-20 mt-4 shadow-sm' src="https://res.cloudinary.com/desug/image/upload/v1614658820/Book%20/book4_tlwz3z.png" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-gray-500 font-bold">Jak of the bulvet</p>
                                        <p className="text-gray-500">adesug</p>
                                        <Link to="/waitingdetail">
                                        <div className="flex mb-4 mt-2">
                                            <button className="flex rounded-full text-white bg-blue-400 border py-1 px-4 focus:outline-none hover:bg-gray-300">
                                                Detail
                                            </button>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-wrap h-40 w-60 shadow-md bg-white">
                                    <div className="w-1/2">
                                        <img alt ="team"className='bg-left w-20 mt-4 shadow-sm' src="https://res.cloudinary.com/desug/image/upload/v1614658820/Book%20/book4_tlwz3z.png" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-gray-500 font-bold">Jak of the bulvet</p>
                                        <p className="text-gray-500">adesug</p>
                                        <div className="flex mb-4 mt-2">
                                            <button className="flex rounded-full text-white bg-blue-400 border py-1 px-4 focus:outline-none hover:bg-gray-300">
                                                Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap h-40 w-60 shadow-md bg-white">
                                    <div className="w-1/2">
                                    <img alt ="team"className='bg-left w-20 mt-4 shadow-sm' src="https://res.cloudinary.com/desug/image/upload/v1614658820/Book%20/book4_tlwz3z.png" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-gray-500 font-bold">Jak of the bulvet</p>
                                        <p className="text-gray-500">adesug</p>
                                        <div className="flex mb-4 mt-2">
                                            <button className="flex rounded-full text-white bg-blue-400 border py-1 px-4 focus:outline-none hover:bg-gray-300">
                                                Detail
                      </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto mt-5">
                            <div className="flex space-x-4">
                                <div className="flex flex-wrap h-30 w-60 shadow-md bg-white">
                                    <div className="w-1/2">
                                    <img alt ="team"className='bg-left w-20 mt-4 shadow-sm' src="https://res.cloudinary.com/desug/image/upload/v1614658820/Book%20/book4_tlwz3z.png" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-gray-500 font-bold">Jak of the bulvet</p>
                                        <p className="text-gray-500">adesug</p>
                                        <div className="flex mb-4 mt-2">
                                            <button className="flex rounded-full text-white bg-blue-400 border py-1 px-4 focus:outline-none hover:bg-gray-300">
                                               Detail
                      </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap h-40 w-60 shadow-md bg-white">
                                    <div className="w-1/2">
                                    <img alt ="team"className='bg-left w-20 mt-4 shadow-sm' src="https://res.cloudinary.com/desug/image/upload/v1614658820/Book%20/book4_tlwz3z.png" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-gray-500 font-bold">Jak of the bulvet</p>
                                        <p className="text-gray-500">adesug</p>
                                        <div className="flex mb-4 mt-2">
                                            <button className="flex rounded-full text-white bg-blue-400 border py-1 px-4 focus:outline-none hover:bg-gray-300">
                                                Detail
                      </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap h-40 w-60 shadow-md bg-white">
                                    <div className="w-1/2">
                                    <img alt ="team"className='bg-left w-20 mt-4 shadow-sm' src="https://res.cloudinary.com/desug/image/upload/v1614658820/Book%20/book4_tlwz3z.png" />
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-gray-500 font-bold">Jak of the bulvet</p>
                                        <p className="text-gray-500">adesug</p>
                                        <div className="flex mb-4 mt-2">
                                            <button className="flex rounded-full text-white bg-blue-400 border py-1 px-4 focus:outline-none hover:bg-gray-300">
                                                Detail
                      </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            </div>
    )
  }
}

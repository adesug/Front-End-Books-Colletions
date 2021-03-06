import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (                
                <div className="w-9/12 bg-white border-l shadow-xl">
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                            <img className="lg:w-24 md:w-24 w-24 object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/desug/image/upload/v1616837846/Book%20/Circled_User_Male_Skin_Type_7_mfuhim.png" />
                            <div className="lg:w-4/5 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
                                <div className="relative mb-4">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Username</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="Adesug" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="adesug@plugin.com" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="pass" className="leading-7 text-sm text-gray-600">Password</label>
                                    <input type="password" id="pass" name="password" className="w-full bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue="hahaha" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        )
    }
}

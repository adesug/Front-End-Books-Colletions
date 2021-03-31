import React, { Component } from 'react'

export default class WaitingDetail extends Component {
    render() {
        return (
            <div >

                <section className="text-gray-600 body-font overflow-hidden mt-10">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/3 w-10/12 lg:h-auto h-40 object-cover object-center rounded" src="https://res.cloudinary.com/desug/image/upload/v1613768459/Book%20/hmtl_uhhaxa.jpg" />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-500 text-3xl title-font font-medium mb-1">At The Going Down of the Sun</h1>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">Marius Oelsching</h2>
                                <div className="flex mb-4 mt-2">
                                    <span className="font-semibold">Borrowing Details</span>
                                    </div>
                                <table className="table-auto">
                                    <tbody>
                                        <tr>
                                            <td className="w-28">Name</td>
                                            <td>Ade Sug</td>
                                        </tr>
                                        <tr>
                                            <td className="w-28">Date End</td>
                                            <td>21 March 2021</td>
                                        </tr>
                                        <tr>
                                            <td className="w-28">Note</td>
                                            <td>Lorem ipsum dolor sit amet</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex">

                                    <button className="flex mt-10 rounded-full text-white bg-green-500 border py-2 px-6 focus:outline-none hover:bg-gray-300">Accept</button>

                                    <button className="flex mt-10 ml-6 text-white  py-2 px-6  bg-red-500 focus:outline-none hover:bg-gray-400 rounded-full">Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        )
    }
}

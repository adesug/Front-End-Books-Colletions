import React from 'react'
import NavComponents from './partials/Nav'
import Waitings from '../componets/Waiting'
import Sidebar from './partials/Sidebar'

const Waiting = ()=>{
    return(
        <>
        <NavComponents/>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
        <Sidebar/>
        <Waitings/>
        </div>

        </>
    )
}

export default Waiting
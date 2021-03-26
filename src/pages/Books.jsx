import React from 'react'
import Bookss from '../componets/Books'
import NavComponents from './partials/Nav'
import Sidabars from './partials/Sidebar'


const Books = ()=>{
    return(
        <>
        <NavComponents/>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
        <Sidabars/>
        <Bookss/>
 
        </div>
        </>

    )
}

export default Books
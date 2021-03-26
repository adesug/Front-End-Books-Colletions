import React from 'react'
import NavComponents from './partials/Nav'
import SideBars from './partials/Sidebar'
import Outofdatecomponet from "../componets/Outofdatecomponet";

const Outofdate =() => {
    return(
        <>
        <NavComponents/>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-10">
        <SideBars/>
        <Outofdatecomponet/>
        </div>
        </>
    )
}
export default Outofdate

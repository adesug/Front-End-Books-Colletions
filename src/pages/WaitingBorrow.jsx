import React from 'react'
import NavComponents from './partials/Nav'
import SideBars from './partials/Sidebar'
import WaitingBorrows from '../componets/WaitBorrow'

const WaitingBorrow = ()=>{
    return(
        <>
        <NavComponents/>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
        <SideBars/>
        <WaitingBorrows/>
        </div>
        </>
    )
}

export default WaitingBorrow
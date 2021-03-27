import React from 'react'
import NavComponents from './partials/Nav'
import UploadBook from '../componets/UploadBooks'
import SideBars from './partials/Sidebar'

const UploadBooks = ()=>{
    return(
        <>
        <NavComponents/>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
        <SideBars/>
        <UploadBook/>
        </div>
        </>
    )
}

export default UploadBooks
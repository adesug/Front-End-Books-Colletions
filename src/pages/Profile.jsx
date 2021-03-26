import React from 'react'
import NavComponents from './partials/Nav'
import SideBars from './partials/Sidebar'
import Profils from '../componets/Profile'

const Profile = ()=>{
    return(
        <>
        <NavComponents/>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-10">
        <SideBars/>
        <Profils/>
        </div>
        
        </>
    )
}

export default Profile
import React from 'react'
import NavNologComponents from './partials/NavNolog';
import OwlNologs from '../components2/OwlNolog'
import Browser from '../components2/BrowserNolog';
const HomeNolog = () => {
    return (
        <>
        <NavNologComponents/>
        <OwlNologs/>
        <Browser/>
        </>
    )
}

export default HomeNolog
import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import SideBar from './Component/Sidebar/SideBar'
// import Layout from './Component/Pages/Layout/Layout'
import Page1Container from './Component/Pages/Page1/Page1Container'
import Page2Container from './Component/Pages/Pages2/Page2Container';
export default function App() {
    return (
        <div style={{display:'flex'}}>
            <SideBar />
            <div className="wrapper" style={{width:'100%'}}>
                <Header />
                {/* <Page1Container/> */}
                <Page2Container/>
            </div>
        </div>
    )
}

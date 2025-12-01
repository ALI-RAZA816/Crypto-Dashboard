import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import SideBar from './Component/Sidebar/SideBar'
import Layout from './Component/Pages/Layout/Layout'
export default function App() {
    return (
        <div style={{display:'flex'}}>
            <SideBar />
            <div className="wrapper" style={{width:'100%'}}>
                <Header />
                <Layout/>
            </div>
        </div>
    )
}

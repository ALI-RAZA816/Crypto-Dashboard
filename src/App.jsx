import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import SideBar from './Component/Sidebar/SideBar'
export default function App() {
    return (
        <div style={{display:'flex'}}>
            <SideBar />
            <div className="wrapper" style={{width:'100%'}}>
                <Header />
            </div>
        </div>
    )
}

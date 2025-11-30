import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import SideBar from './Component/Sidebar/SideBar'
export default function App() {
    return (
        <div style={{display:'flex'}}>
            <div className="left">
            <SideBar />
            </div>
            <div className="right">
            <Header />
            </div>
        </div>
    )
}

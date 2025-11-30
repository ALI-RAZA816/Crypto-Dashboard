import React from 'react'
import style from '../Sidebar/SideBar.module.css';
import { RiDashboardFill } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaAt } from "react-icons/fa";



export default function SideBar() {
  return (
    <div>
      <div className={style.mainContainer}>
        <h1><FaAt /> Dosomecoding</h1>
        <ul>
            <li><a href="/"><RiDashboardFill /> Dashboard</a></li>
            <li><a href="/"><LuArrowLeftRight /> Transactions</a></li>
        </ul>
      </div>
    </div>
  )
}

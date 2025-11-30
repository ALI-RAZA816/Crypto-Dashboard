import React from 'react'
import style from '../Sidebar/SideBar.module.css';
import { RiDashboardFill } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaAt } from "react-icons/fa";



export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <div className={style.mainContainer}>
        <div>
        <h1><FaAt /> Dosomecoding</h1>
        </div>
        <ul className={style.sideLinks}>
            <li><a href="/"><RiDashboardFill style={{fontSize:'1rem',marginRight:'.4rem'}} /> Dashboard</a></li>
            <li><a href="/"><LuArrowLeftRight style={{fontSize:'1rem',marginRight:'.4rem'}} /> Transactions</a></li>
        </ul>
      </div>
    </div>
  )
}

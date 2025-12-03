import React from 'react'
import style from '../Header/Header.module.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

export default function Header({sidebarHandler}) {
  return (
    <header className={style.header}>
      <FaBars onClick={sidebarHandler} className={style.bars}/>
        <div className={style.container}>
            <h1>Dashboard</h1>
            <FaRegCircleUser className={style.userIcon} />
        </div>
    </header>
  )
}

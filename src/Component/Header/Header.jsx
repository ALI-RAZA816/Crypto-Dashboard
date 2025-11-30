import React from 'react'
import style from '../Header/Header.module.css';
import { FaRegCircleUser } from "react-icons/fa6";
export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.container}>
            <h1>Dashboard</h1>
            <FaRegCircleUser className={style.userIcon} />
        </div>
    </header>
  )
}

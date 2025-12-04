import React from 'react'
import style from '../Header/Header.module.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header({ sidebarHandler, login, userAuthHandler }) {
  const location = useLocation();
  return (
    <header className={style.header}>
      <FaBars onClick={sidebarHandler} className={style.bars} />
      <div className={style.container}>
        <h1>{location.pathname === '/' && 'Dashboard' || location.pathname === '/transactions' && 'Transactions' || location.pathname === '/support' && "Support"}</h1>
        <FaRegCircleUser onClick={userAuthHandler} className={style.userIcon} />
        <div className={`${style.authentication} ${login === true && style.showAuth}`}>
          <button>Login</button>
          <button>Logout</button>
        </div>
      </div>
    </header>
  )
}

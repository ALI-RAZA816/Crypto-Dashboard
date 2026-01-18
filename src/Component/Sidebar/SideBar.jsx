
import style from '../Sidebar/Sidebar.module.css';
import { RiDashboardFill } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaAt } from "react-icons/fa";
import { PiHeadphonesFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import {
    Link
} from "react-router-dom";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export default function SideBar({showSidebar, hidesidebarHandler}) {
  const location = useLocation();
  return (
    <div className={`${style.sidebar} ${showSidebar === true && `${style.showsidebar}`}`}>
      <div className={style.mainContainer}>
      <RxCross2 className={style.crossIcon} onClick={hidesidebarHandler}/>
        <div>
          <h1><FaAt /> Dosomecoding</h1>
        </div>
        <ul className={style.sideLinks}>
          <li><Link className = {location.pathname === '/' && style.activeClass} to="/"><RiDashboardFill style={{ fontSize: '1rem', marginRight: '.4rem' }} /> Dashboard</Link></li>
          <li><Link className = {location.pathname === '/transactions' && style.activeClass} to="/transactions"><LuArrowLeftRight style={{ fontSize: '1rem', marginRight: '.4rem' }} /> Transactions</Link></li>
        </ul>
      </div>
      <p><PiHeadphonesFill style={{ marginRight: '.5rem' }} /><Link className = {location.pathname === '/transactions' && style.activeClass} to="/support">Support</Link></p>
    </div>
  )
}

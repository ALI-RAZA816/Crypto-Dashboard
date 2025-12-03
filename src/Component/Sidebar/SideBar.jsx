
import style from '../Sidebar/SideBar.module.css';
import { RiDashboardFill } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaAt } from "react-icons/fa";
import { PiHeadphonesFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import {
    Link
} from "react-router-dom";

export default function SideBar({showSidebar, hidesidebarHandler}) {

  return (
    <div className={`${style.sidebar} ${showSidebar === true && `${style.showsidebar}`}`}>
      <div className={style.mainContainer}>
      <RxCross2 onClick={hidesidebarHandler} style={{position:'absolute',top:'15px',right:'15px',fontSize:'23px',cursor:'pointer'}} />
        <div>
          <h1><FaAt /> Dosomecoding</h1>
        </div>
        <ul className={style.sideLinks}>
          <li><Link to="/"><RiDashboardFill style={{ fontSize: '1rem', marginRight: '.4rem' }} /> Dashboard</Link></li>
          <li><Link to="/transactions"><LuArrowLeftRight style={{ fontSize: '1rem', marginRight: '.4rem' }} /> Transactions</Link></li>
        </ul>
      </div>
      <p><PiHeadphonesFill style={{ marginRight: '.5rem' }} /><Link to="/support">Support</Link></p>
    </div>
  )
}

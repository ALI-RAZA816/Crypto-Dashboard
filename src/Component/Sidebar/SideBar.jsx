
import style from '../Sidebar/SideBar.module.css';
import { RiDashboardFill } from "react-icons/ri";
import { LuArrowLeftRight } from "react-icons/lu";
import { FaAt } from "react-icons/fa";
import { PiHeadphonesFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export default function SideBar({showSidebar, hidesidebarHandler}) {

  return (
    <div className={`${style.sidebar} ${showSidebar === true && `${style.showsidebar}`}`}>
      <div className={style.mainContainer}>
      <RxCross2 onClick={hidesidebarHandler} style={{position:'absolute',top:'15px',right:'15px',fontSize:'23px',cursor:'pointer'}} />
        <div>
          <h1><FaAt /> Dosomecoding</h1>
        </div>
        <ul className={style.sideLinks}>
          <li><a href="/"><RiDashboardFill style={{ fontSize: '1rem', marginRight: '.4rem' }} /> Dashboard</a></li>
          <li><a href="/"><LuArrowLeftRight style={{ fontSize: '1rem', marginRight: '.4rem' }} /> Transactions</a></li>
        </ul>
      </div>
      <p><PiHeadphonesFill style={{ marginRight: '.5rem' }} />Support</p>
    </div>
  )
}

import style from '../Page2/TopHeader.module.css';
import { IoSearch } from "react-icons/io5";

export default function TopHeader() {
    return (
        <div className={style.topHeader}>
            <div className={style.links}>
                <ul>
                    <li>All <span>349</span></li>
                    <li>Deposit <span>114</span></li>
                    <li>Withdraw <span>213</span></li>
                    <li>Trade <span>22</span></li>
                </ul>
            </div>
            <div className={style.inputField}>
                <IoSearch />
                <input type="text" placeholder='Search by ID or destination' />
            </div>
        </div>
    )
}

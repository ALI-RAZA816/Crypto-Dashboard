import style from '../Pages2/SecondHeader.module.css';
import { FaCaretDown } from "react-icons/fa";

export default function SecondHeader() {
    return (
        <div className="secondHeader">
            <div className={style.tabs}>
                <ul>
                    <li>ID</li>
                    <li>Date & Time <FaCaretDown style={{ marginLeft: '.3rem' }} /></li>
                    <li>Type</li>
                    <li>Amount <FaCaretDown style={{ marginLeft: '.3rem' }} /></li>
                    <li>Status</li>
                </ul>
            </div>
        </div>
    )
}

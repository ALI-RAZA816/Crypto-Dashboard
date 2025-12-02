import style from '../Pages2/Page2Container.module.css';
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";



export default function Page2Container() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <button><FiDownload /> Export CSV</button>
                <div className={style.transactionBox}>
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
                    <div className="secondHeader">
                        <div className={style.tabs}>
                            <ul>
                                <li>ID</li>
                                <li>Date & Time <FaCaretDown style={{marginLeft:'.3rem'}} /></li>
                                <li>Type</li>
                                <li>Amount <FaCaretDown style={{marginLeft:'.3rem'}} /></li>
                                <li>Status</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.transactions}>
                        <div className={style.historyBox}>
                            <span>HD82NA2H</span>
                            <div>
                                <span>2022-06-09</span>
                                <span>07:06 PM</span>
                            </div>
                            <div>
                                <span>INR Deposit</span>
                                <span>E-transfer</span>
                            </div>
                            <div>
                                <span>+<MdCurrencyRupee /> 81,123.10</span>
                            </div>
                            <div>
                                <button>Pending</button>
                            </div>
                        </div>
                        <div className={style.historyBox}>
                            <span>HD82NA2H</span>
                            <div>
                                <span>2022-06-09</span>
                                <span>07:06 PM</span>
                            </div>
                            <div>
                                <span>INR Deposit</span>
                                <span>E-transfer</span>
                            </div>
                            <div>
                                <span>+<MdCurrencyRupee /> 81,123.10</span>
                            </div>
                            <div>
                                <button style={{backgroundColor:'#F5A50B'}}>Processing</button>
                            </div>
                        </div>
                        <div className={style.historyBox}>
                            <span>HD82NA2H</span>
                            <div>
                                <span>2022-06-09</span>
                                <span>07:06 PM</span>
                            </div>
                            <div>
                                <span>INR Deposit</span>
                                <span>E-transfer</span>
                            </div>
                            <div>
                                <span>+<MdCurrencyRupee /> 81,123.10</span>
                            </div>
                            <div>
                                <button style={{backgroundColor:'#DC2626'}}>Cancelled</button>
                            </div>
                        </div>
                        <div className={style.historyBox}>
                            <span>HD82NA2H</span>
                            <div>
                                <span>2022-06-09</span>
                                <span>07:06 PM</span>
                            </div>
                            <div>
                                <span>INR Deposit</span>
                                <span>E-transfer</span>
                            </div>
                            <div>
                                <span>+<MdCurrencyRupee /> 81,123.10</span>
                            </div>
                            <div>
                                <button style={{backgroundColor:'#059669'}}>Completed</button>
                            </div>
                        </div>
                        <div className={style.historyBox}>
                            <span>HD82NA2H</span>
                            <div>
                                <span>2022-06-09</span>
                                <span>07:06 PM</span>
                            </div>
                            <div>
                                <span>INR Deposit</span>
                                <span>E-transfer</span>
                            </div>
                            <div>
                                <span>+<MdCurrencyRupee /> 81,123.10</span>
                            </div>
                            <div>
                                <button style={{backgroundColor:'#059669'}}>Completed</button>
                            </div>
                        </div>
                        <div className={style.historyBox}>
                            <span>HD82NA2H</span>
                            <div>
                                <span>2022-06-09</span>
                                <span>07:06 PM</span>
                            </div>
                            <div>
                                <span>INR Deposit</span>
                                <span>E-transfer</span>
                            </div>
                            <div>
                                <span>+<MdCurrencyRupee /> 81,123.10</span>
                            </div>
                            <div>
                                <button style={{backgroundColor:'#059669'}}>Completed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

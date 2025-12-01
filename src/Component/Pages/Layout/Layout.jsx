import style from '../Layout/Layout.module.css';
import { FaInfoCircle } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCirclePlusFilled } from "react-icons/tb";
import { FaCircleMinus } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";




export default function Layout() {
    return (
        <div className={style.layout}>
            <div className={style.layoutGrid}>
                <div className={style.topBox}>
                    <div className={style.portfolioValues}>
                        <span>Total Portfolio Values <FaInfoCircle style={{marginLeft:'.3rem'}} /></span>
                        <span><MdCurrencyRupee /> 112,312.24</span>
                    </div>
                    <div className={style.balance}>
                        <div>
                            <span>Wallet Balance</span>
                            <span>22.39401000 <span>BTC</span></span>
                        </div>
                        <div style={{marginLeft:'1rem'}}>
                            <span><MdCurrencyRupee /> 1,300.00 <span>INR</span></span>
                        </div>
                    </div>
                    <div className={style.btns}>
                        <button><LuArrowDownToLine /> Deposit</button>
                        <button><LuArrowUpToLine /> Widthdraw</button>
                    </div>
                </div>
                <div className={style.leftBox}>
                    <div className="currentPrice">
                        <div className="price">
                            <span>Current Price</span>
                            <span><MdCurrencyRupee /> 26,670.25 <p><FiArrowUpRight /> 0.04%</p></span>
                        </div>
                        <div className="btns">
                            <button><TbCirclePlusFilled /> Buy</button>
                            <button><FaCircleMinus /> Sell</button>
                        </div>
                    </div>
                    <div className="graph">
                        <div>
                            <span>1H</span>
                            <span>1D</span>
                            <span>1W</span>
                            <span>1M</span>
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="time">
                        <span>7:15 PM</span>
                        <span>7:15 PM</span>
                        <span>7:15 PM</span>
                        <span>7:15 PM</span>
                        <span>7:15 PM</span>
                    </div>
                </div>
                <div className="rightBox">
                    <span>Recent Transactions</span>
                    <div className="history">
                        <div className='box box1'>
                            <div className='text'>
                                <div>
                                    <HiCurrencyDollar />
                                </div>
                                <div>
                                    <span>INR Deposit</span>
                                    <span>2022-06-06 7:06 PM</span>
                                </div>
                            </div>
                            <div className="amount">
                                <span>+<MdCurrencyRupee />81,123.10</span>
                            </div>
                        </div>
                        <div className='box box2'>
                            <div className='text'>
                                <div>
                                    <HiCurrencyDollar />
                                </div>
                                <div>
                                    <span>INR Deposit</span>
                                    <span>2022-06-06 7:06 PM</span>
                                </div>
                            </div>
                            <div className="amount">
                                <span>+<MdCurrencyRupee />81,123.10</span>
                            </div>
                        </div>
                        <div className='box box3'>
                            <div className='text'>
                                <div>
                                    <HiCurrencyDollar />
                                </div>
                                <div>
                                    <span>INR Deposit</span>
                                    <span>2022-06-06 7:06 PM</span>
                                </div>
                            </div>
                            <div className="amount">
                                <span>+<MdCurrencyRupee />81,123.10</span>
                            </div>
                        </div>
                    </div>
                    <button>View All</button>
                </div>
                <div className="bottomleft">
                    <span>Loans</span>
                    <p>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p>
                </div>
                <div className="bottomright">
                    <span>Contact</span>
                    <p>Learn more about our real estate, mortgage, and  corporate account services</p>
                </div>
            </div>
        </div>
    )
}

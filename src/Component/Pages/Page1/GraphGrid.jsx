import style from '../Page1/GraphGrid.module.css';
import { MdCurrencyRupee } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCirclePlusFilled } from "react-icons/tb";
import { FaCircleMinus } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

export default function GraphGrid() {
    return (
        <>
            <div className={style.leftBox}>
                <div className={style.graphContainer}>
                    <div className={style.price}>
                        <span>Current Price</span>
                        <span><MdCurrencyRupee /> 26,670.25 <span><FiArrowUpRight /> 0.04%</span></span>
                    </div>
                    <div className={style.btns}>
                        <button style={{ marginRight: '1rem' }}><TbCirclePlusFilled style={{ fontSize: '15px', marginRight: '.2rem' }} /> Buy</button>
                        <button><FaCircleMinus style={{ fontSize: '15px', marginRight: '.2rem' }} /> Sell</button>
                    </div>
                </div>
                <div className={style.graph}>
                    <div>
                        <div className={style.tabs}>
                            <span>1H</span>
                            <span>1D</span>
                            <span>1W</span>
                            <span>1M</span>
                        </div>
                    </div>
                    <div className={style.graphImg}>
                        <img src="/images/Vector 27.png" alt="" />
                    </div>
                </div>
                <div className={style.time}>
                    <span>7:15 PM</span>
                    <span>7:15 PM</span>
                    <span>7:15 PM</span>
                    <span>7:15 PM</span>
                    <span>7:15 PM</span>
                </div>
            </div>
            <div className={style.rightBox}>
                <span>Recent Transactions</span>
                <div className="history">
                    <div className={`${style.box} ${style.box1}`}>
                        <div className={style.text}>
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
                    <div className={`${style.box} ${style.box2}`}>
                        <div className={style.text}>
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
                    <div className={`${style.box} ${style.box3}`}>
                        <div className={style.text}>
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
        </>
    )
}

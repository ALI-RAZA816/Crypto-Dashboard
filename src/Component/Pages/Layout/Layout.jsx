import style from '../Layout/Layout.module.css';
import { FaInfoCircle } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCirclePlusFilled } from "react-icons/tb";
import { FaCircleMinus } from "react-icons/fa6";




export default function Layout() {
    return (
        <div className={style.layout}>
            <div className={style.layoutGrid}>
                <div className="topBox">
                    <div className="portfolioValues">
                        <span>Total Portfolio Values <FaInfoCircle /></span>
                        <span><MdCurrencyRupee /> 112,312.24</span>
                    </div>
                    <div className="balance">
                        <div>
                            <span>Wallet Balance</span>
                            <span>22.39401000 <p>BTC</p></span>
                        </div>
                        <div>
                            <span><MdCurrencyRupee /> 1,300.00 <p>INR</p></span>
                        </div>
                    </div>
                    <div className="btns">
                        <button><LuArrowDownToLine /> Deposit</button>
                        <button><LuArrowUpToLine /> Widthdraw</button>
                    </div>
                </div>
                <div className="leftBox">
                    <div className="price">
                        <span>Current Price</span>
                        <span><MdCurrencyRupee /> 26,670.25 <p><FiArrowUpRight /> 0.04%</p></span>
                    </div>
                    <div className="btns">
                        <button><TbCirclePlusFilled /> Buy</button>
                        <button><FaCircleMinus /> Sell</button>
                    </div>
                </div>
                <div className="rightBox"></div>
                <div className="bottomleft"></div>
                <div className="bottomright"></div>
            </div>
        </div>
    )
}

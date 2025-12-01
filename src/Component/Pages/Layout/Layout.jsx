import style from '../Layout/Layout.module.css';
import { FaInfoCircle } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";



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
                <div className="leftBox"></div>
                <div className="rightBox"></div>
                <div className="bottomleft"></div>
                <div className="bottomright"></div>
            </div>
        </div>
    )
}

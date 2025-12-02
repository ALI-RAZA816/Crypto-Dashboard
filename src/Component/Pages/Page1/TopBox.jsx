import style from '../Page1/TopBox.module.css';
import { FaInfoCircle } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

export default function TopBox() {
    return (
        <div className={style.topBox}>
            <div className={style.portfolioValues}>
                <span>Total Portfolio Values <FaInfoCircle style={{ marginLeft: '.3rem' }} /></span>
                <span><MdCurrencyRupee /> 112,312.24</span>
            </div>
            <div className={style.balance}>
                <div>
                    <span>Wallet Balance</span>
                    <span>22.39401000 <span>BTC</span></span>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                    <span><MdCurrencyRupee /> 1,300.00 <span>INR</span></span>
                </div>
            </div>
            <div className={style.btns}>
                <button><LuArrowDownToLine /> Deposit</button>
                <button><LuArrowUpToLine /> Widthdraw</button>
            </div>
        </div>
    )
}

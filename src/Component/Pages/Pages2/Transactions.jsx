import style from '../Pages2/Transactions.module.css';
import { MdCurrencyRupee } from "react-icons/md";

export default function Transactions() {
    return (
        <div className={style.transactions} style={{ padding: '0 1.5rem' }}>
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
                    <button style={{ backgroundColor: '#F5A50B' }}>Processing</button>
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
                    <button style={{ backgroundColor: '#DC2626' }}>Cancelled</button>
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
                    <button style={{ backgroundColor: '#059669' }}>Completed</button>
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
                    <button style={{ backgroundColor: '#059669' }}>Completed</button>
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
                    <button style={{ backgroundColor: '#059669' }}>Completed</button>
                </div>
            </div>
        </div>
    )
}

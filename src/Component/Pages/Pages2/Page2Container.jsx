import style from '../Pages2/Page2Container.module.css';
import { FiDownload } from "react-icons/fi";
import TopHeader from '../Pages2/TopHeader';
import SecondHeader from '../Pages2/SecondHeader';
import Transactions from '../Pages2/Transactions';

export default function Page2Container() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <button><FiDownload /> Export CSV</button>
                <div className={style.transactionBox} style={{padding:'1rem 0'}}>
                    <TopHeader/>
                    <SecondHeader/>
                    <Transactions/>
                </div>
            </div>
        </div>
    )
}

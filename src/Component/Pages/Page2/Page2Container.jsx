import style from '../Page2/Page2Container.module.css';
import { FiDownload } from "react-icons/fi";
import TopHeader from './TopHeader';
import SecondHeader from './SecondHeader';
import Transactions from './Transactions';

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

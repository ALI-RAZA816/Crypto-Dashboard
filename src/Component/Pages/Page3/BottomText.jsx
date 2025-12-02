import { FaMessage } from "react-icons/fa6";
import style from '../Page3/BottomText.module.css'


export default function BottomText() {
    return (
        <>
            <div className={style.leftBox}>
                <FaMessage style={{color:'#5F00D9',fontSize:'30px'}} />
                <h2>Live Chat</h2>
                <p>Don't have limit to wait for the answer? Chat with us now.</p>
            </div>
            <div className={style.rightBox}>
                <span>Chatbot</span>
                <p>Chat with us now</p>
                <img src="/images/Visual.png" alt="" />
            </div>
        </>
    )
}

import { FaMessage } from "react-icons/fa6";


export default function BottomText() {
    return (
        <>
            <div className="leftBox">
                <FaMessage />
                <h2>Live Chat</h2>
                <p>Don't have limit to wait for the answer? Chat with us now.</p>
            </div>
            <div className="rightBox">
                <span>Chatbot</span>
                <p>Chat with us now</p>
            </div>
        </>
    )
}

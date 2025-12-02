import React from 'react'
import { MdEmail } from "react-icons/md";


export default function Contact() {
  return (
    <>
    <div className="contactText">
        <h2><MdEmail /> Contact Us</h2>
        <p>Have a question or just want to know more? Feel free to reach out to us.</p>
    </div> 
    <div className="form">
        <p>You will receive response within 24 hours of time of submit</p>
        <form action="">
            <div className="firstField">
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='James' />
                </div>
                <div className="surname">
                    <label htmlFor="surname">Name</label>
                    <input type="text" id='surname' placeholder='Arthur' />
                </div>
            </div>
            <div className="secondField">
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='name@gmail.com' />
                </div>
            </div>
            <div className="thirdField">
                <div className="message">
                    <label htmlFor="message">Message</label>
                    <input type="text" id='message' placeholder='Your Message'/>
                </div>
                <p>I agree with <a href="/"><span>Terms</span> & <span>Conditions</span></a></p>
            </div>
            <button type='Submit'>Send a Message</button>
            <button type='Submit'>Book a Metting</button>
        </form>
    </div> 
    </>
  )
}

import React from 'react'
import { MdEmail } from "react-icons/md";
import style from '../Page3/Contact.module.css';


export default function Contact() {
  return (
    <>
    <div className={style.contactText}>
        <MdEmail style={{color:'#5F00D9',fontSize:'30px'}} /> 
        <h2>Contact Us</h2>
        <p>Have a question or just want to know more? Feel free to reach out to us.</p>
    </div> 
    <div className={style.form}>
        <p>You will receive response within 24 hours of time of submit</p>
        <form action="">
            <div className={style.firstField}>
                <div className={style.name}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='James' />
                </div>
                <div className={style.surname}>
                    <label htmlFor="surname">Name</label>
                    <input type="text" id='surname' placeholder='Arthur' />
                </div>
            </div>
            <div className={style.secondField}>
                <div className={style.email}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='name@gmail.com' />
                </div>
            </div>
            <div className={style.thirdField}>
                <div className={style.message}>
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id='message' placeholder='Your Message'/>
                </div>
            </div>
            <p>I agree with <a href="/">Terms & Conditions</a></p>
            <button type='Submit'>Send a Message</button>
            <button type='Submit'>Book a Metting</button>
        </form>
    </div> 
    </>
  )
}

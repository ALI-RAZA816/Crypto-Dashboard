import React from 'react';
import style from '../Page3/Page3Container.module.css';
import Contact from './Contact'
import BottomText from './BottomText';

export default function Page3Container() {
  return (
    <div className={style.pageContainer}>
        <div className={style.contentContainer}>
            <Contact/>
            <BottomText/>
        </div>
    </div>
  )
}

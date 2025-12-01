import style from '../Layout/Layout.module.css';

export default function Layout() {
  return (
    <div className={style.layout}>
        <div className={style.layoutGrid}>
            <div className="topBox"></div>
            <div className="leftBox"></div>
            <div className="rightBox"></div>
            <div className="bottomleft"></div>
            <div className="bottomright"></div>
        </div>
    </div>
  )
}

import style from '../Page1/FooterBox.module.css';

export default function FooterBox() {
    return (
        <>
            <div className={style.bottomleft}>
                <span>Loans</span>
                <p>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</p>
            </div>
            <div className={style.bottomright}>
                <img src="/images/Visual.png" alt="" />
                <span>Contact</span>
                <p>Learn more about our real estate, mortgage, and  corporate account services</p>
            </div>
        </>
    )
}

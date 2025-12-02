import style from '../Page1/Page1Container.module.css';
import TopBox from './TopBox';
import GraphGrid from './GraphGrid';
import FooterBox from './FooterBox';
export default function Page1Container() {
    return (
        <div className={style.layout}>
            <div className={style.layoutGrid} >
                <TopBox/>
                <GraphGrid/>
                <FooterBox/>
            </div>
        </div>
    )
}

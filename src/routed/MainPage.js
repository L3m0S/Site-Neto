import Header from "../componnents/Header/Header";
import './MainPage.css';
import imgBandaLarga from '../images/Rectangle 3.svg';
import img1 from '../images/img2BMainPage.svg'

function MainPage() {
    return(
        <>
        <Header></Header>
        <div className='container'>
            <img src={imgBandaLarga} className='imgBandaLarga' alt='Banda Larga Com4'/>
        </div>

        <div className='container2'>        
            <img src={img1}  className="img2"/>
            <a href='/data-center' className="data-centerLink"> data center</a>
            <a href='/banda-larga' className="banda-largaLink"> Banda larga</a>   
        </div>
        </>
    )
}

export default MainPage;
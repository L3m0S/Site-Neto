import Header from "../componnents/Header/Header";
import img1 from '../images/img2.svg'
import img2 from '../images/img2DataCenter.svg'
import './DataCenter.css'

function DataCenter() {
    return(
        <>
        <Header></Header>
        <div className='container'>
            <img  src={img1} className='img1' alt='data-center'/>
        </div>

        <div>
            <img src={img2} className='img2' alt='imagem2'/>
        </div>
        </>
    )
}

export default DataCenter;
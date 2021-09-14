import Header from "../componnents/Header/Header";
import img1 from '../images/img1BandaLarga.svg';
import img2 from '../images/img2BandaLarga.svg';
import './BandaLarga.css';

function BandaLarga() {
    return(
        <>
        <Header></Header>
        <div className="container">
            <img src={img1}  className='img1' alt='Planos Banda Larga'/>
        </div>

        <div>
            <img src={img2} className='img2' alt='Imagens Banda Larga'/>
        </div>
        </>
    )
}

export default BandaLarga;
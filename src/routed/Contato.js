import Header from "../componnents/Header/Header";
import img1 from '../images/img1Contato.svg'
import imgBtn from '../images/btnUser.svg'
import './Contato.css'

function Contato() {
    return(
        <>
        <Header></Header>
        <div className='divContato'>
            <img src={img1} className='imgContato' alt=""></img>
        </div>

        <div className='formContato'>
            <form >
                
                    <div><input className='inputs1' placeholder='Nome'></input></div>
                    <div><input className='inputs1' placeholder='Telefone'></input></div>
                    <div><input className='inputs1' placeholder='CPF'></input></div>
                    <div><input className='inputs1' placeholder='CEP'></input></div>
                    <div><input className='inputs1' placeholder='Numero'></input></div>
                    <div><input className='inputs1-text' placeholder='Qual sua duvida?'></input></div>
            </form>
            
        </div>
        <div className='divBtn'>
                <img src={imgBtn} alt="" className="btnForm"></img>
            </div>
        
        </>
    )
}

export default Contato;
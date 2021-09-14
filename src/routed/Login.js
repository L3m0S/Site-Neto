import Header from "../componnents/Header/Header";
import img1 from '../images/img1Login.svg'
import img2 from '../images/img2Login.svg'
import imgBtn from '../images/btnUser.svg'
import './Login.css'

function Login() {
    return(
        <>
        <Header></Header>
        <div className='containerLogin'>
            <img src={img1} className='img1Login' alt=""/>
        </div>
        <div className='container2Login'>
            <img src={img2} className='img2Login' alt=""/>
        </div>

        <div className='containerForm'>
            <form className='form'>
            <input className='loginInput' placeholder="Usuário"></input>
            
            </form>
            <div className='div1'>
            <input className='loginInput' placeholder="Senha"></input>
            </div>
            <div className='divBtn'>
                <img src={imgBtn} alt="" className="imgBtn"></img>
            </div>
        </div>
        
        </>
    )
}

export default Login;
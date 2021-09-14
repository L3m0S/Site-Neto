import {Link, Router} from 'react-router-dom'
import './Header.css'
import com4logo from '../../images/com4logo.png'
import imgUser from '../../images/imgUser.svg'

function Header() {
    return (
        <>
        <header className="header">
            <Link to='/login' className='linkTo'>Login</Link>
            <Link to='/contato' className="linkTo"><a>Contato</a></Link>
            <Link to='/' className='linkImg'><img className='com4Logo' src={com4logo}/></Link>
            <Link to='/data-center' className="linkTo">Data Center</Link>
            <Link to='/banda-larga' className="linkTo">Banda Larga</Link>
            
        </header>
        </>
    );
}

export default Header;
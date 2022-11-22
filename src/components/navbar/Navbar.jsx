import { Link } from 'react-router-dom';

import aspan from '../../assets/logos/aspan.png';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

import '../../styles/navbar/navbar.scss';

export default function Navbar() {
    const openMenu = () => {
        const menu = document.querySelector('.menu');
        menu.style.display !== 'flex' ? 
        document.querySelector('.menu').style.display = 'flex' : 
        document.querySelector('.menu').style.display = 'none';
        
    } 
    const closeMenu = () => {
        const menu = document.querySelector('.menu');
        menu.style.display !== 'none' ? 
        document.querySelector('.menu').style.display = 'none' : 
        document.querySelector('.menu').style.display = 'flex';
    } 

    return (
        <div id="navbar">
            <div className="fixed">
                <div className='items'>
                    <img src={aspan} alt="" />
                    <nav className='desktop'>
                        <ul>
                            <li>
                                <a href="/#home">Início</a>
                            </li>
                            <li>
                                <a href="/#about">Sobre nós</a>
                            </li>
                            <li>
                                <a href="/#donate">Doações</a>
                            </li>
                            <li>
                                <a href="/#contact">Contato</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="buttons">
                            <Link to="/login">
                                <button className='btnLogin'>Entrar</button>
                            </Link>
                            <Link to="/cadastro">
                                <button className='btnRegister'>Cadastrar</button>
                            </Link>  
                        </div>
                </div>
                <div className='hamburguer' >
                    <button onClick={openMenu}>
                        <GiHamburgerMenu className='hamburguerIcon' />
                    </button>
                </div>
                <div className='menu'>
                    <div className='closeMenu'>
                        <button onClick={closeMenu}>
                            <IoMdClose className='closeIcon'/>
                        </button>
                    </div>
                    <nav className='mobile'>
                        <ul>
                            <li>
                                <a onClick={closeMenu} href="/#home">Início</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="/#about">Sobre nós</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="/#donate">Doações</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="/#contact">Contato</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='mobileButton'>
                        <Link to="/login">
                            <button className='btnLogin'>Entrar</button>
                        </Link>
                        <Link to="/cadastro">
                            <button className='btnRegister'>Cadastrar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
import '../../styles/login/login.scss';

import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div id='login'>
            <form className="card">
                <h2>Login</h2>
                <div className="email">
                    <label htmlFor="email">
                        E-mail:
                    </label>
                    <input type="email" name="email" id="email" placeholder='Digite aqui o seu email...'/>
                </div>
                <div className="password">
                    <label htmlFor="password">Senha:</label> 
                    <input type="password" name="password" id="password" placeholder='Digite aqui a sua senha...' />
                    <div className='passwordForgot'>
                        <a href=""> 
                            Esqueci minha senha.
                        </a>
                    </div>
                </div>
                <Link   to="/info">
                    <button className='btnLogin'>Entrar</button>
                </Link>
                <div className='registerText'>
                    <p>Ainda não tem cadastro?</p>
                    <Link to="/cadastro">Cadastre-se aqui!</Link>
                </div>
            </form>
        </div>
    )
}
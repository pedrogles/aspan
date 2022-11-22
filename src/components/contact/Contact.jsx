import '../../styles/contact/contact.scss';

import ASPAN from '../../assets/logos/aspan.png';

import { MdLocationPin, MdFacebook, MdEmail, MdPhone } from 'react-icons/md';

export default function Contact() {
    return (
        <div id="contact">
            <form className="form">
                <h2>Contato</h2>
                <div className="name">
                    <label htmlFor="name">Nome:</label>
                    <input  name="name" type="text" placeholder="Digite aqui o seu nome..." />
                </div>
                <div className="email">
                    <label htmlFor="email">E-mail:</label>
                    <input name="email" type="email" placeholder="Digite aqui o seu e-mail..." />
                </div>
                <div className="about">
                    <label htmlFor="about">Sobre:</label>
                    <input name="about" type="text" placeholder="Digite aqui o assunto..."/>
                </div>
                <div className="mensage">
                    <label htmlFor="mensage">Sua mensagem:</label>
                    <textarea name="mensage" cols="30" rows="10" placeholder="Digite aqui sua mensagem..."></textarea>
                </div>
                <button type="submit">
                    Enviar
                </button>
            </form>
            <footer className="footer">
                <img src={ASPAN} alt="" />
                <div className='socialIcons'>
                    <a 
                    className='phone'
                    href="tel:+558332232163">
                        <MdPhone className='phoneIcon'/>
                    </a>
                    <a 
                    className='email'
                    href="mailto:contato@aspan.com.br">
                        <MdEmail className='emailIcon'/>
                    </a>
                    <a 
                    className='facebook'
                    href="https://www.facebook.com/pg/associacaopromocionaldoanciao/community/?ref=page_internal&mt_nav=0&msite_tab_async=0" target="_blank" rel="noopener noreferrer">
                        <MdFacebook className='facebookIcon'/>
                    </a>
                </div>
                <div className="text">
                    <h3>
                        <span className='red'>
                            Fazer o bem faz bem,
                        </span>
                        
                        <br></br>
                        independente do reconhecimento.
                        <br></br>
                        
                        <span className='underline'>
                            A solidariedade não comporta vaidades pessoais.
                        </span>
                    </h3>
                </div>
                <div className="location">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <MdLocationPin className='locationIcon'/>
                        <p>R.Antônio Correa de Matos, 55  
                        Cristo Redentorista, João Pessoa – PB, 58071-310</p>
                    </a>
                </div>
            </footer>
        </div>
    )
}
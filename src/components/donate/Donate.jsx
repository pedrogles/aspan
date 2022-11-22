import '../../styles/donate/donate.scss';

import pagSeguro from '../../assets/logos/SEGURO.gif';
import bancoDoBrasil from '../../assets/logos/BB.png';
import bancoCaixa from '../../assets/logos/CAIXA.png';

import { CgArrowLongDown } from 'react-icons/cg';

export default function Donate() {
    return (
        <div id="donate">
            <div className="card">
                <div className='cardTitle'>
                    <h3>Como posso doar?<br></br><span>É seguro?</span></h3>
                </div>
                <p>Existem várias formas de ajudar a ASPAN, você pode ajudar com doações financeiras, com donativos, também ainda pode dedicar um pouco do seu tempo aos idosos e <span>sim, é completamente seguro!</span></p>
            </div>
            <div className="pagSeguro">
                <h3>Clique aqui para doar!</h3>
                <CgArrowLongDown className='arrowIcon'/>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={pagSeguro} alt="" />
                </a>
                <p>OU</p>
            </div>
            <div className="bancoDoBrasil">
                <img src={bancoDoBrasil} alt="" />
                <h3>BANCO DO BRASIL</h3>
                <p>Agência: 11-6<br></br>Conta corrente: 41.086-1</p>
            </div>
            <div className="bancoCaixa">
            <img src={bancoCaixa} alt="" />
                <h3>CAIXA ECONÔMICA FEDERAL</h3>
                <p>Agência: 1010<br></br>Conta corrente: 15.765-0</p>
            </div>
        </div>
    )
}
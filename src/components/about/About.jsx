import aboutImage from '../../assets/images/about.jpeg';

import '../../styles/about/about.scss';

export default function About() {
    return (
        <div id="about">
            <div className='aboutImage'>
                <img src={aboutImage} alt="" />
            </div>
            <div className='aboutText'>
                <h2>Sobre nós</h2>
                <p>A ASPAN – Associação Promocional do Ancião Dr. João Meira de Menezes - foi fundada pelo ex-vereador de João Pessoa, Fabiano de Sales Vilar, no dia 10 de março de 1983. Nosso maior objetivo é oferecer, aos idosos residentes, um ambiente verdadeiramente acolhedor, com tratamento digno, amor e atenção. Nossa missão é acolher pessoas idosas, proporcionando-lhes assistência social de saúde, espiritual/religiosa, em condição de liberdade e dignidade, empenhando-se na busca do fortalecimento dos vínculos familiares. A ASPAN tem 35 anos de história, de serviço prestado aos idosos. Atualmente residem na instituição 65 idosos, sendo 48 mulheres e 17 homens.
                </p>
            </div>
        </div>
    )
}
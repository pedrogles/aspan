import HomeMobile from '../../assets/images/homeMobile.jpeg';
import HomeDesktop from '../../assets/images/homeDesktop.jpeg';

import '../../styles/home/home.scss';

import Banner from '../banner/Banner';

export default function Home() {
    return (
        <div id="home">
            <div className='image'>
                <img className='mobile' src={HomeMobile} alt="" />
                <img className='desktop' src={HomeDesktop} alt="" />
                <div className="banner">
                    <p>A solidariedade é o sentimento que melhor 
                    expressa o respeito pela dignidade humana.</p>
                    <div className="donateMensage">
                        <p>Faça já a sua doação.</p>
                        <button>
                            <a href="#donate">
                                Doar agora!
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <Banner className="banner"/>
        </div>
    )
}
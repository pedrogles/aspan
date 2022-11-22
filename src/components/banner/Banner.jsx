import '../../styles/banner/banner.scss';

export default function Banner() {
    return (
        <div id="banner">
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
    )
}
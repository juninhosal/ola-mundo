import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Saudação terráqueo! Sou o Junior Salgado 🖖
                </h1>
                <p className={styles.paragrafo}>
                    <ul>
                        <li>
                            📚 Graduado em Ciência da Computação na UNIP (2020)
                        </li>
                    </ul>
                    <ul>
                        <li>
                            🗲 Entusiasta em artes geradas por inteligencia artificial ( Stable Diffusion )
                        </li>
                    </ul>
                    <ul>
                        <li>
                            💓 Animes, Filmes (Quadrinhos, Ficção científica, Fantasia, mistérios e Terror), livros (Ficção científica e Fantasia).🤓
                        </li>
                    </ul>
                    <ul>S
                        <li>
                            💤 Conhecer outros países principalmente o Japão e Canadá.
                        </li>
                    </ul>
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden="true"
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt={"Foto de Paulo de Tarso Salgado Junior"}
                />
            </div>
        </div>
    )
}
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/minha_foto.jpg"
export const SobreMim = () => {
    return (
        <PostModelo
            titulo={"Sobre Mim"}
            fotoCapa={fotoCapa}
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Junior Salgado
            </h3>
            <img
                src={fotoSobreMim}
                alt={"Foto de Paulo de Tarso Salgado Junior"}
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem?
            </p>
            <p className={styles.paragrafo}>
                Minha história como programador começou no início da faculdade, mas sempre tive o desejo e o sonho de
                ser um programador. No início, queria ser um desenvolvedor de jogos, como a maioria das crianças dos
                anos 90.
            </p>
            <p className={styles.paragrafo}>
                Apesar de ter video-game e um computador, minha família não tinha uma situação financeira estável, visto
                que meus pais eram autônomos. Isso meio que impossibilitava que eles conseguissem pagar algum curso ou
                até me colocar em uma escola focada em computação. Tanto que acesso à internet eu tive de fato apenas
                aos 14 anos, em 2006, quando aquele sonho e desejo de ser um programador acabou ficando esquecido.
            </p>
            <p className={styles.paragrafo}>
                Por volta dos meus 18 anos e já empregado, consegui fazer o meu primeiro curso, que foi no SENAI, onde
                me formei como Técnico em Montagem e Manutenção de Microcomputadores. Sim, bem diferente do meu sonho de
                criança, mas esse foi a faísca que precisava para começar a reacender aquele antigo sonho.
            </p>
            <p className={styles.paragrafo}>
                Os anos se passaram e a vontade de aprender programação de fato começou a crescer, mas por onde começar?
                Que linguagem estudar?
            </p>
            <p className={styles.paragrafo}>
                Em 2016, minha esposa conseguiu realizar o grande sonho dela, que era ingressar em uma faculdade, algo
                pelo qual ela batalhou muito. Com isso veio o apoio dela para que eu também ingressasse em alguma
                faculdade. E com isso veio a luz que eu precisava, o norte que eu estava procurando. Em 2017, entrei
                para a Universidade Paulista (UNIP).
            </p>
            <p className={styles.paragrafo}>
                De início, foi um grande desafio, principalmente para aprender a lógica de programação, pois
                praticamente todos da minha turma já tinham feito algum tipo de curso ou vinham de alguma escola onde a
                programação era matéria, ainda que não obrigatória. Na faculdade, acabei aprendendo o básico de duas
                linguagens, C e JAVA. Porém, graças a um colega que me apresentou o PHP, percebi que minha área de
                atuação seria no desenvolvimento web.
            </p>
            <p className={styles.paragrafo}>
                Foquei no back-end inicialmente, visto que a lógica era meu maior ponto fraco e eu precisava melhorá-la
                a qualquer custo. Em 2018, consegui meu primeiro estágio na área. Não era no desenvolvimento, mas já
                estava um passo mais perto de realizar meu sonho. Finalmente, em 2019, consegui na mesma empresa sair do
                meu setor, que era de consultoria SAP, para o tão sonhado setor de desenvolvimento.
            </p>
            <p className={styles.paragrafo}>
                Assim que iniciei meu estágio, comecei a focar na parte de front-end, pois já havia superado o primeiro
                grande desafio que era a lógica de programação. Finalmente, consegui entender como tudo funcionava na
                parte de back-end. Porém, no front-end eu precisava urgentemente aprender. HTML e CSS eu havia aprendido
                no primeiro ano da faculdade, mas o JavaScript era outra pedra no meu caminho. Nunca me dei bem com ele,
                mas o pouco que consegui aprender já me permitia resolver os problemas do meu dia a dia, tanto no
                estágio quanto no futuro, quando fui efetivado.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. Sempre focando no que o trabalho
                necessitava, ao longo dos anos acabei adquirindo conhecimento básico em outras linguagens também, como
                C#, .NET, NodeJS, Angular e alguns frameworks do PHP, como CodeIgniter, Laravel, Symfony e CakePHP. Com
                esse conhecimento, hoje eu consigo estudar outras linguagens, não só aquelas que a empresa em que estou
                atuando no momento necessita.
            </p>
        </PostModelo>
    );
}
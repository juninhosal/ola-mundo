import styles from './PostCard.module.css';
import {Link} from "react-router-dom";
import Botao from "../Botão";

export const PostCard = ({post}) =>{
    return(
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <Botao>Ler</Botao>
            </div>
        </Link>

    )
}
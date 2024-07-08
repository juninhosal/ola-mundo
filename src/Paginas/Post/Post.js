import "./post.css";
import styles from "./Post.module.css";
import {useParams} from "react-router";
import posts from "json/posts.json"
import PostModelo from "../../componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import Erro404 from "../404";
import Template from "../../componentes/Template";
import PostCard from "../../componentes/PostCard";
export const Post = () => {
    const parametros = useParams()

    const post = posts.find((post) => {
       return post.id === Number(parametros.id);
    })
    if (!post){
        return <Erro404/>
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b) => b.id - a.id)
        .slice(0,4);

    return(
        <Template>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className={"post-markdown-container"}>
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>
                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post)=> (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </Template>
    )
}
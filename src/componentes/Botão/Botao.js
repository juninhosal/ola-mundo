import styles from "./Botao.module.css"

export const Botao = ({children, tamanho}) => {
    return (
        <button className={`
            ${styles.botao}
            ${styles[tamanho]}
        `}>
            {children}
        </button>
    )
}
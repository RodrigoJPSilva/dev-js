import styles from "./ButtonModule.module.css"

export default function ButtonModule({ texto, highlight}) {
    return (
        <button className={`
            ${styles.btn}
            ${highlight ? styles.highlight : ""}
        `}>
            {texto}
        </button>
    )
}
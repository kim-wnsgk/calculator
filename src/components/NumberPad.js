import styles from "./NumberPad.module.css"

function NumberPad({ num }) {
    return (
        <div className={styles.container}>
            {num}
        </div>
    );
}

export default NumberPad;
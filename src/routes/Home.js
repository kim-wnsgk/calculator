import styles from './Home.module.css'
import NumberPad from '../components/NumberPad';
import { useState } from 'react';

function Home() {
    const [number, setNumber] = useState('0');
    const [dotted, setDotted] = useState(false);
    const numClicked = (value) => {
        // '-'를 입력받았을 때
        if (value === '-') {
            setNumber((0 - parseFloat(number)).toString())
        }
        else {
            if (number === '0') {  // 0이면 0제거후 숫자 추가
                setNumber(value);
            }
            else {
                if (!dotted) {  //소수점이 없을 때
                    setNumber(number + value);
                    if (value === ".")
                        setDotted(true);
                }
                else {  // 소수점이 이미 있다면
                    if (value !== ".") {
                        setNumber(number + value);
                    }
                }
            }
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>Calculator</div>
            <div className={styles.calContainer}>
                <input className={styles.input} placeholder='숫자를 입력하세요.' value={number} />
                <div className={styles.pad}>
                    <div className={styles.numPads}>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked("7")}>
                                <NumberPad num={7} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("8")}>
                                <NumberPad num={8} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("9")}>
                                <NumberPad num={9} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked("7")}>
                                <NumberPad num={7} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("8")}>
                                <NumberPad num={8} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("9")}>
                                <NumberPad num={9} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked("4")}>
                                <NumberPad num={4} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("5")}>
                                <NumberPad num={5} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("6")}>
                                <NumberPad num={6} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked("1")}>
                                <NumberPad num={1} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("2")}>
                                <NumberPad num={2} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked("3")}>
                                <NumberPad num={3} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked("-")}>
                                <NumberPad num={"-"} /></div>
                            <div className={styles.numPad} onClick={() => numClicked("0")}>
                                <NumberPad num={"0"} /></div>
                            <div className={styles.numPad} onClick={() => numClicked(".")}>
                                <NumberPad num={"."} /></div>
                        </div>
                    </div>
                    <div className={styles.operPads}>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
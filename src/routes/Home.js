import styles from './Home.module.css'
import NumberPad from '../components/NumberPad';
import { useState } from 'react';

function Home() {
    const [number, setNumber] = useState(0);
    const numClicked = (value) => {
        //입력받은 것이 숫자가 아닐때
        if (isNaN(value)) {
            if (value === "-") {
                setNumber(0 - number);
            }

        }
        else {  // 입력받은 것이 숫자일때
            let num = number * 10;
            num = num + value;
            setNumber(num);
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
                            <div className={styles.numPad} onClick={() => numClicked(7)}>
                                <NumberPad num={7} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(8)}>
                                <NumberPad num={8} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(9)}>
                                <NumberPad num={9} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked(7)}>
                                <NumberPad num={7} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(8)}>
                                <NumberPad num={8} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(9)}>
                                <NumberPad num={9} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked(4)}>
                                <NumberPad num={4} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(5)}>
                                <NumberPad num={5} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(6)}>
                                <NumberPad num={6} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked(1)}>
                                <NumberPad num={1} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(2)}>
                                <NumberPad num={2} /> </div>
                            <div className={styles.numPad} onClick={() => numClicked(3)}>
                                <NumberPad num={3} /> </div>
                        </div>
                        <div className={styles.numRows}>
                            <div className={styles.numPad} onClick={() => numClicked("-")}>
                                <NumberPad num={"-"} /></div>
                            <div className={styles.numPad} onClick={() => numClicked(0)}>
                                <NumberPad num={0} /></div>
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
import styles from './main.module.css';
import Image from 'next/image';
import halfface from './halfface.jpg'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainleft}>
                <div className={styles.mainleftcontent}>
                <h1 className={styles.mainheader}>
                    Hey, I'm <span className={styles.mainheaderred}>Soeradj</span>
                </h1>
                <h2 className={styles.secondheader}>
                    a <span className={styles.secondheaderred}>self-taught</span> full-stack developer.
                </h2>
                <p className={styles.caption}>Stick around to see some of my work</p>

                <button className={styles.button}>See my work</button>
                </div>
            </div>
            <div className={styles.mainright}>
            <Image className={styles.halfface} src={halfface} alt="halfface"/>
            </div>
        </div>
    );
};

export default Main;

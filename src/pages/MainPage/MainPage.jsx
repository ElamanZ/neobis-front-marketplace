import React from 'react';
import styles from './mainPage.module.scss'
import marketLogo from '../../assets/img/shopping-cartHeaderLogo.svg'
import userLogo from '../../assets/img/Profile/ProfileIcon.svg'
function MainPage(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header__logo}>
                    <img src={marketLogo} alt="marketLogo"/>
                    <h3>MOBI MARKET</h3>
                </div>
                <div className={styles.header__user}>
                    <button>
                        Подать объявление
                    </button>
                    <div className={styles.header__userInfo}>
                        <h4>Алеся</h4>
                        <p>sergeykrash01</p>
                    </div>
                    <img src={userLogo} alt="userLogo"/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
import React from 'react';
import {Link} from "react-router-dom";
import backIcon from "../../assets/img/ArrowBackBtn.svg";
import styles from '../../pages/LoginPage/login&register.module.scss'
import classNames from "classnames";

function ProfileHeader(props) {
    const titleText = "Профиль"

    const blockHeaderClasses = classNames(styles.block__header,styles.block__header_margin);

    return (
        <div className={blockHeaderClasses}>
            <div className={styles.backBtn}>
                <Link to='/main'>
                    <img src={backIcon} alt="backIcon" className={styles.backBtn_img}/>
                </Link>
                <Link to='/main'>
                    <p>Назад</p>
                </Link>
            </div>
            <h3>{titleText}</h3>
            <div className={styles.pustyshka}></div>
        </div>
    );
}

export default ProfileHeader;
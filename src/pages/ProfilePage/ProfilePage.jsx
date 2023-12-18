

import React, { useState } from 'react';
import styles from './profilePage.module.scss';
import ProfileLogo from '../../assets/img/Profile/ProfileIcon.svg'
import ProfileIconFavorite from '../../assets/img/Profile/FavoriteIcon.svg'
import ProfileIconStore from '../../assets/img/Profile/StoreIcon.svg'
import ProfileIconLogOut from '../../assets/img/Profile/LogOutIcon.svg'
import arrowIcon from '../../assets/img/ArrowRight.svg'
import classNames from "classnames";
import Profile from "../../components/profileComponents/Profile.jsx";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    const menuItemClasses = classNames(styles.menuItem,styles.menuItemMargin);

    return (
        <div className={styles.profilePage}>
            <div className={styles.profileMenu}>
                <div
                    className={`${styles.user} ${activeTab === 'profile' ? styles.active : ''}`}
                    onClick={() => handleTabChange('profile')}>
                    <img src={ProfileLogo} alt=""/>
                    <div className={styles.userInfo}>
                        <h3>Имя пользователя</h3>
                        <p>example@example.com</p>
                    </div>
                </div>

                <div className={styles.menuItems}>
                    <div
                        className={`${styles.menuItem} ${activeTab === 'likedItems' ? styles.active : ''}`}
                        onClick={() => handleTabChange('likedItems')}
                    >
                        <div className={styles.menuItemTitle}>
                            <img src={ProfileIconFavorite} alt="ProfileIconFavorite" className={styles.imgIcon}/>
                            Понравившиеся товары
                        </div>
                        <img src={arrowIcon} alt="arrowIcon"/>
                    </div>
                    <div
                        className={`${menuItemClasses} ${activeTab === 'myItems' ? styles.active : ''}`}
                        onClick={() => handleTabChange('myItems')}
                    >
                        <div className={styles.menuItemTitle}>
                            <img src={ProfileIconStore} alt="ProfileIconStore" className={styles.imgIcon}/>
                            Мои товары
                        </div>
                        <img src={arrowIcon} alt="arrowIcon"/>
                    </div>
                    <div
                        className={`${styles.menuItem} ${activeTab === 'logout' ? styles.active : ''}`}
                        onClick={() => handleTabChange('logout')}
                    >
                        <div className={styles.menuItemTitle}>
                            <img src={ProfileIconLogOut} alt="ProfileIconLogOut" className={styles.imgIcon}/>
                            Выйти
                        </div>
                        <img src={arrowIcon} alt="arrowIcon"/>
                    </div>
                </div>
            </div>


            <div className={styles.profileContent}>
                {activeTab === 'likedItems' && <Profile/>}
                {activeTab === 'myItems' && <div>Содержимое для моих товаров</div>}
                {activeTab === 'logout' && <div>Выход</div>}
                {activeTab === 'profile' && <Profile/>}
            </div>
        </div>
    );
};

export default ProfilePage;

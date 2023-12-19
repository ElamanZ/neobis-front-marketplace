

import React, { useState } from 'react';
import styles from './profilePage.module.scss';
import ProfileLogo from '../../assets/img/Profile/ProfileIcon.svg'
import ProfileIconFavorite from '../../assets/img/Profile/FavoriteIcon.svg'
import ProfileIconStore from '../../assets/img/Profile/StoreIcon.svg'
import ProfileIconLogOut from '../../assets/img/Profile/LogOutIcon.svg'
import arrowIcon from '../../assets/img/ArrowRight.svg'
import classNames from "classnames";
import Profile from "../../components/profileComponents/Profile.jsx";
import Box from "@mui/material/Box";
import LogOutLogo from "../../assets/img/logoutConfirm.svg"
import DeleteLogo from "../../assets/img/trashIcon.svg"
import Modal from "@mui/material/Modal";
import {useNavigate} from "react-router-dom";


const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [open, setOpen] = useState(false);
    const [openDelModal, setOpenDelModal] = useState(false);
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    const menuItemClasses = classNames(styles.menuItem,styles.menuItemMargin);


    const navigate = useNavigate()


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 391,
        height: 392,
        borderRadius: 10,
        bgcolor: '#FFFFFF',
        boxShadow: 24,
        p: 4,
        fontFamily: 'M PLUS 1p, sans-serif',
        display: 'flex',
    };

    const handleOpen = () => {
        setOpen(true)
    };
    const handleOpenDelModal = () => {
        setOpenDelModal(true)
    };
    const handleCloseDelModal = () => {
        setOpen(false)
    };

    const handleClickLogOut = () => {
        navigate("/login")
    }
    const handleClickCancel = () => {
        navigate("/profile")
        setOpen(false)
    }
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
                        onClick={() => handleOpen('logout')}
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
                {activeTab === 'likedItems' && <div>likedItems</div>}
                {activeTab === 'myItems' && <div>Содержимое для моих товаров</div>}
                {activeTab === 'profile' && <Profile/>}
            </div>

            <Modal
                open={open}
                onClose={handleClickCancel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.modalLogOut}>

                        <img src={LogOutLogo} alt="LogOutLogo" />
                        <h3>Вы действительно хотите выйти с приложения?</h3>
                        <button className={styles.btn_LogOut} onClick={handleClickLogOut}>
                            Выйти
                        </button>
                        <button className={styles.btn_cancel} onClick={handleClickCancel}>
                            Отмена
                        </button>
                    </div>
                </Box>
            </Modal>

            <Modal
                open={openDelModal}
                onClose={handleCloseDelModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.modalLogOut}>

                        <img src={DeleteLogo} alt="DeleteLogo" />
                        <h3>Вы действительно хотите удалить данный товар?</h3>
                        <button className={styles.btn_LogOut} onClick={handleClickLogOut}>
                            Удалить
                        </button>
                        <button className={styles.btn_cancel} onClick={handleClickCancel}>
                            Отмена
                        </button>
                    </div>
                </Box>
            </Modal>

        </div>
    );
};

export default ProfilePage;

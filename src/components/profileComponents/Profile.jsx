// Profile.js

import React, { useRef, useState } from 'react';
import ProfileHeader from './ProfileHeader.jsx';
import styles from './profileBlock.module.scss';
import avatarDefault from '../../assets/img/Profile/ProfileIcon.svg';
import classNames from "classnames";
import AddPhoneNumModal from "../modals/addPhoneNumModal.jsx";

function Profile(props) {

    const [avatar, setAvatar] = useState(avatarDefault);
    const fileInputRef = useRef(null);

    const onMainPhotoClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const onMainPhotoSelected = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    // const [phoneNumber, setPhoneNumber] = useState('');
    //
    // const handleAddNumber = () => {
    //     // Здесь можно добавить логику для добавления номера телефона
    //     // Например, открыть модальное окно или другой способ ввода номера
    //     // В данном примере установим номер по умолчанию
    //     setPhoneNumber('0(000) 000 000');
    // };


    const inputClasses = classNames(styles.profile__user_data,styles.profile__user_phone);

    const userLogin = 'Elaman'
    const userEmail = 'z.elaman699@gmail.com'
    return (
        <div className={styles.profileBlock}>
            <ProfileHeader />
            <div className={styles.profile__block}>
                <div className={styles.profile_avatar}>
                    <img
                        onClick={onMainPhotoClick}
                        src={avatar}
                        alt="Avatar"
                        className={styles.mainPhoto}
                    />
                    <label htmlFor="fileInput" className={styles.uploadButton}>
                        Выбрать фотографию
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={onMainPhotoSelected}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                </div>
                <div className={styles.profile__user_data}>
                    <input type="text" placeholder='Имя'/>
                    <input type="text" placeholder='Фамилия'/>
                    <input type="text" value={userLogin}/>
                    <input type="date" placeholder='Дата рождения'/>
                </div>
                <div className={inputClasses}>
                    {/*<div className={styles.phoneInput}>*/}
                    {/*    <button className={styles.addNumButton} onClick={handleAddNumber}>*/}
                    {/*        Добавить номер*/}
                    {/*    </button>*/}
                    {/*    <span>{phoneNumber || '0(000) 000 000'}</span>*/}
                    {/*</div>*/}
                    <AddPhoneNumModal/>
                    <input type="text" value={userEmail}/>
                </div>
                <button className={styles.profile__btnSave}>Сохранить</button>
            </div>

        </div>
    );
}

export default Profile;

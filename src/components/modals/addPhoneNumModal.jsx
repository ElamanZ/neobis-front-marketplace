import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../modals/modals.module.scss';
import addPhoneNumLogo from '../../assets/img/Profile/ConfirmPhoneNumberIcon.svg';
import classNames from 'classnames';
import PinCode from "../pinCode/pinCode.jsx";

function AddPhoneNumModal(props) {
    const [open, setOpen] = useState(false);
    const [phoneNumberModal, setPhoneNumberModal] = useState('');
    const [openSecondModal, setOpenSecondModal] = useState(false);
    const handleCodeComplete = (code) => {
        return console.log('Введенный код:', code);

    };

    const handleAddNumber = () => {
        setOpen(true);
    };

    const handleOpenApproveModal = () => {
        setOpenSecondModal(true);
        setOpen(false)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseApproveModal = () => {
        setOpenSecondModal(false);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const cleaned = ('' + value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,3})$/);

        if (match) {
            let formattedValue = '';
            if (match[1] !== '0' && match[1] !== '') {
                formattedValue = `0${match[1]}`;
            } else {
                formattedValue = match[1];
            }

            formattedValue +=
                (match[2] ? `(${match[2]})` : '') +
                (match[3] ? ` ${match[3]}` : '') +
                (match[4] ? ` ${match[4]}` : '');

            setPhoneNumberModal(formattedValue);
        }
    };
    const isDisabled = phoneNumberModal.length !== 14;

    const buttonClasses = classNames(styles.addNumBtnModal, {
        [styles.isDisabled]: isDisabled,
    });


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 565,
        height: 514,
        borderRadius: 10,
        bgcolor: '#FFFFFF',
        boxShadow: 24,
        p: 4,
        fontFamily: 'M PLUS 1p, sans-serif',
        display: 'flex',
        justifyContent: 'center',
    };

    return (
        <>
            <div className={styles.profile__number}>
                <div className={styles.phoneInput}>
                    <button className={styles.addNumButton} onClick={handleAddNumber}>
                        Добавить номер
                    </button>
                    <span>{phoneNumberModal || '0(000) 000 000'}</span>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.modalBlock}>
                        <h3>Добавить номер телефона</h3>
                        <img src={addPhoneNumLogo} alt="addPhoneNumLogo" />
                        <h4>Введите номер телефона</h4>
                        <p>Мы отправим вам СМС с кодом подтверждения</p>
                        <input
                            type="tel"
                            placeholder="0(000) 000 0000"
                            value={phoneNumberModal}
                            onChange={handleInputChange}
                            className={styles.modalPhoneNumInput}
                        />

                        <button onClick={handleOpenApproveModal} className={buttonClasses} disabled={isDisabled}>
                            Далее
                        </button>
                    </div>
                </Box>
            </Modal>


            {/*sendMessageModal*/}
            <Modal
                open={openSecondModal}
                onClose={handleCloseApproveModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.modalBlock}>
                        <button className={styles.modalBlockBtn} onClick={handleAddNumber}>Изменить номер телефона</button>
                        <img src={addPhoneNumLogo} alt="addPhoneNumLogo" />
                        <h4>Введите номер телефона</h4>
                        <p>Мы отправим вам СМС с кодом подтверждения</p>
                        <form className={styles.modalPinCode}>
                            <h4>Введите код из СМС:</h4>
                            <PinCode onComplete={handleCodeComplete} />
                        </form>

                        <button onClick={handleCodeComplete} className={buttonClasses} disabled={isDisabled}>
                            Далее
                        </button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default AddPhoneNumModal;

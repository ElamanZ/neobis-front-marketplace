import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../modals/modals.module.scss';
import addPhonNumLogo from '../../assets/img/Profile/ConfirmPhoneNumberIcon.svg';
import classNames from 'classnames';

function AddPhoneNumModal(props) {
    const [open, setOpen] = useState(false);
    const [phoneNumberModal, setPhoneNumberModal] = useState(0);

    const handleAddNumber = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        <img src={addPhonNumLogo} alt="addPhonNumLogo" />
                        <h4>Введите номер телефона</h4>
                        <p>Мы отправим вам СМС с кодом подтверждения</p>
                        <input
                            type="text"
                            placeholder="0(000) 000 0000"
                            value={phoneNumberModal}
                            onChange={handleInputChange}
                            className={styles.modalPhoneNumInput}
                        />

                        <button className={buttonClasses} disabled={isDisabled}>
                            Далее
                        </button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default AddPhoneNumModal;

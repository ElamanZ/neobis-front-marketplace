import React, {useState} from 'react';
import styles from '../LoginPage/login&register.module.scss'
import logo from '../../assets/img/Register&Login/shopping-cart.svg'
import {useForm} from "react-hook-form";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import backIcon from '../../assets/img/ArrowBackBtn.svg'
function RegisterPage(props) {



    const {register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => {
        alert(`Твое имя ${data.name} email ${data.email}`)
    }
    console.log(errors)


    const isDisabled = !(isValid)
    const buttonClasses = classNames(styles.block__btnSubmit, {
        isDisabled,
    });

    return (
        <div className={styles.block}>
            <div className={styles.block__logo}>
                <div>
                    <img src={logo} alt="logo"/>
                    <h2>MOBI MARKET</h2>
                </div>
            </div>
            <div className={styles.block__content}>
                <div className={styles.block__header}>
                    <div className={styles.backBtn}>
                        <Link to='/login'>
                            <img src={backIcon} alt="backIcon" className={styles.backBtn_img}/>
                        </Link>
                        <Link to='/login'>
                                <p>Назад</p>
                        </Link>
                    </div>
                    <h3>Регистрация</h3>
                    <div className={styles.pustyshka}></div>
                </div>
                <form className={styles.block__content_items} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('name', {
                            required: 'Обязательное поле!',
                        })}
                        type="text"
                        placeholder="Имя пользователя"
                        className={styles.block__input}
                    />
                    {errors?.name && <div style={{color: 'red'}}>{errors.name.message}</div>}
                    <input
                        {...register('email', {
                            required: 'Обязательное поле!',
                        })}
                        type='email'
                        placeholder="Почта"
                        className={styles.block__input}
                    />

                    {errors?.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
                    <button className={buttonClasses} disabled={isDisabled}>
                        Далее
                    </button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                closeOnClick
                hideProgressBar={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                style={{
                    right: '16em',
                    width: '335px',
                    height: '54px',
                }}
            />
        </div>
    );
}

export default RegisterPage;
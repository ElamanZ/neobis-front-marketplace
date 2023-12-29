import React, { useState, useEffect } from 'react';
import styles from '../LoginPage/login&register.module.scss';
import logo from '../../assets/img/Register&Login/shopping-cart.svg';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import {Link, useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import backIcon from '../../assets/img/ArrowBackBtn.svg';
import eyeIcon from '../../assets/img/Register&Login/passwordEyeOpen.svg';
import eyeIconNoVisible from '../../assets/img/Register&Login/passwordEyeClose.svg';
import passwordLockIcon from '../../assets/img/Register&Login/lockIcon.svg';

function PasswordRecoveryPage(props) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmField, setShowConfirmField] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);


    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const inputType = showPassword ? 'text' : 'password';

    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const onSubmit = (data) => {
        console.log(data.password, data.passwordConfirm);
        navigate('/main')
    };

    const isValidPasswordLength = password.length >= 8;
    const isValidPasswordNumAndLetter = /^(?=.*[A-Za-z])(?=.*\d)/.test(password);
    const isDisabled = !(isValidPasswordLength && isValidPasswordNumAndLetter);

    const buttonClasses = classNames(styles.block__btnSubmit, {
        isDisabled,
    });
    const passwordClasses = classNames(styles.block__input, styles.block__input_passwordRecovery);

    const checkValid = (validName) => {
        return !validName && password !== '' ? 'red' : errors.exampleRequired ? 'red' : password !== '' ? 'green' : 'gray';
    };

    useEffect(() => {
        const isValid = password !== '' && (isValidPasswordLength && isValidPasswordNumAndLetter);
        setShowConfirmField(isValid);
    }, [password, isValidPasswordLength, isValidPasswordNumAndLetter]);

    useEffect(() => {
        setIsConfirmPassword(showConfirmField);
    }, [showConfirmField]);

    return (
        <div className={styles.block}>
            <div className={styles.block__logo}>
                <div>
                    <img src={logo} alt="logo" />
                    <h2>MOBI MARKET</h2>
                </div>
            </div>
            <div className={styles.block__content}>
                <div className={styles.block__header}>
                    <div className={styles.backBtn}>
                        <Link to="/login">
                            <img src={backIcon} alt="backIcon" className={styles.backBtn_img} />
                            <p>Назад</p>
                        </Link>
                    </div>
                    <h3>Регистрация</h3>
                    <div className={styles.block__iconEye}>
                        <img
                            src={showPassword ? eyeIcon : eyeIconNoVisible}
                            alt="eyeIcon"
                            onClick={togglePasswordVisibility}
                            className={styles.iconEye_Password}
                        />
                    </div>
                </div>

                <div className={styles.block__content_items}>
                    <div className={styles.block__validPassword}>
                        <img src={passwordLockIcon} alt="Password_lock_img" />
                        <h3>{isConfirmPassword ? 'Повторите пароль' : 'Придумайте пароль'}</h3>
                        <div className={styles.description_valid}>
                            <p style={{ color: checkValid(isValidPasswordLength) }}>Минимальная длина — 8 символов.</p>
                            <p style={{ color: checkValid(isValidPasswordNumAndLetter) }}>Для надежности пароль должен содержать буквы и цифры.</p>
                        </div>
                    </div>

                    <form className={styles.block__content_items} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register('password', {
                                required: 'Обязательное поле!',
                            })}
                            type={inputType}
                            placeholder="Введите пароль"
                            onChange={(e) => setPassword(e.target.value)}
                            className={passwordClasses}
                            value={password}
                        />
                        {errors?.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
                        {showConfirmField && (
                            <div>
                                <input
                                    {...register('passwordConfirm', {
                                        validate: (value) => value === password || 'Пароли не совпадают',
                                    })}
                                    type={inputType}
                                    placeholder="Повторите пароль"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={passwordClasses}
                                    value={confirmPassword}
                                />
                                {errors?.passwordConfirm && (
                                    <div style={{ color: 'red' }}>{errors.passwordConfirm.message}</div>
                                )}
                            </div>
                        )}
                        <button className={buttonClasses} disabled={!showConfirmField}>
                            Далее
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PasswordRecoveryPage;

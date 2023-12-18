import React, {useState} from 'react';
import styles from '../LoginPage/login&register.module.scss'
import logo from '../../assets/img/Register&Login/shopping-cart.svg'
import {useForm} from "react-hook-form";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import eyeIcon from "../../assets/img/Register&Login/passwordEyeOpen.svg";
import eyeIconNoVisible from "../../assets/img/Register&Login/passwordEyeClose.svg";

function LoginPage(props) {


    //пароль
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const inputType = showPassword ? 'text' : 'password';

    //уведомление об ошибке
    const notification = () => {
        return toast.error("Не верный логин или пароль!")
    }

    const signInData = {
        username: username,
        password: password,
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const {register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => {
        alert(`Твое имя ${data.name} пароль ${data.password}`)
    }
    console.log(errors)


    const isDisabled = !(isValid)
    const buttonClasses = classNames(styles.block__btnSubmit, {
        isDisabled,
    });
    const inputClasses = classNames(styles.block__input,styles.password);
    const contentLoginClasses = classNames(styles.block__content, styles.block__content_login);


    return (
        <div className={styles.block}>
            <div className={styles.block__logo}>
                <div>
                    <img src={logo} alt="logo"/>
                    <h2>MOBI MARKET</h2>
                </div>
            </div>
            <div className={contentLoginClasses}>
                <form className={styles.block__content_items} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('name', {
                        required: 'Обязательное поле!',
                           })}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Имя пользователя"
                        className={styles.block__input}
                    />
                    {errors?.name && <div style={{color: 'red'}}>{errors.name.message}</div>}
                    <div className={styles.block__password}>
                        <input
                            {...register('password', {
                                required: 'Обязательное поле!',
                            })}
                            type={inputType}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Пароль"
                            className={inputClasses}
                        />
                        <img
                            src={showPassword ? eyeIcon : eyeIconNoVisible}
                            alt="eyeIcon"
                            onClick={togglePasswordVisibility}
                            className={styles.inputPasswordImg}
                        />
                    </div>

                    {errors?.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
                    <button className={buttonClasses} disabled={isDisabled}>
                        Войти
                    </button>
                </form>
                <Link to="/register" className={styles.block__btnLink}>Зарегистрироваться</Link>
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

export default LoginPage;
import React, {useState} from 'react';
import styles from './mainPage.module.scss'
import cardImg from '../../assets/img/MainPage/card_img.svg'
import heartIconRed from '../../assets/img/heartRed.svg'
import heartIconGray from '../../assets/img/heartGray.svg'
import Header from "../../components/Header/Header.jsx";
import Box from "@mui/material/Box";
import closeIcon from "../../assets/img/Profile/closeIcon.svg";
import cardImageInfo from "../../assets/img/Profile/cardImageinfo.svg";
import Modal from "@mui/material/Modal";

function MainPage(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 564,
        height: 677,
        borderRadius: 10,
        bgcolor: '#FFFFFF',
        boxShadow: 24,
        p: 2,
        fontFamily: 'M PLUS 1p, sans-serif',
        display: 'flex',
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>

                <Header/>

                <div className={styles.main_content}>

                    <div className={styles.product_card} onClick={handleOpen}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>




                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>


                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>


                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>

                    <div className={styles.product_card}>
                        <img src={cardImg} alt="cardImg"/>
                        <p className={styles.product_cardTitle}>BMW M4 Coupe: A Two-Door</p>
                        <p className={`${styles.product_cardTitle} ${styles.product_cardPrice}`}>23 000 $</p>
                        <div className={styles.product_cardLikes}>
                            <img src={heartIconGray} alt="heartIcon"/>
                            <span>100</span>
                        </div>
                    </div>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className={styles.modalPlaceAd}>
                            <img onClick={handleClose} src={closeIcon} alt="closeIcon" className={styles.closeIcon}/>
                            <img src={cardImageInfo} alt="cardImageinfo" className={styles.cardImageInfo}/>
                            <div className={styles.modalPlaceAd_Info}>
                                <h3>12000 сом</h3>
                                <div className={styles.modalPlaceAdLikes}>
                                    <img src={heartIconGray} alt=""/>
                                    <span>Нравится: 1 M</span>
                                </div>
                                <h2>Adidas Yeezy 500</h2>
                                <p>The Yeezy 500 Blush is a limited edition shoe designed by Kanye West for Adidas</p>
                                <h4>Детальное описание</h4>
                                <p>It features a unique design, with a chunky silhouette and a blush colorway. The shoe has a mix of suede, mesh and leather, and it's considered a highly sought-after item among shoe enthusiasts.</p>
                            </div>
                        </div>
                    </Box>
                </Modal>

            </div>
        </div>
    );
}

export default MainPage;
import React from 'react';
import style from 'header.module.scss'
function Header(props) {
    return (
        <div>
            <h2 className={style.header}>Header</h2>
        </div>
    );
}

export default Header;
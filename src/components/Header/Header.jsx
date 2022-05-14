import React from 'react';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import styles from './Header.module.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
    const listMenu = ['Home', 'Galleries', 'Artist', 'Collections', 'Artworks', 'News', 'AboutEden', 'Contact Us']
    const listWithHover = ['Galleries', 'Artist', 'Collections','News'];

    return(
        <div className={styles.header}>
            <HeaderSearch />  
            <HeaderMenu listMenu={listMenu} listWithHover={listWithHover} /> 
        </div>
    )
}

export default Header;
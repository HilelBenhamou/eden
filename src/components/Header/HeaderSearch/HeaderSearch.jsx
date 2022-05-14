import React from 'react';
import styles from '../HeaderSearch/HeaderSearch.module.scss';

const HeaderSearch = () => {

    return(
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search Artist, Artwork, Gallery" className={styles.searchInput}></input>
                <img alt='search' src='https://www.eden-gallery.com/assets/images/search%20icon.svg' className={styles.searchLogo} />
            </div>
            <img alt='search' src='https://www.eden-gallery.com/assets/images/icon-heart.svg' className={styles.wishlist} />
            <div className={styles.shopOnline}>Online Shop</div>
        </div>
    )
}

export default HeaderSearch;
import React from 'react';
import styles from './ArtworksItem.module.scss'

const ArtworksItem = ({artWorksList, ...props}) => {

    return(
        <div className={styles.artworksItemContainer}>
            <div className={styles.imgContainer}>
                <img src='https://www.eden-gallery.com/assets/images/icon-heart.svg' alt='heart' className={styles.heart} />
                <img src={artWorksList.artImg} alt='artworks' className={styles.artImg} />
            </div>
            <div className={styles.description}>
                <div className={styles.leftSide}>
                    <div className={styles.title}>{artWorksList.title}</div>
                    <div className={styles.subtitle}>{artWorksList.subTitle}</div>
                    <div className={styles.size}>{artWorksList.size}</div>
                    
                </div>
                <img src='https://www.eden-gallery.com/assets/images/icon-share.svg' alt='share' className={styles.share} />
            </div>
        </div>
    )
}

export default ArtworksItem;
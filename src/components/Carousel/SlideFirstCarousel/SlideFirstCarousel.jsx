import React from 'react';
import styles from './SlideFirstCarousel.module.scss';

const SlideFirstCarousel = ({obj,...props}) => {

    return(
        <>
            <div className={styles.container} style={{backgroundImage: `url('${obj.img}')`}}>
                <div className={styles.subContainer}>
                    <h1 className={styles.title}>{obj.title}</h1>
                    <h3 className={styles.subTitle}>{obj.subTitle}</h3>
                    <p className={styles.desc}>{obj.description}</p>
                    <button className={styles.btn}>{obj.btn}</button>
                </div>
            </div>
            <p className={styles.text}>{obj.category}</p>
        </>
    )
} 

export default SlideFirstCarousel;
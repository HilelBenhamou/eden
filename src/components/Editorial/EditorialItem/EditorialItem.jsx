import React from 'react';
import styles from './EditorialItem.module.scss'

const EditorialItem = ({edito}) => {

    return(
        <div className={styles.editorialContainer}>
            <div className={styles.title}>{edito.title}</div>
            <div className={styles.subTitle}>{edito.subTitle}</div>
            <div className={styles.date}>{edito.date}</div>
            <img alt='edito' className={styles.img} style={{backgroundImage: `url('${edito.img}')`}} />
            <p className={styles.text}>{edito.text}</p>
            <div className={styles.btn}>Read More</div>
        </div>
    )
}

export default EditorialItem;
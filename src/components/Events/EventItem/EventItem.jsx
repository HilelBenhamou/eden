import React from 'react';
import styles from './EventItem.module.scss'

const EventItem = () => {

    return(
        <div className={styles.container}>
            <div className={styles.date}>20.03.2022</div>
            <div className={styles.title}>Alec Monopoly at the Eden...</div>
            <div className={styles.text}>ALEC MONOPOLY DEBUTS NEW COLLECTION AT GRAND OPENING OF EDEN GALLERY DUBAI Throughout the week of a momentous grand opening, Eden Gallery’s new location in The Dubai Mall, the second biggest ...</div>
            <div className={styles.btn}>Read More</div>
        </div>
    )
}

export default EventItem;
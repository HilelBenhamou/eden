import React from 'react';
import styles from './Events.module.scss'
import EventItem from './EventItem/EventItem';

const Events = () => {

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Events</h2>
            <EventItem />
            <div className={styles.buttonMoreContainer}>
                <button class={styles.buttonMore}>Explore all Events</button>
            </div>
            <div className={styles.buttonMobile}>
                <button class={styles.readMore}>Read More</button>
            </div>
        </div>
    )    
}

export default Events;
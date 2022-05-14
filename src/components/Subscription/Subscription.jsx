import React from 'react';
import styles from './Subscription.module.scss'

const Subscription = () => {

    return(
        <div className={styles.container}>
            <div className={styles.title}>Subscribe for Exclusive Updates</div>
            <div className={styles.subtitle}>Be the first to receive information about new collections, new artists, and event invitations.</div>
            
            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    <input  type="text" className={styles.inputFirst} placeholder="First Name" />
                    <input  type="text" className={styles.input} placeholder="Last Name" />
                </div>
                <input  type="text" className={styles.input} placeholder="Email Address" />
                <div className={styles.btnContainer}>
                    <button className={styles.btn}>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription;
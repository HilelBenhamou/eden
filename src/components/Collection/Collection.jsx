
import React from 'react';
import styles from './Collection.module.scss'
import CollectionItems from './CollectionItems/CollectionItems';

const Collection = () => {

    const collectionList = [
        {
            img: 'https://srv-2.eden-gallery.com/wp-content/uploads/sites/14/2021/10/18140637/desktop-_-new-website_12.07.2021paintings-2.jpg',
            title: 'Painting',
            subTitle: "Explore Eden Gallery's collection of acrylic, oil and graffiti paintings.",
        },
        {
            img: 'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12124024/desktop-_-new-website_12.07.2021sculptures.jpg',
            title: ' Sculptures',
            subTitle: "Explore Eden Gallery's collection of unique free-standing sculptures.",
        },

    ]
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Collections</h2>
            <div className={styles.collectionsContainer}>
                {collectionList.map(el => <CollectionItems collectionList={el} />)}
            </div>
            <div className={styles.buttonMoreContainer}>
                <button class={styles.buttonMore}>Explore all Collections</button>
            </div>
            <div className={styles.buttonMobile}>
                <button class={styles.allCollection}>VIEW ALL COLLECTIONS</button>
            </div>
        </div>

    )
}

export default Collection;
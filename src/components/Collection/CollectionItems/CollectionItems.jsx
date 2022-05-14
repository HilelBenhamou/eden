import React from 'react';
import styles from './CollectionsItems.module.scss'

const CollectionItems = ({collectionList, ...props}) => {

    return(
        <div className={styles.collectionItemContainer} style={{backgroundImage: `url('${collectionList.img}')`}}>
            <div className={styles.collection}>
                <div className={styles.title}>{collectionList.title}</div>
                <div className={styles.description}>{collectionList.subTitle}</div>
                <div className={styles.button}>Explore</div>
            </div>
        </div>
    )
}

export default CollectionItems;
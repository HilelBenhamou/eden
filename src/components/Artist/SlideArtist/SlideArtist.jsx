import React from 'react';
import styles from './SlideArtist.module.scss'

const SlideArtist = ({listArtist, ...props}) =>{

    return(
        <div className={styles.container}>
            {
                listArtist.map(el => <div style={{backgroundImage: `url('${el.img}')`}} className={styles.artistItem}>{el.name}</div>)
            }
        </div>
    )
}

export default SlideArtist;
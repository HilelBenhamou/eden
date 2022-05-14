import React from 'react';
import styles from './ArtWorks.module.scss'
import ArtworksItem from './ArtworksItem/ArtworkItem';
const ArtWorks = () => {

    const artWorksList = [
        {
            artImg: 'https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg',
            title: 'Monopoly and Richie Yacht Cruising Dubai Painting',
            subTitle: 'Alec Monopoly | Mixed Media Painting',
            size: '152x183 cm | 59x72 in'
        },
        {
            artImg: 'https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg',
            title: 'Monopoly and Richie Yacht Cruising Dubai Painting',
            subTitle: 'Alec Monopoly | Mixed Media Painting',
            size: '152x183 cm | 59x72 in'
        },
        {
            artImg: 'https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg',
            title: 'Monopoly and Richie Yacht Cruising Dubai Painting',
            subTitle: 'Alec Monopoly | Mixed Media Painting',
            size: '152x183 cm | 59x72 in'
        },
        {
            artImg: 'https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg',
            title: 'Monopoly and Richie Yacht Cruising Dubai Painting',
            subTitle: 'Alec Monopoly | Mixed Media Painting',
            size: '152x183 cm | 59x72 in'
        },
        {
            artImg: 'https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg',
            title: 'Monopoly and Richie Yacht Cruising Dubai Painting',
            subTitle: 'Alec Monopoly | Mixed Media Painting',
            size: '152x183 cm | 59x72 in'
        },
        {
            artImg: 'https://srv-1.eden-gallery.com/2022/04/10/c-6252accbb1c30-Monopoly--Richie-Yacht-Cruising-Dubai-Painting-60_-x-72-1.jpg',
            title: 'Monopoly and Richie Yacht Cruising Dubai Painting',
            subTitle: 'Alec Monopoly | Mixed Media Painting',
            size: '152x183 cm | 59x72 in'
        },

    ]
    return(
        <div className={styles.artworks}>
            <h2 className={styles.title}>ArtWorks</h2>
            <div className={styles.artworksContainer}>
                {artWorksList.map(el => <ArtworksItem artWorksList={el} />)}
            </div>
            
            <div className={styles.buttonMoreContainer}>
                <button class={styles.buttonMore}>Explore Artworks</button>
            </div>
            <div className={styles.buttonMobile}>
                <button class={styles.allArtworks}>VIEW ALL ARTWORKS</button>
            </div>
        </div>

    )
}

export default ArtWorks;
import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './Artist.module.scss';
import SlideArtist from './SlideArtist/SlideArtist';

const Artist = () => {

    const listArtist = [
        [
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12090511/desktop-_-home-pagealec-monopoly.jpg',
                name: 'Alec Monopoly'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081456/desktop-_-home-pageangelo-accardi-1.jpg',
                name: 'Angelo Accardi'
            },
            {
                img:'https://srv-1.eden-gallery.com/2022/03/24/623c4c876c490-772x772px.jpg',
                name: 'Gal Yosef'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085937/desktop-_-home-pagedavid-kracov.jpg',
                name: 'David Kracov'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081042/desktop-_-home-pagekobra-1.jpg',
                name: 'Eduardo Kobra'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085858/desktop-_-home-pagedorit-levinstein-2.jpg',
                name: 'Dorit Levinstein'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12095005/desktop-_-new-website_12.07.2021yoel-benharrouche.jpg',
                name: 'Yoel Benharrouche'
            }
        ],
        [
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081456/desktop-_-home-pageangelo-accardi-1.jpg',
                name: 'Angelo Accardi'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12090511/desktop-_-home-pagealec-monopoly.jpg',
                name: 'Alec Monopoly'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085858/desktop-_-home-pagedorit-levinstein-2.jpg',
                name: 'Dorit Levinstein'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085937/desktop-_-home-pagedavid-kracov.jpg',
                name: 'David Kracov'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081042/desktop-_-home-pagekobra-1.jpg',
                name: 'Eduardo Kobra'
            },
            {
                img:'https://srv-1.eden-gallery.com/2022/03/24/623c4c876c490-772x772px.jpg',
                name: 'Gal Yosef'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12095005/desktop-_-new-website_12.07.2021yoel-benharrouche.jpg',
                name: 'Yoel Benharrouche'
            }
        ],
        [
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12090511/desktop-_-home-pagealec-monopoly.jpg',
                name: 'Alec Monopoly'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081456/desktop-_-home-pageangelo-accardi-1.jpg',
                name: 'Angelo Accardi'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085937/desktop-_-home-pagedavid-kracov.jpg',
                name: 'David Kracov'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085858/desktop-_-home-pagedorit-levinstein-2.jpg',
                name: 'Dorit Levinstein'
            },
            {
                img:'https://srv-1.eden-gallery.com/2022/03/24/623c4c876c490-772x772px.jpg',
                name: 'Gal Yosef'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12095005/desktop-_-new-website_12.07.2021yoel-benharrouche.jpg',
                name: 'Yoel Benharrouche'
            },
            {
                img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081042/desktop-_-home-pagekobra-1.jpg',
                name: 'Eduardo Kobra'
            },
        ]
    ];

    const listArtistMobile = [
        {
            img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12090511/desktop-_-home-pagealec-monopoly.jpg',
            name: 'Alec Monopoly'
        },
        {
            img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081456/desktop-_-home-pageangelo-accardi-1.jpg',
            name: 'Angelo Accardi'
        },
        {
            img:'https://srv-1.eden-gallery.com/2022/03/24/623c4c876c490-772x772px.jpg',
            name: 'Gal Yosef'
        },
        {
            img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085937/desktop-_-home-pagedavid-kracov.jpg',
            name: 'David Kracov'
        },
        {
            img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12081042/desktop-_-home-pagekobra-1.jpg',
            name: 'Eduardo Kobra'
        },
        {
            img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12085858/desktop-_-home-pagedorit-levinstein-2.jpg',
            name: 'Dorit Levinstein'
        },
        {
            img:'https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/07/12095005/desktop-_-new-website_12.07.2021yoel-benharrouche.jpg',
            name: 'Yoel Benharrouche'
        },
        {
            img:'https://srv-1.eden-gallery.com/2022/03/24/623c4c876c490-772x772px.jpg',
            name: 'Gal Yosef'
        },
    ]

    return(
        <>
        
            <h2 className={styles.title}>Artists</h2>
            <div className={styles.artistsDesktop}>
                <CarouselProvider 
                    isPlaying={true}
                    className={styles.carouselContainer}
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={listArtist.length}>
                    <Slider>
                        {listArtist.map((el, index) => 
                            <Slide key={index} index={index} className={styles.carouselArtists}>
                                <SlideArtist listArtist={el} />
                            </Slide>
                        )}
                    </Slider>
                    <div className={styles.stepContainer}>
                        {listArtist.map((_, index) => (
                            <Dot slide={index} key={index} className={styles.step}></Dot>
                        ))}
                    </div>
                </CarouselProvider>
                <div className={styles.buttonMoreContainer}>
                    <button class={styles.buttonMore}>View Artist</button>
                </div>
            </div>
            <div className={styles.artistsMobileContainer}>
                <div className={styles.artistsMobile}>
                    {listArtistMobile.map((el, index) => 
                        <div style={{backgroundImage: `url('${el.img}')`}} className={styles.artistItemMobile}>{el.name}</div>
                    )}
                </div>
                <div>
                    <button class={styles.allArtist}>VIEW ALL ARTISTS</button>
                </div>
                <hr class="divider-mob"></hr>
            </div>
        </>
    )
}

export default Artist;
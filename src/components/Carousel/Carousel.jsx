import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SlideFirstCarousel from './SlideFirstCarousel/SlideFirstCarousel';
import styles from './Carousel.module.scss';


const Carousel = ({componentSlide, componentDot, ...props}) => {

    const listCarousel = [
        {
            img: 'https://srv-1.eden-gallery.com/2022/05/11/627ba2c1e5ce1-Desktop-1.jpg',
            category:'Galleries',
            title: 'EDEN GALLERY',
            subTitle: 'A Vibrant World of Contemporary Art',
            description: 'Eden Gallery represents brilliant contemporary artists worldwide, displaying their art in breathtaking',
            btn: 'Discover'
        },
        {
            img: 'https://srv-2.eden-gallery.com/wp-content/uploads/sites/14/2021/10/18102321/artworks-1.jpg',
            category:'Artists',
            title: 'ARTISTS',
            subTitle: 'Unique Contemporary Artists',
            description: "Learn More About Eden Gallery's exclusive artists",
            btn: 'Learn More'
        },
        {
            img: 'https://srv-2.eden-gallery.com/wp-content/uploads/sites/14/2021/10/18140634/collections-1-2.jpg',
            category:'Collections',
            title: 'COLLECTIONS',
            subTitle: 'Original Collections',
            description: 'Original Collections',
            btn: 'Discover'
        },
        {
            img: 'https://srv-2.eden-gallery.com/wp-content/uploads/sites/14/2021/10/18102319/desktop-_-home-pageartist-2.jpg',
            category:'Artworks',
            title: 'ARTWORKS',
            subTitle: 'A Diverse Selection of Fine Art',
            description: 'Browse individual works of art. ',
            btn: 'Browse'
        },
        {
            img: 'https://srv-2.eden-gallery.com/wp-content/uploads/sites/14/2021/10/19101930/WhatsApp-Image-2021-10-19-at-13.18.33.jpeg',
            category:'Events & Exhibitions',
            title: 'EVENTS',
            subTitle: 'Special Events',
            description: 'Inspiring art exhibitions and celebrations.',
            btn: 'See Events'
        },
    ];

    return (
        <>
            <CarouselProvider 
                isPlaying={true}
                className={styles.carouselContainer}
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={listCarousel.length}>

                <Slider>
                    {listCarousel.map((el, index) => 
                        <Slide key={index} index={index} className={styles.carouselSlide}>
                            <SlideFirstCarousel obj={el} />
                        </Slide>
                    )}
                </Slider>
                <div className={styles.buttons}>
                    <ButtonBack className={styles.btnBack}><img src="https://www.eden-gallery.com//assets/images/arrow-left_dark_gray.svg" alt="left" /></ButtonBack>
                    <ButtonNext className={styles.btnNext}><img src="https://www.eden-gallery.com//assets/images/arrow-right_dark_gray.svg" alt="right" /></ButtonNext>
                </div>
                <div className={styles.stepContainer}>
                    {listCarousel.map((_, index) => (
                        <Dot slide={index} key={index} className={styles.step}></Dot>
                    ))}
                </div>
            </CarouselProvider>
            <div className={styles.buttonMoreContainer}>
                <button class={styles.buttonMore}>Discover Our Galleries</button>
            </div>
        </>
    );
}

export default Carousel;
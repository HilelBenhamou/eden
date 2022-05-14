import React from 'react';
import styles from './Footer.module.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return(
        <div className={styles.footerContainer}>
            <div className={styles.imgContainer}>            
                <img src='https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/04/22082721/logoeden.png' alt='logo' className={styles.logo} />
            </div>
            <div className={styles.menuFooter}>
                <div className={styles.part}>
                    <div className={styles.titleAbout}>About</div>
                    <div className={styles.text}>Eden Gallery is a contemporary fine art gallery located in major cities in the United States and Europe. With the belief that art is a universal language that bridges cultures and forms human connections, we strive to create unforgettable exhibitions and events that bring color and inspiration to life’s every moment.</div>
                    <hr class={styles.divider}></hr>
                    <div className={styles.followUs}>
                        <div className={styles.followUsTitle}>FOLLOW US</div>
                        <div className={styles.iconsContainer}>
                            <InstagramIcon className={styles.icons} />
                            <FacebookIcon className={styles.icons} />
                            <YouTubeIcon className={styles.icons} />
                            <TwitterIcon className={styles.icons} />
                            <PinterestIcon className={styles.icons} />
                            <LinkedInIcon className={styles.icons} />
                        </div>

                    </div>
                </div>
                <hr class={styles.footerDivider}></hr>
                <div className={styles.part}>
                    <div className={styles.title}>Galleries</div>
                    <div className={styles.menus}>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.lastitem}>All Galleries</div>
                    </div>
                </div>
                <hr class={styles.footerDivider}></hr>
                <div className={styles.part}>
                    <div className={styles.title}>Artists</div>
                    <div className={styles.menus}>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.lastitem}>All Galleries</div>
                    </div>
                </div>
                <hr class={styles.footerDivider}></hr>
                <div className={styles.part}>
                    <div className={styles.title}>Collections</div>
                    <div className={styles.menus}>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.item}>Soho/Nyc</div>
                        <div className={styles.lastitem}>All Galleries</div>
                    </div>
                </div>
                <hr class={styles.footerDivider}></hr>
                <div className={styles.partLast}>
                    <div className={styles.menus}>
                        <div className={styles.item}>Home</div>
                        <div className={styles.item}>Artworks</div>
                        <div className={styles.item}>Contact Us</div>
                        <div className={styles.item}>About Eden</div>
                        <div className={styles.item}>Blog</div>
                    </div>
                </div>
            </div>
            <div className={styles.lastLine}>
                <div className={styles.copyright}>Copyright © 2021 Eden Gallery. All Rights Reserved</div>
                <div className={styles.privacies}>
                    <div className={styles.privacy}>Privacy Policy</div>
                    <div className={styles.privacy}>Terms & Conditions</div>
                    <div className={styles.privacy}>Cookie Policy</div>
                    <div className={styles.privacy}>Site Map</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
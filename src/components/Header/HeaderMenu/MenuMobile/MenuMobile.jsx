import React from 'react';
import styles from './MenuMobile.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MenuMobile = ({listMenu, accordions, subMenuItems, ...props}) => {

    return(
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <img alt='search' src='https://www.eden-gallery.com/assets/images/search%20icon.svg' className={styles.searchLogo} />
                <input type="text" placeholder="Search Artist, Artwork, Gallery" className={styles.searchInput}></input>
            </div>
            {listMenu.map((el, index) => {
                if(accordions.includes(el)){
                    return (
                    <Accordion className={styles.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={styles.accordionSummary}
                            sx={{margin: 'initial !important'}}
                        >
                            <Typography>{el}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            {subMenuItems.map((el, index) => <div key={index} className={styles.itemSubMenu}>{el}</div>)}
                            <p className={styles.lastItemMenu}>All Galleries</p>
                        </AccordionDetails>
                    </Accordion>
                    )
                }else{
                    return <div key={index} className={styles.itemMenu}>{el}</div>
                }       
            })}
        </div>

    )
}

export default MenuMobile;
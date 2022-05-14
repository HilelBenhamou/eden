import React, { useState, useEffect} from 'react';
import styles from './HeaderMenu.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SubMenu from './SubMenu/SubMenu';
import MenuMobile from './MenuMobile/MenuMobile';
import CloseIcon from '@mui/icons-material/Close';


const HeaderMenu = ({listMenu, listWithHover, ...props}) => {

    const subMenuItems = ['Soho/Nyc', 'Madison Ave/Nyc', 'Aspen', 'Miami/Florida','New Bond St./London','Dubai']

    const [isShown, setIsShown] = useState(false);
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const onHover = (el) => {
        console.log(el)
        if(listWithHover.includes(el)){
            setIsShown(true)
        }
    }

    const setShowToFalse = () => {
        setIsShown(false)
    }

    const openMenuMobile = () => {
        setShowMenuMobile(true)
    }
    const closeMenuMobile = () => {
        setShowMenuMobile(false)
    }


    return(
        <>
            <div className={styles.headerMenu}>
                    <img src="https://www.eden-gallery.com/assets/images/logo-red.svg" alt="eden_logo" className={styles.edenLogo} />
                    <div className={styles.listMenu}>
                        {listMenu.map((el, index) => <p key={index} className={styles.itemMenu} onMouseEnter={() => onHover(el)}>{el}</p>)}
                        {isShown && <SubMenu subMenuItems={subMenuItems} setShownToFalse={setShowToFalse} />}
                    </div>
            </div>
            <div className={styles.headerMenuMobile}>
                {showMenuMobile ? <CloseIcon onClick={closeMenuMobile} /> : <MenuIcon onClick={openMenuMobile} />}
                <img src="https://www.eden-gallery.com/assets/img/eden_logo_red.svg" alt="eden_logo" className={styles.eden_logo_red} />
                <img src="https://www.eden-gallery.com/assets/images/icon-heart.svg" alt="eden_logo" className={styles.eden_logo_red} />
            </div>
            {showMenuMobile && <MenuMobile listMenu={listMenu} accordions={listWithHover} subMenuItems={subMenuItems}  />}
        </>
    )
}

export default HeaderMenu;
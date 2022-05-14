import React, {useState} from 'react';
import styles from './SubMenu.module.scss'

const SubMenu = ({subMenuItems, setShownToFalse, ...props}) => {

    const [image, setImage] = useState('https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/08/16142735/soho.jpg');

    const onHoverItem = (e) => {
        switch (e.target.innerText) {
            case 'Soho/Nyc':
                setImage('https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/08/16142735/soho.jpg')
                break;
            case 'Madison Ave/Nyc':
                setImage('https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/08/16144949/mad.jpg')
                break;
            case 'Aspen':
                setImage('https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/08/16145434/aspen.jpg')
                break;
            case 'Miami/Florida':
                setImage('https://srv-1.eden-gallery.com/2022/01/26/61f16813c79e8-Miami-Gallery-3.jpg')
                break;
            case 'New Bond St./London':
                setImage('https://srv-2.eden-gallery.com/wp-content/uploads/sites/15/2021/08/16145635/london.jpg')
                break;
            case 'Dubai':
                setImage('https://srv-1.eden-gallery.com/2022/03/15/62306ac2e922c-Dubai.jpg')
                break;
            default:
                break;
        }
    }

    return(
        <div className={styles.container} onMouseLeave={setShownToFalse}>
            <img src={image} alt="soho" className={styles.imgSubMenu} />
            <div className={styles.separator}></div>
            <div className={styles.listSubMenu}>
                {subMenuItems.map((el, index) => <p key={index} className={styles.itemMenu} onMouseEnter={onHoverItem}>{el}</p>)}
                <p className={styles.lastItemMenu}>All Galleries</p>
            </div>
        </div>
    )
}

export default SubMenu;
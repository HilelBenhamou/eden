import React from 'react';
import styles from './Editorial.module.scss'
import EditorialItem from './EditorialItem/EditorialItem';

const Editorial = () => {

    const editorials = [
        {
            title: 'Painting Murals',
            subTitle: 'Art Blog',
            date: '04.05.2022 | Eden Gallery',
            img: " https://srv-1.eden-gallery.com/2022/05/4/627246cacdbfa-kobra.jpg",
            text: 'Eduardo Kobra creates magnificent murals of historical figures over time that have changed the way we function as a society, across all countries. Click here to see more from Kobra.',

        },
        {
            title: 'Anamorphic Sculptures',
            subTitle: 'Art Blog',
            date: '03.05.2022 | Eden Gallery',
            img: " https://srv-1.eden-gallery.com/2022/05/4/62725bb9d5182-JONTY1.jpg",
            text: "Jonty Hurwitz's rare and personal combination of science and the arts in his one-of-a-kind anamorphic sculptures can be viewed in-person at Eden Gallery a well as on the Eden website. Explore his collection today to find a visually stimulating and fascinating addition to your space."
        },
        {
            title: 'UAE Arts',
            subTitle: 'Art Blog',
            date: '27.04.2022 | Eden Gallery',
            img: " https://srv-1.eden-gallery.com/2022/05/4/627246cacdbfa-kobra.jpg",
            text: 'Eduardo Kobra creates magnificent murals of historical figures over time that have changed the way we function as a society, across all countries. Click here to see more from Kobra.',

        },
    ]

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Editoral</h2>
            <div className={styles.editoContainer}>
                {editorials.map(el => <EditorialItem edito={el}/> )}
            </div>
            <div className={styles.buttonMoreContainer}>
                <button class={styles.buttonMore}>Read More</button>
            </div>
        </div>
    )
}

export default Editorial;
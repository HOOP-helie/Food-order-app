import React from 'react'
import styles from './Header.module.css'
import mealsImage from "./../../assets/img/meals.jpg"
import HeaderCart from './HeaderCart'

const Header = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCart showModal={props.showModal} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Meals buffet" />
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import LineGraph from './LineGraph';
import Pie from './Pie'
import styles from './Admin.module.css'
import cx from 'classnames'


function Admin() {
    return (
        <>
        <h1 className={styles.dashboardTitle}>Your Dashboard</h1>
        <div className={cx(styles.container)}>
            <LineGraph/>
            <div className={styles.cardsPieContainer}>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h4>Rank</h4>
                        <span><h1>1</h1></span>
                    </div>
                    <div className={cx(styles.card, styles.card2)}>
                        <h4>Partially solved</h4>
                        <span><h1>50</h1></span>
                    </div>
                    <div className={cx(styles.card, styles.card3)}>
                        <h4>Problem solved</h4>
                        <span><h1>100</h1></span>
                    </div>
                </div>
                    <Pie/>
              
            </div>
        </div>
        </>
    )
}

export default Admin

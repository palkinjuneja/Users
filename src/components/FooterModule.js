import React from 'react'
import styles from "./FooterModule.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
function FooterModule() {
    return (
        <div className={styles.footer}>
          <div className={styles.upperDivision}>
            <div className={styles.logo_Union}>
              <span className={styles.u}>U</span>
              <span className={styles.unionTwo}>Union</span>
            </div>
            <div className={styles.linkedIncon}><a className={styles.linkedin}target="_blank" href= "www.linkedin.com"><LinkedInIcon/></a></div>
          </div>
          <p className={styles.collaboartionMadeEasy}>
            Collaboartion made easy!
          </p>
          <div className={styles.line4} />
          <div className={styles.flexWrapperSeven}>
            <CopyrightIcon/>
            <p className={styles.allRightsAreRegistered}>
              All rights are registered
            </p>
          </div>
        </div>
      )
}

export default FooterModule

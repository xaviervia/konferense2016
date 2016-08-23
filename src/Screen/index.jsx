import React from 'react'
import styles from './styles.css'

export default function Screen ({children}) {
  return <div className={styles.screen}>{children}</div>
}

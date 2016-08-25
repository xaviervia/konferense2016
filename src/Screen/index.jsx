import React from 'react'
import styles from './styles.css'

export default function Screen ({children, ...props}) {
  return <div className={styles.screen} {...props}>{children}</div>
}

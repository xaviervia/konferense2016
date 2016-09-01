import React from 'react'
import styles from './styles.css'

export default function Screen ({children, className, ...props}) {
  return <div className={styles.screen + ' ' + className} {...props}>{children}</div>
}

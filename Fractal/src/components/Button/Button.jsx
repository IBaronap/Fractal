import React from 'react'
import styles from './Button.module.css'

export function Button ({ title, type }) {
  const typeToClass = {
    principal: styles.principalBTN,
    secondary: styles.secondaryBTN,
    admin: styles.adminBTN
  }

  const BtnClass = typeToClass[type] || ''

  return (
    <div>
      <button className={BtnClass}>{title}</button>
    </div>
  )
}

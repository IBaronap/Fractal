import React, { memo } from 'react'
import { Button } from '../Button/Button'
import styles from './Header.module.css'

export const Header = memo(function Header () {
  const items = [
    {
      id: 1,
      text: 'About us',
      options: null
    },
    {
      id: 2,
      text: 'Services',
      options: null
    },
    {
      id: 3,
      text: 'Portfolio',
      options: null
    },
    {
      id: 4,
      text: 'Contact',
      options: null
    }
  ]

  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src='./src/Assets/Images/Logo.png' />
      <Menu menu={items} />
      <Button title='Administrator mode' type='admin' />
    </div>
  )
})

function Menu ({ menu }) {
  return (
    <nav>
      <ul className={styles.menu}>
        {
            menu.map((item) => {
              return <li className={styles.menuItem} key={item.id}>{item.text}</li>
            })
        }
      </ul>
    </nav>
  )
}

'use client'

import React from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'

export const Header = () => {
  return (
    <div className={styles.el}>
      <ul>
        <li>logo</li>
        <li>NavLink1</li>
        <li>NavLink2</li>
        <li>NavLink3</li>
      </ul>
    </div>
  )
}

export default Header;
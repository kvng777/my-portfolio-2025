'use client'

import React from 'react'
import styles from './Header.module.scss'
import { useTheme } from 'next-themes'
import { CgDarkMode } from "react-icons/cg";

export const Header = () => {

  const {theme, setTheme} = useTheme();

  return (
    <div className={styles.el}>
      <button 
        onClick={() => {
          if(theme === 'dark') {
            setTheme('light')
          } else {
            setTheme('dark')
          }
        }}
      >
        <CgDarkMode />
      </button>
    </div>
  )
}

export default Header;
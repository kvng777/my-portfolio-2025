'use client'

import React from 'react'
import styles from './DarkMode.module.scss'
import { useTheme } from 'next-themes'
import { MdOutlineLightMode } from "react-icons/md";

export const DarkMode = () => {

  const {theme, setTheme} = useTheme();

  return (
    <button
      className={styles.darkModeToggle}
      onClick={() => {
        if(theme === 'dark') {
          setTheme('light')
        } else {
          setTheme('dark')
        }
      }}
    >
      <MdOutlineLightMode />
    </button>
  )
}

export default DarkMode;
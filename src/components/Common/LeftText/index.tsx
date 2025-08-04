'use client'

import React from 'react'
import styles from './LeftText.module.scss'

type IText = {
  text: string;
}

export const LeftText = ({text}: IText) => {

  return (
    <div className={styles.LeftTextEl}>
      <h2>{text}</h2>
    </div>
  )
}

export default LeftText;
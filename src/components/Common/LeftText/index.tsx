import React from 'react'
import styles from './LeftText.module.scss'
import { animate } from '@/utils/Animate'

type IText = {
  text: string;
}

export const LeftText = ({text}: IText) => {
  return (
    <div className={styles.LeftTextEl}>
      {animate(
      <h2>{text}</h2>
      )}
    </div>
  )
}

export default LeftText;
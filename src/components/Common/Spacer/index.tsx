'use client'

import React from 'react'
import styles from './Spacer.module.scss'
import cn from 'classnames'

export const Spacer = () => (
  <div className={cn(styles.spacerEl, 'padding-outter')}>
    <div className={cn(styles.container, 'padding-inner', 'inner')} />
  </div>
)

export default Spacer;
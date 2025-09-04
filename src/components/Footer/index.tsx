import React from 'react'
import styles from './Footer.module.scss';
import cn from 'classnames'
import { animate } from '@/utils/Animate';

export const Footer = () => {
  return (
    <footer className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <h4><span>©</span> Kevin Gamboa 2025</h4>
      </div>
    </footer>
  )
}

export default Footer;
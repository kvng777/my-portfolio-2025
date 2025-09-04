'use client'

import React from 'react'
import styles from './About.module.scss'
import LeftText from '../Common/LeftText'
import cn from 'classnames'
import { useTranslations } from 'next-intl';
import { motion } from "motion/react"
import { animate } from '@/utils/Animate'

export const About = () => {

  const t = useTranslations("About");

  return (
    <div className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <LeftText text={t('title')}/>

        <div className={styles.right}>          
          {animate(
            <p>
              {t('description')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default About;
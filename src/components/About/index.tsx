'use client'

import React from 'react'
import styles from './About.module.scss'
import LeftText from '../Common/LeftText'
import cn from 'classnames'

export const About = () => {

  return (
    <div className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <LeftText text='About' />

        <div className={styles.right}>
          <p>
            I started my journey in tech testing websites and mobile apps, making sure everything worked just right. Over time, I discovered I loved building the things I used to test even more. Now, with 3.5 years of experience as a front-end web developer, I craft clean, responsive, and interactive websites using Next.js. I’m passionate about smooth user experiences, and I’m constantly learning new tools and techniques to bring ideas to life on the web.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
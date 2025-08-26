'use client'

import React from 'react'
import styles from './Projects.module.scss'
import cn from 'classnames'
import CardImage from '../Common/CardImage'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, A11y, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/effect-fade';

import LeftText from '../Common/LeftText'
import imgApa from '../../../public/image/projects/apa.png';
import imgBodw from '../../../public/image/projects/bodw.png';
import imgJcg from '../../../public/image/projects/jcg.png';
import imgIsb from '../../../public/image/projects/isb.png';
import { useTranslations } from 'next-intl';

export const Projects = () => {

  const t = useTranslations("Projects");

  const myProjectsData= [
    {
      name: "APA",
      img: {
        url: imgApa,
      },
      cta: {
        url: 'https://www.apa.com.au/',
        text: 'Click to see'
      },
    },
    {
      name: "BODW",
      img: {
        url: imgBodw,
      },
      cta: {
        url: 'https://www.bodw.com/en',
        text: 'Click to see'
      },
    },
    {
      name: "JCG",
      img: {
        url: imgJcg,
      },
      cta: {
        url: 'https://januscontinental.com/',
        text: 'Click to see'
      },
    },
    {
      name: "ISB",
      img: {
        url: imgIsb,
      },
      cta: {
        url: 'https://www.isb.edu/',
        text: 'Click to see'
      },
    },
  ]

  return (
    <div className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <LeftText text={t('title')}/>
        <div className={styles.right}>
          <p>{t('description')}</p>
          {
            myProjectsData && myProjectsData.map((item, id) => {
              return(
                <CardImage 
                  key={id} 
                  {...item}
                  title={t(`myprojects.${item.name}.title`)}
                  description={t(`myprojects.${item.name}.description`)}
                />
              )
            }) 
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;
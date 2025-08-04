'use client'

import React from 'react'
import styles from './Projects.module.scss'
import cn from 'classnames'
import CardImage from '../Common/CardImage'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import LeftText from '../Common/LeftText'
import imgApa from '../../../public/image/projects/apa.png';
import imgBodw from '../../../public/image/projects/bodw.png';
import imgJcg from '../../../public/image/projects/jcg.png';
import imgWtc from '../../../public/image/projects/wtc.png';

export const Projects = () => {

  // - NextJS <br>
  //       - SwiperJS for carousel components <br>
  //       - Megamenu for efficient navigation <br>
  //       - Frontend API integration with backend <br>
  //       - Smart reusable components <br>
  //       - SmartLinks to handle different type of links <br>
  //       - WCAG compliance + Semanatic UI for SEO efficiency <br>
  const projectSectionDescription = `
        At Landor, I contributed to building client-facing websites, web applications, and interactive kiosks focused on performance and user experience. Our work involved developing reusable front-end components, integrating APIs for dynamic content, and implementing advanced navigation systems for intuitive browsing. We also emphasized accessibility (WCAG compliance), semantic markup, and SEO-friendly structures to ensure our digital solutions were inclusive, scalable, and optimized for discovery.
  `;
  const myProjectsData= [
    {
      img: {
        url: imgApa,
      },
      title: 'APA',
      subtitle: 'Something Apa',
      description: `
        Transofmred their outdated website into a dynamic, user-centric experience, fueled by navigation,engagement and efficieny. <br>
        
      `,
      cta: {
        url: 'https://www.apa.com.au/',
        text: 'Click to see'
      },
    },
    {
      img: {
        url: imgBodw,
      },
      title: 'Bodw',
      subtitle: 'Something Bodw',
      description: `Landor & Fitch designed a minimal and modular system to help content discovery and navigation, minimizing design effects that are distracting.`,
      cta: {
        url: 'www.bodw.com',
        text: 'Click to see'
      },
    },
    {
      img: {
        url: imgJcg,
      },
      title: 'JCG',
      subtitle: 'Something Jcg',
      description: `Our team tasked to redesign and rebuilt the site for JCG, that is based in Africa. Our goal is to create a website that reflects the professionalism and expertise of JCG, while also providing a user-friendly an engaging experience for visitors. `,
      cta: {
        url: 'https://januscontinental.com/',
        text: 'Click to see'
      },
    },
    {
      img: {
        url: imgWtc,
      },
      title: 'WTC',
      subtitle: 'Something Jcg',
      description: `Built a dynamic digital directory for both shoppers and businesses, AI powered search assistance, queueing system, interactive wayfinding.`,
      cta: {
        url: '',
        text: 'Click to see'
      },
    },
  ]

  return (
    <div className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <LeftText text='Projects' />
        <div className={styles.right}>
          <p>{projectSectionDescription}</p>
          {
            myProjectsData && myProjectsData.map((item, id) => {
              return(
                <CardImage key={id} {...item}/>
              )
            }) 
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;
'use client'

import React from 'react'
import styles from './Stack.module.scss'
import cn from 'classnames'
// import CardText from '../Common/CardText'
import LeftText from '../Common/LeftText'
import Image from 'next/image'
import StackIcon from "tech-stack-icons";
import MotionIcon from '../../../public/icons/motionicon.png'
import { Tooltip as ReactTooltip } from "react-tooltip";
import useThemeColor from '@/hooks/useThemeColor'

export const Stack = () => {

  const themeColor = useThemeColor();

  const stackData = [
    {
      name:'nextjs2',
      value:'Next.js',
    },
    {
      name:'react',
      value:'React.js',
    },
    {
      name:'html5',
      value:'html5',
    },
    {
      name:'sass',
      value:'SASS',
    },
    {
      name:'typescript',
      value:'TypeScript',
    },
    {
      name:'redux',
      value:'React-redux',
    },
    {
      name:'reactrouter',
      value:'React-router',
    },
    {
      name:'openai',
      value:'OpenAI',
    },
    {
      name:'gsap',
      value:'GSAP',
    },
    {
      name:'js',
      value:'JavaScript',
    },
    {
      name:'github',
      value:'GitHub',
    },
    {
      name:'notion',
      value:'Notion',
    },
    {
      name:'jira',
      value:'Jira',
    },
  ]

  return (
    <div className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <LeftText text='Stack' />

        <div className={styles.right}>
          { stackData && stackData.map((item, id) => {
            const isGsap = item.value === 'GSAP';
            return (
                <div 
                  key={id}
                  data-tooltip-id="techstack"
                  data-tooltip-content={item.value}
                  data-tooltip-place="top"
                >
                  <StackIcon 
                    name={item.name} 
                    variant={themeColor === 'dark' || isGsap ? 'dark' : "light"}
                  />
                </div>
              )
            })
          }
          <Image
            src={MotionIcon}
            width={100}
            height={100}
            alt={'logo of motion'}
            data-tooltip-id="techstack-motion"
            data-tooltip-content="motion"
            data-tooltip-place="top"
          />
          <ReactTooltip id="techstack" />
          <ReactTooltip id="techstack-motion" />

        </div>
      </div>
    </div>
  )
}

export default Stack;
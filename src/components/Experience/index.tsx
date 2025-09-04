'use client'

import React from 'react';
import styles from './Experience.module.scss';
import cn from 'classnames';
import LeftText from '../Common/LeftText';
import 'react-slidedown/lib/slidedown.css';
import Accordion from '../Common/Accordion';
import { useTranslations } from 'next-intl';
import { animate } from '@/utils/Animate';

type IExpierence = {
  company: string;
  position: string;
  responsibilities: string[];
  tags: string[];
  year: string;
}

export const Experience = () => {

  const t = useTranslations('Experience');

  const experienceData = t.raw("data");

  return (
    <div className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <LeftText text={t('title')}/>
        
        {animate(
          <div className={styles.right}>
            {
              experienceData && experienceData.map((acc: IExpierence, id: number) => {
                return (
                  <Accordion {...acc} key={id} id={id}/>
                )
              }
              )
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience;
'use client'
import React, { useState, useEffect, useRef } from 'react'
import cn from 'classnames'
import { useTheme } from "next-themes"

import { SlideDown } from 'react-slidedown';
import styles from './Accordion.module.scss'
import 'react-slidedown/lib/slidedown.css';
import { VscCode } from "react-icons/vsc";
import { gsap } from 'gsap';

type IAccordion = {
  id: number;
  company: string;
  position: string;
  year: string;
  responsibilities: string[];
  tags: string[];
}

export const Accordion = (
  {
    company,
    position,
    year,
    responsibilities,
    // tags,
    id
  }: IAccordion
) => {

  const {theme} = useTheme();

  const [themeColor, setThemeColor] = useState('');
  const [isOpen, setIsOpen] = useState(id === 0);
  
  useEffect(() => {
    if(theme) {
      setThemeColor(theme === 'dark' ? 'darkGrey' : 'lightGrey');
    }
  }, [theme])

  useEffect(() => {
    // Ensure animation happens only after pathRef is available
    if (pathRef.current) {
      const initialPath = isOpen ? chevronUp : chevronDown;
      gsap.set(pathRef.current, { attr: { d: initialPath } });  // Set initial path
    }
  }, [isOpen]);

  const pathRef = useRef(null); 

  const chevronDown = "M6 9l6 6 6-6";
  const chevronUp = "M18 15l-6-6-6 6";

  const toggleAccordion = () => {
    const newPath = isOpen ? chevronDown : chevronUp;
    gsap.to(pathRef.current, { duration: 0.3, attr: { d: newPath } });  // Animate 'd' attribute
    setIsOpen(prev => !prev);  // Toggle the state
  };

  const renderIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          ref={pathRef}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={chevronDown}
        />
      </svg>
    )
  }

  return (
    <div className={styles.accEl}>
      <span className={styles.line} style={{ backgroundColor: themeColor}}/>
      <button
        type='button'
        className={styles.head}
        // onClick={() =>{setIsOpen(p => !p)}}
        onClick={toggleAccordion}
      >
        <div className={styles.textWrapper}>
          <div 
            className={styles.icon}
            style={{ backgroundColor: themeColor}}
          >
            <VscCode />
          </div>
          
          <div>
            <h3 className={styles.titleText}>{company}</h3>
            <div className={styles.titleText}>{position}</div>
            <div className={styles.titleText}>{year}</div>
          </div>
        </div>

        <div className={styles.chevron}>
          {renderIcon()}
        </div>
      </button>
      <SlideDown className={cn(styles.slideDown, 'custom-slidedown')}>
        {
          isOpen && 
          <ul>
            {
              responsibilities && responsibilities.map((item, id) => {

                return( 
                  <li key={id}>
                    {item}
                  </li>
                )
              })
            }
            
          </ul>
        }
        {/* {
          isOpen && 
          <CardText />
        } */}
        
      </SlideDown>
    </div>
  )
}

export default Accordion;
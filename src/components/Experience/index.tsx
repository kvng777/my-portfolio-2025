'use client'

import React from 'react'
import styles from './Experience.module.scss'
import cn from 'classnames'
import LeftText from '../Common/LeftText'
import 'react-slidedown/lib/slidedown.css';
import Accordion from '../Common/Accordion'

export const Experience = () => {

  // const [activeIndex, setActiveIndex] = useState(false);
  
  const experienceData = [
    {
      company: "Landor",
      position: "Front-end Web Developer",
      year: "2021 - 2025",
      responsibilities: [
        "Contributed to the development of responsive, mobile-first websites and web applications using React.js/Next.js.",
        "Ensured dynamic content delivery, performance optimization, and user-friendly experiences across devices.",
        "Built and maintained reusable front-end components to streamline development and improve scalability.",
        "Collaborated with designers, back-end developers, and testers to deliver high-quality digital solutions.",
        "Focused on accessibility (WCAG compliance) and SEO-friendly semantic markup to enhance user reach and experience."
      ],
      tags: [
        "React",
        "NextJs",
        "Redux",
        "GSAP"
      ]
    },
    {
      company: "Imagination",
      position: "Digital Producer",
      year: "2018 - 2021",
      responsibilities: [
        "Planned and executed digital activation projects for major automotive events in China, integrating hardware and software solutions to deliver interactive experiences.",
        "Managed cross-functional teams both locally and globally, ensuring seamless coordination and on-time project delivery.",
        "Oversaw development and deployment of WeChat H5 and Mini Program solutions, aligning digital experiences with event objectives."
      ],
      tags: [
        "Digital Production",
        "Project Management",
        "Hardware & Software Installations",
        "Software Testing"
      ]
    },
    {
      company: "Imagination",
      position: "QA Software Tester",
      year: "2016 - 2021",
      responsibilities: [
        "Conducted manual testing for web and mobile applications to identify bugs, usability issues, and performance bottlenecks.",
        "Created and executed detailed test plans, test cases, and documentation to ensure full coverage of functional requirements.",
        "Performed regression, functional, and user acceptance testing (UAT) to maintain software quality standards.",
        "Reported and tracked defects using tools like JIRA, ensuring clear communication and faster resolution."
      ],
      tags: [
        "Manual Testing",
        "Project Management",
        "Test Case",
        "User Acceptance Testing"
      ]
    },
    {
      company: "Memorieslab",
      position: "QA Software Tester",
      year: "2015 - 2016",
      responsibilities: [
        "Performed manual testing of the company’s website and mobile application to identify bugs and improve user experience.",
        "Documented test cases and reported issues to the development team, ensuring clear communication and timely fixes.",
        "Gained hands-on experience in QA processes, enhancing understanding of web and mobile application functionality."
      ],
      tags: [
        "Manual Testing",
        "Project Management",
        "Test Case",
        "User Acceptance Testing"
      ]
    },
  ]

  return (
    <div className={cn(styles.el, 'padding-outter')}>
      <div className={cn(styles.container, 'padding-inner', 'inner')}>
        <LeftText text='Experience'/>
        
        <div className={styles.right}>
          {
            experienceData && experienceData.map((acc, id) => {
              return (
                <Accordion {...acc} key={id} id={id}/>
              )
            }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Experience;
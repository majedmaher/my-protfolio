'use client'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiAdobephotoshop, SiAdobepremierepro, SiDart, SiFlutter, SiJquery, SiLaravel, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import {motion} from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const about = {
  title: 'About me',
  description: "I am a passionate software developer with expertise in web and mobile development, as well as creative skills in design and video editing. I strive to deliver high-quality, practical, and impactful digital solutions.",
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Majed Ziara'
    },
    {
      fieldName: 'phone',
      fieldValue: '(+972) 595 634 627'
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Palestinian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'majedmaher200@gmail.com'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Arabic, English, Russian'
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "I have professional experience in back-end, front-end, and full-stack development, with additional skills in design, video editing, and mobile app development. I focus on delivering efficient, high-quality, and practical digital solutions.",
  items:[
    {
      company: 'Digo',
      position: 'Full Stack Developer',
      duration: '2021 - 2022'
    },
    {
      company: 'Al-Qeeq Company',
      position: 'PHP Laravel Developer',
      duration: 'Summer 2023'
    },
    {
      company: 'Freelancer',
      position: 'Software Developer',
      duration: '2022 - Present'
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "I have a strong academic background in Information Technology and I am currently preparing to advance my studies in Artificial Intelligence.",
  items:[
    {
      institution: 'Islamic University of Gaza',
      degree: 'Information Technology',
      duration: '2017 - 2021'
    },
    {
      institution: 'Southern Federal University',
      degree: 'Artificial Intelligence',
      duration: '2026 - 2028'
    },
    {
      institution: 'Udemy',
      degree: 'Laravel Course',
      duration: 'Summer 2022'
    },
    {
      institution: 'Online Course',
      degree: 'Photoshop & Premiere Course',
      duration: 'Summer 2023'
    },
    {
      institution: 'Online Course',
      degree: 'Flutter Course',
      duration: 'Summer 2024'
    },
    {
      institution: 'Online Course',
      degree: 'Next.js Course',
      duration: 'Summer 2025'
    },
  ]
}

const skills = {
  title: 'My Skills',
  description: 'I possess a diverse set of technical and creative skills, ranging from back-end and front-end development to graphic design, video editing, and mobile app development. I continuously learn and adapt to new technologies, aiming to deliver high-quality, practical, and impactful solutions.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <SiJquery />,
      name: 'jQuery'
    },
    {
      icon: <FaReact />,
      name: 'react.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <SiLaravel />,
      name: 'laravel'
    },
    {
      icon: <SiFlutter />,
      name: 'flutter'
    },
    {
      icon: <SiDart />,
      name: 'dart'
    },
    {
      icon: <SiAdobephotoshop />,
      name: 'photoshop'
    },
    {
      icon: <SiAdobepremierepro />,
      name: 'premiere'
    },
  ]
}

function Resume() {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
    className='min-h-[80vh] flex items-center justify-center py-12 lg:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col lg:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about-me'>About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=> {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <motion.span initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.5, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse'}}} className='w-[6px] h-[6px] rounded-full bg-accent'></motion.span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index)=> {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <motion.span initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.5, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse'}}} className='w-[6px] h-[6px] rounded-full bg-accent flex-none'></motion.span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full'>
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bol">{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='cursor-pointer w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='about-me' className='w-full text-center lg:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0'>
                  {about.info.map((item, index)=> {
                    return <li key={index} className='flex items-center justify-center lg:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
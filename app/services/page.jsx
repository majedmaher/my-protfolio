'use client'
import { motion } from "framer-motion"
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"

const services = [
  {
    num:'01',
    title: 'Back-End Development',
    description: 'With over 3 years of experience in back-end development using Laravel, I have built complete platforms, payment integrations, admin dashboards, and scalable system architectures. I focus on writing clean, maintainable code, implementing secure REST APIs, and delivering reliable, high-performance solutions.',
    href:''
  },
  {
    num:'02',
    title: 'Front-End Development',
    description: 'I have 3 years of experience in front-end development, in addition to working as a Full-Stack Developer. I create responsive and user-friendly interfaces using HTML, CSS, JavaScript, and jQuery, and I’ve recently started developing modern applications with Next.js. My priority is delivering smooth user experiences with clean and consistent UI.',
    href:''
  },
  {
    num:'03',
    title: 'Graphic Design',
    description: 'I have solid foundational skills in Adobe Photoshop, allowing me to design various social media posts and visual elements. I aim for simple, clean, and visually balanced designs that effectively communicate the intended message.',
    href:''
  },
  {
    num:'04',
    title: 'Motion Graphics',
    description: 'I have basic experience using Adobe Premiere to create short-form content for social media, including reels and promotional videos. I focus on delivering visually appealing edits with clear storytelling and engaging pacing.',
    href:''
  },
]

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 lg:py-0'>
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {services.map((service, index)=> {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">{service.num}</div>
                <Link href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                ><BsArrowDownRight className="text-primary text-3xl" /></Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
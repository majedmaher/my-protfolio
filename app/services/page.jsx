'use client'
import { motion } from "framer-motion"
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"

const services = [
  {
    num:'01',
    title: 'Back-End Development',
    description: 'With over 3 years of experience in back-end development using Laravel, I have built complete platforms, payment workflows, admin dashboards, and scalable system architectures. I focus on writing clean, secure, and maintainable code, with well-structured REST APIs and reliable performance.',
    href:''
  },
  {
    num:'02',
    title: 'Front-End Development',
    description: 'I have 3 years of experience in front-end development, in addition to working as a Full-Stack Developer. I build responsive and interactive user interfaces using HTML, CSS, JavaScript, and jQuery, and I’ve recently been working with Next.js to develop modern, high-performance web applications.',
    href:''
  },
  {
    num:'03',
    title: 'Graphic Design & Video Editing',
    description: 'I have solid foundational skills in Adobe Photoshop and Adobe Premiere, which allow me to design visually appealing social media posts and edit short-form videos such as reels and promotional content. My work focuses on clean visuals, good storytelling, and delivering content that fits the brand identity.',
    href:''
  },
  {
    num:'04',
    title: 'Mobile Development (Flutter)',
    description: 'I’m currently at a beginner level in Flutter development and have successfully built my first mobile application. I continue to learn and expand my skills in building cross-platform apps with clean UI and smooth performance.',
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
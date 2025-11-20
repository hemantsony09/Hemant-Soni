"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X, FileDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { HIGHLIGHT_ITEMS, PROJECTS } from "@/lib/content"

const FEATURED_PROJECTS = PROJECTS.slice(0, 2)

export default function Home() {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container py-10 max-w-4xl mx-auto"
    >
      {/* Hero Section */}
      <section className="py-12 md:py-24 flex flex-col md:flex-row gap-8 items-center">
        <motion.div variants={fadeIn("left", 0.5)} className="flex-1 flex justify-center order-1 md:order-2" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <div
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary cursor-pointer"
            onClick={() => setIsImagePopupOpen(true)}
          >
            <Image 
              src="/profile.jpeg" 
              alt="Hemant Soni" 
              fill 
              className="object-cover" 
              priority
              sizes="(max-width: 768px) 256px, 256px"
              quality={90}
            />
          </div>
        </motion.div>
        <motion.div variants={fadeIn("right", 0.3)} className="flex-1 space-y-6 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter whitespace-nowrap">
            Hi, I'm <span className="text-primary">Hemant Soni</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer skilled in JavaScript, ReactJS, NodeJS and MongoDB. Proficient in building and
            optimizing web applications, and delivering seamless user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download className="flex items-center gap-2">
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="marquee border-y border-border py-3 my-6">
        <div className="marquee__content text-lg md:text-xl font-semibold tracking-tight">
          {HIGHLIGHT_ITEMS.concat(HIGHLIGHT_ITEMS).map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3 px-4">
              {item}
              <span className="text-primary">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* Image Popup */}
      <AnimatePresence>
        {isImagePopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsImagePopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-15 right-0 text-white hover:text-white/80"
                onClick={() => setIsImagePopupOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="relative aspect-square w-full max-w-2xl mx-auto">
                <Image
                  src="/profile.jpeg"
                  alt="Hemant Soni"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <motion.section variants={fadeIn("up", 0.7)} className="py-12 border-t">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-4">
          <p>
            I'm a passionate Full Stack Developer with expertise in modern web technologies. My journey in web
            development started during my BCA studies, where I specialized in Full Stack Web Design and Development.
          </p>
          <p>
            Previously, I worked at KLobTech in Jaipur where I had the opportunity to work on various exciting projects that
            enhanced my skills in ReactJS, Material UI, and Tailwind CSS. Currently, I'm pursuing my Master of Computer Applications (MCA) 
            while continuing to build responsive and user-friendly interfaces that provide seamless experiences.
          </p>
          <p>
            When I'm not coding, I'm constantly learning new technologies and frameworks to stay updated with the
            ever-evolving tech landscape.
          </p>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section variants={fadeIn("up", 0.9)} className="py-12 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="ghost" asChild className="group">
            <Link href="/projects" className="flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project) => {
            const viewHref = project.liveUrl ?? project.githubUrl ?? "/projects"
            const githubHref = project.githubUrl ?? "/projects"
            const isExternalView = Boolean(project.liveUrl || project.githubUrl)
            const isGithubExternal = Boolean(project.githubUrl)

            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={viewHref}
                      target={isExternalView ? "_blank" : undefined}
                      rel={isExternalView ? "noreferrer" : undefined}
                    >
                      View Project
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={githubHref}
                      target={isGithubExternal ? "_blank" : undefined}
                      rel={isGithubExternal ? "noreferrer" : undefined}
                    >
                      GitHub
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={fadeIn("up", 1.1)}
        className="py-12 border-t flex flex-col items-center text-center space-y-6"
      >
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          I'm currently open to new opportunities and collaborations. If you're looking for a dedicated developer to
          join your team or help with your project, let's connect!
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
      </motion.section>
    </motion.div>
  )
}

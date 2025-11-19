"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { PageTitle } from "@/components/page-title"
import { PROJECTS } from "@/lib/content"

export default function ProjectsPage() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container py-10 max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 -ml-4 group">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
        <PageTitle title="Projects" subtitle="Showcasing my recent work and contributions" />
      </div>

      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", 0.3 + index * 0.2)}
            className="flex flex-col lg:flex-row gap-8 items-stretch rounded-2xl border bg-card/40 p-4 md:p-6 hover:border-primary/30 transition-colors w-full h-full"
          >
            <motion.div
              className="w-full lg:w-1/2 relative overflow-hidden rounded-xl border bg-background/60 min-h-[260px] h-full"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.12)" }} />
            </motion.div>

            <div className="flex-1 space-y-4 h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Featured Project</p>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

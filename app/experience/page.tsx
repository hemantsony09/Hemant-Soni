"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { PageTitle } from "@/components/page-title"

export default function ExperiencePage() {
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
        <PageTitle title="Work Experience" subtitle="My professional journey and roles" />
      </div>

      <div className="space-y-12">
        <motion.div variants={fadeIn("up", 0.3)} className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <div className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Nov 2024 – Present</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>KLobTech – Jaipur</span>
            </div>
            <ul className="list-disc pl-5 space-y-4">
              <li className="animate-item">
                <p>
                  Built <span className="font-medium">WorkSync</span> using ReactJS, Material UI, and Tailwind CSS.
                  Enhanced task management, attendance tracking, and scheduling with real-time updates, boosting
                  efficiency by 25% and engagement by 30%.
                </p>
              </li>
              <li className="animate-item">
                <p>
                  Built <span className="font-medium">KLobTech website</span> using React, Material UI, and Tailwind
                  CSS. Ensured a responsive UI and optimized SEO strategies, improving search visibility and user
                  engagement.
                </p>
              </li>
              <li className="animate-item">
                <p>
                  Developed <span className="font-medium">Decore Hub</span>, built with React, Material UI, and Tailwind
                  CSS. Designed a responsive UI with smooth animations using Carousel and Framer Motion, allowing admins
                  to post, delete, and set product pricing seamlessly.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.5)} className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">ReactJS Intern</h3>
              <div className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Feb 2024 – Jun 2024</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Ethereal Softech Pvt. Ltd – Jaipur</span>
            </div>
            <ul className="list-disc pl-5 space-y-4">
              <li className="animate-item">
                <p>
                  Worked on <span className="font-medium">Meri Pasand</span>, a matrimonial website, collaborating with
                  the team to manage and develop the frontend using Liquid.js and jQuery, ensuring a seamless and
                  responsive user experience.
                </p>
              </li>
              <li className="animate-item">
                <p>
                  Implemented real-time update features for a <span className="font-medium">parking management</span>{" "}
                  React application using Firebase and Redux, increasing user engagement by 20% and improving system
                  efficiency by 15%, while effectively managing all user data.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.7)} className="relative pl-8">
          <div className="absolute w-4 h-4 bg-primary/50 rounded-full -left-[9px] top-0"></div>
          <div className="p-6 border border-dashed rounded-lg">
            <h3 className="text-xl font-bold mb-4">What's Next?</h3>
            <p className="text-muted-foreground">
              I'm always open to new opportunities and challenges. If you think I'd be a good fit for your team, let's
              connect!
            </p>
            <Button className="mt-4" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

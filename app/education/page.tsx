"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, GraduationCap, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { PageTitle } from "@/components/page-title"
import { CERTIFICATIONS, EDUCATION_HISTORY } from "@/lib/content"

export default function EducationPage() {

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
        <PageTitle title="Education & Certifications" subtitle="My academic background and professional development" />
      </div>

      <div className="space-y-12">
        <motion.section variants={fadeIn("up", 0.3)}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {EDUCATION_HISTORY.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.4 + index * 0.1)}
                className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{item.institution}</p>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeIn("up", 0.6)}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>

          <div className="space-y-8">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.7 + index * 0.1)}
                className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">Issued by {cert.issuer}</p>
                <p>{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div variants={fadeIn("up", 0.9)} className="p-6 border border-dashed rounded-lg mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground">
            I'm committed to lifelong learning and constantly expanding my knowledge in web development and related
            technologies.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

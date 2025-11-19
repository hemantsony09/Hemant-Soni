"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { PageTitle } from "@/components/page-title"
import { LEARNING_PILLARS, LEETCODE_PROFILE_URL, SKILL_CATEGORIES } from "@/lib/content"

export default function SkillsPage() {

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container py-10 max-w-5xl mx-auto"
    >
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 -ml-4 group">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
        <PageTitle title="Skills & Expertise" subtitle="My technical skills and proficiencies" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", 0.3 + categoryIndex * 0.2)}
            className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skillName, skillIndex) => (
                <motion.div
                  key={skillName}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + skillIndex * 0.1 }}
                  className="flex items-center justify-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span className="font-medium text-center">{skillName}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", 1)}
        className="mt-16 p-8 border rounded-xl bg-card shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-primary">My Learning Approach</h2>
        <p className="text-muted-foreground mb-6">
          I believe in continuous learning and staying updated with the latest technologies. My approach to mastering
          new skills includes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEARNING_PILLARS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              {item.linkHref && item.linkLabel && (
                <Link
                  href={item.linkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  {item.linkLabel}
                  <span aria-hidden="true" className="text-xs">&rarr;</span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 1.2)}
        className="mt-12 text-center p-6 border rounded-xl bg-muted/40"
      >
        <p className="text-lg font-semibold mb-3">Want to see my coding streak?</p>
        <p className="text-muted-foreground mb-4">
          Explore my LeetCode profile to check out my recent problem-solving activity.
        </p>
        <Link
          href={LEETCODE_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          Visit my LeetCode profile
          <span aria-hidden="true" className="text-sm">&rarr;</span>
        </Link>
      </motion.div>
    </motion.div>
  )
}

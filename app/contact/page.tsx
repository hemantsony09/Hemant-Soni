"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Code2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { PageTitle } from "@/components/page-title"
import { useToast } from "@/hooks/use-toast"
import { LEETCODE_PROFILE_URL } from "@/lib/content"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Open default mail client
    const mailtoLink = `mailto:Hemantsoni252004@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.open(mailtoLink, "_blank")

    setIsSubmitting(false)
  }

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
        <PageTitle
          title="Contact Me"
          subtitle="Get in touch for opportunities or collaborations"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div variants={fadeIn("right", 0.3)} className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground">
              Feel free to reach out to me for any opportunities, collaborations,
              or just to say hello!
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:Hemantsoni252004@gmail.com"
                  className="text-primary hover:underline"
                >
                  Hemantsoni252004@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+917878796743" className="hover:underline">
                  +91 7878796743
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p>Noida, India</p>
              </div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/hemantsony09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/hemantsony09
                </a>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">GitHub</h4>
                <a
                  href="https://github.com/hemantsony09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/hemantsony09
                </a>
              </div>
            </motion.div>

            {/* LeetCode */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">LeetCode</h4>
                <a
                  href={LEETCODE_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  leetcode.com/u/Hemantsony09
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div variants={fadeIn("left", 0.5)}>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Subject"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md resize-none bg-background"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

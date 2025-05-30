"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, MapPin, Code, Database, Globe, Shield, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projects = [
    {
      title: "Restaurant POS System",
      description:
        "A complete point-of-sale system built with Next.js, featuring order management, inventory tracking, and sales analytics.",
      tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-400 to-blue-500",
    },
    {
      title: "Library Management System",
      description:
        "A comprehensive library management system developed in C, handling book cataloging, member management, and lending operations.",
      tech: ["C", "SQLite", "Data Structures"],
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Digital Forensics Toolkit",
      description:
        "Python-based toolkit for digital forensics investigations, including file recovery, metadata analysis, and evidence collection.",
      tech: ["Python", "Cryptography", "File Systems"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-400 to-orange-500",
    },
    {
      title: "Portfolio Website",
      description:
        "This responsive portfolio website showcasing my projects and skills, built with modern web technologies.",
      tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-400 to-teal-500",
    },
    {
      title: "Air Pollution Monitoring",
      description:
        "Innovative IoT solution concept for monitoring air quality in Rwanda, combining sensors with data visualization.",
      tech: ["IoT", "Data Analysis", "Environmental Tech"],
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
    },
  ]

  const skills = {
    "Programming Languages": ["C", "Python", "JavaScript", "PHP", "HTML/CSS", "TypeScript"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    "Tools & Technologies": ["Git", "GitHub", "SQLite", "MongoDB", "VS Code", "Linux"],
    "Interests & Specialties": ["Digital Forensics", "Web Development", "Data Structures", "Environmental Tech"],
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-bold text-xl bg-gradient-to-r from-green-400 to-gold-400 bg-clip-text text-transparent"
              >
                Edouard T.
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.1 }}
                    className="hover:text-green-400 transition-colors duration-200"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>

                <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 space-y-2">
                {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 hover:text-green-400 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-gold-400/10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-green-400 to-gold-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">ET</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-green-400 to-gold-400 bg-clip-text text-transparent">
                Edouard Tuyubahe
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Full Stack Web Developer & Future Tech Innovator
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              A calm, focused student at Rwanda Coding Academy with a passion for web development, digital forensics,
              and air pollution reduction through tech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-gold-400 hover:from-green-500 hover:to-gold-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-green-400 to-gold-400 bg-clip-text text-transparent">Me</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a dedicated student at <strong>Rwanda Coding Academy</strong>, where I'm honing my skills in
                  software development and exploring the endless possibilities of technology. My journey in tech is
                  driven by curiosity and a desire to create solutions that make a real difference.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  My passion spans across <strong>web development</strong>, where I build responsive and user-friendly
                  applications, <strong>digital forensics</strong>, where I explore cybersecurity and data analysis, and{" "}
                  <strong>environmental technology</strong>, particularly in developing solutions for air pollution
                  monitoring and reduction.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me diving deep into mathematics, exploring new programming languages,
                  or cheering for Arsenal and Real Madrid. I believe in the power of technology to transform communities
                  and am committed to being part of Rwanda's growing tech ecosystem.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-green-400 to-gold-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of the projects I've worked on, showcasing my skills in various technologies and domains.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {project.icon}
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-green-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-green-400 to-gold-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and areas of expertise.
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-center mb-4">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {skillList.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-green-400/10 to-gold-400/10 rounded-xl text-center font-medium hover:from-green-400/20 hover:to-gold-400/20 transition-all duration-300"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
                Get In{" "}
                <span className="bg-gradient-to-r from-green-400 to-gold-400 bg-clip-text text-transparent">Touch</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold mb-4">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-gold-400 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">edouard.tuyubahe@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-gold-400 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-600 dark:text-gray-300">Kigali, Rwanda</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-gold-400 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Institution</p>
                        <p className="text-gray-600 dark:text-gray-300">Rwanda Coding Academy</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold mb-4">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <Input
                          placeholder="Your Name"
                          className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-400"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-400"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-400"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-400 to-gold-400 hover:from-green-500 hover:to-gold-500 text-white rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-gold-400 bg-clip-text text-transparent">
                  Edouard Tuyubahe
                </h3>
                <p className="text-gray-400 mt-2">Full Stack Developer & Tech Innovator</p>
              </div>

              <div className="flex space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-400 to-gold-400 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-400 to-gold-400 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-400 to-gold-400 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2024 Edouard Tuyubahe. All rights reserved. | Built with ❤️ in Rwanda</p>
              <p className="text-gray-500 text-sm mt-2">Arsenal & Real Madrid fan | Future Tech Innovator</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

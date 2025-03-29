"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Lottie from "lottie-react"
import networkAnimation from "@/animations/network-animation.json"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const services = [
    "Custom Software Development",
    "Web & Mobile App Development",
    "AI & Data Solutions",
    "Cloud & DevOps",
    "Cybersecurity & IoT",
  ]

  useEffect(() => {
    const currentService = services[currentServiceIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentService.substring(0, displayText.length + 1))
        setTypingSpeed(100)

        if (displayText.length === currentService.length) {
          setTypingSpeed(1500)
          setIsDeleting(true)
        }
      } else {
        setDisplayText(currentService.substring(0, displayText.length - 1))
        setTypingSpeed(50)

        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentServiceIndex((currentServiceIndex + 1) % services.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, currentServiceIndex, isDeleting, services, typingSpeed])

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-gray-900 overflow-hidden px-6"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center md:text-left px-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  SentientWare
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white/90">Tech Solution Pvt Ltd</h2>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-4xl font-bold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
                Brings Ideas To Life
              </span>
            </motion.h3>

            <div className="h-16 mb-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                <h4 className="text-xl font-semibold text-teal-400">
                  {displayText}
                  <span className="inline-block w-0.5 h-5 bg-teal-400 ml-1 animate-pulse"></span>
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="#services"
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center gap-2 group"
              >
                Explore Services
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="bg-transparent border border-teal-400 text-teal-400 px-6 py-3 rounded-full font-medium hover:bg-teal-400/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center px-4">
            <div className="relative w-full max-w-md">
              <Lottie animationData={networkAnimation} className="w-full h-full" loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

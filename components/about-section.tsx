"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    "Innovative Technology Solutions",
    "Expert Team of Developers",
    "Client-Focused Approach",
    "Agile Development Methodology",
    "Continuous Support & Maintenance",
    "Cutting-Edge Technologies",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-[30%] w-96 h-96 rounded-full bg-teal-500/5 blur-3xl"></div>
        <div className="absolute top-40 left-[20%] w-80 h-80 rounded-full bg-red-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-[25%] w-72 h-72 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Glowing effects */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-2xl blur"></div>
                <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Digital Network Visualization"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                SentientWare
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mb-6"></div>

            <p className="text-gray-300 mb-6">
              SentientWare Tech Solution Pvt Ltd is a leading technology company specializing in custom software
              development, web and mobile applications, AI solutions, cloud infrastructure, and cybersecurity.
            </p>

            <p className="text-gray-300 mb-8">
              Our mission is to empower businesses with innovative technology solutions that drive growth, efficiency,
              and competitive advantage in today's digital landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <CheckCircle2 className="text-teal-400 h-5 w-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="bg-transparent border border-teal-400 text-teal-400 px-6 py-3 rounded-full font-medium hover:bg-teal-400/10 transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


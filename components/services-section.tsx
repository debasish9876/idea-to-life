"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, Database, Cloud, Shield } from "lucide-react"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: <Code className="w-16 h-16 text-teal-400" />,
      title: "Custom Software Development",
      description:
        "SentientWare Tech solutions designed to meet your specific business needs and challenges. We build scalable, maintainable applications that grow with your business.",
    },
    {
      icon: <Smartphone className="w-16 h-16 text-teal-400" />,
      title: "Web & Mobile App Development",
      description:
        "Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices and platforms.",
    },
    {
      icon: <Database className="w-16 h-16 text-teal-400" />,
      title: "AI & Data Solutions",
      description:
        "Harness the power of artificial intelligence and data analytics to drive business insights and automate complex processes.",
    },
    {
      icon: <Cloud className="w-16 h-16 text-teal-400" />,
      title: "Cloud & DevOps",
      description:
        "Scalable cloud infrastructure and DevOps practices for efficient software delivery and continuous improvement.",
    },
    {
      icon: <Shield className="w-16 h-16 text-teal-400" />,
      title: "Cybersecurity & IoT",
      description:
        "Secure your digital assets and implement connected IoT solutions for the modern enterprise in an increasingly complex threat landscape.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-[30%] w-96 h-96 rounded-full bg-teal-500/5 blur-3xl"></div>
        <div className="absolute top-40 right-[20%] w-80 h-80 rounded-full bg-red-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive technology solutions to help businesses transform, innovate, and thrive in the
              digital era.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all group hover:shadow-lg hover:shadow-teal-500/5"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>

              <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 mt-4 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


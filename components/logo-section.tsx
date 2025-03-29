"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function LogoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Blurred background logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-[800px] h-[800px] transform scale-150">
            <Image src="/final.png" alt="SentientWare Logo Background" fill className="object-contain blur-2xl" />
          </div>
        </div>

        {/* Glowing effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <Image
              src="/final.png"
              alt="SentientWare Logo"
              width={400}
              height={400}
              className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400"
          >
            SentientWare
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mt-6"
          ></motion.div>
        </div>
      </div>
    </section>
  )
}


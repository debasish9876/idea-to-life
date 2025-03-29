"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  GraduationCap,
  Code,
  Briefcase,
  ArrowRight,
  Brain,
  Database,
  Shield,
  Smartphone,
  Palette,
  Award,
  FileText,
  FileCheck,
} from "lucide-react"

export default function InternshipsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const internshipDomains = [
    {
      title: "Web Development",
      icon: <Code className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "Android Development",
      icon: <Smartphone className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "Data Science",
      icon: <Database className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "Java Programming",
      icon: <FileText className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "Python Programming",
      icon: <FileText className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "C++ Programming",
      icon: <FileText className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-10 h-10 text-teal-400" />,
    },
  ]

  const perks = [
    {
      title: "Offer Letter",
      description: "Confirmation of your internship selection",
      icon: <FileCheck className="w-12 h-12 text-teal-400" />,
    },
    {
      title: "Internship Certificate",
      description: "Proof of successful completion",
      icon: <Award className="w-12 h-12 text-teal-400" />,
    },
    {
      title: "Letter of Recommendation",
      description: "Based on your performance",
      icon: <FileText className="w-12 h-12 text-teal-400" />,
    },
  ]

  const durations = [
    {
      days: "30 Days",
      fee: "₹129",
    },
    {
      days: "45 Days",
      fee: "₹189",
    },
    {
      days: "60 Days",
      fee: "₹249",
    },
  ]

  return (
    <section
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      ref={ref}
      id="internships"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[30%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-[20%] w-96 h-96 rounded-full bg-teal-500/5 blur-3xl"></div>
        <div className="absolute top-40 right-[30%] w-80 h-80 rounded-full bg-red-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-[25%] w-72 h-72 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <GraduationCap className="text-teal-400" />
              <span>
                Join Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Internship
                </span>{" "}
                Program
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              SentientWare Tech Solutions offers a virtual internship program designed to provide hands-on learning and
              real-world experience across various domains. This program equips interns with practical skills and
              industry exposure to help them grow in the tech field.
            </p>
          </motion.div>
        </div>

        {/* Available Domains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all hover:shadow-lg hover:shadow-teal-500/5">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-teal-400">🔹</span> Available Domains:
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {internshipDomains.map((domain, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  {domain.icon}
                  <span className="text-white font-medium">{domain.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-gray-300">
              <p>
                Interns will work on domain-specific tasks, applying their knowledge to complete real-world challenges
                within the given timeframe. Upon successful completion, they will receive official certification
                recognizing their dedication and contribution to the program.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all hover:shadow-lg hover:shadow-teal-500/5">
            <h3 className="text-2xl font-bold mb-6 text-white">Perks You Will Receive:</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg">
                  <div className="mb-4 transform hover:scale-110 transition-transform duration-300">{perk.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{perk.title}</h4>
                  <p className="text-gray-400">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Durations & Fees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all hover:shadow-lg hover:shadow-teal-500/5">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-teal-400">📢</span> Internship Durations & Fees:
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {durations.map((duration, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 rounded-xl text-center border border-gray-600/30 hover:border-teal-500/30 transition-all hover:transform hover:scale-105"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{duration.days}</h4>
                  <p className="text-2xl font-bold text-teal-400">{duration.fee}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Apply Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-10 h-10 text-teal-400" />
              <h3 className="text-2xl font-bold text-white">Ready to apply?</h3>
            </div>

            <p className="text-gray-300 mb-8">
              We're looking for passionate individuals who are eager to learn and grow with us. Submit your application
              today and take the first step towards an exciting career in technology.
            </p>

            <a
              href="https://forms.gle/ezUgLA7j5NmPibdQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center gap-2 w-fit mx-auto text-lg animate-pulse hover:animate-none"
            >
              Apply Now
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


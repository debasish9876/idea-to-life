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
      price: "₹1500",
      icon: <Code className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/5m3Dn48LUYBuSn7r9",
      description:
        "Master HTML, CSS, JavaScript, React and backend technologies. Build responsive websites and dynamic web applications from scratch.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    },
    {
      title: "App Development",
      price: "₹1500",
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/SibJTcASiyRnfAus5",
      description:
        "Learn to build native Android applications using Java and Kotlin. Develop UI/UX, implement APIs and publish apps to the Play Store.",
      skills: ["Java", "Kotlin", "Android SDK", "API Integration"],
    },
    {
      title: "Data Science",
      price: "₹1500",
      icon: <Database className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/C8dEJ5ghF9z676pn9",
      description:
        "Analyze complex datasets, create visualizations, and extract meaningful insights using statistical methods and machine learning.",
      skills: ["Python", "Data Analysis", "Visualization", "Statistics"],
    },
    {
      title: "Java Programming",
      price: "₹1300",
      icon: <FileText className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/LAKBTx11PTqUCJ668",
      description:
        "Become proficient in Java programming, OOP concepts, data structures, and enterprise application development with Spring Boot.",
      skills: ["Core Java", "OOP", "Spring Boot", "Databases"],
    },
    {
      title: "Python Programming",
      price: "₹1300",
      icon: <FileText className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/2nJgch8AseGZJV8r6",
      description:
        "Learn Python from basics to advanced concepts. Build applications, automate tasks, and explore libraries for various domains.",
      skills: ["Core Python", "Libraries", "Automation", "Web Scraping"],
    },
    {
      title: "Graphics Design",
      price: "₹1000",
      icon: <Palette className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/11qa4mrEfU2qxTkv7",
      description:
        "Create stunning user interfaces and seamless user experiences. Master design tools and principles to build intuitive digital products.",
      skills: ["Figma", "Design Principles", "Prototyping", "User Research"],
    },
    {
      title: "AI & Machine Learning",
      price: "₹1500",
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/HuQiCcT1Pm2d1SjH7",
      description:
        "Dive into artificial intelligence algorithms, neural networks, and machine learning models to solve complex real-world problems.",
      skills: ["TensorFlow", "PyTorch", "Neural Networks", "NLP"],
    },
    {
      title: "Cybersecurity",
      price: "₹1500",
      icon: <Shield className="w-10 h-10 text-blue-400" />,
      formLink: "https://forms.gle/5CuKYHGfWMELu6xA7",
      description:
        "Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats and attacks.",
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Assessment"],
    },
  ]

  const perks = [
    {
      title: "Offer Letter",
      description: "Confirmation of your internship selection",
      icon: <FileCheck className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Internship Certificate",
      description: "Proof of successful completion",
      icon: <Award className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Letter of Recommendation",
      description: "Based on your performance",
      icon: <FileText className="w-12 h-12 text-blue-400" />,
    },
  ]

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden" ref={ref} id="internships">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[30%] w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-40 right-[20%] w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute top-40 right-[30%] w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-[25%] w-72 h-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-100 flex items-center justify-center gap-3">
              <GraduationCap className="text-blue-400" />
              <span>
                Join Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Internship
                </span>{" "}
                Program
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-100 flex items-center gap-2">
              <span className="text-blue-400">🔹</span> Available Domains:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internshipDomains.map((domain, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-400 h-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-900/40 rounded-lg">{domain.icon}</div>
                    <span className="text-gray-100 font-medium">{domain.title}</span>
                  </div>

                  <div className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                    {domain.price}
                    <span className="text-sm font-normal text-gray-400">for 2 months</span>
                  </div>

                  <p className="text-gray-300 text-sm mt-2 flex-grow">{domain.description}</p>

                  <div className="mt-3">
                    <h5 className="text-gray-200 text-sm font-medium mb-2">Skills you'll gain:</h5>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={domain.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 text-gray-300 bg-blue-900/20 p-4 rounded-lg border border-blue-900/40">
              <p>
                <strong>Program Duration:</strong> Two-month program from May 15th to July 15th. Interns will work on
                domain-specific tasks and receive live classes from industry experts, applying their knowledge to
                complete real-world challenges. Upon successful completion, they will receive official certification.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-100">Perks You Will Receive:</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-700 border border-gray-600 hover:border-blue-400 hover:bg-blue-900/30 transition-colors"
                >
                  <div className="mb-4 transform hover:scale-110 transition-transform duration-300">{perk.icon}</div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">{perk.title}</h4>
                  <p className="text-gray-300">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Program Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-100 flex items-center gap-2">
              <span className="text-blue-400">📢</span> Program Highlights:
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-all hover:transform hover:scale-105 duration-300">
                <h4 className="text-xl font-bold text-gray-100 mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  Duration
                </h4>
                <p className="text-gray-300">Two months intensive program from May 15th to July 15th</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-all hover:transform hover:scale-105 duration-300">
                <h4 className="text-xl font-bold text-gray-100 mb-2 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  Expert Guidance
                </h4>
                <p className="text-gray-300">Live interactive classes from industry experts with years of experience</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-xl transition-all hover:transform hover:scale-105 duration-300">
                <h4 className="text-xl font-bold text-gray-100 mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Hands-on Projects
                </h4>
                <p className="text-gray-300">
                  Work on real-world projects to build a portfolio that stands out to employers
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Apply Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-10 h-10 text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-100">Ready to apply?</h3>
            </div>

            <p className="text-gray-300 mb-8">
              We're looking for passionate individuals who are eager to learn and grow with us. Choose your domain of
              interest above and submit your application today to take the first step towards an exciting career in
              technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

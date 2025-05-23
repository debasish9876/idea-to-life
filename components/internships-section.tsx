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
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function InternshipsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Previous internship domains (for verification)
  const previousInternshipDomains = [
    {
      title: "Web Development",
      price: "₹1500",
      icon: <Code className="w-10 h-10 text-blue-400" />,
      description:
        "Master HTML, CSS, JavaScript, React and backend technologies. Build responsive websites and dynamic web applications from scratch.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    },
    {
      title: "App Development",
      price: "₹1500",
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
      description:
        "Learn to build native Android applications using Java and Kotlin. Develop UI/UX, implement APIs and publish apps to the Play Store.",
      skills: ["Java", "Kotlin", "Android SDK", "API Integration"],
    },
    {
      title: "Data Science",
      price: "₹1500",
      icon: <Database className="w-10 h-10 text-blue-400" />,
      description:
        "Analyze complex datasets, create visualizations, and extract meaningful insights using statistical methods and machine learning.",
      skills: ["Python", "Data Analysis", "Visualization", "Statistics"],
    },
    {
      title: "Java Programming",
      price: "₹1300",
      icon: <FileText className="w-10 h-10 text-blue-400" />,
      description:
        "Become proficient in Java programming, OOP concepts, data structures, and enterprise application development with Spring Boot.",
      skills: ["Core Java", "OOP", "Spring Boot", "Databases"],
    },
    {
      title: "Python Programming",
      price: "₹1300",
      icon: <FileText className="w-10 h-10 text-blue-400" />,
      description:
        "Learn Python from basics to advanced concepts. Build applications, automate tasks, and explore libraries for various domains.",
      skills: ["Core Python", "Libraries", "Automation", "Web Scraping"],
    },
    {
      title: "Graphics Design",
      price: "₹1000",
      icon: <Palette className="w-10 h-10 text-blue-400" />,
      description:
        "Create stunning user interfaces and seamless user experiences. Master design tools and principles to build intuitive digital products.",
      skills: ["Figma", "Design Principles", "Prototyping", "User Research"],
    },
    {
      title: "AI & Machine Learning",
      price: "₹1500",
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      description:
        "Dive into artificial intelligence algorithms, neural networks, and machine learning models to solve complex real-world problems.",
      skills: ["TensorFlow", "PyTorch", "Neural Networks", "NLP"],
    },
    {
      title: "Cybersecurity",
      price: "₹1500",
      icon: <Shield className="w-10 h-10 text-blue-400" />,
      description:
        "Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats and attacks.",
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Assessment"],
    },
  ]

  // New certificate-only options
  const certificateOptions = [
    {
      duration: "2 Months",
      price: "₹2199",
      icon: <FileCheck className="w-12 h-12 text-green-400" />,
      includes: ["Certificate of Internship", "Letter of Completion", "Official Documentation"],
      popular: false,
    },
    {
      duration: "3 Months",
      price: "₹3499",
      icon: <FileCheck className="w-12 h-12 text-blue-400" />,
      includes: ["Certificate of Internship", "Letter of Completion", "Official Documentation"],
      popular: true,
    },
    {
      duration: "6 Months",
      price: "₹4999",
      icon: <FileCheck className="w-12 h-12 text-purple-400" />,
      includes: ["Certificate of Internship", "Letter of Completion", "Official Documentation"],
      popular: false,
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
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Internship
                </span>{" "}
                Programs
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              SentientWare Tech Solutions offers flexible internship programs designed to meet your career needs. 
              Choose from our certificate-only options or view our completed training programs.
            </p>
          </motion.div>
        </div>

        {/* NEW: Certificate-Only Internship Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl border border-green-500/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-gray-100">
                Remote Internship Opportunities 
                <span className="text-green-400 ml-2">(Now Open)</span>
              </h3>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 mb-6">
              <p className="text-gray-300">
                <strong>📝 Note:</strong> Join our structured remote internship program featuring one-on-one mentoring, real-world project exposure, weekly progress reviews, and direct guidance from industry experts. Flexible duration options available to accommodate your schedule and career goals.
              </p>
            </div>

            <p className="text-gray-300 mb-8">
              We now offer flexible internship durations for students who only require certificates and official 
              documentation. Choose your preferred duration:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {certificateOptions.map((option, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 ${
                    option.popular 
                      ? 'border-blue-400 ring-2 ring-blue-400/50' 
                      : 'border-gray-700 hover:border-blue-400'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">{option.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-100 mb-2">{option.duration}</h4>
                    <div className="text-3xl font-bold text-blue-400 mb-4">{option.price}</div>
                    
                    <div className="space-y-2 mb-6">
                      {option.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://forms.gle/9YizDk3ErqyLV36G6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
              >
                Register Now
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Previous Internship Program (Closed) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-600 shadow-lg opacity-90">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold text-gray-100">
                Previous Internship Program 
                <span className="text-orange-400 ml-2">(Closed)</span>
              </h3>
            </div>

            <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30 mb-6">
              <p className="text-gray-300">
                <strong>Internship Batch:</strong> May 15 – July 15, 2025 (Completed)<br />
                <strong>Fees:</strong> ₹1300 - ₹1500<br />
                <strong>Includes:</strong> Training, project guidance, certificate<br />
                <strong>Status:</strong> Program Completed
              </p>
              <p className="text-sm text-orange-300 mt-2">
                <em>This section remains for verification and transparency. If you were part of this batch and need 
                certificate verification, please contact us.</em>
              </p>
            </div>

            <h4 className="text-xl font-bold mb-4 text-gray-200">Domains That Were Offered:</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {previousInternshipDomains.map((domain, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 opacity-75"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-gray-600 rounded">{domain.icon}</div>
                    <span className="text-gray-200 font-medium text-sm">{domain.title}</span>
                  </div>
                  
                  <div className="text-lg font-bold text-blue-400 mb-2">{domain.price}</div>
                  
                  <p className="text-gray-400 text-xs mb-2">{domain.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {domain.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-gray-400 bg-gray-700/30 p-4 rounded-lg border border-gray-600">
              <p className="text-sm">
                <strong>Program Details:</strong> This was a comprehensive two-month program where interns received 
                domain-specific training, worked on real-world projects, and attended live classes from industry experts. 
                All participants who successfully completed the program received official certification.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What You Get Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-100">What You Get With Our Certificate Program:</h3>

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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/30 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center justify-center gap-2">
              <Briefcase className="w-8 h-8 text-blue-400" />
              Ready to Start Your Professional Journey?
            </h3>
            
            <p className="text-gray-300 mb-6">
              Pick your preferred duration and start building real-world experience through our comprehensive remote internship program. Receive personalized mentorship, work on live projects, and earn official cirtificates & other accessories that enhance your professional profile.
            </p>
            
            <a
              href="https://forms.gle/9YizDk3ErqyLV36G6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              Apply Now
              <ArrowRight size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

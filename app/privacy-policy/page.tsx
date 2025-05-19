// app/privacy-policy/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Privacy Policy | SentientWare Tech Solution Pvt. Ltd.',
  description: 'Official privacy policy, confidentiality guidelines, and legal terms for SentientWare Tech Solution Pvt. Ltd.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header banner */}
      <div className="bg-[#031B4E] text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="mr-4 relative w-16 h-16">
              <Image 
                src="/../final.png" 
                alt="SentientWare Logo" 
                width={64} 
                height={64} 
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <p className="text-blue-200">
              <span className="font-medium">Effective Date:</span> May 19, 2025
            </p>
            <p className="text-blue-200 mt-2 md:mt-0">
              <span className="font-medium">Website:</span>{" "}
              <a href="https://sentientware.in" className="underline hover:text-white transition-colors">
                https://sentientware.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to SentientWare Tech Solution Pvt. Ltd. We are committed to protecting your personal and business information while maintaining a transparent and trustworthy business relationship.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This Privacy Policy outlines the terms under which we collect, use, store, and disclose data, as well as legal terms including Non-Disclosure, client conduct, and our refund policy.
          </p>
        </div>

        {/* Information Collection card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">We may collect the following information:</p>
          <ul className="space-y-3">
            {[
              "Personal details (name, email, phone)",
              "Business information (company name, requirements, scope)",
              "Technical data (IP address, browser type, etc.)",
              "Communication records (email, support chat, call logs)"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 text-[#1E5EF5] rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Information Usage card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
            How We Use Your Information
          </h2>
          <ul className="space-y-3">
            {[
              "Deliver services as per agreements or contracts",
              "Provide customer support and updates",
              "Analyze system performance and improve our services",
              "Send important notices, including updates or legal changes"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 text-[#1E5EF5] rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Confidentiality card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10 border-l-4 border-[#1E5EF5]">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
            Confidentiality & Non-Disclosure (NDA)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We understand the critical importance of confidentiality in business relationships. <span className="font-semibold">All communications, project data, deliverables, source code, documentation, and business insights shared with us are treated as strictly confidential.</span>
          </p>
          <p className="text-gray-700 font-medium mb-3">We commit that:</p>
          <ul className="space-y-3 mb-2">
            {[
              "We will never share or resell client data.",
              "Employees and subcontractors are bound by internal NDAs.",
              "All access to confidential project data is on a strict need-to-know basis.",
              "Upon request, we can sign formal NDAs with clients before project initiation."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 text-[#1E5EF5] rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Client Behavior card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
            Client Behavior Policy
          </h2>
          <p className="text-gray-700 mb-4">To ensure a professional working environment, we expect clients to:</p>
          <ul className="space-y-2 mb-6">
            {[
              "Communicate respectfully and professionally",
              "Provide accurate and complete information",
              "Avoid spamming, harassment, or threats",
              "Adhere to timelines mutually agreed upon"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 text-[#1E5EF5] rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-4">We reserve the right to terminate engagement if:</p>
          <ul className="space-y-2">
            {[
              "Clients become abusive, unresponsive, or manipulative",
              "There is a breach of trust or misrepresentation of data"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-100 text-red-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* No Refund Policy card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10 border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">6</span>
            No Refund Policy
          </h2>
          <div className="bg-red-50 p-4 rounded-md mb-4">
            <p className="text-gray-800">
              Due to the custom nature of our services (including but not limited to software development, consultation, and design), we <span className="font-bold">do not offer refunds</span> once work has commenced or deliverables have been partially or fully provided.
            </p>
          </div>
          <p className="text-gray-700">
            Exceptions may only be granted in writing under extraordinary cases agreed by both parties.
          </p>
        </div>

        {/* Third Party Services card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">7</span>
            Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may use trusted third-party tools (e.g., Firebase, AWS, Google Analytics) as part of our service delivery. These platforms have their own privacy policies and data handling practices.
          </p>
        </div>

        {/* Cookies & Analytics card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">8</span>
            Cookies & Analytics
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website uses cookies to collect non-personally identifiable information for analytical and performance purposes. By continuing to use our website, you consent to our use of cookies.
          </p>
        </div>

        {/* Data Retention card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#031B4E] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#031B4E] text-white rounded-full flex items-center justify-center text-sm mr-3">9</span>
            Data Retention & Deletion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain user data only for as long as required for the purposes described above or as required by law. Clients may request data deletion by emailing us.
          </p>
        </div>

        {/* Intellectual Property card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center text-sm mr-3">10</span>
            Intellectual Property
          </h2>
          <p className="text-gray-700 mb-4">Unless otherwise agreed in writing:</p>
          <ul className="space-y-3">
            {[
              "All code, designs, and digital assets produced by us remain our intellectual property until the project is fully paid.",
              "Licensing or handover will occur after full payment and mutual agreement."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-5 h-5 bg-indigo-100 text-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Jurisdiction card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center text-sm mr-3">11</span>
            Legal Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This agreement is governed by the laws of the Republic of India. Any disputes shall be resolved in the jurisdiction of Brahmapur, Odisha.
          </p>
        </div>

        {/* Policy Changes card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center text-sm mr-3">12</span>
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy from time to time. We encourage you to review it periodically. Updates will be reflected on this page with the new effective date.
          </p>
        </div>

        {/* Contact card */}
        <div className="bg-indigo-50 shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-indigo-900 text-white rounded-full flex items-center justify-center text-sm mr-3">13</span>
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions regarding this Privacy Policy or any other legal concern:
          </p>
          <div className="bg-white p-5 rounded-lg border border-indigo-100">
            <h3 className="font-bold text-xl text-indigo-900 mb-2">SentientWare Tech Solution Pvt. Ltd.</h3>
            <address className="not-italic text-gray-700 space-y-2">
              <p>Lakshmi Narayan Panda, Uma Nagar 3rd Lane, Lanjipalli,</p>
              <p>Ganjam, Brahmapur Sadar, Odisha, 760008</p>
              <div className="pt-2">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:helpsentientwaretechsolution@gmail.com" className="text-indigo-600 hover:underline">
                    helpsentientwaretechsolution@gmail.com
                  </a>
                </p>
                <p className="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+916371763610" className="text-indigo-600 hover:underline">
                    +91 6371763610
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-16 pt-6 border-t border-gray-200">
          <p>© {new Date().getFullYear()} SentientWare Tech Solution Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
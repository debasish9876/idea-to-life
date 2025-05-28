'use client';

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Download, Shield, CheckCircle, XCircle, Sparkles } from 'lucide-react';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL4_e8LD1-12WBeGC3WIXFBYCwbIi2dvs",
  authDomain: "varify-cirtificate.firebaseapp.com",
  databaseURL: "https://varify-cirtificate-default-rtdb.firebaseio.com",
  projectId: "varify-cirtificate",
  storageBucket: "varify-cirtificate.firebasestorage.app",
  messagingSenderId: "460940432932",
  appId: "1:460940432932:web:abd06d275d8080296b6ab1",
  measurementId: "G-4TGKM1K6D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function CertificateDownloadPage() {
  const [certificateId, setCertificateId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleDownload = async () => {
    if (!certificateId.trim()) {
      setMessage('Please enter a certificate ID');
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    setMessage('');
    setMessageType('');

    try {
      // Create reference to the certificate file
      const certificateRef = ref(storage, `certificates/${certificateId.trim()}.pdf`);
      
      // Get download URL with token for proper access
      const downloadURL = await getDownloadURL(certificateRef);
      
      // Method 1: Try direct download with custom filename
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = `${certificateId.trim()}.pdf`;
      link.setAttribute('target', '_blank');
      link.style.display = 'none';
      
      // Add download attribute and click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Alternative method if above doesn't work - open with download prompt
      setTimeout(() => {
        window.open(downloadURL + '&attachment=true', '_blank');
      }, 500);
      
      setMessage('Certificate download initiated successfully!');
      setMessageType('success');
      setCertificateId('');
      
    } catch (error: any) {
      console.error('Error downloading certificate:', error);
      
      if (error.code === 'storage/object-not-found') {
        setMessage('Certificate not found. Please check your certificate ID and try again.');
      } else {
        setMessage('Failed to download certificate. Please try again later.');
      }
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyEvent) => {
    if (e.key === 'Enter') {
      handleDownload();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Sophisticated Background Effects */}
      <div className="absolute inset-0">
        {/* Red and Blue Smoke Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-20 w-80 h-80 bg-gradient-to-br from-red-600/30 to-red-800/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-tl from-blue-600/25 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000 opacity-70"></div>
          <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-tr from-red-500/20 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-500 opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-2000 opacity-60"></div>
        </div>
        
        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
        
        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                background: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#3b82f6' : '#ffffff',
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Subtle Glow Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Modern Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative group">
              <div className="w-24 h-24 flex items-center justify-center relative">
                <img 
                  src="/../final.png" 
                  alt="SentientWare Logo" 
                  className="w-full h-full object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-blue-500/20 to-red-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </div>
            <div className="ml-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-blue-500 bg-clip-text text-transparent mb-1">
                SentientWare
              </h1>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-400" />
                <p className="text-red-300 text-sm font-medium">Tech Solution Pvt. Ltd.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 max-w-lg mx-auto text-lg leading-relaxed">
            Download your Certificate by providing your Certificate-ID below.
          </p>
        </div>

        {/* Premium Download Card */}
        <div className="w-full max-w-lg">
          <div className="relative group">
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60"></div>
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Input Section */}
              <div className="relative mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Certificate-ID should start with SWT-INTERN-
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Download className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your certificate ID"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-14 pr-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300 text-lg"
                    disabled={isLoading}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Enter your certificate ID without the .pdf extension
                </p>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isLoading || !certificateId.trim()}
                className="w-full relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white py-5 rounded-2xl font-semibold shadow-xl hover:shadow-red-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 text-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-6 h-6" />
                    Download Certificate
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Success Message */}
          {message && messageType === 'success' && (
            <div className="mt-8 relative group animate-fade-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur-xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-1">Download Successful</h3>
                    <p className="text-green-300/80">{message}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {message && messageType === 'error' && (
            <div className="mt-8 relative group animate-fade-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-red-900/20 to-pink-900/10 backdrop-blur-2xl border border-red-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center">
                    <XCircle className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-1">Download Failed</h3>
                    <p className="text-red-300/80">{message}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modern Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">Powered by</span>
            <span className="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text font-semibold">SentientWare</span>
            <span className="text-gray-400 text-sm">• Enterprise Security</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
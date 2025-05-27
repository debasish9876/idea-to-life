"use client";
import { useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Search, Shield, CheckCircle, XCircle, Award, Mail, Clock, Tag } from "lucide-react";

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

export default function VerifyCertificate() {
  const [certId, setCertId] = useState("");
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!certId.trim()) return;
    
    setLoading(true);
    const dbRef = ref(getDatabase(app));
    try {
      const snapshot = await get(child(dbRef, `certificates/${certId}`));
      if (snapshot.exists()) {
        setData(snapshot.val());
        setNotFound(false);
      } else {
        setData(null);
        setNotFound(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              {/* Your actual logo image */}
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src="/../final.png" 
                  alt="SentientWare Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 via-orange-400 to-red-500 rounded-2xl blur opacity-20 animate-pulse"></div>
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                SentientWare
              </h1>
              <p className="text-blue-300 text-sm">Certificate Verification</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            Verify the authenticity of your digital certificates with our secure verification system
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            {/* Search Input */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter Certificate ID"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={loading || !certId.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verifying...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Verify Certificate
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {data && (
            <div className="mt-6 bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 shadow-2xl animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-green-400">Certificate Verified</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Certificate Holder</p>
                    <p className="text-white font-medium">{data.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Domain</p>
                    <p className="text-white font-medium">{data.domain}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Duration</p>
                    <p className="text-white font-medium">{data.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1.5 ${data.status?.toLowerCase() === 'active' ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                  <div>
                    <p className="text-gray-400 text-sm">Status</p>
                    <p className={`font-medium ${data.status?.toLowerCase() === 'active' ? 'text-green-400' : 'text-orange-400'}`}>
                      {data.status}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium break-all">{data.mailId}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {notFound && (
            <div className="mt-6 bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 shadow-2xl animate-fade-in">
              <div className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-400" />
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-1">Certificate Not Found</h3>
                  <p className="text-gray-400 text-sm">Please check the Certificate ID and try again</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Powered by <span className="text-blue-400 font-medium">SentientWare</span> • Secure & Reliable
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
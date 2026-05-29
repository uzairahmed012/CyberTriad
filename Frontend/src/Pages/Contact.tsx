import React from 'react';
import imagePng from '../assets/image.png';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f0fa] via-[#f8fafc] to-[#f3f6fa] pt-16 pb-32 relative overflow-hidden">
      
      {/* Decorative blurred background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="w-full mb-14 pr-4 lg:pr-8">
          <h1 className="text-black mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 900, fontSize: '60px', lineHeight: '78px' }}>
            Get in Touch With Us
          </h1>
          <p className="text-black w-full" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '33px' }}>
            Whether you need cybersecurity advisory, compliance support, penetration testing, or risk assessment services, our team is ready to help you strengthen your security posture and navigate today's evolving threat landscape with confidence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Image and Phone */}
          <div className="flex flex-col gap-10 pt-2">
            <div className="rounded-xl overflow-hidden shadow-2xl w-full h-[380px]">
              <img src={imagePng} alt="Cyber Triad Security Terminal" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#143c66] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-black text-[15px] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Phone number</h4>
                <p className="text-gray-700 text-[15px]" style={{ fontFamily: 'Manrope, sans-serif' }}>+966 50 001 3205</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:pl-4">
            <div className="bg-gradient-to-b from-[rgb(16,65,116)] to-[rgb(13,20,27)] rounded-2xl p-8 md:p-10 shadow-2xl border border-white/5">
              <form className="space-y-7">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-white text-[15px] leading-[25px]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>Your name</label>
                    <input type="text" className="bg-[#09111b] border border-[#1e344e] rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner" />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-white text-[15px] leading-[25px]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>Your email <span className="text-red-500 ml-0.5">*</span></label>
                    <input type="email" className="bg-[#09111b] border border-[#1e344e] rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-white text-[15px] leading-[25px]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>Company name <span className="text-red-500 ml-0.5">*</span></label>
                    <input type="text" className="bg-[#09111b] border border-[#1e344e] rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner" />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-white text-[15px] leading-[25px]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>Phone number <span className="text-red-500 ml-0.5">*</span></label>
                    <input type="tel" className="bg-[#09111b] border border-[#1e344e] rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-white text-[15px] leading-[25px]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>Project details (optional) <span className="text-red-500 ml-0.5">*</span></label>
                  <textarea rows={6} className="bg-[#09111b] border border-[#1e344e] rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner resize-none"></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button type="submit" className="bg-[rgb(16,65,116)] hover:bg-[#123156] text-white px-8 py-3 rounded-lg text-[14px] font-bold transition-colors shadow-lg shadow-black/20" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Submit Form
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

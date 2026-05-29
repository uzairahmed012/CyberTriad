import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/FooterLogo.png';

export default function ServicesCTA() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0f7fb] rounded-[1.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center">
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-[28px] md:text-[32px] font-black text-black mb-4 leading-tight tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Which Service is Right for You?
            </h2>
            <p className="text-gray-900 mb-8 text-[16px] max-w-[550px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Let's discuss your cybersecurity challenges and find the perfect solution from our comprehensive service library.
            </p>
            <Link to="/contact">
              <button className="bg-[#1a4474] hover:bg-[#123156] text-white px-6 py-2.5 rounded-md text-[15px] font-bold transition-colors flex items-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Request Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </Link>
          </div>

          <div className="hidden md:flex absolute right-12 lg:right-24 top-0 bottom-0 items-center justify-center pointer-events-none">
            <img src={footerLogo} alt="CyberTriad Footer Logo" className="w-[180px] lg:w-[200px] h-auto object-contain" />
          </div>

        </div>
      </div>
    </div>
  );
}

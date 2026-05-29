import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesHero() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#e6f0fa] via-white to-[#f3f6fa]">
      {/* Decorative blurred background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full">
          <h1 className="mb-6 bg-gradient-to-r from-[rgb(22,66,126)] to-[rgb(39,110,209)] bg-clip-text text-transparent inline-block" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 900, fontSize: '64px', lineHeight: '64px' }}>
            Professional Services
          </h1>
          <p className="text-gray-800 mb-8 w-full pr-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '33px' }}>
            Comprehensive cybersecurity solutions covering Governance, Risk & Compliance, Offensive Security, and specialized consulting services.
          </p>
          <Link to="/contact">
            <button className="bg-[#1a4474] hover:bg-[#123156] text-white px-8 py-3 rounded-lg transition-colors shadow-lg flex items-center" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '26px' }}>
              Request Consultation
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

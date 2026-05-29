import { Link } from 'react-router-dom';
import imageCopyPng from '../../assets/image copy.png';
import imagePng from '../../assets/image.png';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 min-h-[600px] flex items-center bg-[#f4f7fb]">
      
      {/* Background soft gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-blue-100/60 blur-[120px]"></div>
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[60%] rounded-full bg-blue-100/50 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[50%] rounded-full bg-cyan-100/40 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl pr-8">
            <h1 className="text-[64px] leading-[64px] font-black text-black mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              We Secure Businesses in a Complex Digital World
            </h1>
            <p className="text-[20px] leading-[33px] font-normal text-gray-800 mb-10" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Cyber Triad delivers risk-driven cybersecurity solutions that align business strategy, regulatory compliance, and advanced security practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/contact">
                <button className="bg-[#1a4474] hover:bg-[#123156] text-white px-8 py-4 rounded-lg font-semibold text-[16px] leading-[26px] transition-colors flex items-center shadow-md" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Request Consultation
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </Link>
              <Link to="/services">
                <button className="text-black hover:text-gray-700 px-4 py-4 font-semibold text-[16px] leading-[26px] transition-colors flex items-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Grid Layout */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4 h-full">
              {/* Regulatory Alignment Card */}
              <div className="flex-grow bg-gradient-to-b from-[#163f6c] to-[#0a111a] rounded-xl overflow-hidden shadow-xl flex flex-col items-center pt-8 relative">
                <div className="text-center z-10 mb-4">
                  <h3 className="text-white font-black text-[30px] leading-[30px] tracking-wide" style={{ fontFamily: 'Roboto, sans-serif' }}>Regulatory</h3>
                  <p className="text-white/90 font-semibold text-[18px] leading-[30px] mt-1" style={{ fontFamily: 'Roboto, sans-serif' }}>Alignment</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8 px-4">
                  <img src={imageCopyPng} alt="Regulatory Graphic" className="w-full object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                </div>
              </div>
              
              {/* 100% Compliance Ready Card */}
              <div className="h-16 shrink-0 bg-gradient-to-b from-[#113259] to-[#0a111a] rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-white font-bold text-[18px] leading-[30px]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  100% Compliance Ready
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 h-full">
              {/* Image Card */}
              <div className="flex-grow rounded-xl overflow-hidden shadow-xl relative">
                <img src={imagePng} alt="Cyber Security" className="absolute inset-0 w-full h-full object-cover" />
                {/* Optional dark overlay if needed */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              
              {/* Risk-Driven Security Card */}
              <div className="h-28 shrink-0 bg-gradient-to-b from-[#113259] to-[#0a111a] rounded-xl overflow-hidden shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-white font-black text-[30px] leading-[30px] tracking-wide mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>Risk-Driven</h3>
                <p className="text-white/90 font-bold text-[20px] leading-[33px]" style={{ fontFamily: 'Roboto, sans-serif' }}>Security</p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}

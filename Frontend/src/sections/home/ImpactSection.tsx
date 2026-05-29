import Card from '../../components/common/Card';
import backgroundPng from '../../assets/Background.png';
import imagePng from '../../assets/image.png';
import spiralPng from '../../assets/spiral.png';
import footerLogoPng from '../../assets/FooterLogo.png';
import imageCopyPng from '../../assets/image copy.png';
import CountUpPkg from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CountUp = (CountUpPkg as any).CountUp || (CountUpPkg as any).default || CountUpPkg;

export default function ImpactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardGradient = "bg-gradient-to-b from-[rgb(16,65,116)] to-[rgb(13,20,27)]";

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundImage: `url(${backgroundPng})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div className="md:w-1/2">
            <h2 className="font-black text-[38px] leading-[46px] text-black" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Strategic Cybersecurity<br/>That Delivers Real Impact
            </h2>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-6 pt-2">
            <p className="text-[18px] leading-[30px] font-normal text-black" style={{ fontFamily: 'Roboto, sans-serif' }}>
              We go beyond traditional security services by delivering solutions that integrate seamlessly into your operations while addressing real business risks.
            </p>
          </div>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Cyber Risk Management (Spans 2 columns on lg) */}
          <Card className={`col-span-1 md:col-span-2 lg:col-span-2 relative h-[360px] lg:h-[420px] group border-none ${cardGradient} overflow-hidden`} variant="solid">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src={imagePng} alt="Cyber Risk Management" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(13,20,27)]/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative h-full p-8 md:p-12 flex flex-col justify-start text-white z-10 w-full md:w-2/3">
              <h3 className="text-3xl font-bold mb-4">Cyber Risk Management</h3>
              <p className="text-blue-100/80 text-sm mb-8 leading-relaxed max-w-sm">
                Identify and prioritize risks that directly impact your business operations.
              </p>
              <Link to="/contact" className="inline-flex items-center text-xs font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">
                Get Started Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </Card>

          {/* Card 2: Security Architecture */}
          <Card className={`col-span-1 md:col-span-2 lg:col-span-1 relative h-[360px] lg:h-[420px] group border-none ${cardGradient} overflow-hidden`} variant="solid">
            <div className="absolute inset-x-0 top-0 h-1/2 z-0">
              <img src={spiralPng} alt="Spiral Abstract" className="w-full h-full object-cover opacity-80" />
            </div>

            <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
              <div className="mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Security Architecture & Advisory</h3>
              <p className="text-blue-100/70 text-xs mb-6 leading-relaxed">
                Design secure, scalable systems aligned with your business goals.
              </p>
              <Link to="/services" className="inline-flex items-center text-[10px] font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">
                More Information
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </Card>

          {/* Card 3: Compliance & Regulatory */}
          <Card className={`col-span-1 relative h-[300px] lg:h-[320px] group border-none ${cardGradient} overflow-hidden`} variant="solid">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
              <img src={footerLogoPng} alt="Background Logo" className="w-[120%] h-auto object-cover scale-150 rotate-[-15deg] translate-y-16" />
            </div>

            <div className="relative h-full p-8 flex flex-col justify-start text-white z-10">
              <h3 className="text-xl font-bold mb-3">Compliance & Regulatory Alignment</h3>
              <p className="text-blue-100/70 text-xs mb-6 leading-relaxed">
                Ensure alignment with NCA, SAMA, CST, and international standards.
              </p>
              <Link to="/services" className="inline-flex items-center text-[10px] font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">
                More Information
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </Card>

          {/* Card 4: Security Testing & Assessment */}
          <Card className={`col-span-1 relative h-[300px] lg:h-[320px] group border-none ${cardGradient} overflow-hidden`} variant="solid">
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <img src={imageCopyPng} alt="Security Testing" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(13,20,27)] via-transparent to-transparent"></div>
            </div>

            <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
              <h3 className="text-xl font-bold mb-3">Security Testing & Assessment</h3>
              <p className="text-blue-100/70 text-xs mb-6 leading-relaxed">
                Gain visibility into vulnerabilities through structured testing and simulation.
              </p>
              <Link to="/services" className="inline-flex items-center text-[10px] font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">
                More Information
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </Card>

          {/* Card 5: Security Assessment 100% */}
          <Card className={`col-span-1 relative h-[300px] lg:h-[320px] group border-none ${cardGradient} overflow-hidden`} variant="solid">
            <div className="absolute right-0 bottom-0 z-0 w-48 h-48 pointer-events-none">
               <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500 opacity-20">
                  <path d="M 50 10 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="4" />
                  <path d="M 50 20 A 30 30 0 0 1 80 50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  <path d="M 50 90 L 50 90" stroke="currentColor" strokeWidth="4" />
               </svg>
            </div>
            
            <div className="relative h-full p-8 flex flex-col justify-start text-white z-10" ref={ref}>
              <p className="text-xs font-semibold mb-2">Security Assessment</p>
              <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                {inView ? <CountUp start={1} end={100} duration={2} separator="," /> : '1'}
                <span className="text-cyan-400">%</span>
              </div>
              <p className="text-blue-100/80 text-xs leading-relaxed border-t border-white/10 pt-4 mt-auto">
                We design secure, resilient digital environments built for today's evolving cyber threats.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}


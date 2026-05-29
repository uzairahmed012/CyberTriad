import Card from '../components/common/Card';
import SectionHeader from '../components/common/SectionHeader';

export default function ImpactSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background gradients for the premium feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="md:w-1/2">
            <SectionHeader 
              title="Strategic Cybersecurity That Delivers Real Impact"
              className="mb-0"
            />
          </div>
          <div className="md:w-1/2 text-gray-600 border-l-2 border-blue-600 pl-6 py-2">
            <p className="text-lg">
              We go beyond traditional security services by delivering solutions that integrate seamlessly into your operations while addressing real business risks.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Cyber Risk Management (Spans 2 columns on lg) */}
          <Card className="col-span-1 md:col-span-2 relative h-[320px] lg:h-[400px] group border-none" variant="solid">
            {/* Background Image / Pattern Mockup */}
            <div className="absolute inset-0 bg-[#0a1526] overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2a4a_1px,transparent_1px),linear-gradient(to_bottom,#0f2a4a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
              {/* Shield abstract */}
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/30 rounded-xl rotate-45 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-48 h-48 border-2 border-cyan-400/20 rounded-lg rotate-45"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1526] via-[#0a1526]/80 to-transparent"></div>
            </div>
            
            <div className="relative h-full p-8 md:p-12 flex flex-col justify-end text-white z-10 w-full md:w-2/3">
              <h3 className="text-3xl font-bold mb-4">Cyber Risk Management</h3>
              <p className="text-blue-100/80 text-lg mb-8 leading-relaxed">
                Identify and prioritize risks that directly impact your business operations.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider">
                Get Started Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </Card>

          {/* Card 2: Security Architecture */}
          <Card className="col-span-1 relative h-[320px] lg:h-[400px] group border-none" variant="solid">
            <div className="absolute inset-0 bg-[#07101c] overflow-hidden">
              {/* Abstract Wave */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-full h-32 border-y border-green-500/30 blur-[2px] rounded-[100%] scale-150"></div>
                <div className="w-full h-24 border-y border-cyan-500/40 absolute rounded-[100%] scale-125"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101c] via-[#07101c]/80 to-transparent"></div>
            </div>

            <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Security Architecture & Advisory</h3>
              <p className="text-blue-100/70 text-sm mb-6 leading-relaxed">
                Design secure, scalable systems aligned with your business goals.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-semibold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">
                More Information
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </Card>

          {/* Card 3: Compliance & Regulatory */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 relative h-[320px] lg:h-[400px] group border-none" variant="solid">
            <div className="absolute inset-0 bg-[#081221] overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 border-[40px] border-blue-600/20 rounded-full blur-[4px]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-[#081221]/50 to-transparent"></div>
            </div>

            <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
              <h3 className="text-2xl font-bold mb-3">Compliance & Regulatory Alignment</h3>
              <p className="text-blue-100/70 text-sm mb-6 leading-relaxed">
                Ensure alignment with NCA, SAMA, CST, and international standards.
              </p>
              <a href="#" className="inline-flex items-center text-xs font-semibold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">
                More Information
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </Card>

          {/* Card 4: Security Assessment */}
          <Card className="col-span-1 md:col-span-2 relative h-[320px] lg:h-[400px] group border-none" variant="solid">
            <div className="absolute inset-0 bg-[#040a14] overflow-hidden">
              {/* Dial Abstract Mockup */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500 opacity-20">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="180" strokeDashoffset="40" className="opacity-50" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="180" strokeDashoffset="100" />
                  <path d="M50 50 L80 50" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#040a14] via-[#040a14]/90 to-transparent"></div>
            </div>

            <div className="relative h-full p-8 md:p-12 flex flex-col justify-center text-white z-10 md:w-2/3">
              <p className="text-sm text-cyan-400 font-semibold mb-2 uppercase tracking-wider">Security Assessment</p>
              <div className="text-6xl md:text-8xl font-black text-white mb-6">
                100<span className="text-cyan-400">%</span>
              </div>
              <p className="text-blue-100/80 text-lg leading-relaxed max-w-md">
                We design secure, resilient digital environments built for today's evolving cyber threats.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}

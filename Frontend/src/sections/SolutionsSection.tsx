import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';

export default function SolutionsSection() {
  const features = [
    {
      title: 'Secure & Compliant',
      description: 'Achieve regulatory compliance while maintaining operational efficiency.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
      )
    },
    {
      title: 'Reduced Risk Exposure',
      description: 'Minimize vulnerabilities and strengthen your security posture.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      title: 'Scalable Security Frameworks',
      description: 'Build systems designed to grow with your business.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      )
    },
    {
      title: 'Continuous Security Improvement',
      description: 'Adapt and evolve with the changing threat landscape.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side - Image Placeholder */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] w-full bg-[#0a1220]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent mix-blend-multiply"></div>
              
              {/* Overlay abstract UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-64 border border-cyan-400/30 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center">
                   <svg className="w-24 h-24 text-cyan-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content & 4 Cards */}
          <div className="lg:w-1/2">
            <SectionHeader 
              title="Turning Complex Cybersecurity Challenges Into Practical Solutions"
              subtitle="From governance frameworks to advanced testing, we deliver scalable, secure, and high-impact cybersecurity solutions tailored to your organization."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <Card key={index} variant="solid" className="bg-[#0a1526] border-none text-white p-6 hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <a href="#" className="inline-flex items-center text-xs font-semibold text-white hover:text-cyan-400 transition-colors uppercase tracking-wider mt-auto">
                    Get Started Now
                    <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import SectionHeader from '../../components/common/SectionHeader';
import Card from '../../components/common/Card';
import imagePng from '../../assets/image.png';
import { Link } from 'react-router-dom';

export default function SolutionsSection() {
  const features = [
    {
      title: 'Secure & Compliant',
      description: 'Achieve regulatory compliance while maintaining operational efficiency.',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
      )
    },
    {
      title: 'Reduced Risk Exposure',
      description: 'Minimize vulnerabilities and strengthen your security posture.',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      title: 'Scalable Security Frameworks',
      description: 'Build systems designed to grow with your business.',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      )
    },
    {
      title: 'Continuous Security Improvement',
      description: 'Adapt and evolve with the changing threat landscape.',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Content Split */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16 items-stretch">
          
          {/* Left Image */}
          <div className="lg:w-1/2 w-full flex">
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-full">
              <img src={imagePng} alt="Cybersecurity Shield" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <h2 className="text-[35px] leading-[42px] text-black mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 900 }}>
              Turning Complex Cybersecurity<br/>Challenges Into Practical Solutions
            </h2>
            <p className="text-[16px] leading-[26px] text-black mb-8" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              From governance frameworks to advanced testing, we deliver scalable, secure, and high-impact cybersecurity solutions tailored to your organization.
            </p>
            
            <div className="w-full h-px bg-gray-200 mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Point 1 */}
              <div>
                <h4 className="text-black text-[16px] leading-[26px] mb-3" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>Risk-Driven Security Solutions</h4>
                <p className="text-[16px] leading-[26px] text-gray-800 mb-4" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                  Focused on protecting what matters most to your business.
                </p>
                <Link to="/services" className="inline-flex items-center text-[16px] leading-[26px] text-black hover:text-blue-600 transition-colors" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                  More Information
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
              
              {/* Point 2 */}
              <div>
                <h4 className="text-black text-[16px] leading-[26px] mb-3" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>Secure Infrastructure Design</h4>
                <p className="text-[16px] leading-[26px] text-gray-800 mb-4" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                  Ensure stability, reliability, and protection across your systems.
                </p>
                <Link to="/services" className="inline-flex items-center text-[16px] leading-[26px] text-black hover:text-blue-600 transition-colors" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>
                  More Information
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="solid" className="bg-gradient-to-b from-[rgb(16,65,116)] to-[rgb(13,20,27)] border-none text-white p-8 flex flex-col justify-start h-[300px] shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 bg-blue-600/30 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-white text-[18px] leading-[27px] mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>{feature.title}</h3>
              <p className="text-white text-[16px] leading-[26px] mb-6 max-w-[90%]" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
                {feature.description}
              </p>
              <Link to="/contact" className="inline-flex items-center text-[14px] leading-[23px] text-white hover:text-cyan-400 transition-colors mt-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                Get Started Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

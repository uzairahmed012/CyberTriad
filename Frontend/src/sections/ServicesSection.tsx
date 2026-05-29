import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import footerLogo from '../assets/FooterLogo.png';

export default function ServicesSection() {
  const services = [
    {
      title: 'Governance, Risk & Compliance (GRC)',
      description: 'Align your organization with regulatory frameworks and build strong governance structures.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    },
    {
      title: 'Application Security',
      description: 'Identify and eliminate vulnerabilities across web applications, APIs, and systems.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      )
    },
    {
      title: 'Infrastructure Security',
      description: 'Strengthen your IT environment with proactive assessments and security hardening.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side - 3 Cards */}
          <div className="lg:w-2/3">
            <SectionHeader 
              title="Comprehensive Cybersecurity Services Built for Modern Enterprises"
              subtitle="We provide integrated cybersecurity solutions designed to strengthen your security posture, ensure compliance, and support business continuity."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} variant="solid" className="bg-gradient-to-b from-[rgb(16,66,119)] to-[rgb(6,6,6)] border-none text-white p-6 hover:-translate-y-1 transition-transform shadow-lg">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-white text-[18px] leading-[27px] font-semibold mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>{service.title}</h3>
                  <p className="text-white text-[15px] leading-[25px] font-normal" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Big Highlight Card */}
          <div className="lg:w-1/3 flex">
            <Card variant="gradient" className="w-full p-10 flex flex-col items-center justify-end text-center bg-gradient-to-b from-[rgb(16,66,119)] to-[rgb(6,6,6)] border-none shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-[350px] opacity-40 pointer-events-none flex justify-center">
                <img src={footerLogo} alt="Cyber Triad Logo" className="w-full h-full object-contain object-top" />
              </div>
              
              <div className="relative z-10 pt-48 flex flex-col items-center">
                <h3 className="text-white text-[22px] leading-[33px] font-semibold mb-4 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Where Security Meets Business Strategy
                </h3>
              
              <p className="text-white text-[17px] leading-[28px] font-normal mb-8 px-4 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Cybersecurity is no longer just a technical requirement — it is a critical business enabler.
              </p>
              
              <Button size="md" className="w-full shadow-lg shadow-blue-600/30 text-white text-[14px] leading-[23px] font-semibold flex items-center justify-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Request Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Button>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

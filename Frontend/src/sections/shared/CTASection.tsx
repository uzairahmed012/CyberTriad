import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';
import imagePng from '../../assets/image.png';

export default function CTASection() {
  const checklist = [
    'Expert guidance across GRC, risk, and technical security',
    'Fast, reliable support for critical security challenges',
    'Continuous improvement through strategic advisory'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Card className="relative overflow-hidden border-none" variant="solid">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img src={imagePng} alt="Cyber Triad Support Background" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
            <div className="absolute inset-0 bg-[#071324]/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:w-2/3 text-white">
            <h2 className="text-[32px] leading-[40px] md:text-[38px] md:leading-[46px] font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Expert Support You Can Rely On
            </h2>
            <p className="text-white text-[16px] leading-[26px] mb-8 max-w-xl" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              Our team of cybersecurity specialists provides continuous support, ensuring your organization stays secure, compliant, and prepared for emerging threats.
            </p>

            <ul className="space-y-4 mb-10">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4">
                    <svg className="w-3.5 h-3.5 text-[#071324]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-white text-[16px] leading-[26px]" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button size="lg" className="bg-[rgb(16,65,116)] hover:bg-blue-800 border-none shadow-lg text-white font-semibold">
                Request Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Button>
            </Link>
          </div>
        </Card>

      </div>
    </section>
  );
}

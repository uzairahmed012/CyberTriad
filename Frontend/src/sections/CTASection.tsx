import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function CTASection() {
  const checklist = [
    'Align with national (NCA, SAMA) and international standards.',
    'Proactively identify and remediate security challenges.',
    'Build a culture of security awareness and resilience.'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Card className="relative overflow-hidden border-none" variant="solid">
          {/* Background gradient & abstract mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06152b] via-[#081b36] to-[#040e1e]"></div>
          
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none flex items-center justify-end pr-10">
             {/* Shield wireframe mockup */}
             <svg className="w-96 h-96 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:w-2/3 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Expert Support You Can Rely On
            </h2>
            <p className="text-blue-100/80 text-lg mb-8 leading-relaxed max-w-xl">
              Our team of cybersecurity specialists provides continuous support, ensuring your organization stays ahead of emerging threats and regulatory requirements.
            </p>

            <ul className="space-y-4 mb-10">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="shadow-lg shadow-blue-600/30">
              Request Consultation
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Button>
          </div>
        </Card>

      </div>
    </section>
  );
}

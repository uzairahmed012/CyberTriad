import React from 'react';

interface ServiceItem {
  title: string;
  subtitle: string;
  bullets: string[];
  footer: string;
  imageSrc: string;
}

interface ServicesCategoryProps {
  categoryTitle: string;
  categorySubtitle: string;
  services: ServiceItem[];
  bgColorClass: string;
}

export default function ServicesCategory({ categoryTitle, categorySubtitle, services, bgColorClass }: ServicesCategoryProps) {
  return (
    <div className={`py-20 ${bgColorClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 
            className="mb-3 bg-gradient-to-r from-[rgb(22,66,126)] to-[rgb(39,110,209)] bg-clip-text text-transparent inline-block" 
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '46px', lineHeight: '46px' }}
          >
            {categoryTitle}
          </h2>
          <p 
            className="text-gray-800 w-full" 
            style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '26px' }}
          >
            {categorySubtitle}
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className={`bg-[#f0f7fb] rounded-[1.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-transform hover:-translate-y-1 duration-300`}>
              
              {/* Content */}
              <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'} flex-1 flex flex-col justify-center`}>
                <h3 className="text-[32px] font-black text-black mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="block max-w-[400px]">{service.title}</span>
                </h3>
                <p className="text-gray-900 mb-6 max-w-[480px]" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}>{service.subtitle}</p>
                
                <div className="mb-4">
                  <span className="text-black font-bold text-[16px]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Services Include:
                  </span>
                </div>

                <ul className="space-y-2 mb-8">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mt-1 mr-3 w-[18px] h-[18px] rounded-full bg-[#3aa2f6] flex items-center justify-center shrink-0">
                         <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                         </svg>
                      </div>
                      <span className="text-[#1c64a3]" style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '30px' }}>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-black mt-auto pr-4" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '26px' }}>
                  <span className="text-[#1c64a3] font-bold">Outcome: </span><span className="font-bold">{service.footer}</span>
                </p>
              </div>

              {/* Right Image Container */}
              <div className="md:w-[450px] lg:w-[480px] p-6 md:p-10 flex items-center justify-center">
                <div className="bg-[#eaf4fc] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-2 w-full h-full flex items-center justify-center aspect-square">
                  <img src={service.imageSrc} alt={service.title} className="w-full h-full object-contain rounded-2xl" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

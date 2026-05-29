import logoPng from '../../assets/Logo.png';

export default function Header() {
  const navLinks = [
    { name: 'NEXTGEN', href: '#' },
    { name: 'CONSULTATION', href: '#' },
    { name: 'PROFESSIONAL SERVICES', href: '#', hasDropdown: true, dropdownItems: ['GRC Services', 'Offensive Security Services', 'Professional Services'] },
    { name: 'ABOUT US', href: '#' },
    { name: 'OUR VALUES', href: '#' },
    { name: 'MORE', href: '#', hasDropdown: true, dropdownItems: ['News', 'Contact'] },
  ];

  return (
    <header className="font-manrope sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logoPng} alt="Cyber Triad Logo" className="h-[88px] object-contain scale-110 origin-left" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-[13px] font-bold text-black hover:bg-[#1a2e1d] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-3 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 rounded-b-md">
                    {link.dropdownItems?.map((item) => (
                      <a key={item} href="#" className="block px-5 py-2 text-[13px] text-[#1a4474] hover:bg-gray-50 hover:text-blue-800 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-4">
            <button className="bg-[#1a4474] hover:bg-[#123156] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm">
              Request Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

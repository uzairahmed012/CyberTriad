import React, { useEffect } from 'react';
import ServicesHero from '../sections/services/ServicesHero';
import ServicesCategory from '../sections/services/ServicesCategory';
import ServicesCTA from '../sections/services/ServicesCTA';

// Import all 9 images dynamically based on user instructions
import img1 from '../assets/professionalServicesImg1.png';
import img2 from '../assets/professionalServicesImg2.png';
import img3 from '../assets/professionalServicesImg3.png';
import img4 from '../assets/professionalServicesImg4.png';
import img5 from '../assets/professionalServicesImg5.png';
import img6 from '../assets/professionalServicesImg6.png';
import img7 from '../assets/professionalServicesImg7.png';
import img8 from '../assets/professionalServicesImg8.png';
import img9 from '../assets/professionalServicesImg9.png';

export default function Services() {

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const grcServices = [
    {
      title: "Compliance & Regulatory Services",
      subtitle: "Achieve and maintain compliance while ensuring operational efficiency through strategic governance.",
      bullets: [
        "ISO 27001 Implementation & Readiness",
        "PDPL, HIPAA, PCI-DSS Compliance Advisory",
        "Regulatory Alignment (NCA, SAMA, CST)",
        "Policy & Governance Framework Development",
        "Audit Readiness & Support"
      ],
      footer: "Streamlined compliance with strong governance and minimal disruption to business operations.",
      imageSrc: img1
    },
    {
      title: "Information Security Management (ISMS)",
      subtitle: "Build and strengthen security governance frameworks aligned with international standards.",
      bullets: [
        "ISMS Gap Assessment & Maturity Evaluation",
        "Risk Assessment & Treatment Planning",
        "Policy, Standards & SOP Development",
        "Security Awareness Programs",
        "Internal Audit & Continuous Compliance"
      ],
      footer: "A structured, scalable, and sustainable security governance framework.",
      imageSrc: img2
    },
    {
      title: "Data Classification & Privacy Protection",
      subtitle: "Safeguard sensitive data across its lifecycle while ensuring regulatory compliance.",
      bullets: [
        "Data Classification Framework Implementation",
        "Data Risk & Exposure Assessment",
        "Encryption & DLP Advisory",
        "Privacy Governance & Compliance",
        "Awareness & Training Programs"
      ],
      footer: "Improved data visibility, control, and reduced risk of data breaches.",
      imageSrc: img3
    }
  ];

  const offensiveServices = [
    {
      title: "Application Security Services",
      subtitle: "Identify and mitigate risks across applications and systems that directly impact business operations.",
      bullets: [
        "Web Application Security Testing (OWASP aligned)",
        "Secure Code Review",
        "API Security Assessment",
        "DevSecOps & Secure SDLC Advisory",
        "Attack Simulation Exercises"
      ],
      footer: "Clear visibility of vulnerabilities with prioritized remediation aligned to business impact.",
      imageSrc: img4
    },
    {
      title: "Infrastructure Security",
      subtitle: "Secure your IT environment against modern cyber threats through proactive and defensive strategies.",
      bullets: [
        "Network & Infrastructure Penetration Testing",
        "Secure Architecture Review",
        "Firewall & Network Security Optimization",
        "Vulnerability Assessments",
        "Compromise Assessments"
      ],
      footer: "A resilient infrastructure with reduced attack surface and improved threat detection.",
      imageSrc: img5
    },
    {
      title: "Red Team Operations & Advanced Testing",
      subtitle: "Simulate real-world adversary tactics to test your organization's security effectiveness end-to-end.",
      bullets: [
        "Red Team Operations",
        "Adversary Simulation Exercises",
        "Configuration Review",
        "Phishing & Social Engineering Testing",
        "Physical Security Assessment",
        "Threat Modeling & Assessment"
      ],
      footer: "Comprehensive understanding of your security posture against advanced, real-world threats.",
      imageSrc: img6
    }
  ];

  const professionalServices = [
    {
      title: "Cybersecurity Consulting & Strategy",
      subtitle: "Strategic guidance to align cybersecurity with business objectives and build a secure digital future.",
      bullets: [
        "Risk Management Strategy",
        "Security Roadmap Development",
        "Technology Assessment & Selection",
        "Program Governance Setup",
        "Vendor Risk Management Advisory"
      ],
      footer: "A clear, actionable security strategy aligned with business goals and regulatory requirements.",
      imageSrc: img7
    },
    {
      title: "Incident Response & Forensics",
      subtitle: "Rapid response and recovery frameworks to minimize impact and restore business operations swiftly.",
      bullets: [
        "Incident Response Planning",
        "24/7 Incident Response Support",
        "Digital Forensics & Investigation",
        "Breach Recovery Guidance",
        "Post-Incident Analysis & Improvement"
      ],
      footer: "Minimized incident impact with rapid recovery and lessons learned for future prevention.",
      imageSrc: img8
    },
    {
      title: "Training & Security Awareness",
      subtitle: "Build a security-conscious culture through tailored training and awareness programs.",
      bullets: [
        "Custom Security Training Programs",
        "Awareness Campaign Development",
        "Phishing Awareness Exercises",
        "Role-Based Training (IT, Leadership, Users)",
        "Metrics & Improvement Tracking"
      ],
      footer: "An educated workforce that understands security risks and actively contributes to organizational protection.",
      imageSrc: img9
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <ServicesHero />
      <div id="grc" className="scroll-mt-24">
        <ServicesCategory
          categoryTitle="GRC Services"
          categorySubtitle="Governance, Risk & Compliance services that align your security framework with business objectives and regulatory requirements."
          services={grcServices}
          bgColorClass="bg-white"
        />
      </div>
      <div id="offensive" className="scroll-mt-24">
        <ServicesCategory
          categoryTitle="Offensive Security Services"
          categorySubtitle="Advanced testing and simulation services to identify vulnerabilities before adversaries do. Proactive security through real-world attack scenarios."
          services={offensiveServices}
          bgColorClass="bg-[#f0f7ff]"
        />
      </div>
      <div id="professional" className="scroll-mt-24">
        <ServicesCategory
          categoryTitle="Professional Services"
          categorySubtitle="Specialized consulting and implementation services to strengthen your overall cybersecurity posture and strategy."
          services={professionalServices}
          bgColorClass="bg-white"
        />
      </div>
      <ServicesCTA />
    </div>
  );
}

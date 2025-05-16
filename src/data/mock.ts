
import type { Professional, ServiceRequest, Service } from '@/lib/types';

// Services based on "Title" fields from the provided text
export const mockServices: Service[] = [
  { 
    id: 'hdm_s1', 
    name: 'Project, Program, & Portfolio Management Consulting', 
    description: 'Expert guidance in project, program, and portfolio management, and business analysis to optimize practices and drive business value.',
    price: 'Contact for details' 
  },
  { 
    id: 'hdm_s2', 
    name: 'Cybersecurity & Anti-Financial Fraud Management Consulting', 
    description: 'Specialized consulting in cybersecurity, information systems (IS) fraud management, particularly for digital banking, to mitigate risks and enhance security posture.',
    price: 'Contact for details'
  },
  { 
    id: 'hdm_s3', 
    name: 'Cyber Security Analysis, Research & Forensics', 
    description: 'Dedicated cybersecurity analysis, research, programming, digital forensics, VAPT, reverse engineering, and mobile application security analysis.',
    price: 'Contact for details'
  },
  { 
    id: 'hdm_s4', 
    name: 'Digital Business Advisory', 
    description: 'Expert advice and training in International Service Marketing and Management, E-commerce, and Digital Marketing to enhance digital presence and optimize operations.',
    price: 'Contact for details'
  },
  { 
    id: 'hdm_s5', 
    name: 'Hotel & Tourism Management Consulting', 
    description: 'Seasoned consulting for international development projects in education, trade competency, tourism, and international marketing for B2B/B2C in East Africa.',
    price: 'Contact for details'
  },
];

export const mockProfessionals: Professional[] = [
  {
    id: 'hdm_p1',
    name: 'Henok Doni',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAihint: 'professional portrait',
    industry: 'Project, Program, & Portfolio Management Consulting', 
    expertise: [ 
      'Business analysis', 'Project Management', 'Risk Management', 'Program Management', 
      'Portfolio Management', 'Business Requirement Document Development', 
      'Cybersecurity Governance, Risk and Compliance (GRC)', 'Cybersecurity Awareness program'
    ],
    bio: "PMP®| ISO 27001:2022 Lead Auditor/Implementer | CEH | CAPC™ | and (ISC)2-CC certifications. Henok Doni is a highly skilled and certified consultant with 10+ years of experience providing expert guidance in project, program, and portfolio management, and business analysis. He excels at guiding clients in optimizing project management practices, implementing effective programs, and managing diverse portfolios; conducting thorough business analysis to understand client needs and drive business value; developing and implementing project management plans, program frameworks, and portfolio management processes; identifying and managing risks, issues, and changes in complex projects and programs; and ensuring alignment with client strategic objectives and delivering solutions that meet their specific needs.",
    experienceYears: 10,
    location: 'Remote',
    email: 'henok.doni@hdmxperts.com',
    portfolio: [],
    servicesOffered: [mockServices[0]], 
  },
  {
    id: 'hdm_p2',
    name: 'Daniel Manaye',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAihint: 'professional portrait',
    industry: 'Cybersecurity & Anti-Financial Fraud Management Consulting',
    expertise: [ 
      'Cybersecurity Controls and Implementation', 'Cybersecurity Training and Anti-Fraud Management'
    ],
    bio: "CISSP | CISM| CEHv8 | ITIL | ISO27001 Lead Implementer | Certified Cybersecurity Expert | Cisco CyberOps | CyberArk Trustee | M.Sc. Information Systems. Daniel Manaye is a highly accomplished and results-oriented consultant specializing in cybersecurity and information systems (IS) fraud management, with a proven track record of delivering impactful solutions, particularly within the digital banking sector. He leverages extensive technical expertise, strategic problem-solving abilities, and leadership skills to mitigate risks, enhance security posture, and drive operational excellence. His core competencies encompass IS fraud management through data-driven initiatives, cybersecurity strategy and implementation, proactive risk management, securing digital banking platforms, and designing effective security awareness programs.",
    experienceYears: 10, 
    location: 'Remote',
    email: 'daniel.manaye@hdmxperts.com',
    portfolio: [],
    servicesOffered: [mockServices[1]],
  },
  {
    id: 'hdm_p3',
    name: 'Yohannes Yemane',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAihint: 'professional portrait',
    industry: 'Cyber Security Analysis, Research & Forensics', 
    expertise: [ 
      'Cybersecurity Analysis and Research', 'Programming', 'Digital Forensic', 'VAPT', 
      'Mobile Application Development and Security Analysis'
    ],
    bio: "CISSP | CISM| CRISC | CEH | ISO 27001:2022 Lead Auditor/Implementer. Yohannes is a dedicated and versatile professional with over 12 years of experience in cybersecurity analysis and research, programming, and digital forensics. His expertise encompasses a wide range of areas, including vulnerability assessment and penetration testing (VAPT), reverse engineering, and security research. He possesses hands-on expertise in various programming languages, such as C, C++, Java, C#, and Python, with a keen interest in mobile application development and security analysis.",
    experienceYears: 12,
    location: 'Remote',
    email: 'yohannes.yemane@hdmxperts.com',
    portfolio: [],
    servicesOffered: [mockServices[2]],
  },
  {
    id: 'hdm_p4',
    name: 'Maedot Assefa',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAihint: 'professional portrait',
    industry: 'Digital Business Advisory', 
    expertise: [ 
      'Digital Business Advisor', 'International Service Marketing and Management', 
      'E-commerce and Digital Marketing Training'
    ],
    bio: "Executive Diploma In Digital Business and MA in International Service Management. Maedot is a Digital Business Advisor and Consultant specializing in International Service Marketing and Management, E-commerce, and Digital Marketing Training. Maedot provides expert guidance and training to businesses seeking to enhance their digital presence and optimize e-commerce operations, develop and implement effective digital marketing strategies, and expand their reach and manage their services in international markets. With a focus on practical application and results-driven strategies, Maedot equips businesses with the knowledge and tools to thrive in the global digital landscape.",
    experienceYears: 7, 
    location: 'Remote',
    email: 'maedot.assefa@hdmxperts.com',
    portfolio: [],
    servicesOffered: [mockServices[3]],
  },
  {
    id: 'hdm_p5',
    name: 'Henok Heruy Gizaw',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAihint: 'professional portrait',
    industry: 'Hotel & Tourism Management Consulting', 
    expertise: [ 
      'International Business', 'Hotel and Tourism Management'
    ],
    bio: "MA in International Business and Tourism Management from Hochschule Heilbronn - Hochschule für Technik, Wirtschaft und Informatik (Germany). Henok Heruy is a seasoned professional with several years of experience in international development projects, specifically in education, trade competency, and tourism, with experience in international marketing for B2B and B2C in the East Africa region. He has a proven track record of working across governmental, non-governmental, and private organizations. Qualified as a coordinator for international project management in development cooperation, his expertise encompasses project planning, financing, and quality management. Henok's educational background includes International Business/Tourism Management, pedagogy, and leadership.",
    experienceYears: 7, 
    location: 'Remote',
    email: 'henok.heruy@hdmxperts.com',
    portfolio: [],
    servicesOffered: [mockServices[4]],
  },
];

export const mockServiceRequests: ServiceRequest[] = [
  {
    id: 'q1', // Keeping ID for now, could be sr1
    professionalId: 'hdm_p1', 
    professionalName: 'Henok Doni',
    userName: 'Eve Client',
    userEmail: 'eve.client@example.com',
    companyName: 'Eve Corp',
    projectDescription: 'Need a new e-commerce website for selling handmade crafts.',
    companySize: '11-50 employees',
    timeline: '3 months',
    status: 'pending',
    submittedAt: new Date(Date.now() - 86400000 * 2).toISOString(), 
  },
  {
    id: 'q2', // Keeping ID for now, could be sr2
    professionalId: 'hdm_p2', 
    professionalName: 'Daniel Manaye',
    userName: 'Frank Customer',
    userEmail: 'frank.customer@example.com',
    projectDescription: 'Looking for a logo redesign and new brand guidelines for my small business.',
    companySize: '1-10 employees',
    timeline: '1 month',
    status: 'reviewed',
    submittedAt: new Date(Date.now() - 86400000).toISOString(), 
  },
];

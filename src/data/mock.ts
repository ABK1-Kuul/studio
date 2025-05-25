
import type { Professional, ServiceRequest, Service, Topic, TrainingTopic } from '@/lib/types';

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
  {
    id: 'hdm_s6',
    name: 'Strategic Planning and Execution',
    description: 'Comprehensive services for strategic planning and effective execution to achieve business goals.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s7',
    name: 'IT Project and Program Management',
    description: 'Expert management of IT projects and programs from initiation to completion.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s8',
    name: 'IT Governance and Management',
    description: 'Consulting services for establishing robust IT governance and management frameworks.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s9',
    name: 'Cybersecurity Strategy and Implementation',
    description: 'Developing and implementing comprehensive cybersecurity strategies to protect assets.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s10',
    name: 'Fraud Management – Finance sector',
    description: 'Specialized fraud management solutions tailored for the finance sector.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s11',
    name: 'Organizational Transformation and Change Management',
    description: 'Guiding organizations through successful transformation and change management processes.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s12',
    name: 'Process Optimization and Improvement',
    description: 'Identifying inefficiencies and optimizing business processes for enhanced performance.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s13',
    name: 'Risk Management and Compliance',
    description: 'Comprehensive risk management and compliance services to meet regulatory requirements.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s14',
    name: 'Market Analysis and Business Development',
    description: 'In-depth market analysis and strategic business development services.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s15',
    name: 'Digital Marketing',
    description: 'Effective digital marketing strategies to enhance online presence and engagement.',
    price: 'Contact for details'
  },
  {
    id: 'hdm_s16',
    name: 'Human Capital Management and Organizational Design',
    description: 'Services for optimizing human capital and designing effective organizational structures.',
    price: 'Contact for details'
  }
];

export const researchAreasList: Topic[] = [
    { id: 'ra_1', name: 'New business feasibility studies', description: "Evaluate the viability of new business ventures, assessing market potential, financial projections, and operational requirements." },
    { id: 'ra_2', name: 'IT infrastructure assessments (including maturity and capacity)', description: "Analyze current IT infrastructure to identify strengths, weaknesses, and opportunities for optimization in terms of performance, scalability, and maturity." },
    { id: 'ra_3', name: 'Cybersecurity Posture assessment', description: "Comprehensive review of your organization's cybersecurity defenses to identify vulnerabilities, assess risks, and recommend improvements." },
    { id: 'ra_4', name: 'Cybersecurity strategy and implementation', description: "Develop and execute tailored cybersecurity strategies to protect critical assets, ensure compliance, and build cyber resilience." },
    { id: 'ra_5', name: 'Corporate/business/function-level strategic development', description: "Facilitate the creation of robust strategies at all organizational levels to achieve long-term goals and competitive advantage." },
    { id: 'ra_6', name: 'IT roadmap design', description: "Create a strategic plan for IT initiatives, aligning technology investments with business objectives and future growth." },
    { id: 'ra_7', name: 'Employee/customer satisfaction surveys', description: "Design and conduct surveys to gather valuable feedback, measure satisfaction levels, and identify areas for improvement in employee and customer experiences." },
    { id: 'ra_8', name: 'Organizational culture/behavior/structure analysis', description: "Assess organizational dynamics, including culture, behaviors, and structures, to enhance efficiency, collaboration, and overall performance." },
    { id: 'ra_9', name: 'Risk maturity level assessments', description: "Evaluate the maturity of your organization's risk management practices and provide actionable recommendations for enhancement." },
    { id: 'ra_10', name: 'Automated software analysis', description: "Utilize advanced tools and techniques for automated analysis of software code to identify defects, vulnerabilities, and ensure quality." },
    { id: 'ra_11', name: 'Malware analysis', description: "In-depth examination of malicious software to understand its behavior, origin, and impact, aiding in threat mitigation and defense." },
    { id: 'ra_12', name: 'Reverse engineering', description: "Deconstruct software or hardware to understand its design, functionality, and identify potential vulnerabilities or areas for improvement." },
];

export const businessTrainingAreasList: TrainingTopic[] = [
    {
      id: 'bt_1',
      name: "Leadership Development",
      description: "Cultivate effective leaders at all levels with programs focused on strategic thinking, communication, decision-making, and team management."
    },
    {
      id: 'bt_2',
      name: "Project Management",
      description: "Equip your teams with the tools and techniques to plan, execute, and deliver projects successfully, on time and within budget."
    },
    {
      id: 'bt_3',
      name: "Business Communication",
      description: "Enhance communication skills across your organization, including written, verbal, and presentation skills, to foster collaboration and improve client relations."
    },
    {
      id: 'bt_4',
      name: "Sales and Marketing",
      description: "Drive revenue growth with training programs focused on sales strategies, customer relationship management, digital marketing, and market analysis."
    },
    {
      id: 'bt_5',
      name: "Operational Excellence",
      description: "Improve efficiency and productivity with training in process improvement methodologies, change management, and quality control."
    },
    {
      id: 'bt_6',
      name: "Agile",
      description: "Master Agile principles and practices for flexible and responsive project delivery."
    },
    {
      id: 'bt_7',
      name: "Scrum Master",
      description: "Develop skilled Scrum Masters to guide teams in Agile development."
    }
];

export const itTrainingAreasList: TrainingTopic[] = [
    {
      id: 'it_1',
      name: "IT Infrastructure Management",
      description: "Ensure your IT teams have the expertise to manage and optimize your IT infrastructure, including network administration, cloud computing, and cybersecurity."
    },
    {
      id: 'it_2',
      name: "Cybersecurity Training",
      description: "Equip staff to identify and address potential security threats."
    },
    {
      id: 'it_3',
      name: "IT Service Management",
      description: "Enhance IT service delivery with training in ITIL frameworks and best practices."
    },
    {
      id: 'it_4',
      name: "Data Analytics",
      description: "Empower your employees to leverage data for strategic decision-making with training in data analysis tools, techniques, and visualization."
    },
    {
      id: 'it_5',
      name: "Software Development",
      description: "Keep your development teams up-to-date with the latest programming languages, frameworks, and methodologies."
    }
];


export const mockProfessionals: Professional[] = [
  {
    id: 'hdm_p1',
    name: 'Henok Doni',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Consultant – Information System Project and Program Management',
    expertise: [
      'Business analysis', 'Project Management', 'Project Risk Management', 'Program Management',
      'Cybersecurity Governance, Risk and Compliance (GRC)', 'Cybersecurity Awareness program'
    ],
    bio: "Credentials: PMP®| ISO 27001:2022 Lead Auditor/Implementer | CEH | CAPC™ | CC\n\nHenok Doni is a highly skilled and certified consultant with over 15 years of expertise in project, program, and portfolio management, and business analysis. He excels at guiding clients to optimize their project management practices, implement effective programs, and manage diverse portfolios. His deep understanding of business analysis allows him to effectively identify client needs and drive significant business value.",
    experienceYears: 15,
    location: 'Remote',
    email: 'henok.doni@hdmxperts.com', 
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.id === 'hdm_s1')!, 
        mockServices.find(s => s.id === 'hdm_s7')!,
        mockServices.find(s => s.id === 'hdm_s6')!, 
        mockServices.find(s => s.id === 'hdm_s13')!,
    ],
    researchSpecialties: [
        'New business feasibility studies',
        'IT infrastructure assessments (including maturity and capacity)',
        'Cybersecurity strategy and implementation',
        'Corporate/business/function-level strategic development',
        'Risk maturity level assessments',
    ],
    trainingSpecialties: [
        'Project Management',
        'Cybersecurity Training',
    ],
  },
  {
    id: 'hdm_p2',
    name: 'Daniel Manaye',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Consultant – Fraud Management',
    expertise: [
      'Fraud Management', 'Cybersecurity Controls and Implementation', 'Cybersecurity Training', 'Anti-Fraud Management'
    ],
    bio: "Credentials: CISSP | CISM| CEHv8 | ITIL | ISO27001 Lead Implementer | Certified Cybersecurity Expert | Cisco CyberOps | CyberArk Trustee.\n\nDaniel Manaye is a highly accomplished and results-oriented consultant specializing in cybersecurity and information systems (IS) fraud management, with a focus on delivering impactful solutions for the digital banking sector. He leverages extensive technical expertise and strategic problem-solving abilities to mitigate fraud risks, enhance security posture, and drive operational excellence. His core competencies include IS fraud management through data-driven initiatives, securing digital banking platforms, proactive risk management, and designing effective security awareness programs.",
    experienceYears: 10, 
    location: 'Remote',
    email: 'daniel.manaye@hdmxperts.com',
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.id === 'hdm_s2')!, 
        mockServices.find(s => s.id === 'hdm_s9')!, 
        mockServices.find(s => s.id === 'hdm_s10')!,
    ],
    researchSpecialties: [
        'Cybersecurity Posture assessment',
        'Cybersecurity strategy and implementation',
        'Risk maturity level assessments',
    ],
    trainingSpecialties: [
        'Cybersecurity Training',
    ],
  },
  {
    id: 'hdm_p3',
    name: 'Yohannes Yemane',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Consultant – Cyber Security Analyst and Digital Forensic.',
    expertise: [
      'Cybersecurity Analysis and Research', 'Digital Forensic', 'VAPT', 'Mobile Application Development'
    ],
    bio: "Credentials: CISSP | CISM| CRISC | CEH | ISO 27001:2022 Lead Auditor/ Implementer\n\nYohannes is a dedicated and versatile professional with over 12 years of experience in cybersecurity analysis and research, programming, and digital forensics. His expertise encompasses a wide range of areas, including vulnerability assessment and penetration testing (VAPT), reverse engineering, and security research. He possesses hands-on expertise in various programming languages with a keen interest in mobile application development and security analysis.",
    experienceYears: 12,
    location: 'Remote',
    email: 'yohannes.yemane@hdmxperts.com',
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.id === 'hdm_s3')!, 
        mockServices.find(s => s.id === 'hdm_s9')!,
    ],
    researchSpecialties: [
        'Cybersecurity Posture assessment',
        'Cybersecurity strategy and implementation',
        'Reverse engineering',
        'Malware analysis'
    ],
    trainingSpecialties: [
        'Cybersecurity Training',
        'Software Development',
    ],
  },
  {
    id: 'hdm_p4',
    name: 'Maedot Assefa',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Consultant – Digital Business',
    expertise: [
      'Digital Business Advisor', 'International Service Marketing and Management',
      'E-commerce', 'Digital Marketing Training'
    ],
    bio: "Credentials: Executive Diploma in Digital Business and MA in International Service Management\n\nMaedot is a Digital Business Advisor and Consultant specializing in International Service Marketing and Management, E-commerce, and Digital Marketing Training. Maedot provides expert guidance and training to businesses seeking to enhance their digital presence and optimize ecommerce operations, develop and implement effective digital marketing strategies, and expand their reach and manage their services in international markets. With a focus on practical application and resultsdriven strategies, Maedot equips businesses with the knowledge and tools to thrive in the global digital landscape.",
    experienceYears: 7,
    location: 'Remote',
    email: 'maedot.assefa@hdmxperts.com',
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.id === 'hdm_s4')!,
        mockServices.find(s => s.id === 'hdm_s15')!,
        mockServices.find(s => s.id === 'hdm_s14')!,
    ],
    researchSpecialties: [
        'New business feasibility studies',
        'Market Analysis and Business Development',
        'Employee/customer satisfaction surveys',
    ],
    trainingSpecialties: [
        'Sales and Marketing',
        'Business Communication',
    ],
  },
  {
    id: 'hdm_p5',
    name: 'Henok Heruy Gizaw',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Consultant – Hotel and Tourism Management',
    expertise: [
      'International Business', 'Hotel and Tourism Management'
    ],
    bio: "Credentials: MA in International Business and Tourism Management from Hochschule Heilbronn - Hochschule für Technik, Wirtschaft und Informatik (Germany)\n\nHenok Heruy is a seasoned professional with several years of experience in international development projects, specifically in education, trade competency, and tourism, with experience in international marketing for B2B and B2C in the East Africa region. He has a proven track record of working across governmental, non-governmental, and private organizations. Qualified as a coordinator for international project management in development cooperation, his expertise encompasses project planning, financing, and quality management.",
    experienceYears: 7,
    location: 'Remote',
    email: 'henok.heruy@hdmxperts.com',
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.id === 'hdm_s5')!,
        mockServices.find(s => s.id === 'hdm_s14')!, 
    ],
    researchSpecialties: [
        'Market Analysis and Business Development',
        'Organizational culture/behavior/structure analysis',
    ],
    trainingSpecialties: [
        'Leadership Development',
        'Sales and Marketing',
    ],
  },
  {
    id: 'hdm_p6',
    name: 'Leoul Zewelde',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Trainer – Agile and Project management',
    expertise: ['Agile', 'Scrum Master', 'Project Management', 'Lean', 'Digital Transformation', 'Quality Frameworks'],
    bio: "Credentials: PMP® - PRINCE2® - ICAgile ICP - ITIL®4 Leader: Digital and IT Strategy - PMI ACP - MBA - Certified scrum product owner - Diplôme d'études en française - Published Author.\n\nLeoul is a Project and Digital Transformation professional with a focus on driving organizational effectiveness. Skilled in Lean, Project Management, Quality and Scaled Agile frameworks.",
    experienceYears: 10, 
    location: 'Remote',
    email: 'leoul.zewelde@hdmxperts.com',
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.id === 'hdm_s1')!, 
        mockServices.find(s => s.id === 'hdm_s11')!, 
    ],
    researchSpecialties: [
        'Organizational culture/behavior/structure analysis',
    ],
    trainingSpecialties: [
        'Agile', 'Scrum Master', 'Project Management'
    ],
  },
  {
    id: 'hdm_p7',
    name: 'Ashenafi Mezgebe',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Business Analyst',
    expertise: ['Business Analysis and Requirement Development', 'Oracle ERP/EPM', 'Database Administration', 'Performance Optimization'],
    bio: "Credentials: MA in Project management\n\nAshenafi Mezgebe is a results-driven IT professional with 12+ years of experience specializing in enterprise-level Oracle ERP/EPM systems, database administration, and performance optimization. He combines deep technical expertise in managing cross-platform solutions with proven project leadership in large-scale IT implementations. Ashenafi also excels as a business and system requirements analyst in the financial and information technology sectors, driving efficient and robust Oracle solutions.",
    experienceYears: 12,
    location: 'Remote',
    email: 'ashenafi.mezgebe@hdmxperts.com',
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.name === 'Business analysis') || mockServices.find(s => s.id === 'hdm_s1')!, 
        mockServices.find(s => s.id === 'hdm_s12')!, 
    ],
    researchSpecialties: [
        'IT infrastructure assessments (including maturity and capacity)',
        'New business feasibility studies',
    ],
    trainingSpecialties: [
         'Data Analytics', 
    ],
  },
  {
    id: 'hdm_p8',
    name: 'Biniam F. Demissie, PhD',
    avatarUrl: 'https://placehold.co/200x200.png',
    industry: 'Lead Security Researcher',
    expertise: ['Automated software analysis', 'Malware analysis', 'Reverse engineering', 'Cyber threat intelligence', 'Binary analysis', 'Software security testing'],
    bio: "Credentials: PhD in Computer Science\n\nHighly skilled and experienced Computer Security professional with a strong background in automated software analysis (static & dynamic), binary analysis, software security testing, malware analysis, reverse engineering, and cyber threat intelligence. Proven ability to analyze complex systems and extract critical IOCs. Dedicated to fostering cybersecurity talent, having taught security courses at UniTN.",
    experienceYears: 10, 
    location: 'Remote',
    email: 'biniam.demissie@hdmxperts.com',
    portfolio: [],
    servicesOffered: [
        mockServices.find(s => s.id === 'hdm_s3')!, 
        mockServices.find(s => s.id === 'hdm_s9')!, 
    ],
    researchSpecialties: [
        'Automated software analysis', 'Malware analysis', 'Reverse engineering', 'Cybersecurity Posture assessment'
    ],
    trainingSpecialties: [
        'Cybersecurity Training',
        'Software Development', 
    ],
  }
];

export const mockServiceRequests: ServiceRequest[] = [
  {
    id: 'sr1',
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
    id: 'sr2',
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

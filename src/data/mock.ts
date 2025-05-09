import type { Professional, QuoteRequest, Service } from '@/lib/types';

export const mockServices: Service[] = [
  { id: 's1', name: 'Custom Web Application', description: 'Full-stack development of custom web applications tailored to your needs.', price: 'Project-based' },
  { id: 's2', name: 'Mobile App Development', description: 'Native and cross-platform mobile app development.', price: 'Project-based' },
  { id: 's3', name: 'UI/UX Design', description: 'User interface and user experience design services.', price: 'From $1500' }, // Example price change
  { id: 's4', name: 'Branding & Identity', description: 'Logo design, brand guidelines, and visual identity.', price: '$1200 package' },
  { id: 's5', name: 'Digital Marketing Strategy', description: 'Comprehensive digital marketing planning and execution.', price: ' retainer' },
  { id: 's6', name: 'Content Creation', description: 'Blog posts, articles, and social media content.', price: 'From $100/piece' },
];

export const mockProfessionals: Professional[] = [
  {
    id: '1',
    name: 'Alice Wonderland',
    avatarUrl: 'https://picsum.photos/seed/alice/200/200',
    industry: 'Web Development',
    expertise: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    bio: 'Experienced full-stack developer passionate about creating modern and performant web applications. Proven ability to lead projects from conception to deployment.',
    experienceYears: 7,
    location: 'San Francisco, CA',
    // hourlyRate removed
    email: 'alice.wonderland@example.com', // Kept for admin/internal use
    phone: '555-0101', // Kept for admin/internal use
    portfolio: [
      { id: 'p1', title: 'E-commerce Platform', description: 'Developed a scalable e-commerce solution for a fashion retailer.', imageUrl: 'https://picsum.photos/seed/ecom/600/400', projectUrl: '#' },
      { id: 'p2', title: 'SaaS Dashboard', description: 'Designed and built a user-friendly dashboard for a SaaS product.', imageUrl: 'https://picsum.photos/seed/saas/600/400', projectUrl: '#' },
    ],
    servicesOffered: [mockServices[0], mockServices[2]],
  },
  {
    id: '2',
    name: 'Bob The Builder',
    avatarUrl: 'https://picsum.photos/seed/bob/200/200',
    industry: 'Graphic Design',
    expertise: ['Branding', 'Illustration', 'UI Design', 'Adobe Creative Suite'],
    bio: 'Creative graphic designer with a knack for visual storytelling. Specializing in branding and UI design to help businesses stand out.',
    experienceYears: 5,
    location: 'New York, NY',
    // hourlyRate removed
    email: 'bob.builder@example.com', // Kept for admin/internal use
    phone: '555-0102', // Kept for admin/internal use
    portfolio: [
      { id: 'p3', title: 'Startup Branding', description: 'Complete branding package for a tech startup.', imageUrl: 'https://picsum.photos/seed/branding/600/400', projectUrl: '#' },
      { id: 'p4', title: 'Mobile App UI Kit', description: 'Designed a comprehensive UI kit for a mobile application.', imageUrl: 'https://picsum.photos/seed/uikit/600/400', projectUrl: '#' },
    ],
    servicesOffered: [mockServices[2], mockServices[3]],
  },
  {
    id: '3',
    name: 'Charlie MarketingPro',
    avatarUrl: 'https://picsum.photos/seed/charlie/200/200',
    industry: 'Digital Marketing',
    expertise: ['SEO', 'PPC', 'Content Marketing', 'Social Media'],
    bio: 'Results-driven digital marketing specialist focused on growing online presence and driving conversions. Expertise in SEO, PPC, and content strategy.',
    experienceYears: 8,
    location: 'Chicago, IL',
    // hourlyRate removed
    email: 'charlie.marketing@example.com', // Kept for admin/internal use
    phone: '555-0103', // Kept for admin/internal use
    portfolio: [
      { id: 'p5', title: 'SEO Campaign Success', description: 'Increased organic traffic by 150% for a local business.', imageUrl: 'https://picsum.photos/seed/seo/600/400', projectUrl: '#' },
    ],
    servicesOffered: [mockServices[4], mockServices[5]],
  },
  {
    id: '4',
    name: 'Diana DevRel',
    avatarUrl: 'https://picsum.photos/seed/diana/200/200',
    industry: 'Mobile Development',
    expertise: ['iOS', 'Swift', 'Android', 'Kotlin', 'React Native'],
    bio: 'Passionate mobile developer crafting seamless user experiences on iOS and Android. Strong focus on performance and clean code.',
    experienceYears: 6,
    location: 'Austin, TX',
    // hourlyRate removed
    email: 'diana.devrel@example.com', // Kept for admin/internal use
    phone: '555-0104', // Kept for admin/internal use
    portfolio: [
      { id: 'p6', title: 'Fitness Tracking App', description: 'Lead developer for a popular fitness tracking application on iOS.', imageUrl: 'https://picsum.photos/seed/fitnessapp/600/400', projectUrl: '#' },
      { id: 'p7', title: 'Cross-Platform Utility App', description: 'Built a utility app using React Native for both iOS and Android.', imageUrl: 'https://picsum.photos/seed/utilityapp/600/400', projectUrl: '#' },
    ],
    servicesOffered: [mockServices[1]],
  },
];

export const mockQuoteRequests: QuoteRequest[] = [
  {
    id: 'q1',
    professionalId: '1',
    professionalName: 'Alice Wonderland',
    userName: 'Eve Client',
    userEmail: 'eve.client@example.com',
    companyName: 'Eve Corp',
    projectDescription: 'Need a new e-commerce website for selling handmade crafts.',
    budget: '$5,000 - $10,000',
    timeline: '3 months',
    status: 'pending',
    submittedAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
  },
  {
    id: 'q2',
    professionalId: '2',
    professionalName: 'Bob The Builder',
    userName: 'Frank Customer',
    userEmail: 'frank.customer@example.com',
    projectDescription: 'Looking for a logo redesign and new brand guidelines for my small business.',
    budget: '$1,000 - $2,500',
    timeline: '1 month',
    status: 'reviewed',
    submittedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
  },
];

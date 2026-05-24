export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  live: string;
  description: string;
  client: string;
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  keyPoints: { label: string; value: string }[];
}

export const projectsData: ProjectDetail[] = [
  {
    slug: 'toyo228',
    title: 'Toyo228',
    category: 'Full Stack',
    image: '/projects/toyo228.png',
    tags: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'TypeScript', 'Turborepo', 'Multer', 'Excel Processing'],
    live: 'http://toyo228.com/en',
    description: 'Full-featured automotive platform with Excel-based inventory processing and management.',
    client: 'Toyo228',
    industry: 'Automotive',
    overview:
      'Toyo228 needed a robust online platform to manage their automotive inventory, streamline vehicle listings, and handle bulk data imports from Excel spreadsheets. The platform serves both internal teams and end customers browsing available vehicles.',
    challenge:
      'The client relied on manual Excel sheets to track inventory, leading to data inconsistencies and slow updates. They needed a system that could process bulk uploads, validate data, and reflect changes instantly on the customer-facing storefront.',
    solution:
      'We built a full-stack monorepo using Turborepo with a Next.js frontend and NestJS backend. The system features automated Excel processing via Multer, real-time inventory syncing with TypeORM and PostgreSQL, and a responsive storefront with advanced search and filtering capabilities.',
    keyPoints: [
      { label: 'Automated Processing', value: 'Bulk Excel imports with validation' },
      { label: 'Monorepo Architecture', value: 'Turborepo for unified development' },
      { label: 'Real-Time Sync', value: 'Instant inventory updates' },
    ],
  },
  {
    slug: 'motors',
    title: 'Motor KSA',
    category: 'Full Stack',
    image: '/projects/motors.png',
    tags: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'TypeScript', 'Multer'],
    live: 'https://motorksa.org/',
    description: 'Automotive marketplace platform for the Saudi Arabian market.',
    client: 'Motor KSA',
    industry: 'Automotive',
    overview:
      'Motor KSA is a leading automotive marketplace in Saudi Arabia, connecting buyers and sellers across the Kingdom. The platform needed a modern, bilingual interface to handle vehicle listings, dealer profiles, and customer inquiries.',
    challenge:
      'The existing system lacked RTL support, had poor performance with large catalogs, and didn\'t support media-rich listings. The client needed a scalable solution that could handle thousands of concurrent users.',
    solution:
      'We developed a full-stack solution with Next.js for SSR/SSG performance, NestJS for a robust API layer, and PostgreSQL for reliable data storage. The platform supports RTL/LTR, image uploads via Multer, and advanced vehicle search with filtering by make, model, year, and price.',
    keyPoints: [
      { label: 'Bilingual Support', value: 'Full Arabic & English RTL/LTR' },
      { label: 'Media Management', value: 'Multi-image vehicle listings' },
      { label: 'Market Reach', value: 'Saudi-wide dealer network' },
    ],
  },
  {
    slug: 'injaz',
    title: 'Injaz LMS',
    category: 'Full Stack',
    image: '/projects/injaz.png',
    tags: ['Django', 'PostgreSQL', 'Python', 'Celery', 'Redis', 'MyFatoorah', 'NELC', 'SCFHS'],
    live: 'https://lms-injaz.com/',
    description: 'Learning management system with payment integration and national accreditation compliance.',
    client: 'Injaz',
    industry: 'Education & E-Learning',
    overview:
      'Injaz required a comprehensive Learning Management System that complies with Saudi national accreditation standards (NELC & SCFHS) while supporting online payments and certificate generation for healthcare professionals.',
    challenge:
      'Building an LMS that meets strict regulatory requirements from NELC and SCFHS was complex. The system needed to track continuing education credits, issue verifiable certificates, and handle payment processing in the Saudi market.',
    solution:
      'We built the platform using Django with Celery for async task processing (certificate generation, email notifications) and Redis for caching. MyFatoorah handles payment processing. The system includes automated compliance reporting, progress tracking, and accredited certificate issuance.',
    keyPoints: [
      { label: 'Compliance', value: 'NELC & SCFHS accredited' },
      { label: 'Payments', value: 'MyFatoorah integration' },
      { label: 'Automation', value: 'Certificate generation via Celery' },
    ],
  },
  {
    slug: 'hcholding',
    title: 'HC Holding LMS',
    category: 'Full Stack',
    image: '/projects/hcholding.png',
    tags: ['Django', 'PostgreSQL', 'Python', 'Celery', 'Redis', 'MyFatoorah', 'NELC', 'SCFHS'],
    live: 'https://lms-hcholding.org/',
    description: 'Enterprise learning platform with NELC and SCFHS compliance for healthcare education.',
    client: 'HC Holding',
    industry: 'Healthcare Education',
    overview:
      'HC Holding operates in the healthcare education space, providing accredited training programs. They needed an enterprise-grade LMS with multi-tenant support and regulatory compliance for continuing medical education.',
    challenge:
      'Managing multiple training programs with different accreditation requirements, tracking learner progress across organizations, and ensuring data isolation between different business units presented significant architectural challenges.',
    solution:
      'We implemented a multi-tenant Django application with organization-level data isolation, SCFHS-compliant course tracking, and integrated payment processing via MyFatoorah. Celery handles background tasks like bulk certificate generation and compliance report scheduling.',
    keyPoints: [
      { label: 'Multi-Tenant', value: 'Organization-level isolation' },
      { label: 'Accreditation', value: 'SCFHS & NELC compliant' },
      { label: 'Scale', value: 'Enterprise-grade architecture' },
    ],
  },
  {
    slug: 'indstrz',
    title: 'Indstrz',
    category: 'Full Stack',
    image: '/projects/indstrz.png',
    tags: ['Next.js', 'React', 'Flask', 'PostgreSQL', 'Socket.io', 'SQLAlchemy', 'Cloudinary'],
    live: 'https://indstrz.com/',
    description: 'AI-powered digital platform empowering Egyptian manufacturers for global market access.',
    client: 'Indstrz (In-House Product)',
    industry: 'Industrial Manufacturing',
    overview:
      'Indstrz is a digital platform designed to support and empower Egyptian manufacturers to reach global markets. The platform uses AI and digital transformation technologies to connect factories with international buyers.',
    challenge:
      'Egyptian manufacturers face significant barriers accessing global markets — from fragmented supply chains to lack of digital presence. The platform needed to simplify RFQ processing, factory verification, and international matchmaking at scale.',
    solution:
      'We built a comprehensive platform with Next.js frontend, Flask backend, and AI-powered features including smart RFQ processing, industrial matchmaking, factory verification profiles, and real-time communication via Socket.io. Cloudinary manages media assets for product catalogs.',
    keyPoints: [
      { label: 'AI Matching', value: 'Smart factory-buyer pairing' },
      { label: 'Real-Time', value: 'Socket.io communication' },
      { label: 'Global Reach', value: 'International market access' },
    ],
  },
  {
    slug: 'sonomedix',
    title: 'SonoMedix',
    category: 'Full Stack',
    image: '/projects/sonomedix.png',
    tags: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB'],
    live: 'https://sonomedix.cloud/',
    description: 'Cloud-based medical platform for ultrasound diagnostics and patient management.',
    client: 'SonoMedix',
    industry: 'Healthcare',
    overview:
      'SonoMedix needed a cloud-based platform to manage ultrasound diagnostic workflows, patient records, and imaging data. The system serves medical professionals who require quick access to patient histories and diagnostic tools.',
    challenge:
      'Healthcare data requires strict security and compliance measures. The platform needed to handle large imaging files efficiently while maintaining fast load times and ensuring data privacy across multiple clinic locations.',
    solution:
      'We developed a MERN-stack application with React frontend, Express.js API, and MongoDB for flexible medical record storage. The platform includes role-based access control, optimized image handling, and a responsive interface designed for clinical environments.',
    keyPoints: [
      { label: 'Cloud-Based', value: 'Accessible from any device' },
      { label: 'Data Security', value: 'Role-based access control' },
      { label: 'Performance', value: 'Optimized for large imaging files' },
    ],
  },
  {
    slug: 'kmbc',
    title: 'KMBC',
    category: 'Frontend',
    image: '/projects/kmbc.png',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'React'],
    live: 'https://www.kmbc-kw.com/',
    description: 'Corporate website for KMBC Kuwait with dynamic animations and modern design.',
    client: 'KMBC Kuwait',
    industry: 'Business Consulting',
    overview:
      'KMBC Kuwait needed a modern corporate website that reflects their premium brand identity and showcases their consulting services to the Kuwaiti market.',
    challenge:
      'The client wanted a website that stands out with rich animations and interactions while maintaining fast performance and mobile responsiveness in a region where mobile browsing dominates.',
    solution:
      'We crafted a Next.js website with Framer Motion for smooth page transitions and scroll-based animations. Tailwind CSS ensures consistent styling across all devices, and the site is fully optimized for Core Web Vitals.',
    keyPoints: [
      { label: 'Animations', value: 'Framer Motion interactions' },
      { label: 'Performance', value: 'Optimized Core Web Vitals' },
      { label: 'Design', value: 'Premium brand experience' },
    ],
  },
  {
    slug: 'rabzan',
    title: 'Rabzan',
    category: 'Frontend',
    image: '/projects/rabzan.png',
    tags: ['React', 'Tailwind', 'JavaScript'],
    live: 'https://www.rabzan.com/',
    description: 'Professional business landing page with responsive design and smooth interactions.',
    client: 'Rabzan',
    industry: 'Business Services',
    overview:
      'Rabzan needed a professional landing page to establish their online presence and convert visitors into leads for their business services.',
    challenge:
      'Creating a fast-loading, visually appealing landing page that effectively communicates the brand value proposition and drives user engagement across all devices.',
    solution:
      'We built a responsive React application with Tailwind CSS, featuring smooth scroll animations, optimized images, and a clear conversion-focused layout.',
    keyPoints: [
      { label: 'Conversion', value: 'Optimized lead capture' },
      { label: 'Speed', value: 'Fast-loading SPA' },
      { label: 'Responsive', value: 'Mobile-first design' },
    ],
  },
  {
    slug: 'manqla',
    title: 'Manqla',
    category: 'Frontend',
    image: '/projects/manqla.png',
    tags: ['React', 'Tailwind', 'TypeScript'],
    live: 'https://www.manqla.com/',
    description: 'Modern web application featuring clean UI and optimized performance.',
    client: 'Manqla',
    industry: 'Logistics',
    overview:
      'Manqla required a modern web presence to showcase their logistics and transportation services with a clean, professional interface.',
    challenge:
      'The platform needed to present complex service offerings in an intuitive way while supporting both Arabic and English content for their diverse customer base.',
    solution:
      'We developed a TypeScript-powered React application with Tailwind CSS, featuring a clean component architecture, bilingual support, and performance optimizations.',
    keyPoints: [
      { label: 'Type Safety', value: 'Full TypeScript coverage' },
      { label: 'Bilingual', value: 'Arabic & English support' },
      { label: 'Clean UI', value: 'Intuitive navigation' },
    ],
  },
  {
    slug: 'sems',
    title: 'SEMS',
    category: 'Full Stack',
    image: '/projects/sems.png',
    tags: ['Next.js', 'Tailwind', 'React', 'TypeScript'],
    live: 'https://sems-project.vercel.app/',
    description: 'Smart energy management system with real-time monitoring and analytics.',
    client: 'SEMS',
    industry: 'Energy Management',
    overview:
      'SEMS is a smart energy management system designed to help organizations monitor, analyze, and optimize their energy consumption in real-time.',
    challenge:
      'Building a dashboard that can handle real-time data streams from multiple energy sources while presenting actionable insights in an easy-to-understand format.',
    solution:
      'We built a Next.js application with real-time data visualization, interactive charts, and automated alerting. The TypeScript codebase ensures reliability across the complex data processing pipeline.',
    keyPoints: [
      { label: 'Real-Time', value: 'Live energy monitoring' },
      { label: 'Analytics', value: 'Interactive dashboards' },
      { label: 'Alerts', value: 'Automated notifications' },
    ],
  },
  {
    slug: 'nextstop',
    title: 'NextStop',
    category: 'Frontend',
    image: '/projects/nextstop.png',
    tags: ['Next.js', 'Tailwind', 'Vercel', 'React'],
    live: 'https://next-stop-project-nine.vercel.app/',
    description: 'Travel platform with modern UI, route planning, and destination discovery.',
    client: 'NextStop',
    industry: 'Travel & Tourism',
    overview:
      'NextStop is a travel discovery platform that helps users explore destinations, plan routes, and find travel inspiration with a beautifully designed interface.',
    challenge:
      'Creating an engaging travel platform that loads quickly with rich media content and provides a seamless browsing experience on mobile devices.',
    solution:
      'We leveraged Next.js for optimal image loading and SSG for fast page loads. The platform features beautiful destination cards, interactive route planning, and responsive design powered by Tailwind CSS.',
    keyPoints: [
      { label: 'Optimized Media', value: 'Next.js image optimization' },
      { label: 'Fast Loading', value: 'Static site generation' },
      { label: 'Engaging UX', value: 'Interactive discovery' },
    ],
  },
  {
    slug: 'quotemate',
    title: 'QuoteMate',
    category: 'Full Stack',
    image: '/projects/quotemate.png',
    tags: ['Next.js', 'Tailwind', 'AI', 'OpenAI', 'React'],
    live: 'https://quote-mateapp.vercel.app/',
    description: 'AI-powered quote generation application with OpenAI integration.',
    client: 'QuoteMate',
    industry: 'AI & Productivity',
    overview:
      'QuoteMate is an AI-powered application that generates customized quotes and content using OpenAI\'s GPT models, helping users find inspiration and create meaningful content.',
    challenge:
      'Integrating AI models effectively while managing API costs, handling rate limits, and providing a responsive user experience during AI processing times.',
    solution:
      'We built a Next.js application with server-side OpenAI API calls, streaming responses for real-time content generation, and intelligent caching to optimize API usage and costs.',
    keyPoints: [
      { label: 'AI Integration', value: 'OpenAI GPT models' },
      { label: 'Streaming', value: 'Real-time generation' },
      { label: 'Cost Efficient', value: 'Smart API caching' },
    ],
  },
  {
    slug: 'dmagni',
    title: 'DMagni',
    category: 'Full Stack',
    image: '/projects/dmagni.png',
    tags: ['Next.js', 'Tailwind', 'AI', 'React'],
    live: 'https://dmagni-project.vercel.app/',
    description: 'AI-enhanced digital platform for intelligent content and data management.',
    client: 'DMagni',
    industry: 'AI & Technology',
    overview:
      'DMagni is an AI-enhanced platform for intelligent content management and data processing, helping businesses automate their content workflows.',
    challenge:
      'Building a platform that combines AI capabilities with intuitive content management tools while maintaining performance with large datasets.',
    solution:
      'We developed a Next.js application with AI-powered content processing, a clean management interface, and optimized data handling for large-scale content operations.',
    keyPoints: [
      { label: 'AI-Enhanced', value: 'Intelligent processing' },
      { label: 'Scalable', value: 'Handles large datasets' },
      { label: 'Intuitive', value: 'Clean management UI' },
    ],
  },
  {
    slug: 'cme',
    title: 'CME Hours',
    category: 'Full Stack',
    image: '/projects/cme.png',
    tags: ['Next.js', 'Tailwind', 'React', 'PostgreSQL'],
    live: 'https://cmehours.online/',
    description: 'Continuing medical education tracking platform for healthcare professionals.',
    client: 'CME Hours',
    industry: 'Healthcare Education',
    overview:
      'CME Hours is a platform for healthcare professionals to track their continuing medical education credits, find accredited courses, and manage their professional development requirements.',
    challenge:
      'Healthcare professionals need to track CME credits across multiple accreditation bodies with different requirements. The system needed to automate tracking and provide clear reporting.',
    solution:
      'We built a Next.js application with PostgreSQL for reliable data storage, automated credit tracking, multi-body accreditation support, and professional dashboards for progress monitoring.',
    keyPoints: [
      { label: 'Credit Tracking', value: 'Automated CME logging' },
      { label: 'Multi-Body', value: 'Multiple accreditations' },
      { label: 'Reporting', value: 'Professional dashboards' },
    ],
  },
  {
    slug: 'dpms',
    title: 'DPMS',
    category: 'Full Stack',
    image: '/projects/dpms.png',
    tags: ['Next.js', 'Tailwind', 'React', 'PostgreSQL'],
    live: 'https://dpms-rust.vercel.app/',
    description: 'Digital project management system with task tracking and collaboration tools.',
    client: 'DPMS',
    industry: 'Project Management',
    overview:
      'DPMS is a digital project management system designed to streamline task tracking, team collaboration, and project delivery for growing organizations.',
    challenge:
      'Creating a project management tool that balances powerful features with simplicity, avoiding the bloat that makes competing tools difficult to adopt.',
    solution:
      'We developed a focused Next.js application with PostgreSQL, featuring intuitive task management, project timelines, and team collaboration — all with a clean, easy-to-learn interface.',
    keyPoints: [
      { label: 'Task Management', value: 'Intuitive workflows' },
      { label: 'Collaboration', value: 'Team-oriented design' },
      { label: 'Simplicity', value: 'Easy adoption curve' },
    ],
  },
  {
    slug: 'uduipa',
    title: 'UDUIPA',
    category: 'Full Stack',
    image: '/projects/uduipa.png',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Turborepo', 'Cloudinary', 'Puppeteer', 'Recharts'],
    live: 'https://uduipa.com',
    description: 'Full-stack platform with PDF generation, analytics dashboards, and media management.',
    client: 'UDUIPA',
    industry: 'Business Solutions',
    overview:
      'UDUIPA required a comprehensive business platform with document generation, analytics visualization, and media management capabilities to support their operational workflows.',
    challenge:
      'The platform needed to handle complex PDF generation with dynamic data, real-time analytics dashboards, and efficient media management — all within a unified, scalable architecture.',
    solution:
      'We architected a Turborepo monorepo with Next.js and NestJS, using Puppeteer for server-side PDF generation, Recharts for interactive analytics dashboards, and Cloudinary for optimized media management.',
    keyPoints: [
      { label: 'PDF Generation', value: 'Puppeteer-powered documents' },
      { label: 'Analytics', value: 'Recharts dashboards' },
      { label: 'Monorepo', value: 'Turborepo architecture' },
    ],
  },
  {
    slug: 'waferlee',
    title: 'Waferlee',
    category: 'Full Stack',
    image: '/projects/waferlee.png',
    tags: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'Tailwind', 'Radix UI', 'Framer Motion'],
    live: 'https://waferlee.ae',
    description: 'E-commerce platform for the UAE market with modern UI components and animations.',
    client: 'Waferlee',
    industry: 'E-Commerce',
    overview:
      'Waferlee is an e-commerce platform targeting the UAE market, offering a premium shopping experience with smooth animations and accessible UI components.',
    challenge:
      'Building an e-commerce platform that meets UAE market expectations for premium design while handling complex product catalogs, payments, and order management.',
    solution:
      'We developed a full-stack e-commerce solution with Next.js and NestJS, featuring Radix UI for accessible components, Framer Motion for polished animations, and TypeORM for complex product data modeling.',
    keyPoints: [
      { label: 'Premium UX', value: 'Framer Motion animations' },
      { label: 'Accessible', value: 'Radix UI components' },
      { label: 'UAE Market', value: 'Localized experience' },
    ],
  },
  {
    slug: 'journal',
    title: 'UPAFA Journal',
    category: 'Full Stack',
    image: '/projects/journal.png',
    tags: ['React', 'NestJS', 'TypeORM', 'PostgreSQL', 'TypeScript', 'Nx Monorepo'],
    live: 'https://upafa-edu.net/',
    description: 'Academic journal publishing platform with monorepo architecture and content management.',
    client: 'UPAFA',
    industry: 'Academic Publishing',
    overview:
      'UPAFA needed a modern academic journal publishing platform to manage paper submissions, peer reviews, and publications for their educational research community.',
    challenge:
      'Academic publishing requires complex workflows — from submission to peer review to publication. The system needed to manage multiple journals, reviewer assignments, and version control of papers.',
    solution:
      'We built an Nx monorepo with React frontend and NestJS backend, featuring a multi-step submission workflow, peer review management, and automated publication pipeline with TypeORM for complex relational data.',
    keyPoints: [
      { label: 'Workflows', value: 'Multi-step submissions' },
      { label: 'Peer Review', value: 'Managed review process' },
      { label: 'Monorepo', value: 'Nx workspace architecture' },
    ],
  },
  {
    slug: 'profleet',
    title: 'ProFleet',
    category: 'Full Stack',
    image: '/projects/profleet.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'PostgreSQL', 'Leaflet'],
    live: 'https://pro-fleet.vercel.app/',
    description: 'Real-time fleet management system with GPS tracking and route optimization.',
    client: 'ProFleet',
    industry: 'Fleet Management',
    overview:
      'ProFleet is a real-time fleet management system that enables companies to track their vehicles, optimize routes, and manage their entire fleet operations from a single dashboard.',
    challenge:
      'Real-time GPS tracking at scale requires handling thousands of concurrent WebSocket connections while maintaining map rendering performance and accurate position updates.',
    solution:
      'We built a Next.js application with Socket.io for real-time GPS data streaming, Leaflet for interactive map visualization, Prisma for type-safe database operations, and PostgreSQL for reliable data storage.',
    keyPoints: [
      { label: 'Real-Time GPS', value: 'Live vehicle tracking' },
      { label: 'Interactive Maps', value: 'Leaflet visualization' },
      { label: 'WebSockets', value: 'Socket.io data streaming' },
    ],
  },
];

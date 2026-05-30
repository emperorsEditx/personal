const portfolioData = [
  {
    slug: 'cutter-mobile-app',
    title: 'Cutter mobile app',
    category: 'Development',
    client: 'Envato',
    startDate: '7 August 2021',
    designer: 'UiCamp',
    tags: ['Figma', 'Web Design'],
    description:
      'We’re a full stack firm that can help you from strategy to launch, and anywhere in between.',
    challenge:
      'The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
    solution:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
    img: '/assets/imgs/works/1/1.jpg',
    heroImage: '/assets/imgs/works/3/1.jpg',
    gallery: ['/assets/imgs/works/3/2.jpg', '/assets/imgs/works/3/3.jpg'],
    nextSlug: 'ai-dashboard-ui',
    prevSlug: 'brand-identity-system',
    seoTitle: 'Cutter mobile app | Portfolio',
    seoDescription:
      'A dynamic portfolio case study for Cutter mobile app with project details, gallery images, and SEO metadata.',
    seoKeywords: ['portfolio', 'mobile app', 'figma', 'web design'],
    detailText: 'View Details',
  },
  {
    slug: 'ai-dashboard-ui',
    title: 'AI Dashboard UI',
    category: 'UI/UX',
    client: 'Nova Labs',
    startDate: '12 January 2022',
    designer: 'Awais Mughal',
    tags: ['Design System', 'Dashboard'],
    description:
      'A clean dashboard concept for product teams that need fast insights and clear workflows.',
    challenge:
      'The challenge was to present dense product data without overwhelming the user.',
    solution:
      'We organized the interface around a strong content hierarchy and focused interactions.',
    img: '/assets/imgs/works/1/2.jpg',
    heroImage: '/assets/imgs/works/3/2.jpg',
    gallery: ['/assets/imgs/works/3/3.jpg', '/assets/imgs/works/3/4.jpg'],
    nextSlug: 'brand-identity-system',
    prevSlug: 'cutter-mobile-app',
    seoTitle: 'AI Dashboard UI | Portfolio',
    seoDescription:
      'A dynamic portfolio case study for an AI dashboard UI with project details and SEO metadata.',
    seoKeywords: ['portfolio', 'dashboard ui', 'ux', 'saas'],
    detailText: 'View Details',
  },
  {
    slug: 'brand-identity-system',
    title: 'Brand Identity System',
    category: 'Branding',
    client: 'Studio One',
    startDate: '3 March 2022',
    designer: 'UiCamp',
    tags: ['Branding', 'Identity'],
    description:
      'A simple brand system built to keep every touchpoint consistent across web and print.',
    challenge:
      'The brand needed to work across many formats while staying recognizable and flexible.',
    solution:
      'We created a modular identity system with reusable components and clear usage rules.',
    img: '/assets/imgs/works/1/3.jpg',
    heroImage: '/assets/imgs/works/3/3.jpg',
    gallery: ['/assets/imgs/works/3/4.jpg', '/assets/imgs/works/3/5.jpg'],
    nextSlug: 'commerce-landing-page',
    prevSlug: 'ai-dashboard-ui',
    seoTitle: 'Brand Identity System | Portfolio',
    seoDescription:
      'A dynamic portfolio case study for a brand identity system with SEO-friendly metadata.',
    seoKeywords: ['portfolio', 'branding', 'identity', 'design system'],
    detailText: 'View Details',
  },
  {
    slug: 'commerce-landing-page',
    title: 'Commerce Landing Page',
    category: 'Web Design',
    client: 'Marketly',
    startDate: '20 May 2022',
    designer: 'Awais Mughal',
    tags: ['Landing Page', 'E-commerce'],
    description:
      'A high-converting landing page concept designed for a fast-moving commerce brand.',
    challenge:
      'The site had to be persuasive, fast, and easy to scan on mobile devices.',
    solution:
      'We used bold hero messaging, focused CTAs, and a modular section system.',
    img: '/assets/imgs/works/1/4.jpg',
    heroImage: '/assets/imgs/works/3/4.jpg',
    gallery: ['/assets/imgs/works/3/5.jpg', '/assets/imgs/works/3/6.jpg'],
    nextSlug: 'creative-portfolio-showcase',
    prevSlug: 'brand-identity-system',
    seoTitle: 'Commerce Landing Page | Portfolio',
    seoDescription:
      'A dynamic portfolio case study for an e-commerce landing page with SEO metadata.',
    seoKeywords: ['portfolio', 'landing page', 'ecommerce', 'web design'],
    detailText: 'View Details',
  },
  {
    slug: 'creative-portfolio-showcase',
    title: 'Creative Portfolio Showcase',
    category: 'Creative Direction',
    client: 'Personal Brand',
    startDate: '8 September 2022',
    designer: 'UiCamp',
    tags: ['Portfolio', 'Creative'],
    description:
      'A personal showcase layout with bold visuals and a clear story for individual creators.',
    challenge:
      'The layout needed to feel distinctive while staying lightweight and easy to update.',
    solution:
      'We balanced strong visual anchors with reusable content blocks for future growth.',
    img: '/assets/imgs/works/1/5.jpg',
    heroImage: '/assets/imgs/works/3/5.jpg',
    gallery: ['/assets/imgs/works/3/6.jpg', '/assets/imgs/works/3/1.jpg'],
    nextSlug: 'cutter-mobile-app',
    prevSlug: 'commerce-landing-page',
    seoTitle: 'Creative Portfolio Showcase | Portfolio',
    seoDescription:
      'A dynamic portfolio case study for a creative portfolio showcase with SEO-friendly metadata.',
    seoKeywords: ['portfolio', 'creative', 'showcase', 'personal brand'],
    detailText: 'View Details',
  },
];

export function getPortfolioBySlug(slug) {
  return portfolioData.find((item) => item.slug === slug);
}

export function getPortfolioSlugs() {
  return portfolioData.map((item) => ({ slug: item.slug }));
}

export default portfolioData;
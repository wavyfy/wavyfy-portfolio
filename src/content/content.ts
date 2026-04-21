export interface NavLink {
  label: string;
  id: string;
}

export interface HeroTestimonial {
  quote: string;
  author: string;
}

export interface ShowcaseSlide {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  tags: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  metric: string;
  title: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  spanClass: string;
}

export interface ServiceFeature {
  text: string;
  info?: boolean;
}

export interface Service {
  theme: string;
  title1: string;
  title2: string;
  description: string;
  price: string;
  cycle: string;
  pricePrefix: string;
  badge: string | null;
  features: ServiceFeature[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContact extends FooterLink {
  iconName: string;
}

export interface FooterSocial extends FooterLink {
  iconName: string;
}

export const content = {
  navbar: {
    logo: "Wavyfy",
    links: [
      { label: "Services", id: "services" },
      { label: "Projects", id: "projects" },
      { label: "Our Clients", id: "testimonials" },
      { label: "Process", id: "process" },
    ] as NavLink[],
    cta: "Book A Call",
  },
  common: {
    status: "Open to Work",
  },
  cta: {
    bookCall: "Book A Call",
    stillAnalyzing: "Still analyzing?",
    defaultCard: {
      line1: "You command ",
      line2: "the market.",
      line3: "We engineer the systems ",
      highlight: "that make it possible.",
    },
  },
  hero: {
    title: {
      line1: "Built for Scale.",
      line2: "Designed for Impact.",
    },
    description:
      "We partner with visionary startups to engineer digital products that dominate their category and convert at scale.",
    testimonials: {
      left: [
        { quote: "...days, not weeks—highly recommend.", author: "Marcus T" },
        { quote: "The updates and attention to detail are unmatched.", author: "Nora S" },
        { quote: "Saved me weeks of work, and the result looks professional.", author: "" },
        { quote: "Completely changed how I approach launches.", author: "Yara L" },
        { quote: "...days, not weeks—highly recommend.", author: "Marcus T" },
      ] as HeroTestimonial[],
      right: [
        { quote: "...experience—launched my site in no time!", author: "Daniel K" },
        { quote: "Beautiful template, easy to customize, and worth every penny.", author: "Amelia R" },
        { quote: "Exactly what I needed to kickstart my SaaS project fast.", author: "Leo M" },
        { quote: "Worth every penny, shipping faster than ever.", author: "Sofia B" },
        { quote: "...experience—launched my site in no time!", author: "Daniel K" },
      ] as HeroTestimonial[],
    },
  },
  showcase: {
    title: "Solutions We Offer",
    subtitle: "Transforming categories at global scale",
    slides: [
      {
        src: "https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png",
        alt: "Quantum Finance – UI design and brand identity dashboard",
      },
      {
        src: "https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png",
        alt: "Nexus Core – fintech UX design platform interface",
      },
      {
        src: "https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg",
        alt: "Wavyfy client project – web design and SaaS development showcase",
      },
    ] as ShowcaseSlide[],
  },
  projects: {
    title: "Work we've",
    subtitle: "successfully deployed.",
    list: [
      {
        name: "Vanguard OS",
        tags: ["UX Design", "Web Design"],
        image: "https://framerusercontent.com/images/xktGFEeTfvx5MDldvQxlaw79M.png?width=800&height=1200",
      },
      {
        name: "Quantum Finance",
        tags: ["UI Design", "Branding"],
        image: "https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png?scale-down-to=2048&width=2400&height=1600",
      },
      {
        name: "Nexus Core",
        tags: ["Fintech", "UX Design"],
        image: "https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png?scale-down-to=2048&width=2400&height=1600",
      },
      {
        name: "Pulse Data Network",
        tags: ["UI Design", "Motion Design"],
        image: "https://framerusercontent.com/images/TwCiV5MUt16Q38ftZYKlEhNhbJI.png?scale-down-to=2048&width=1984&height=2400",
      },
    ] as Project[],
  },
  process: {
    title: "Strategic Execution.",
    subtitle: "Zero compromises.",
    description: "We systematically architect, build, and deploy high-conversion systems tailored to your technical requirements.",
    steps: [
      {
        number: "01",
        title: "Audit & Analysis",
        description: "Deep-dive diagnostics into your current architecture and market positioning.",
      },
      {
        number: "02",
        title: "Architectural Design",
        description: "Crafting the blueprint for a scalable, high-performance user experience.",
      },
      {
        number: "03",
        title: "Precision Development",
        description: "Deploying robust, battle-tested code built with modern stacks.",
      },
      {
        number: "04",
        title: "Performance Scaling",
        description: "Continuous optimization to ensure your product leads, never follows.",
      },
    ] as ProcessStep[],
  },
  testimonials: {
    title: "Impact Reports.",
    subtitle: "Measurable technical output.",
    list: [
      {
        id: 1,
        metric: "3.5x",
        title: "increase in platform throughput",
        quote: "Their architectural choices drastically improved our data layer capacity. The system now handles 3.5x the volume without any latency spikes. Exceptional engineering.",
        author: "Sarah Coleman",
        role: "CTO",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
      },
      {
        id: 2,
        metric: "100ms",
        title: "latency reduction across core APIs",
        quote: "The precision with which they execute is rare. We cut 100ms off our core API responses, leading to an immediate boost in user retention and server efficiency.",
        author: "Amina Khatri",
        role: "VP of Engineering",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-2 lg:col-span-2 lg:row-span-2",
      },
      {
        id: 3,
        metric: "Zero",
        title: "downtime during major migration",
        quote: "They architected and executed our v3 migration flawlessly. Moving a massive active user base with zero downtime requires a team that truly understands infrastructure routing and redundancy.",
        author: "Marcus Levine",
        role: "Co-founder & Architect",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
      },
      {
        id: 4,
        metric: "4x",
        title: "faster build pipelines",
        quote: "By optimizing our container configurations and caching strategies, they slashed our CI/CD pipeline times entirely. Our developers are now shipping code 4x faster.",
        author: "Julian Ortega",
        role: "Head of Infrastructure",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
      },
    ] as Testimonial[],
  },
  services: {
    title: "Pick a service.",
    subtitle: "Built around your goals.",
    description: "From Shopify stores to full SaaS platforms — we build digital products that perform, scale, and convert.",
    list: [
      {
        theme: "dark",
        title1: "Shopify",
        title2: "Development",
        description: "Custom Shopify stores built to convert — from theme development to full e-commerce solutions that drive sales.",
        price: "$ 2,500",
        cycle: "One time",
        pricePrefix: "",
        badge: null,
        features: [
          { text: "Custom Shopify theme development" },
          { text: "Product & collection setup", info: true },
          { text: "10-14 Days delivery-time" },
          { text: "SEO & performance optimized" },
          { text: "1-1 Private Slack channel" },
          { text: "50% secured upfront payment" },
        ],
      },
      {
        theme: "dark",
        title1: "SaaS",
        title2: "Development",
        description: "End-to-end SaaS product development — from MVP to a fully scalable platform built for growth and retention.",
        price: "$ 9,000+",
        cycle: "",
        pricePrefix: "Starts at",
        badge: "Limited spots",
        features: [
          { text: "Dedicated full-stack team" },
          { text: "Auth, billing & dashboard included", info: true },
          { text: "Agile delivery, monthly commitment" },
          { text: "Scalable cloud architecture" },
          { text: "1-1 Private Slack channel" },
          { text: "50% secured upfront payment" },
        ],
      },
      {
        theme: "dark",
        title1: "Web & App",
        title2: "Development",
        description: "High-performance websites and mobile applications crafted to deliver seamless user experiences across all devices.",
        price: "$ 4,500",
        cycle: "One time",
        pricePrefix: "",
        badge: null,
        features: [
          { text: "Custom web or mobile app" },
          { text: "Responsive & cross-platform", info: true },
          { text: "14-21 Days delivery-time" },
          { text: "SEO & Core Web Vitals optimized" },
          { text: "1-1 Private Slack channel" },
          { text: "50% secured upfront payment" },
        ],
      },
    ] as Service[],
  },
  faq: {
    title: "Technical",
    subtitle: "Clarifications.",
    list: [
      {
        question: "What does your architecture stack look like?",
        answer: "We build heavily on robust modern primitives: React/Next.js for the frontend, Node/Go for microservices, and specialized edge infrastructure for global delivery.",
      },
      {
        question: "Can your systems handle burst scaling?",
        answer: "Absolutely. We architect for high concurrency from day one, utilizing edge caching, horizontal scaling policies, and automated failovers to handle extreme traffic spikes.",
      },
      {
        question: "Do you integrate with legacy enterprise platforms?",
        answer: "Yes. We frequently build scalable integration layers and proxy services that allow modern frontends to securely communicate with legacy backend systems.",
      },
      {
        question: "How do you handle security and compliance?",
        answer: "Security is fully integrated into our pipelines, including automated vulnerability scanning, strict IAM configurations, and core compliance readiness for data handling.",
      },
      {
        question: "Do you provide post-deployment SLA?",
        answer: "We offer extended SLA agreements covering uptime guarantees, continuous performance monitoring, and critical bug resolutions post-launch.",
      },
      {
        question: "What is your typical development cycle?",
        answer: "We run lean, iterative sprints with high-frequency deployments. Our CI/CD pipelines ensure we ship improvements daily without disrupting live user traffic.",
      },
      {
        question: "Are your platforms SEO optimized out of the box?",
        answer: "Yes. Utilizing server-side rendering and dynamic metadata injection, our platforms achieve near-perfect lighthouse scores to dominate Core Web Vitals.",
      },
      {
        question: "Can we migrate from our existing monolithic stack?",
        answer: "Our team excels at strangler fig migrations, allowing you to steadily migrate from legacy monoliths to decoupled microservices with zero operational downtime.",
      },
    ] as FAQItem[],
  },
  footer: {
    cta: {
      line1: "Ready to ship?",
      line2: "Initialize your next project.",
      description: "Secure an architectural review to benchmark your current infrastructure and map out an execution plan.",
      button: "View Services",
    },
    headings: {
      company: "Company",
      contacts: "Contacts",
      socials: "Socials",
    },
    company: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "How We Work", href: "#process" },
      { label: "Contact us", href: "#contact" },
    ] as FooterLink[],
    contacts: [
      { label: "hello@wavyfy.com", href: "mailto:hello@wavyfy.com", iconName: "Gmail" },
      { label: "(+91) 9288 670 204", href: "tel:+919288670204", iconName: "WhatsApp" },
      { label: "Bhopal, MP, India", href: "https://maps.google.com/?q=Bhopal,MP,India", iconName: "Google Maps" },
    ] as FooterContact[],
    socials: [
      { label: "Instagram", href: "#", iconName: "Instagram" },
      { label: "LinkedIn", href: "#", iconName: "LinkedIn" },
      { label: "Twitter", href: "#", iconName: "Twitter" },
      { label: "YouTube", href: "#", iconName: "YouTube" },
    ] as FooterSocial[],
    legal: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of services", href: "#" },
      { label: "Refund Policy", href: "#" },
    ] as FooterLink[],
    copyright: "Wavyfy India.",
    allRightsReserved: "All rights reserved.",
  },
};

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

export interface LegalSection {
  title: string;
  subtitle1?: string;
  content1?: string;
  subtitle2?: string;
  content2?: string;
  content?: string;
}

export interface LegalDetails {
  effectiveDate?: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

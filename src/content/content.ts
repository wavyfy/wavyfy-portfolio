import {
  NavLink,
  HeroTestimonial,
  ShowcaseSlide,
  Project,
  ProcessStep,
  Testimonial,
  Service,
  FAQItem,
  FooterLink,
  FooterContact,
  FooterSocial,
} from "./types";

export const content = {
  navbar: {
    logo: "Wavyfy",
    links: [
      { label: "Services", id: "services" },
      { label: "Our Clients", id: "testimonials" },
      { label: "Process", id: "process" },
      { label: "FAQ", id: "faq" },
    ] as NavLink[],
    cta: "Book A Call",
  },

  hero: {
    title: {
      line1: "Got an idea?",
      line2: "Let's build it right.",
    },
    description:
      "We build Websites, Shopify Stores, SaaS Platforms and Apps that fits your budget and goals",
    testimonials: {
      left: [
        {
          quote:
            "Smooth experience. The admin panel was useful and everything worked well.",
          author: "Saurav Sharma",
        },
        {
          quote: "Simple process with minimal follow up needed.",
          author: "Saumya Mehta",
        },
        {
          quote: "Clean, professional design and helpful team.",
          author: "Kunal Verma",
        },
        {
          quote: "Clear communication and well managed work.",
          author: "Rahul Aggrawal",
        },
        {
          quote:
            "Smooth experience. The admin panel was useful and everything worked well.",
          author: "Saurav Sharma",
        },
        {
          quote: "Simple process with minimal follow up needed.",
          author: "Saumya Mehta",
        },
      ] as HeroTestimonial[],
      right: [
        {
          quote: "Clean, professional design and helpful team.",
          author: "Kunal Verma",
        },
        {
          quote: "Clear communication and well managed work.",
          author: "Rahul Aggrawal",
        },
        {
          quote:
            "Smooth experience. The admin panel was useful and everything worked well.",
          author: "Saurav Sharma",
        },
        {
          quote: "Simple process with minimal follow up needed.",
          author: "Saumya Mehta",
        },
        {
          quote: "Clean, professional design and helpful team.",
          author: "Kunal Verma",
        },
        {
          quote: "Clear communication and well managed work.",
          author: "Rahul Aggrawal",
        },
      ] as HeroTestimonial[],
    },
  },

  showcase: {
    title: "Solutions",
    subtitle: "We can build for you",
    slides: [
      {
        src: "/Showcase 1.png",
        alt: "Bella Exotica e-commerce landing page design for premium organic cereals and nuts",
      },
      {
        src: "/Showcase 2.png",
        alt: "Samsung Galaxy Ring product launch page design with 3D product rendering",
      },
      {
        src: "/Showcase 3.png",
        alt: "BIBA fashion e-commerce website design showcasing new arrivals and collections",
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
        image:
          "https://framerusercontent.com/images/xktGFEeTfvx5MDldvQxlaw79M.png?width=800&height=1200",
      },
      {
        name: "Quantum Finance",
        tags: ["UI Design", "Branding"],
        image:
          "https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png?scale-down-to=2048&width=2400&height=1600",
      },
      {
        name: "Nexus Core",
        tags: ["Fintech", "UX Design"],
        image:
          "https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png?scale-down-to=2048&width=2400&height=1600",
      },
      {
        name: "Pulse Data Network",
        tags: ["UI Design", "Motion Design"],
        image:
          "https://framerusercontent.com/images/TwCiV5MUt16Q38ftZYKlEhNhbJI.png?scale-down-to=2048&width=1984&height=2400",
      },
    ] as Project[],
  },

  process: {
    title: "How We Work",
    subtitle: "Clear and Simple.",
    description:
      "We follow a clear, structured approach to turn your idea into a reliable, high-performing product without confusion or delays.",
    steps: [
      {
        number: "01",
        title: "Understanding Your Needs",
        description:
          "We discuss your idea, goals, and challenges to get a clear direction before starting.",
      },
      {
        number: "02",
        title: "Planning & Design",
        description:
          "We map out how everything will work including structure, features, and user experience.",
      },
      {
        number: "03",
        title: "Building Your Product",
        description:
          "We develop your product step by step with clean, reliable, and scalable code.",
      },
      {
        number: "04",
        title: "Testing & Launch",
        description:
          "We test everything thoroughly and launch your product smoothly for real users.",
      },
    ] as ProcessStep[],
  },

  testimonials: {
    title: "Client Reviews",
    subtitle: "That reflects our work",
    list: [
      {
        id: 1,
        metric: "9/10",
        title: "client satisfaction rating",
        quote:
          "Overall it was a good experience. The admin panel was actually very useful and everything worked smoothly from start to finish.",
        author: "Saurav Sharma",
        role: "Client",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
      },
      {
        id: 2,
        metric: "Smooth",
        title: "hassle free process",
        quote:
          "Nice working with the team. The whole process felt simple and things were handled without me having to follow up much. Moving online really helped.",
        author: "Saumya Mehta",
        role: "Client",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-2 lg:col-span-2 lg:row-span-2",
      },
      {
        id: 3,
        metric: "Clean",
        title: "design quality",
        quote:
          "Honestly it was good. The design looks clean and professional and the team was very helpful throughout the whole process.",
        author: "Kunal Verma",
        role: "Client",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
      },
      {
        id: 4,
        metric: "Reliable",
        title: "communication and delivery",
        quote:
          "The work was handled properly and I always knew what was going on. Communication was clear and the overall experience felt very sorted.",
        author: "Rahul Aggrawal",
        role: "Client",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
      },
    ] as Testimonial[],
  },

  services: {
    title: "Choose a service",
    subtitle: "Aligned with your goals.",
    description:
      "We build Shopify stores, SaaS platforms, and apps that perform, scale, and convert.",
    list: [
      {
        theme: "dark",
        title1: "Web & App",
        title2: "Development",
        description:
          "High performance websites and mobile apps built for seamless user experience. Pricing is based on your requirements.",
        price: "Custom",
        cycle: "Scope-based pricing",
        pricePrefix: "",
        badge: null,
        features: [
          { text: "Custom web or React Native mobile app" },
          { text: "UI/UX design included" },
          { text: "Responsive & cross-platform (iOS + Android)" },
          { text: "SEO basics & page speed optimization" },
          { text: "API integrations & third-party services" },
          { text: "Delivery & timeline varies for apps & websites" },
        ],
      },
      {
        theme: "dark",
        title1: "Shopify",
        title2: "Development",
        description:
          "A Shopify store built to convert with custom design and complete setup. Ideal for clothing, jewellery, beauty, and home brands",
        price: "₹ 20,000",
        cycle: "",
        pricePrefix: "Starting from",
        badge: null,
        features: [
          { text: "Custom Shopify theme design & development" },
          { text: "Product catalogue & collection setup" },
          { text: "Payment gateway & checkout configuration" },
          { text: "SEO basics & page speed optimization" },
          { text: "Mobile-first, conversion-focused design" },
          { text: "7–14 day delivery timeline" },
        ],
      },
      {
        theme: "dark",
        title1: "SaaS",
        title2: "Development",
        description:
          "End to end SaaS development from idea to scalable product. Built, designed, and deployed based on your scope.",
        price: "Custom",
        cycle: "Scope-based pricing",
        pricePrefix: "",
        badge: "Limited spots",
        features: [
          { text: "MVP scoping & product roadmap" },
          { text: "Auth, billing & user dashboard included" },
          { text: "Scalable cloud architecture" },
          { text: "Admin panel & analytics" },
          { text: "Dedicated full-stack team" },
          { text: "Flexible payment structuret" },
        ],
      },
    ] as Service[],
  },

  faq: {
    title: "Technical",
    subtitle: "Clarifications.",
    list: [
      {
        question: "How long does a project usually take?",
        answer:
          "Most projects take 2 to 6 weeks depending on scope, complexity, and feedback speed.",
      },
      {
        question: "Do I fully own the final product?",
        answer:
          "Yes. Once completed and paid for, you get full ownership of the code, design, and assets.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We choose based on the project, but typically use modern stacks like React, Next.js, Node.js, and scalable infrastructure.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. We offer optional maintenance and support plans for updates, fixes, and scaling.",
      },
      {
        question: "How much does a project cost?",
        answer:
          "Pricing depends on scope, features, and complexity. After understanding your requirements, we provide a clear quote.",
      },
      {
        question: "Do I need technical knowledge to work with you?",
        answer:
          "No. We handle everything and keep communication simple so you always understand what’s happening.",
      },
      {
        question: "How do you ensure deadlines are met?",
        answer:
          "We follow structured workflows with clear milestones and regular updates to keep the project on track.",
      },
      {
        question: "Do you help with deployment and hosting?",
        answer:
          "Yes. We handle deployment and can guide or manage hosting based on your needs.",
      },
      {
        question: "How do we communicate during the project?",
        answer:
          "We communicate via WhatsApp, Slack, or email with regular updates and checkpoints.",
      },
    ] as FAQItem[],
  },

  contact: {
    title: "Let’s Talk",
    subtitle: "With Clarity",
    description: "Tell us what you need. We’ll take it forward.",
    emailCard: {
      title: "Email Us",
      description:
        "Feel free to email me if you have any questions or need more details!",
      email: "hello@wavyfy.com",
    },
    callCard: {
      title: "Prefer to Call ?",
      description:
        "Feel free to book a call if that's more convenient and easier for you",
      linkText: "(+91) 9288 670 204",
      href: "https://wa.me/919288670204",
    },
    form: {
      title: "I'd love to help! Let me know how",
      fields: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject Of Interest",
        message: "How may we assist you?",
      },
      placeholders: {
        name: "Abhinav Sharma",
        email: "abc@gmail.com",
        subject: "Regarding Project",
        message: "Give us more info..",
      },
      submitText: "Send Your Message",
    },
  },

  footer: {
    cta: {
      line1: "Ready to build?",
      line2: "We handle the rest.",
      description:
        "Let’s discuss how we can build something reliable and scalable together.",
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
      {
        label: "hello@wavyfy.com",
        href: "mailto:hello@wavyfy.com",
        iconName: "Gmail",
      },
      {
        label: "(+91) 9288 670 204",
        href: "https://wa.me/919288670204",
        iconName: "WhatsApp",
      },
      {
        label: "Bhopal, MP, India",
        href: "https://maps.google.com/?q=Bhopal,MP,India",
        iconName: "Google Maps",
      },
    ] as FooterContact[],
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/wavyfy.talks?igsh=aGxnZ2o5Mmpibms5",
        iconName: "Instagram",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/wavyfy-agency/",
        iconName: "LinkedIn",
      },
      {
        label: "Twitter",
        href: "https://x.com/wavyfyofficial",
        iconName: "Twitter",
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@wavyfy_talks",
        iconName: "YouTube",
      },
    ] as FooterSocial[],
    legal: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ] as FooterLink[],
    legalDetails: {
      "Privacy policy": {
        effectiveDate: "April 26, 2026",
        lastUpdated: "April 26, 2026",
        sections: [
          {
            title: "1. Who We Are",
            content:
              "Wavyfy\nBhopal, Madhya Pradesh, India\nEmail: hello@wavyfy.com",
          },
          {
            title: "2. Information We Collect",
            subtitle1: "a. Information You Provide",
            content1:
              "Name, Email address, Phone number, Project or business details",
            subtitle2: "b. Automatically Collected Data",
            content2:
              "Basic technical data such as IP address and browser type (for security and server logs only)",
          },
          {
            title: "3. How We Use Your Information",
            content:
              "We use your data to:\n• Respond to your inquiries\n• Understand your requirements\n• Communicate regarding your project\n• Maintain basic website security\n\nWe do not use your data for marketing or tracking.",
          },
          {
            title: "4. Payments",
            content:
              "Payments, if applicable, are handled via secure third-party providers (e.g., Stripe, Razorpay). We do not store payment details.",
          },
          {
            title: "5. Data Sharing",
            content:
              "We do not sell your data. We may share it only with:\n• Hosting or infrastructure providers (for website operation)\n• Payment providers (if you proceed with services)\n• Legal authorities if required",
          },
          {
            title: "6. Cookies",
            content:
              "We do not use cookies or tracking technologies on this website.",
          },
          {
            title: "7. Data Storage & Security",
            content:
              "Data may be stored securely on cloud infrastructure (e.g., hosting providers). We take reasonable measures to protect it.",
          },
          {
            title: "8. Data Retention",
            content:
              "We keep your data only as long as needed to respond to your inquiry or provide services.",
          },
          {
            title: "9. Your Rights",
            content:
              "You can request:\n• Access to your data\n• Correction or deletion\n\nContact: hello@wavyfy.com",
          },
          {
            title: "10. Children’s Privacy",
            content:
              "This website is not intended for individuals under 18. We do not knowingly collect data from minors.",
          },
          {
            title: "11. Third-Party Links",
            content:
              "We are not responsible for privacy practices of external websites linked from our site.",
          },
          {
            title: "12. Updates",
            content:
              "We may update this policy. Changes will be reflected with a new date.",
          },
          {
            title: "13. Contact",
            content: "hello@wavyfy.com",
          },
        ],
      },
      "Terms of Service": {
        effectiveDate: "April 26, 2026",
        lastUpdated: "April 26, 2026",
        sections: [
          {
            title: "1. Overview",
            content:
              "These Terms and Conditions govern your use of services provided by Wavyfy, based in Bhopal, Madhya Pradesh, India. By engaging with us, you agree to these terms.",
          },
          {
            title: "2. Services",
            content:
              "We provide digital services including:\n• Website and web application development\n• Mobile app development\n• Shopify development\n• SaaS product development\n\nAll services are delivered based on agreed project scope.",
          },
          {
            title: "3. Project Scope & Changes",
            content:
              "• Work is executed strictly based on the agreed scope\n• Any additional features or changes may require extra cost and timeline adjustments\n• Clear communication and approvals are required before implementation",
          },
          {
            title: "4. Payments",
            content:
              "• Projects require an advance payment to begin work\n• Remaining payment is due as per agreed milestones or before final delivery\n• Payments are processed via secure third-party providers\n\nFailure to complete payment may result in work pause or withholding delivery",
          },
          {
            title: "5. Refunds",
            content:
              "Refunds are governed by our Refund Policy. In general:\n• Advance payments are non-refundable\n• No full refunds after work has started",
          },
          {
            title: "6. Timelines",
            content:
              "• Estimated timelines are provided based on scope\n• Delays may occur due to client-side delays (content, approvals, feedback) or scope changes\n• We are not liable for delays outside our control",
          },
          {
            title: "7. Client Responsibilities",
            content:
              "You agree to:\n• Provide accurate project requirements\n• Share necessary content, assets, and feedback on time\n• Review and approve deliverables promptly",
          },
          {
            title: "8. Intellectual Property",
            content:
              "• Final deliverables are transferred to the client only after full payment\n• Until then, all work remains the property of Wavyfy\n• We reserve the right to showcase completed work in our portfolio",
          },
          {
            title: "9. Third-Party Services",
            content:
              "• We may integrate third-party tools (hosting, APIs, plugins, etc.)\n• We are not responsible for their performance, pricing, or policy changes\n• Any associated costs are the client’s responsibility",
          },
          {
            title: "10. Limitation of Liability",
            content:
              "We are not liable for:\n• Indirect or consequential losses\n• Business losses, revenue loss, or downtime\n• Issues caused by third-party services",
          },
          {
            title: "11. Termination",
            content:
              "We reserve the right to terminate or pause services if terms are violated, payments are delayed, or communication breaks down.",
          },
          {
            title: "12. Confidentiality",
            content:
              "We respect client confidentiality and will not share sensitive project information without consent.",
          },
          {
            title: "13. Changes to Terms",
            content:
              "We may update these terms at any time. Continued use of our services implies acceptance of updated terms.",
          },
          {
            title: "14. Governing Law",
            content:
              "These terms are governed by the laws of India, with jurisdiction in Bhopal, Madhya Pradesh.",
          },
          {
            title: "15. Contact",
            content: "For any questions: hello@wavyfy.com",
          },
        ],
      },
      "Refund Policy": {
        effectiveDate: "April 26, 2026",
        lastUpdated: "April 26, 2026",
        sections: [
          {
            title: "1. Overview",
            content:
              "At Wavyfy, all services are project-based and tailored to specific client requirements. Due to the nature of digital work, refunds are limited and subject to the conditions below.",
          },
          {
            title: "2. No Full Refund After Work Starts",
            content:
              "Once a project has started and resources have been allocated, no full refunds will be issued.",
          },
          {
            title: "3. Advance Payments",
            content:
              "• Advance or booking payments are non-refundable\n• This secures project scheduling, planning, and initial work",
          },
          {
            title: "4. Partial Refunds (If Applicable)",
            content:
              "A partial refund may be considered only if:\n• Work has not significantly progressed\n• The request is made early in the project\n\nAny refund will be calculated based on work completed and resources used.",
          },
          {
            title: "5. Project Cancellation",
            content:
              "If you choose to cancel:\n• You will be billed for work completed up to that point\n• Any remaining amount (if applicable) may be adjusted, not guaranteed refunded",
          },
          {
            title: "6. Delays or Client Inactivity",
            content:
              "No refunds will be issued if delays are caused by:\n• Lack of communication\n• Missing content or approvals\n• Extended inactivity from the client side",
          },
          {
            title: "7. Dissatisfaction",
            content:
              "We prioritize quality and communication. If you're not satisfied:\n• We will first attempt revisions and improvements\n• Refunds are not guaranteed based on subjective dissatisfaction",
          },
          {
            title: "8. Third-Party Costs",
            content:
              "Payments made for third-party services (domains, hosting, APIs, tools, etc.) are non-refundable.",
          },
          {
            title: "9. Payment Disputes",
            content:
              "Initiating a chargeback without contacting us first may result in:\n• Immediate termination of services\n• Suspension of deliverables",
          },
          {
            title: "10. Contact",
            content: "For refund-related queries: hello@wavyfy.com",
          },
        ],
      },
    },
    copyright: "Wavyfy India.",
    allRightsReserved: "All rights reserved.",
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
};

export type Service = {
  key: string;
  name: string;
  num: string;
  sub: string;
  src: string;
  desc: string;
};

export const services: Service[] = [
  {
    key: "ortho",
    name: "Orthodontics",
    num: "01",
    sub: "Braces, Clear Aligners, Bite Correction",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=700&auto=format&fit=crop",
    desc: "Gently guiding teeth into alignment with modern braces and clear aligners — for a bite that works and a smile that lasts.",
  },
  {
    key: "cosmetic",
    name: "Cosmetic Dentistry",
    num: "02",
    sub: "Teeth Whitening, Veneers, Smile Makeovers",
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=700&auto=format&fit=crop",
    desc: "A confident smile changes everything. Our cosmetic work enhances your teeth’s natural beauty while preserving their health and function.",
  },
  {
    key: "restore",
    name: "Dental Restoration",
    num: "03",
    sub: "Fillings, Crowns, Implants",
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=700&auto=format&fit=crop",
    desc: "Repairing and rebuilding with crowns, implants and fillings that look, feel and perform like the real thing.",
  },
  {
    key: "pediatric",
    name: "Pediatric Dentistry",
    num: "04",
    sub: "Gentle Care for Little Smiles",
    src: "/images/pediatric-dentistry.png",
    desc: "Patient, reassuring care that helps little ones grow up loving the dentist — and their healthy, happy smiles.",
  },
];

export type ServiceDetail = {
  key: string;
  name: string;
  num: string;
  tagline: string;
  treatments: string[];
  price: string;
  duration: string;
  src: string;
  desc: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    key: "ortho",
    name: "Orthodontics",
    num: "01",
    tagline: "Alignment, quietly done",
    treatments: ["Clear Aligners", "Modern Braces", "Bite Correction"],
    price: "from $2,900",
    duration: "6 – 18 mo",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop",
    desc: "Gently guiding teeth into alignment with modern braces and clear aligners — for a bite that works and a smile that lasts.",
  },
  {
    key: "cosmetic",
    name: "Cosmetic Dentistry",
    num: "02",
    tagline: "Designed around your face",
    treatments: ["Whitening", "Veneers", "Smile Makeovers"],
    price: "from $350",
    duration: "1 – 3 visits",
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=900&auto=format&fit=crop",
    desc: "A confident smile changes everything. Our cosmetic work enhances your teeth’s natural beauty while preserving their health and function.",
  },
  {
    key: "restore",
    name: "Dental Restoration",
    num: "03",
    tagline: "Rebuilt to feel like yours",
    treatments: ["Fillings", "Crowns", "Implants"],
    price: "from $180",
    duration: "1 – 2 visits",
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop",
    desc: "Repairing and rebuilding with crowns, implants and fillings that look, feel and perform like the real thing.",
  },
  {
    key: "pediatric",
    name: "Pediatric Dentistry",
    num: "04",
    tagline: "Gentle care for little smiles",
    treatments: ["First Visits", "Sealants", "Habit Guidance"],
    price: "from $90",
    duration: "30 – 45 min",
    src: "/images/pediatric-dentistry.png",
    desc: "Patient, reassuring care that helps little ones grow up loving the dentist — and their healthy, happy smiles.",
  },
  {
    key: "hygiene",
    name: "Preventive & Hygiene",
    num: "05",
    tagline: "The quiet hero of dentistry",
    treatments: ["Cleanings", "Exams & X-Rays", "Gum Therapy"],
    price: "from $75",
    duration: "45 – 60 min",
    src: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=900&auto=format&fit=crop",
    desc: "Unhurried cleanings, honest exams and early detection — the small appointments that prevent the big ones.",
  },
  {
    key: "emergency",
    name: "Emergency Care",
    num: "06",
    tagline: "Same-day relief, no judgment",
    treatments: ["Toothaches", "Chipped Teeth", "Lost Crowns"],
    price: "from $120",
    duration: "Same day",
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=900&auto=format&fit=crop",
    desc: "When something hurts, you shouldn’t have to wait. We keep same-day slots open every single day — just call.",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Do you accept my insurance?",
    a: "We work with most major PPO plans and handle all the paperwork for you. Before any treatment, you’ll receive a clear estimate of what’s covered and what isn’t — no surprise bills, ever.",
  },
  {
    q: "What happens at a first visit?",
    a: "A relaxed 60 minutes: a chat about your goals, a gentle exam, digital x-rays only if needed, and a plain-language plan with options at different price points. You’ll never be rushed into a decision.",
  },
  {
    q: "I get anxious at the dentist. Can you help?",
    a: "You’re in good company — about a third of our patients do. We offer noise-cancelling headphones, weighted blankets, and nitrous or oral sedation for longer treatments. You set the pace, always.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Larger treatments like orthodontics and implants can be split into monthly payments at 0% interest for up to 12 months. Our coordinators will walk you through it in two minutes.",
  },
  {
    q: "How quickly can I be seen in an emergency?",
    a: "Call before 3pm and we’ll almost always see you the same day. We reserve dedicated emergency slots every morning and afternoon, Monday through Saturday.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  score: string;
  stars: number;
  src: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The best dental experience I’ve ever had. The team was so professional and caring — they made me feel completely comfortable. Finally, I love my smile!",
    name: "Brenda Mills",
    role: "Patient",
    score: "4.5",
    stars: 5,
    src: "/images/brenda-mills.png",
  },
  {
    quote:
      "From the front desk to the chair, every detail felt considered. I actually look forward to my check-ups now — that’s something I never thought I’d say.",
    name: "Daniel Reyes",
    role: "Patient",
    score: "5.0",
    stars: 5,
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=700&auto=format&fit=crop",
  },
  {
    quote:
      "They explained every step and never once rushed me. My kids even ask to come back to the dentist now — honestly, that says everything you need to know.",
    name: "Priya Sharma",
    role: "Patient",
    score: "4.5",
    stars: 4,
    src: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=700&auto=format&fit=crop",
  },
];

export const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

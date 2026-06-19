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

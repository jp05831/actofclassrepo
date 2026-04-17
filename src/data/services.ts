export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  icon: string;
  heroImage?: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "residential-moving",
    name: "Residential Moving",
    shortName: "Residential",
    heroImage: "/images/residential-hero.jpg",
    description:
      "Professional residential moving services that take care of everything from start to finish. We handle packing, transport, and setup so you can focus on settling into your new home.",
    shortDescription:
      "Complete home moving services with packing, loading, and careful transport of all your belongings.",
    icon: "🏠",
    features: [
      "Full-service packing and unpacking",
      "Furniture disassembly and reassembly",
      "Floor and wall protection",
      "Careful handling of fragile items",
      "Climate-controlled storage available",
      "Same-day moves when available",
    ],
    faqs: [
      {
        question: "How far in advance should I book my residential move?",
        answer:
          "We recommend booking at least 2-4 weeks in advance, especially during peak season (May-September). However, we can often accommodate last-minute moves depending on availability.",
      },
      {
        question: "Do you provide packing materials?",
        answer:
          "Yes! We bring all necessary packing materials including boxes, tape, bubble wrap, and furniture pads. Our team uses professional-grade supplies to keep your belongings protected.",
      },
      {
        question: "Are my belongings insured during the move?",
        answer:
          "Absolutely. We are fully licensed and insured. We offer basic valuation coverage included with every move, and additional coverage options are available for high-value items.",
      },
    ],
  },
  {
    slug: "apartment-moving",
    name: "Apartment Moving",
    shortName: "Apartment",
    heroImage: "/images/apartment-hero.jpg",
    description:
      "Apartment moves come with unique challenges like elevators, tight hallways, stairs, and building regulations. Our experienced crews handle every detail efficiently, ensuring your belongings are protected and your move stays smooth from start to finish.",
    shortDescription:
      "Expert apartment movers who handle stairs, elevators, and tight spaces with ease.",
    icon: "🏢",
    features: [
      "Experience with all apartment layouts",
      "Elevator and stairway expertise",
      "Building regulation compliance",
      "Furniture protection for tight spaces",
      "Quick turnaround times",
      "Flexible scheduling around building rules",
    ],
    faqs: [
      {
        question: "Can you handle moves with no elevator access?",
        answer:
          "Absolutely. Our crews regularly handle walk-up apartments and are experienced with carrying furniture up and down multiple flights of stairs safely.",
      },
      {
        question: "Do you coordinate with building management?",
        answer:
          "Yes, we can work with your building management to reserve elevators, loading docks, and ensure we comply with any move-in/move-out policies.",
      },
    ],
  },
  {
    slug: "local-moving",
    name: "Local Moving",
    shortName: "Local",
    heroImage: "/images/local-hero.jpg",
    description:
      "Moving across Fort Myers or anywhere in Lee and Collier County? Our local moving services are designed for efficiency and care. We know every neighborhood, every shortcut, and every challenge the Southwest Florida area presents.",
    shortDescription:
      "Fast, reliable local moves throughout Lee County, Collier County, and Southwest Florida.",
    icon: "📍",
    features: [
      "Deep knowledge of Southwest Florida",
      "Efficient routing to save time",
      "Same-day service available",
      "Competitive local rates",
      "Full packing services available",
      "40,000 sq ft storage facility",
    ],
    faqs: [
      {
        question: "What counts as a local move?",
        answer:
          "Generally, any move within a 50-mile radius is considered local. This covers Fort Myers, Cape Coral, Estero, Bonita Springs, Naples, and surrounding communities.",
      },
      {
        question: "How long does a typical local move take?",
        answer:
          "Most local moves for a 2-3 bedroom home take 4-8 hours. Smaller apartments can often be completed in 2-4 hours. We'll give you a time estimate based on your specific situation.",
      },
    ],
  },
  {
    slug: "furniture-movers",
    name: "Furniture Moving",
    shortName: "Furniture",
    heroImage: "/images/furniture-hero.jpg",
    description:
      "From grand pianos to antique armoires, our specialty furniture movers handle your most valued pieces with expert care. We use professional-grade wrapping, padding, and transport techniques to ensure everything arrives in perfect condition.",
    shortDescription:
      "Specialty handling for pianos, antiques, pool tables, and heavy or fragile furniture.",
    icon: "🛋️",
    features: [
      "Piano and organ moving",
      "Pool table disassembly and setup",
      "Antique and heirloom protection",
      "Custom crating for fragile items",
      "Professional wrapping and padding",
      "Experienced heavy-item crews",
    ],
    faqs: [
      {
        question: "Can you move a grand piano?",
        answer:
          "Yes, we've moved hundreds of pianos including baby grands, grand pianos, and upright pianos. Our team uses specialized equipment and techniques to protect your instrument during transport.",
      },
      {
        question: "How do you protect antique furniture?",
        answer:
          "We use custom wrapping techniques with moving blankets, bubble wrap, and corner protectors. For extremely valuable or fragile pieces, we can build custom crates for maximum protection.",
      },
    ],
  },
  {
    slug: "luxury-moving",
    name: "Luxury Moving",
    shortName: "Luxury",
    heroImage: "/images/luxury-hero.jpg",
    description:
      "High-end homes deserve high-end moving service. Our luxury moving team specializes in relocating fine art, designer furniture, wine collections, and other premium items with the white-glove treatment they require.",
    shortDescription:
      "White-glove moving service for high-end homes, fine art, and premium furnishings.",
    icon: "✨",
    features: [
      "White-glove handling",
      "Fine art and sculpture transport",
      "Wine collection moving",
      "Custom crating and packaging",
      "Dedicated move coordinator",
      "Premium insurance coverage options",
    ],
    faqs: [
      {
        question: "What makes luxury moving different?",
        answer:
          "Luxury moves involve heightened attention to detail, premium packing materials, custom crating for valuables, dedicated coordinators, and crews specially trained for high-end items and properties.",
      },
      {
        question: "Do you handle fine art and sculptures?",
        answer:
          "Yes. We use museum-quality packing techniques including custom crating, climate-controlled transport, and specialized handling procedures for fine art and sculptures.",
      },
    ],
  },
  {
    slug: "senior-moving",
    name: "Senior Moving",
    shortName: "Senior",
    heroImage: "/images/senior-hero.jpg",
    description:
      "Downsizing or transitioning to a new living arrangement is a big life change. Our senior moving specialists provide patient, compassionate service to make the transition as smooth and stress-free as possible for you and your family.",
    shortDescription:
      "Compassionate, patient moving services designed for seniors and their families.",
    icon: "❤️",
    features: [
      "Patient and compassionate service",
      "Downsizing assistance",
      "Careful handling of lifetime collections",
      "Coordination with assisted living facilities",
      "Unpacking and setup at new location",
      "Flexible scheduling and pacing",
    ],
    faqs: [
      {
        question: "Can you help with downsizing decisions?",
        answer:
          "While we don't provide downsizing consulting, we can work with your family or a senior move manager to coordinate the logistics. We're happy to accommodate special requests and take extra time when needed.",
      },
      {
        question: "Do you work with assisted living facilities?",
        answer:
          "Yes, we regularly coordinate with assisted living and retirement communities in Southwest Florida. We understand their move-in procedures and can work within their schedules.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

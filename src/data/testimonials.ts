export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Fort Myers, FL",
    text: "Act of Class made our move completely stress-free. The crew was on time, professional, and handled our antique furniture like it was their own. Highly recommend!",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Cape Coral, FL",
    text: "Best movers we've ever used. They packed everything carefully, moved quickly, and nothing was damaged. Fair pricing with no surprises. Will definitely use again.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Estero, FL",
    text: "We were nervous about moving my mother's piano and china collection. The team was incredibly careful and patient. Everything arrived in perfect condition.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Bonita Springs, FL",
    text: "Professional from start to finish. They showed up exactly when they said they would and had our whole house moved in one day. Outstanding service.",
    rating: 5,
  },
  {
    name: "Linda W.",
    location: "Whiskey Creek, FL",
    text: "Used Act of Class three times now — once for our house, once for my daughter's apartment, and once for my office. Consistent quality every single time.",
    rating: 5,
  },
];

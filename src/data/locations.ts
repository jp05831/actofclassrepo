export interface Location {
  slug: string;
  name: string;
  adjective: string;
  description: string;
  highlights: string[];
  aboutCommunity: string;
  zipCodes?: string[];
}

export const locations: Location[] = [
  {
    slug: "fort-myers",
    name: "Fort Myers",
    adjective: "Trusted",
    description:
      "As Fort Myers' premier moving company, we know this city inside and out. From the historic River District to quiet suburban streets, our team navigates every corner of Fort Myers with confidence and care.",
    highlights: [
      "Over 20 years serving Fort Myers families",
      "Deep knowledge of local neighborhoods and traffic patterns",
      "Same-day moving available",
      "40,000 sq ft climate-controlled storage",
    ],
    aboutCommunity:
      "Fort Myers is the heart of Southwest Florida, known for its beautiful riverfront, historic downtown, and warm community spirit. From the Edison & Ford Winter Estates to the vibrant arts scene, Fort Myers offers a quality of life that draws families and professionals from across the country.",
    zipCodes: ["33901", "33902", "33903", "33904", "33905", "33906", "33907", "33908", "33912", "33913", "33916", "33919"],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    adjective: "Reliable",
    description:
      "Cape Coral's canal-lined neighborhoods and growing communities require movers who understand the area. Our crews have been serving Cape Coral residents for years, handling everything from waterfront homes to new construction moves.",
    highlights: [
      "Experienced with waterfront and canal-front properties",
      "Knowledge of Cape Coral's unique grid system",
      "Full-service packing and unpacking",
      "Specialty item handling",
    ],
    aboutCommunity:
      "Cape Coral is one of the fastest-growing cities in Florida, famous for its extensive canal system — more than 400 miles of navigable waterways. The city offers a blend of outdoor recreation, family-friendly neighborhoods, and a thriving local economy.",
    zipCodes: ["33904", "33909", "33914", "33990", "33991", "33993"],
  },
  {
    slug: "cypress-lake",
    name: "Cypress Lake",
    adjective: "Professional",
    description:
      "Cypress Lake's established neighborhoods and well-kept properties deserve careful, professional movers. We've been trusted by Cypress Lake families for over two decades to handle their relocations with precision and care.",
    highlights: [
      "Familiar with Cypress Lake's residential layouts",
      "Careful handling in established neighborhoods",
      "Competitive pricing for local moves",
      "Flexible scheduling options",
    ],
    aboutCommunity:
      "Cypress Lake is a census-designated place in Lee County known for its mature landscaping, established homes, and convenient location near US-41. Residents enjoy easy access to shopping, dining, and the beautiful Gulf Coast beaches.",
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    adjective: "Expert",
    description:
      "From luxury communities to charming neighborhoods, Bonita Springs moves require attention to detail. Our experienced team handles relocations throughout Bonita Springs with the professionalism this beautiful area deserves.",
    highlights: [
      "Experience with gated community protocols",
      "Luxury home moving expertise",
      "Knowledge of Bonita Springs neighborhoods",
      "Climate-controlled storage nearby",
    ],
    aboutCommunity:
      "Bonita Springs sits between Fort Myers and Naples, offering the best of both worlds. Known for its beautiful beaches, world-class golf courses, and upscale communities, Bonita Springs attracts families and retirees looking for the quintessential Southwest Florida lifestyle.",
    zipCodes: ["34133", "34134", "34135"],
  },
  {
    slug: "summerlin-place",
    name: "Summerlin Place",
    adjective: "Fast",
    description:
      "Speed and care go hand in hand when we move Summerlin Place residents. Our crews arrive prepared with the right equipment and a clear game plan, ensuring an efficient move that still protects your beautiful home and belongings.",
    highlights: [
      "Efficient moves without cutting corners",
      "Familiar with Summerlin Road area",
      "Gated community experience",
      "Floor and furniture protection",
    ],
    aboutCommunity:
      "Summerlin Place is a residential neighborhood in Fort Myers near Summerlin Road and close to the Sanibel Causeway. Known for well-maintained homes and convenient access to shops, beaches, and downtown Fort Myers, it's popular with families and professionals.",
  },
  {
    slug: "allen-park",
    name: "Allen Park",
    adjective: "Skilled",
    description:
      "Allen Park's mix of homes requires movers who can read a space and adapt. Our skilled team handles everything from navigating tight hallways to carefully disassembling furniture, ensuring your belongings arrive safely.",
    highlights: [
      "Adaptable to various home layouts",
      "Expert furniture disassembly and reassembly",
      "Affordable rates for the community",
      "Full packing services available",
    ],
    aboutCommunity:
      "Allen Park sits in Lee County with a real neighborhood feel. It's a solid residential area with decent schools, parks, and shopping access. Families appreciate its affordability and quiet atmosphere while still being close to Fort Myers.",
  },
  {
    slug: "reflection-lakes",
    name: "Reflection Lakes",
    adjective: "Local",
    description:
      "We've been moving families around Reflection Lakes for years, so we know exactly what we're dealing with — gated communities, security protocols, and the specific needs of this beautiful neighborhood.",
    highlights: [
      "Pre-approved with community gate access",
      "Knowledge of loading zones and building access",
      "Experience with community regulations",
      "Climate-controlled storage for gap periods",
    ],
    aboutCommunity:
      "Reflection Lakes is a family-friendly community with good schools, nice amenities, and walking trails. The lakes aren't just decorative — they're a real feature. It's close to downtown Fort Myers while offering a peaceful, settled atmosphere.",
  },
  {
    slug: "venetian-village",
    name: "Venetian Village",
    adjective: "Quality",
    description:
      "Venetian Village's canal-front properties and established homes deserve movers who take the job seriously. We've spent over twenty years learning the details of neighborhoods like yours, and our crew shows up prepared every time.",
    highlights: [
      "Canal-front property experience",
      "Careful with custom and antique furniture",
      "Proper lifting techniques for heavy items",
      "Clean and professional crews",
    ],
    aboutCommunity:
      "Venetian Village is a residential area in Fort Myers known for canal-front properties and a laid-back atmosphere. Located near McGregor Boulevard, it offers a mix of older Florida homes and updated properties with water access.",
  },
  {
    slug: "reflection-isles",
    name: "Reflection Isles",
    adjective: "Reputable",
    description:
      "Reflection Isles residents do their homework before hiring anyone, and we respect that. Our BBB-accredited, family-owned team has been earning trust in Fort Myers for over twenty years, one careful move at a time.",
    highlights: [
      "Background-checked crew members",
      "BBB accredited company",
      "Lakefront home moving experience",
      "Extra care for quality furniture and custom pieces",
    ],
    aboutCommunity:
      "Reflection Isles is a gated community in Fort Myers near Alico Road featuring lakefront homes, resort-style amenities, and a family-friendly atmosphere. It's close to Gulf Coast Town Center and Southwest Florida International Airport.",
  },
  {
    slug: "pine-manor",
    name: "Pine Manor",
    adjective: "Highly Recommended",
    description:
      "We've spent over twenty years earning recommendations across Southwest Florida, and Pine Manor residents have been part of that story. Our reputation is built on referrals — one satisfied customer at a time.",
    highlights: [
      "Built on word-of-mouth referrals",
      "Transparent and fair pricing",
      "Selective hiring for quality crews",
      "Full-service or labor-only options",
    ],
    aboutCommunity:
      "Pine Manor is a census-designated community east of Fort Myers with a working-class character and diverse population. Residents appreciate its affordability and accessibility, with schools, shopping, and services all within a short drive.",
  },
  {
    slug: "whiskey-creek",
    name: "Whiskey Creek",
    adjective: "Reputable",
    description:
      "Whiskey Creek is the kind of neighborhood where people talk, and when someone asks about movers, our name comes up. Twenty-plus years of reliable service has earned us the trust of families throughout this established community.",
    highlights: [
      "Decades of repeat customers",
      "Honest upfront quotes",
      "Family-owned accountability",
      "Complete moving services under one roof",
    ],
    aboutCommunity:
      "Whiskey Creek has real character — a golf course running through it, mature trees lining the streets, and homes where people stay for decades. It's settled, comfortable, and well-kept, with a strong sense of community along the US-41 corridor.",
  },
  {
    slug: "heritage-palms",
    name: "Heritage Palms",
    adjective: "Reputable",
    description:
      "Heritage Palms residents want a crew that shows up on time, doesn't break anything, and gets the job done. We've been delivering exactly that across Southwest Florida for over twenty years.",
    highlights: [
      "Country club community experience",
      "HOA move-in protocol knowledge",
      "Trained and professional crew",
      "Climate-controlled storage solutions",
    ],
    aboutCommunity:
      "Heritage Palms is a community where people want to stay once they move in. With a country club, golf courses, nice homes, and a relaxed vibe, it attracts families and retirees who value a peaceful, well-kept environment.",
  },
  {
    slug: "sail-harbour",
    name: "Sail Harbour",
    adjective: "Dependable",
    description:
      "We've been helping folks move in and out of this waterfront community for years. As local Fort Myers movers, we know every shortcut, every tight spot, and exactly how to handle your move in Sail Harbour.",
    highlights: [
      "Waterfront community specialists",
      "Navigate narrow streets expertly",
      "Route planning around peak traffic",
      "Condo and house moving experience",
    ],
    aboutCommunity:
      "Sail Harbour offers waterfront living with boat access but without the stuffiness. Houses are nice, people wave when they see you, and it's close to downtown Fort Myers while still feeling like its own neighborhood.",
  },
  {
    slug: "harlem-heights",
    name: "Harlem Heights",
    adjective: "Expert",
    description:
      "From basic apartment moves to complicated whole-home relocations, Harlem Heights residents have trusted our expertise for everything. Our locally-rooted, family-owned team brings over two decades of experience to every job.",
    highlights: [
      "Specialty item expertise",
      "Family-owned and locally rooted",
      "Flexible storage options",
      "Apartment and home moving",
    ],
    aboutCommunity:
      "Harlem Heights is a small, tight-knit community south of Fort Myers proper with a long history and quieter residential character. Residents appreciate the sense of community and convenience of being close to major roads.",
  },
  {
    slug: "the-forum",
    name: "The Forum",
    adjective: "Dependable",
    description:
      "We show up when we say we will, handle your belongings like they matter, and finish the job right. The Forum residents trust us because dependability isn't just a word we throw around — it's our standard.",
    highlights: [
      "Reliable scheduling and on-time arrival",
      "Twenty years of proven dependability",
      "Selective crew hiring process",
      "Local and long-distance capability",
    ],
    aboutCommunity:
      "The Forum is a well-established area in Fort Myers known for proximity to major shopping and easy I-75 access. It attracts professionals, families, and retirees who appreciate convenience balanced with suburban comfort.",
  },
  {
    slug: "westwood",
    name: "Westwood",
    adjective: "Affordable",
    description:
      "Good moving help shouldn't cost a fortune. We offer Westwood residents experienced movers, the right equipment, and real attention to detail at honest, fair prices with no hidden fees.",
    highlights: [
      "Fair and transparent pricing",
      "No hidden fees or surprise charges",
      "Experienced crews at affordable rates",
      "Local knowledge saves you time and money",
    ],
    aboutCommunity:
      "Westwood has a laid-back suburban feel that attracts families, retirees, and working professionals. It's close to everything you need but removed from the noise. Neighbors wave, yards stay tidy, and the pace of life is a little slower.",
  },
  {
    slug: "omni",
    name: "Omni",
    adjective: "Top-Rated",
    description:
      "We didn't earn our reviews by accident. Over twenty years of showing up on time, treating belongings with respect, and finishing what we start has made us the top-rated choice for Omni residents.",
    highlights: [
      "Consistently high customer reviews",
      "Strategic truck loading",
      "Floor protection before every move",
      "Flexible full-service or labor-only options",
    ],
    aboutCommunity:
      "Omni is a small residential community in Fort Myers with a quiet neighborhood feel. It's close to major roads and shopping while maintaining that off-the-beaten-path charm longtime residents appreciate.",
  },
  {
    slug: "portofino-springs",
    name: "Portofino Springs",
    adjective: "Local",
    description:
      "Gated communities are our specialty. We know to call ahead for gate codes, put down floor protection, and treat your home with the respect Portofino Springs properties deserve.",
    highlights: [
      "Gated community protocols",
      "Mediterranean-style home experience",
      "Professional appearance and conduct",
      "HOA-compliant moving procedures",
    ],
    aboutCommunity:
      "Portofino Springs is a gated neighborhood near Daniels Parkway with quick I-75 access. The community has a Mediterranean vibe with well-maintained homes and landscaping, close to shopping, restaurants, and the airport.",
  },
  {
    slug: "villas",
    name: "Villas",
    adjective: "Experienced",
    description:
      "We've been helping Villas families move for over 20 years. Affordable professional moving that doesn't compromise on quality — that's what we deliver to this great community every time.",
    highlights: [
      "Affordable professional service",
      "Same-day moves when available",
      "Flexible scheduling options",
      "20+ years of community experience",
    ],
    aboutCommunity:
      "Villas is an affordable, quiet neighborhood where people know their neighbors. Close to Fort Myers with easy beach and grocery access, it offers single-family homes and townhouses with a real community vibe.",
  },
  {
    slug: "highland-pines",
    name: "Highland Pines",
    adjective: "Reliable",
    description:
      "We've been working as local movers in Fort Myers for more than two decades. Highland Pines residents count on us for straightforward, reliable service that gets the job done right the first time.",
    highlights: [
      "Same-day moves available",
      "Full packing and unpacking services",
      "Climate-controlled storage",
      "Professional and trained crews",
    ],
    aboutCommunity:
      "Highland Pines is a residential neighborhood in Fort Myers that gives families room to breathe. Schools, shopping, and parks are nearby, and the area has a relaxed suburban feel perfect for settling down.",
  },
  {
    slug: "mcgregor",
    name: "McGregor",
    adjective: "Fast",
    description:
      "McGregor's beautiful homes with unique layouts, narrow doorways, and character staircases need movers who know what they're doing. We've moved families up and down McGregor Boulevard more times than we can count.",
    highlights: [
      "Historic home moving experience",
      "Navigate unique architectural layouts",
      "Fast without being careless",
      "Complete furniture protection",
    ],
    aboutCommunity:
      "McGregor is famous for its gorgeous palm-lined boulevard with history and charm. Close to downtown Fort Myers and the beaches, it offers a mix of older homes and newer builds with a relaxed vibe.",
  },
  {
    slug: "estero",
    name: "Estero",
    adjective: "Reliable",
    description:
      "We've been helping people move around Estero for twenty years. From Wildcat Run to The Brooks, from Coconut Point condos to houses in Bella Terra — we know Estero inside and out.",
    highlights: [
      "Deep knowledge of Estero communities",
      "Work around seasonal traffic patterns",
      "Full-service moving and storage",
      "Licensed and insured professionals",
    ],
    aboutCommunity:
      "Estero has that sweet spot — close enough to Fort Myers for convenience but far enough for peace. With FGCU, Coconut Point, and plenty of parks, it feels like a real community, not just another Florida suburb.",
    zipCodes: ["33928"],
  },
  {
    slug: "page-park",
    name: "Page Park",
    adjective: "Efficient",
    description:
      "Page Park's tight streets and rental properties require movers who pay attention. Our crews bring the right trucks, equipment, and attitude to handle moves in this compact but active community near Page Field.",
    highlights: [
      "Small community specialists",
      "Compact truck options for narrow streets",
      "Apartment and house expertise",
      "BBB accredited and locally owned",
    ],
    aboutCommunity:
      "Page Park is a census-designated place in Lee County with around 750 residents, sitting four miles south of downtown Fort Myers near Page Field. It offers easy access to beaches on Sanibel and Estero Island.",
  },
  {
    slug: "palm-lee-park",
    name: "Palm Lee Park",
    adjective: "Trusted",
    description:
      "Trust is earned in the details — the crew that wraps your grandmother's mirror like it matters, the driver who shows up on time, the company that answers the phone. That's what we bring to Palm Lee Park.",
    highlights: [
      "Detail-oriented service",
      "Honest and straightforward pricing",
      "Consistent repeat customer base",
      "Local and long-distance capability",
    ],
    aboutCommunity:
      "Palm Lee Park is a smaller community in the Fort Myers area offering a quieter pace with easy access to shopping and main roads. It's practical, unpretentious, and comfortable — the kind of place where people settle in and stay.",
  },
  {
    slug: "paseo",
    name: "Paseo",
    adjective: "Highly Recommended",
    description:
      "We've helped a bunch of families move into Paseo over the years, and they stick around because this neighborhood works. Our team knows the streets, the timing, and how to make your move stress-free.",
    highlights: [
      "Family neighborhood experience",
      "Weather-aware move planning",
      "Full-service packing available",
      "Same-day moves in tight situations",
    ],
    aboutCommunity:
      "Paseo is a quiet Fort Myers neighborhood with space, decent schools, nearby shopping, and parks. It's suburban without feeling isolated — practical and family-friendly, which is why people keep choosing it.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

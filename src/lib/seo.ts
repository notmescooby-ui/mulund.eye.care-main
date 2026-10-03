export const SITE_URL = "https://www.mulundeyecare.com";
export const SITE_NAME = "Mulund Eye Care";
export const SITE_LOCALITY = "Mulund West, Mumbai";

export const serviceSeo: Record<string, {
  title: string;
  description: string;
  keywords: string[];
}> = {
  cataract: {
    title: "Cataract Surgery & Treatment in Mulund | Mulund Eye Care",
    description: "Learn about cataract evaluation, treatment and surgery at Mulund Eye Care in Mulund West, Mumbai. Get a personalized assessment and treatment plan.",
    keywords: ["cataract surgery Mulund", "cataract treatment Mulund", "cataract doctor Mulund"],
  },
  glaucoma: {
    title: "Glaucoma Specialist & Treatment in Mulund | Mulund Eye Care",
    description: "Mulund Eye Care provides glaucoma screening, eye-pressure assessment and ongoing glaucoma management in Mulund West, Mumbai.",
    keywords: ["glaucoma specialist Mulund", "glaucoma treatment Mulund", "glaucoma screening Mulund"],
  },
  "dry-eye": {
    title: "Dry Eye Treatment in Mulund | Mulund Eye Care",
    description: "Get evaluation and treatment for dry eyes, irritation, burning and tear-film problems at Mulund Eye Care in Mulund West, Mumbai.",
    keywords: ["dry eye treatment Mulund", "dry eye specialist Mulund", "dry eye doctor Mulund"],
  },
  "comprehensive-checkup": {
    title: "Comprehensive Eye Checkup in Mulund | Mulund Eye Care",
    description: "Get a comprehensive eye checkup in Mulund West, including vision assessment, eye-pressure screening and ocular health evaluation at Mulund Eye Care.",
    keywords: ["eye checkup Mulund", "comprehensive eye checkup Mulund", "eye examination Mulund"],
  },
  "diabetic-eye": {
    title: "Diabetic Eye Care in Mulund | Mulund Eye Care",
    description: "Mulund Eye Care provides diabetic eye examinations and retinal monitoring in Mulund West, Mumbai to help detect diabetes-related eye changes.",
    keywords: ["diabetic eye care Mulund", "diabetic eye checkup Mulund", "diabetic retinopathy screening Mulund"],
  },
  pediatric: {
    title: "Pediatric Eye Care & Eye Doctor in Mulund | Mulund Eye Care",
    description: "Child-friendly pediatric eye care and vision assessments at Mulund Eye Care in Mulund West, Mumbai.",
    keywords: ["pediatric eye doctor Mulund", "pediatric eye care Mulund", "children's eye doctor Mulund"],
  },
  "computer-vision": {
    title: "Computer Vision Syndrome & Digital Eye Strain | Mulund Eye Care",
    description: "Get help for digital eye strain, screen-related fatigue, headaches and dryness at Mulund Eye Care in Mulund West, Mumbai.",
    keywords: ["computer vision syndrome Mulund", "digital eye strain Mulund", "eye strain from screens Mulund"],
  },
  "contact-lens": {
    title: "Contact Lens Consultation in Mulund | Mulund Eye Care",
    description: "Professional contact lens consultation, fitting and eye-health assessment at Mulund Eye Care in Mulund West, Mumbai.",
    keywords: ["contact lens consultation Mulund", "contact lens fitting Mulund", "contact lenses Mulund"],
  },
  "lasik-evaluation": {
    title: "LASIK Evaluation in Mulund | Mulund Eye Care",
    description: "Comprehensive LASIK evaluation and refractive assessment at Mulund Eye Care in Mulund West, Mumbai to determine suitability for vision correction.",
    keywords: ["LASIK Mulund", "LASIK evaluation Mulund", "LASIK consultation Mulund"],
  },
  "vision-therapy": {
    title: "Vision Therapy in Mulund | Mulund Eye Care",
    description: "Explore individualized vision therapy for binocular vision, focusing and visual processing needs at Mulund Eye Care in Mulund West, Mumbai.",
    keywords: ["vision therapy Mulund", "vision therapy clinic Mulund"],
  },
};

export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.jpg`,
  image: `${SITE_URL}/og-image.jpg`,
  description: "Comprehensive eye care, cataract evaluation, glaucoma treatment, and advanced ophthalmology services in Mulund West, Mumbai.",
  telephone: "+917777066990",
  email: "care@mulundeyecare.in",
  priceRange: "₹₹",
  medicalSpecialty: ["Ophthalmology", "Optometry"],
  hasMap: "https://www.google.com/maps/place/MULUND+EYE+CARE",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 6, Morphosis Adagio, Dindayal Upadhyay Marg, Next to Gala Company",
    addressLocality: "Mulund West",
    addressRegion: "Maharashtra",
    postalCode: "400080",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.171161,
    longitude: 72.941485,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
};

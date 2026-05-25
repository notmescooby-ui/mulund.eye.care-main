import { Eye, Sun, Activity, Droplets, Monitor, Baby, Glasses, Stethoscope, Sparkles, Lightbulb } from "lucide-react";
import cataractService from "@/assets/cataract-service.png";
import glaucomaService from "@/assets/glaucoma-service.png";
import dryEyeService from "@/assets/dry-eye-service.png";
import checkupService from "@/assets/eye-check-service.png";
import diabeticService from "@/assets/diabetic-service.png";
import pediatricService from "@/assets/pediatric-service.png";
import computerVisionService from "@/assets/computer-vision-syndrome-service.png";
import contactLensService from "@/assets/contact-lens-service.png";
import lasikService from "@/assets/lasik-service.png";
import visionTherapyService from "@/assets/vision-therapy-service.png";

export type ServiceDetail = {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  shortDescription: string;
  icon: any;
  simulationType?: "cataract" | "lasik" | "glaucoma";
  conditionExplanation: string;
  overviewImage: string;
  symptoms: { icon: any; title: string; description: string }[];
  timeline: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  stats: { label: string; value: string }[];
};

export const servicesDetailed: Record<string, ServiceDetail> = {
  "cataract": {
    id: "cataract",
    title: "Cataract Evaluation & Surgery",
    subtitle: "Restoring clarity to your vision with advanced surgical precision.",
    heroImage: "https://images.unsplash.com/photo-1579154235828-4519829f9394?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Our cataract evaluation uses state-of-the-art diagnostics to plan for precise vision restoration using advanced intraocular lens technology.",
    icon: Sun,
    simulationType: "cataract",
    conditionExplanation: "A cataract is a clouding of the eye's natural lens, which lies behind the iris and the pupil. Cataracts are the most common cause of vision loss in people over age 40 and is the principal cause of blindness in the world.",
    overviewImage: cataractService,
    symptoms: [
      { icon: Eye, title: "Cloudy Vision", description: "Vision that is blurry, foggy, or filmy." },
      { icon: Sun, title: "Glare Sensitivity", description: "Difficulty seeing at night or sensitivity to bright lights." },
      { icon: Sparkles, title: "Fading Colors", description: "Colors seem faded or yellowed." },
    ],
    timeline: [
      { title: "Consultation", description: "Detailed diagnostic checkup and vision assessment." },
      { title: "Lens Selection", description: "Choosing the best intraocular lens for your lifestyle." },
      { title: "Precision Surgery", description: "Micro-incision procedure using modern technology." },
      { title: "Recovery", description: "Quick healing with personalized post-operative care." },
    ],
    faqs: [
      { question: "Is cataract surgery painful?", answer: "No, the procedure is typically painless and performed under local anesthesia." },
      { question: "How long does recovery take?", answer: "Most patients return to normal activities within a few days." },
    ],
    stats: [
      { label: "Success Rate", value: "98%+" },
      { label: "Procedures", value: "5000+" },
    ],
  },
  "glaucoma": {
    id: "glaucoma",
    title: "Glaucoma Screening & Management",
    subtitle: "Protecting your optic nerve from the 'silent thief of sight'.",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "We provide comprehensive glaucoma screenings using advanced pressure monitoring and retinal nerve imaging to preserve your visual field.",
    icon: Activity,
    simulationType: "glaucoma",
    conditionExplanation: "Glaucoma is a group of eye conditions that damage the optic nerve, the health of which is vital for good vision. This damage is often caused by an abnormally high pressure in your eye.",
    overviewImage: glaucomaService,
    symptoms: [
      { icon: Activity, title: "Peripheral Loss", description: "Loss of side vision, often unnoticed in early stages." },
      { icon: Eye, title: "Halos Around Lights", description: "Seeing rainbow-colored circles around lights." },
      { icon: Sparkles, title: "Eye Pain", description: "Severe eye pain or headache (in acute cases)." },
    ],
    timeline: [
      { title: "Pressure Check", description: "Tonometry to measure intraocular pressure." },
      { title: "Nerve Imaging", description: "Advanced OCT scans of the optic nerve head." },
      { title: "Visual Field", description: "Mapping your peripheral vision to detect gaps." },
      { title: "Management", description: "Drops, laser, or surgical options to lower pressure." },
    ],
    faqs: [
      { question: "Can glaucoma vision loss be reversed?", answer: "Vision lost to glaucoma cannot be restored, making early detection critical." },
      { question: "Who is at risk?", answer: "Adults over 40, those with family history, and people with high eye pressure." },
    ],
    stats: [
      { label: "Detected Early", value: "90%" },
      { label: "Care Plans", value: "1000+" },
    ],
  },
  "dry-eye": {
    id: "dry-eye",
    title: "Dry Eye Diagnosis & Therapy",
    subtitle: "Soothing relief for chronic eye irritation and discomfort.",
    heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Experience lasting relief from burning, itching, and dryness with our specialized tear-film analysis and personalized dry eye therapy.",
    icon: Droplets,
    conditionExplanation: "Dry eye disease is a common condition that occurs when your tears aren't able to provide adequate lubrication for your eyes. Tears can be inadequate and unstable for many reasons.",
    overviewImage: dryEyeService,
    symptoms: [
      { icon: Droplets, title: "Gritty Sensation", description: "Feeling like something is in your eye." },
      { icon: Sparkles, title: "Redness", description: "Bloodshot eyes or persistent irritation." },
      { icon: Monitor, title: "Blurred Vision", description: "Fluctuating vision that improves with blinking." },
    ],
    timeline: [
      { title: "Tear Analysis", description: "Assessing tear volume and quality (TBUT test)." },
      { title: "Lid Exam", description: "Checking Meibomian glands for blockages." },
      { title: "Tailored Therapy", description: "Lubricants, lid hygiene, or advanced procedures." },
      { title: "Follow-up", description: "Regular checks to ensure lasting comfort." },
    ],
    faqs: [
      { question: "Does screen use cause dry eye?", answer: "Yes, prolonged screen use reduces blinking, which can lead to dryness." },
      { question: "Is it permanent?", answer: "While often chronic, it can be effectively managed with the right treatment." },
    ],
    stats: [
      { label: "Relief Rate", value: "95%" },
      { label: "Patients", value: "3000+" },
    ],
  },
  "comprehensive-checkup": {
    id: "comprehensive-checkup",
    title: "Comprehensive Eye Checkup",
    subtitle: "A complete visual health assessment for peace of mind.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "A thorough evaluation of your vision and overall ocular health using the latest clinical technology to ensure early detection of any issues.",
    icon: Eye,
    conditionExplanation: "Regular eye exams are a critical part of maintaining overall health. A comprehensive checkup goes beyond just reading a chart; it involves a series of tests to evaluate your vision and check for eye diseases.",
    overviewImage: checkupService,
    symptoms: [
      { icon: Eye, title: "Blurry Vision", description: "Difficulty focusing on near or far objects." },
      { icon: Monitor, title: "Eye Strain", description: "Tiredness or discomfort after long periods of focus." },
      { icon: Activity, title: "Frequent Headaches", description: "Persistent headaches often linked to vision issues." },
    ],
    timeline: [
      { title: "Refraction Test", description: "Determining your exact prescription for glasses or lenses." },
      { title: "Slit Lamp Exam", description: "Microscopic evaluation of the front of your eye." },
      { title: "Pressure Testing", description: "Measuring eye pressure to screen for glaucoma." },
      { title: "Retinal Check", description: "Examining the back of the eye for systemic issues." },
    ],
    faqs: [
      { question: "How often should I get an exam?", answer: "Healthy adults should generally have an exam every 1-2 years." },
      { question: "Do I need to be dilated?", answer: "Dilation is often recommended for a thorough retinal evaluation." },
    ],
    stats: [
      { label: "Annual Exams", value: "8000+" },
      { label: "Patient Satisfaction", value: "99%" },
    ],
  },
  "diabetic-eye": {
    id: "diabetic-eye",
    title: "Diabetic Eye Care",
    subtitle: "Specialized monitoring to prevent diabetes-related vision loss.",
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c527?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Specialized monitoring and advanced imaging to detect and manage diabetic retinopathy, helping you preserve your vision through proactive care.",
    icon: Stethoscope,
    simulationType: "glaucoma", // Similar blur effect for now
    conditionExplanation: "Diabetes can lead to diabetic retinopathy, a condition that damages the blood vessels in the retina. It is a leading cause of vision loss among working-age adults.",
    overviewImage: diabeticService,
    symptoms: [
      { icon: Sparkles, title: "Floating Spots", description: "Dark strings or spots floating in your vision." },
      { icon: Eye, title: "Fluctuating Vision", description: "Vision that changes from day to day." },
      { icon: Activity, title: "Dark Areas", description: "Empty or dark areas in your field of vision." },
    ],
    timeline: [
      { title: "Blood Sugar Review", description: "Discussing your diabetes management and history." },
      { title: "Dilated Fundoscopy", description: "In-depth look at the retinal blood vessels." },
      { title: "OCT Scanning", description: "Advanced imaging to detect swelling in the macula." },
      { title: "Action Plan", description: "Monitoring or treatment based on retinopathy stage." },
    ],
    faqs: [
      { question: "Can diabetic retinopathy be prevented?", answer: "Strict control of blood sugar and regular exams can significantly lower risk." },
      { question: "Is treatment available?", answer: "Yes, options include laser therapy, injections, or surgery." },
    ],
    stats: [
      { label: "Early Detection", value: "95%" },
      { label: "Retinal Scans", value: "2000+" },
    ],
  },
  "pediatric": {
    id: "pediatric",
    title: "Pediatric Eye Care",
    subtitle: "Gentle vision care for the smallest eyes in your family.",
    heroImage: "https://images.unsplash.com/photo-1603354362447-2849e23616aa?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Child-friendly eye examinations that focus on visual development, helping your child succeed in school and play with healthy eyes.",
    icon: Baby,
    conditionExplanation: "Vision is closely linked to a child's learning process. Early eye exams help detect issues like lazy eye (amblyopia) or crossed eyes (strabismus) that can affect development.",
    overviewImage: pediatricService,
    symptoms: [
      { icon: Eye, title: "Squinting", description: "Frequently squinting to see clearly." },
      { icon: Activity, title: "Tilting Head", description: "Tilting the head to look at things." },
      { icon: Monitor, title: "Avoiding Reading", description: "Lack of interest in close-up work or reading." },
    ],
    timeline: [
      { title: "Child-Friendly Prep", description: "Making the child feel comfortable in the clinic." },
      { title: "Vision Screening", description: "Checking visual acuity and eye alignment." },
      { title: "Ocular Health", description: "Brief check of the internal eye structures." },
      { title: "Parent Counseling", description: "Guidance on vision hygiene and next steps." },
    ],
    faqs: [
      { question: "When should a child have their first exam?", answer: "At 6 months, 3 years, and before starting school." },
      { question: "Will they need drops?", answer: "Mild dilating drops are sometimes used for a precise check." },
    ],
    stats: [
      { label: "Children Treated", value: "1500+" },
      { label: "School Ready", value: "100%" },
    ],
  },
  "computer-vision": {
    id: "computer-vision",
    title: "Computer Vision Syndrome",
    subtitle: "Modern solutions for the digital age's eye strain.",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Relieve digital eye strain and enhance your productivity with our comprehensive computer vision assessment and ergonomic guidance.",
    icon: Monitor,
    conditionExplanation: "Computer Vision Syndrome (CVS) describes a group of eye and vision-related problems that result from prolonged computer, tablet, and cell phone use. Most symptoms are temporary and decline after stopping computer work.",
    overviewImage: computerVisionService,
    symptoms: [
      { icon: Monitor, title: "Digital Fatigue", description: "Tiredness or soreness in the eyes after screen use." },
      { icon: Activity, title: "Headaches", description: "Pain behind the eyes or in the forehead." },
      { icon: Droplets, title: "Dryness", description: "Burning or gritty sensation due to reduced blinking." },
    ],
    timeline: [
      { title: "Habit Review", description: "Analyzing your screen time and workstation setup." },
      { title: "Refraction", description: "Checking for subtle errors that worsen CVS." },
      { title: "Ergonomic Advice", description: "Rules for lighting, distance, and the 20-20-20 rule." },
      { title: "Custom Lenses", description: "Prescribing blue-light filters or digital lenses." },
    ],
    faqs: [
      { question: "Do blue light glasses help?", answer: "They can reduce glare and improve comfort for some users." },
      { question: "What is the 20-20-20 rule?", answer: "Every 20 minutes, look at something 20 feet away for 20 seconds." },
    ],
    stats: [
      { label: "Comfort Increase", value: "90%" },
      { label: "Consultations", value: "1200+" },
    ],
  },
  "contact-lens": {
    id: "contact-lens",
    title: "Contact Lens Consultation",
    subtitle: "Clear, comfortable vision without the frames.",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Expert fitting for soft, toric, and specialty contact lenses, ensuring optimal eye health and clear vision for your lifestyle.",
    icon: Glasses,
    conditionExplanation: "Contact lenses provide a wider field of vision and greater freedom for active lifestyles. A professional fitting is essential to ensure eye health and maximum comfort.",
    overviewImage: contactLensService,
    symptoms: [
      { icon: Eye, title: "Vision Freedom", description: "Unobstructed view and active lifestyle support." },
      { icon: Glasses, title: "Frame Fatigue", description: "Discomfort from heavy or ill-fitting glasses." },
      { icon: Activity, title: "Distortion", description: "Peripheral distortion sometimes caused by thick lenses." },
    ],
    timeline: [
      { title: "Surface Check", description: "Evaluating the cornea and tear film for lens wear." },
      { title: "Measurements", description: "Precise mapping of the eye's curvature (Keratometry)." },
      { title: "Trial Fitting", description: "Testing different lens types for comfort and vision." },
      { title: "Training", description: "Learning how to insert, remove, and clean your lenses." },
    ],
    faqs: [
      { question: "Can I sleep in my lenses?", answer: "Only if specifically prescribed by your doctor." },
      { question: "Are they safe for kids?", answer: "Yes, many children and teens successfully wear contacts." },
    ],
    stats: [
      { label: "Fits per Month", value: "50+" },
      { label: "Brands Offered", value: "10+" },
    ],
  },
  "lasik-evaluation": {
    id: "lasik-evaluation",
    title: "LASIK Evaluation Service",
    subtitle: "Expert assessment for a life free from glasses and contacts.",
    heroImage: "https://images.unsplash.com/photo-1579154235828-4519829f9394?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "Our comprehensive LASIK evaluation determines your candidacy for vision correction surgery using advanced corneal mapping and refractive analysis.",
    icon: Sparkles,
    simulationType: "lasik",
    conditionExplanation: "LASIK (Laser-Assisted In Situ Keratomileusis) is a popular surgery used to correct vision in people who are nearsighted, farsighted, or have astigmatism. Our evaluation ensures your eyes are healthy and suitable for the procedure.",
    overviewImage: lasikService,
    symptoms: [
      { icon: Eye, title: "Glasses Dependency", description: "Dependence on corrective eyewear for daily activities." },
      { icon: Droplets, title: "Contact Lens Issues", description: "Irritation, dryness or intolerance to contact lenses." },
      { icon: Activity, title: "Active Lifestyle", description: "Desire for clear vision during sports and outdoor activities." },
    ],
    timeline: [
      { title: "Detailed Workup", description: "In-depth refraction and eye health assessment." },
      { title: "Corneal Topography", description: "Precise mapping of your eye's surface curvature." },
      { title: "Pachymetry", description: "Measuring corneal thickness for surgical safety." },
      { title: "Candidate Review", description: "Doctor consultation to discuss your specific vision goals." },
    ],
    faqs: [
      { question: "Am I a candidate for LASIK?", answer: "Most adults with stable vision and healthy corneas are candidates. Our evaluation confirms this." },
      { question: "How long does the evaluation take?", answer: "A thorough pre-LASIK workup usually takes about 60 to 90 minutes." },
    ],
    stats: [
      { label: "Candidacy Accuracy", value: "100%" },
      { label: "Successful Outcomes", value: "10,000+" },
    ],
  },
  "vision-therapy": {
    id: "vision-therapy",
    title: "Vision Therapy",
    subtitle: "Training your eyes and brain to work better together.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=2000",
    shortDescription: "A customized program of visual exercises designed to improve binocular vision, focusing, and visual processing skills.",
    icon: Lightbulb,
    conditionExplanation: "Vision therapy is a specialized treatment program used to correct certain vision problems that cannot be fully corrected with glasses, contact lenses, or surgery alone.",
    overviewImage: visionTherapyService,
    symptoms: [
      { icon: Activity, title: "Double Vision", description: "Seeing two images of a single object." },
      { icon: Monitor, title: "Tracking Issues", description: "Difficulty following moving objects or lines of text." },
      { icon: Lightbulb, title: "Poor Depth Perception", description: "Difficulty judging distances correctly." },
    ],
    timeline: [
      { title: "Evaluation", description: "In-depth testing of binocular function and tracking." },
      { title: "Custom Program", description: "Designing exercises specific to your visual needs." },
      { title: "In-Office Training", description: "Guided sessions with specialized vision equipment." },
      { title: "Home Exercises", description: "Daily practice to reinforce visual patterns." },
    ],
    faqs: [
      { question: "Is it just for children?", answer: "No, patients of all ages can benefit from vision therapy." },
      { question: "How long does it take?", answer: "Programs usually last 12-24 sessions depending on the case." },
    ],
    stats: [
      { label: "Improvement Rate", value: "92%" },
      { label: "Active Programs", value: "200+" },
    ],
  },
};

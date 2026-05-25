import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Section";
import cataractVisionImg from "@/assets/cataract-vision.png";
import glaucomaVisionImg from "@/assets/glaucoma-vision.png";
import lasikVisionImg from "@/assets/lasik-vision.png";

type Props = {
  type?: "cataract" | "lasik" | "glaucoma";
};

export function ServiceVisual({ type }: Props) {
  const [sliderPos, setSliderPos] = useState(50);

  if (!type) return null;

  const simulations = {
    cataract: {
      title: "Cataract Vision Simulation",
      description: "Experience how cataracts cloud your natural lens and how clear vision is restored after treatment.",
      beforeLabel: "Cloudy & Yellowed",
      afterLabel: "Restored Clarity",
      beforeStyle: "blur-[8px] sepia-[0.3] brightness-[0.9]",
      image: cataractVisionImg,
    },
    lasik: {
      title: "LASIK Simulation",
      description: "See the difference that precise vision correction makes for distant objects.",
      beforeLabel: "Uncorrected Vision",
      afterLabel: "Sharp Focus",
      beforeStyle: "blur-[10px]",
      image: lasikVisionImg,
    },
    glaucoma: {
      title: "Glaucoma Vision Simulation",
      description: "Visualizing the gradual loss of peripheral vision associated with glaucoma.",
      beforeLabel: "Advanced Glaucoma",
      afterLabel: "Full Visual Field",
      beforeStyle: "grayscale opacity-80 [mask-image:radial-gradient(circle,transparent_20%,black_70%)]",
      image: glaucomaVisionImg,
    }
  };

  const sim = simulations[type];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-4 block">Vision Simulation</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">{sim.title}</h2>
            <p className="text-muted-foreground text-lg">{sim.description}</p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto relative group">
          <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl cursor-ew-resize select-none border border-sky-100">
            {/* Background (Fixed Image) - used for both sides but manipulated */}
            <img 
              src={sim.image} 
              alt="Base view"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Layer (Top Layer with Effects) */}
            <div className={`absolute inset-0 z-10 ${sim.beforeStyle}`}>
              <img 
                src={sim.image} 
                alt="Before treatment"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-8 left-8 z-30 glass px-4 py-2 rounded-full text-sm font-bold text-navy shadow-card">
              {sim.beforeLabel}
            </div>

            {/* After Layer (Revealed by Slider) */}
            <div 
              className="absolute inset-0 z-20 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img 
                src={sim.image} 
                alt="After treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full text-sm font-bold text-navy shadow-card">
                {sim.afterLabel}
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute inset-y-0 z-40 w-1 bg-white cursor-ew-resize group-hover:bg-sky-400 transition-colors"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-elegant border-4 border-sky-400 grid place-items-center">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-sky-400 rounded-full" />
                  <div className="w-1 h-3 bg-sky-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Input Overlay */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-50"
            />
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground italic">
            *Representative simulation. Actual visual results vary by patient.
          </div>
        </div>
      </div>
    </section>
  );
}

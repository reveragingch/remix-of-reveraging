import { motion } from "framer-motion";
import beachSunsetImg from "@/assets/beach-sunset.png";
import cozyHomeImg from "@/assets/cozy-home.png";
export const WhyAgingSection = () => {
  return <section id="why-aging" className="py-16 bg-secondary/50 relative section-elegant">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <motion.h2 className="section-title text-center mb-6 font-sans font-bold text-3xl" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true,
        margin: "-100px"
      }}>
          Why Target Aging?
        </motion.h2>
        
        <div className="space-y-12">
          {/* First row: Image left, text right */}
          <motion.div className="grid md:grid-cols-2 gap-8 items-center" initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true,
          margin: "-100px"
        }}>
            <div className="aspect-square overflow-hidden rounded-full">
              <img src={beachSunsetImg} alt="Active aging - woman walking on beach at sunset" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base text-justify">
                Over the past two centuries, life expectancy in Western countries has drastically increased, 
                with projections indicating that more than one-fifth of the global population will be older 
                than 60 years by the year 2050.
              </p>
              
              {/* +41 years stat */}
              <motion.div className="text-center" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true,
              margin: "-50px"
            }}>
                <span className="text-3xl font-bold">+41 years</span>
                <p className="text-muted-foreground">of life expectancy gained since 1900. However...</p>
              </motion.div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div className="card-glow p-4 text-center" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} viewport={{
                once: true,
                margin: "-50px"
              }}>
                  <span className="text-xl font-bold text-gradient block mb-2">50% of spending</span>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Age-related care will consume half of all healthcare budgets by 2030.
                  </p>
                </motion.div>
                <motion.div className="card-glow p-4 text-center" initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} viewport={{
                once: true,
                margin: "-50px"
              }}>
                  <span className="text-xl font-bold text-gradient block mb-2">93% prevalence</span>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Nearly all seniors live with at least one chronic disease.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Second row: Text left, image right */}
          <motion.div className="grid md:grid-cols-2 gap-8 items-center" initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true,
          margin: "-100px"
        }}>
            <div className="space-y-4 order-2 md:order-1">
              <p className="text-muted-foreground leading-relaxed text-base text-justify">
                Accordingly, aging is the primary risk factor for most chronic 
                diseases in humans, from cancer to Alzheimer's.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base text-justify">
                Without addressing the root cause, aging, treating one disease only delays the onset of another. By extending healthspan, we can reduce disease burden, improve quality of life, and boost economic value across society.
              </p>
            </div>
            <div className="aspect-square overflow-hidden rounded-full order-1 md:order-2">
              <img src={cozyHomeImg} alt="Quality of life - man relaxing at home with pets" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>

          {/* Third row: Image left, text right - Pets paragraph */}
          <motion.div className="grid md:grid-cols-2 gap-8 items-center" initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true,
          margin: "-100px"
        }}>
            <div className="aspect-square overflow-hidden rounded-full">
              <img alt="Horse, dog and cat walking together in autumn forest" className="w-full h-full object-cover object-center" src="/lovable-uploads/3bf01ec4-f0f1-4667-b0e6-862b4911391a.png" />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base text-justify">Companion animals are the heartbeat of the home, providing a profound emotional stability that science shows directly fosters our own healthy aging. They act as "biological anchors," lowering our stress and keeping us active, making their vitality essential to the well-being of the entire household. We focus on pet longevity as an act of devotion, seeking to redeem the years of unconditional love they give us. By extending their healthspan, we protect the bond of love that sustains us, ensuring our most faithful companions stay by our side for as long as possible.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
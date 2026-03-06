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
              <p className="text-muted-foreground leading-relaxed text-base text-justify">Veterinary medicine has successfully extended the lives of our companions, but we have yet to master the quality of those extra years.

            </p>
              
              {/* +5 Golden Years stat */}
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
                <span className="font-bold text-primary text-xl">+5 Golden Years</span>
                <p className="text-muted-foreground">Since 1980, breakthroughs in nutrition and immunology have pushed average canine lifespans to 12 years and feline survival past 15. We have delayed death, but invited a silent epidemic of aging.</p>
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
                  <span className="text-xl font-bold text-primary block mb-2">The Senior Majority (52%)</span>
                  <p className="text-muted-foreground leading-relaxed text-sm">For the first time, over half of pet parents are now caregivers to senior companions, a 20% surge in just one decade.

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
                  <span className="text-xl font-bold text-primary block mb-2">The Cost of Survival

                </span>
                  <p className="text-muted-foreground leading-relaxed text-sm">Nearly 9 out of 10 seniors battle a trio of burdens: the erosion of joints, the fading of kidneys, and the darkening of the mind.

                </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Second row: Text left, image right */}
          <motion.div className="grid md:grid-cols-2 gap-8 items-center" initial={{ opacity: 0, x: 40
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
              <p className="text-muted-foreground leading-relaxed text-base text-justify">Aging remains the #1 risk factor for every heartbreak we face. Treating symptoms is merely patchwork. By targeting aging at its cellular root, we don't just add years to the clock, we extend the healthspan, ensuring those extra years are defined by vitality rather than suffering.

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
              <p className="text-muted-foreground leading-relaxed text-base text-justify">Companion animals are the heartbeat of the home, providing a profound emotional stability that science shows directly fosters our own healthy aging. They act as anchors, lowering our stress and keeping us active, making their vitality essential to the well-being of the entire household. We focus on pet longevity as an act of devotion, seeking to redeem the years of unconditional love they give us. By extending their healthspan, we protect the bond of love that sustains us, ensuring our most faithful companions stay by our side for as long as possible.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
export const LocationSection = () => {
  return <section id="location" className="py-12 bg-background">
      <div className="section-container">
        <motion.div className="text-center mb-8" initial={{
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
          <h2 className="section-title font-bold text-3xl">Location</h2>
          <p className="section-subtitle mx-auto flex items-center justify-center gap-2">
            <MapPin size={20} className="text-primary" />
            Proudly based in Lausanne, Switzerland
          </p>
        </motion.div>

        <motion.div className="max-w-2xl mx-auto" initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true,
        margin: "-100px"
      }}>
          <img alt="Map of Europe highlighting Switzerland" className="w-full" src="/lovable-uploads/24d59a3b-9b85-4278-a3b0-753e4cfbc7df.jpg" />
        </motion.div>

        <motion.p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto text-base" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} viewport={{
        once: true,
        margin: "-50px"
      }}>
          Switzerland consistently ranks as the world's #1 most innovative country for over a decade, while Lausanne is a vibrant hub for innovation and biotechnology, home to world-renowned institutions like EPFL and numerous leading biotech companies.
        </motion.p>
      </div>
    </section>;
};
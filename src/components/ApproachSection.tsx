import { FlaskConical, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [{
  icon: FlaskConical,
  title: "Chemical Reprogramming",
  description: "Our technology resets cellular aging markers, enabling safe, scalable and cost-effective rejuvenation."
}, {
  icon: Target,
  title: "Root Cause Approach",
  description: "We go beyond traditional drug development by addressing all aging pathways at once."
}, {
  icon: Rocket,
  title: "First-in-Class Platform",
  description: "We develop the first chemical reprogramming platform to reverse aging, not just delay it."
}];

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-16 relative section-elegant">
      <div className="section-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title text-3xl font-sans font-bold">Our Approach</h2>
          <p className="section-subtitle mx-auto text-base">
            We have developed a novel technology to reprogram cells and erase their aging markers using small molecules only.          
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="card-glow p-8 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-muted-foreground max-w-3xl mx-auto mt-12 leading-relaxed text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          With a <Link to="/team" className="text-primary underline underline-offset-2 decoration-primary/50 hover:decoration-primary transition-colors">strong scientific foundation, biotech business expertise, and a clear roadmap</Link>, 
          we are pioneering a new class of reprogramming therapeutics to target aging at its root.
        </motion.p>
      </div>
    </section>
  );
};

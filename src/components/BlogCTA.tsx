import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogCTA = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-primary/3 pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            We write about the science behind our work — from cellular reprogramming to companion animal aging. Dive into the research that drives us.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Explore our blog
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoBlack from "@/assets/logo_black.png";
const missionItems = [
  {
    title: "Who We Are",
    description:
      "We are a dedicated team of scientists and entrepreneurs united by a bold vision: to fundamentally change how we age. Using cutting-edge chemical reprogramming, we're developing therapies that target the mechanistic drivers of aging in both humans and pets.",
    link: "/team",
  },
  {
    title: "Our Commitment",
    description:
      "We are committed to creating a world where healthy years are extended far beyond what's currently possible. We believe everyone deserves to live a long, vibrant, and fulfilling life, free from the limitations of age-related chronic diseases.",
  },
  {
    title: "How We Operate",
    description:
      "Our team leverages deep expertise in cellular reprogramming to a high-efficiency testing platform to identify and develop realistic healthspan extending treatments.",
  },
];
export const MissionStatement = () => {
  return (
    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Hero area - Logo left, Text right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          {/* Logo on the left */}
          <motion.div
            className="flex-shrink-0"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <img
              alt="Rever"
              className="h-32 lg:h-48 xl:h-56 drop-shadow-sm"
              src="/lovable-uploads/83aa1376-c270-443e-a8d5-d49ce3f1ec2e.png"
            />
          </motion.div>

          {/* Text on the right */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight font-sans">
              Reversing Aging Through Chemical Precision.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-sans text-justify">
              <b>rever</b> is a biotechnology company developing the next generation of rejuvenation therapies. By
              pioneering small-molecule chemical reprogramming, we are targeting the root causes of biological decline
              to radically extend the healthspan of humans and their companions.
            </p>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center font-sans">
            Mission Statement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center md:text-left"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
              >
                {"link" in item && item.link ? (
                  <Link
                    to={item.link}
                    className="font-display font-semibold text-primary mb-3 block hover:underline text-xl text-center"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <h3 className="font-display font-semibold text-primary mb-3 text-xl text-center">{item.title}</h3>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

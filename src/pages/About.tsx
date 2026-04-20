import { Header } from "@/components/Header";
import { WhyAgingSection } from "@/components/WhyAgingSection";
import { ApproachSection } from "@/components/ApproachSection";
import { MissionStatement } from "@/components/MissionStatement";
import { LocationSection } from "@/components/LocationSection";
import { BlogCTA } from "@/components/BlogCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Rever — Cellular Reprogramming to Reverse Pet Aging"
        description="Swiss biotech pioneering small-molecule cellular reprogramming to reverse aging in companion animals and extend healthy years."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rever",
          url: "https://reveraging.com",
          description:
            "Swiss biotechnology company developing small-molecule cellular reprogramming therapies to reverse aging in companion animals.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lausanne",
            addressCountry: "CH",
          },
        }}
      />
      <Header />
      <main>
        <MissionStatement />
        <WhyAgingSection />
        <ApproachSection />
        <BlogCTA />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;

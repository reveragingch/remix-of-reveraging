import { Header } from "@/components/Header";
import { WhyAgingSection } from "@/components/WhyAgingSection";
import { ApproachSection } from "@/components/ApproachSection";
import { MissionStatement } from "@/components/MissionStatement";
import { LocationSection } from "@/components/LocationSection";
import { BlogCTA } from "@/components/BlogCTA";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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

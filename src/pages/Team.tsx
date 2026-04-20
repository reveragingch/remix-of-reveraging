import { Header } from "@/components/Header";
import { TeamSection } from "@/components/TeamSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PresenceSection } from "@/components/PresenceSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Team & Research — Rever"
        description="Meet the longevity scientists and entrepreneurs at Rever advancing cellular reprogramming research for pet healthspan."
        canonical="/team"
      />
      <Header />
      <main>
        <TeamSection />
        <ResearchSection />
        <PresenceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Team;

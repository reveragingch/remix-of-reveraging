import { Header } from "@/components/Header";
import { TeamSection } from "@/components/TeamSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PresenceSection } from "@/components/PresenceSection";
import { Footer } from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
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

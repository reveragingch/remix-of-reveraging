import { useState } from "react";
import { Linkedin, Globe, ChevronDown } from "lucide-react";
import lucasImg from "@/assets/Lucas.jpg";
import theoImg from "@/assets/Theo.jpg";
import parrasImg from "@/assets/Parras.jpg";
import snyderImg from "@/assets/Snyder.jpg";
import antebiImg from "@/assets/Antebi.jpg";
import vilchezImg from "@/assets/Vilchez.jpg";
import soumyaImg from "@/assets/Soumya.png";
const teamMembers = [{
  image: lucasImg,
  name: "Lucas Schoenfeldt, Ph.D",
  role: "CEO, Co-founder",
  bio: "Lucas holds a PhD in aging and reprogramming. He is an expert in reprogramming, C. elegans, killifish, and mouse experimentation. He has published high-impact work on chemical reprogramming and longevity.",
  linkedin: "https://www.linkedin.com/in/lucas-schoenfeldt-53681913a"
}, {
  image: theoImg,
  name: "Théo Aspert, Ph.D",
  role: "CSO, Co-founder",
  bio: "Théo holds a PhD in aging and is a researcher at EPFL. He is an expert in human cell biology, bioengineering, and automation. He has 9 years of research experience and 2 years in biotech and aging startups.",
  linkedin: "https://www.linkedin.com/in/theoaspert"
}, {
  image: parrasImg,
  name: "Alberto Parras, Ph.D",
  role: "Strategic partner",
  bio: "Alberto is the Founder & CEO of VivoArchitect, an aging preclinical CRO. He is a serial entrepreneur with extensive experience in in vivo reprogramming and drug discovery.",
  linkedin: "https://www.linkedin.com/in/alberto-parras-ph-d-a11940175/",
  website: "https://www.vivoarchitect.ch/"
}];
const advisors = [{
  image: snyderImg,
  name: "Michael Snyder, PhD",
  affiliation: "Stanford University",
  bio: "Chair of Genetics & Director of Personalized Medicine. Leader in aging biomarkers, multi-omics, and personalized health with over 800 publications.",
  linkedin: "https://www.linkedin.com/in/mpsnyder1/"
}, {
  image: antebiImg,
  name: "Adam Antebi, PhD",
  affiliation: "Max Planck Institute",
  bio: "Director of the Max Planck Institute for Biology of Ageing. Pioneer in the molecular genetics of aging and longevity across species.",
  website: "https://www.mpg.de/365410/biology-of-ageing-antebi"
}, {
  image: vilchezImg,
  name: "David Vilchez, PhD",
  affiliation: "University of Cologne",
  bio: "Professor at CECAD & Institute for Genetics. Leader in aging and proteostasis research, ERC & Marie Curie grantee.",
  linkedin: "https://www.linkedin.com/in/david-vilchez-402a8b25/"
}, {
  image: soumyaImg,
  name: "Soumya Banerjee, PhD",
  affiliation: "CEO & Co-founder of Juvion",
  bio: "PhD in aging and neurodegeneration. Juvion Health Science advances next-generation therapeutics to prevent age-related neuromuscular diseases.",
  linkedin: "https://www.linkedin.com/in/soumya-banerjee83/",
  website: "https://juvionls.com/"
}];
interface PersonCardProps {
  image: string;
  name: string;
  role?: string;
  affiliation?: string;
  bio: string;
  linkedin?: string;
  website?: string;
  isExpanded: boolean;
  onToggle: () => void;
}
const PersonCard = ({
  image,
  name,
  role,
  affiliation,
  bio,
  linkedin,
  website,
  isExpanded,
  onToggle
}: PersonCardProps) => {
  return <div className="group self-start card-glow overflow-hidden cursor-pointer" onClick={onToggle}>
      <div className="p-4">
        <div className="w-full aspect-square rounded-xl overflow-hidden bg-muted mb-4">
          <img src={image} alt={name} className="w-full h-full object-cover saturate-75 group-hover:saturate-100 transition-all duration-500 group-hover:scale-105" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground text-base">{name}</h4>
            <p className="text-primary font-medium text-sm">{role || affiliation}</p>
          </div>
          <ChevronDown size={20} className={`text-muted-foreground transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-0">
          <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
          <div className="flex gap-3 mt-3" onClick={e => e.stopPropagation()}>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${name}'s LinkedIn`}>
                <Linkedin size={18} />
              </a>}
            {website && <a href={website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${name}'s website`}>
                <Globe size={18} />
              </a>}
          </div>
        </div>
      </div>
    </div>;
};
export const TeamSection = () => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const handleToggle = (name: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };
  return <section id="team" className="pt-32 pb-16 lg:pt-40 section-elegant">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title text-2xl">The Team</h2>
          <p className="section-subtitle mx-auto">
            World-class scientists and entrepreneurs dedicated to reversing aging
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {teamMembers.map(member => <PersonCard key={member.name} {...member} isExpanded={expandedCards.has(member.name)} onToggle={() => handleToggle(member.name)} />)}
        </div>

        <div className="text-center mb-10">
          <h3 className="font-semibold text-foreground text-xl">Advisory Board</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map(advisor => <PersonCard key={advisor.name} {...advisor} isExpanded={expandedCards.has(advisor.name)} onToggle={() => handleToggle(advisor.name)} />)}
        </div>
      </div>
    </section>;
};
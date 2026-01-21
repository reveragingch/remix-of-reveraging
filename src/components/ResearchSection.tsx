import { useState } from "react";
import schoenImg from "@/assets/schoen.jpg";
import parrasImg from "@/assets/parrasetal.jpg";
import phelpsImg from "@/assets/phelpsetal.jpg";
import picoImg from "@/assets/picoetal.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
interface Publication {
  image: string;
  author: string;
  journal: string;
  abstract: string;
  doi: string;
  published: string;
}
const publications: Publication[] = [{
  image: schoenImg,
  author: "Schoenfeldt et al.",
  journal: "EMBO Molecular Medicine",
  abstract: "The dedifferentiation of somatic cells into a pluripotent state by cellular reprogramming coincides with a reversal of age-associated molecular hallmarks. Although transcription factor induced cellular reprogramming has been shown to ameliorate these aging phenotypes in human cells and extend health and lifespan in mice, translational applications of this approach are still limited. More recently, chemical reprogramming via small molecule cocktails have demonstrated a similar ability to induce pluripotency in vitro, however, its potential impact on aging is unknown. Here, we demonstrated that chemical-induced partial reprogramming can improve key drivers of aging including genomic instability and epigenetic alterations in aged human cells. Moreover, we identified an optimized combination of two reprogramming molecules sufficient to induce the amelioration of additional aging phenotypes including cellular senescence and oxidative stress. Importantly, in vivo application of this two-chemical combination significantly extended C. elegans lifespan and healthspan. Together, these data demonstrate that improvement of key drivers of aging and lifespan extension is possible via chemical-induced partial reprogramming, opening a path towards future translational applications.",
  doi: "https://doi.org/10.1038/s44321-025-00265-9",
  published: "June 30, 2025"
}, {
  image: parrasImg,
  author: "Parras et al.",
  journal: "Nature Aging",
  abstract: "The induction of cellular reprogramming via expression of the transcription factors Oct4, Sox2, Klf4 and c‐Myc (OSKM) can drive dedifferentiation of somatic cells and ameliorate age-associated phenotypes in multiple tissues and organs. However, the benefits of long-term in vivo reprogramming are limited by detrimental side‐effects. Here, using complementary genetic approaches, we demonstrated that continuous induction of the reprogramming factors in vivo leads to hepatic and intestinal dysfunction resulting in decreased body weight and contributing to premature death (within 1 week). By generating a transgenic reprogrammable mouse strain, avoiding OSKM expression in both liver and intestine, we reduced the early lethality and adverse effects associated with in vivo reprogramming and induced a decrease in organismal biological age. This reprogramming mouse strain, which allows longer-term continuous induction of OSKM with attenuated toxicity, can help better understand rejuvenation, regeneration and toxicity during in vivo reprogramming.",
  doi: "https://www.nature.com/articles/s43587-023-00528-5",
  published: "November 27, 2023"
}, {
  image: phelpsImg,
  author: "Phelps et al.",
  journal: "Aging Cell",
  abstract: "The nematode C. elegans has long served as a gold-standard model organism in aging research, particularly since the discovery of long-lived mutants in conserved aging pathways including daf-2 (IGF1) and age-1 (PI3K). Its short lifespan and small size make it highly suitable for high-throughput experiments. While numerous molecules have been tested for their effects on C. elegans lifespan, consensus is still lacking regarding the most effective and reproducible compounds. Confounding effects, especially those related to drug-bacteria interactions, remain a contentious issue in the literature. In this study, we evaluated 16 of the most frequently reported lifespan-extending molecules in C. elegans, examining their effects on lifespan with two different diets (live and UV-killed OP50). In addition, we assessed the compounds' impact on bacterial growth, their effects on various nematode strains, and the impact of the starting age of treatment. Our findings first confirmed robust lifespan extension by many, but not all, of the 16 tested compounds from the literature, and revealed that some of them could be combined to obtain additive effects. Additionally, we showed that some of these compounds also extend lifespan in the fly D. melanogaster, demonstrating a conserved effect across species. Finally, by expanding our screen to a broader pool of molecules, we identified novel lifespan-extending compounds in C. elegans.",
  doi: "https://doi.org/10.1111/acel.14424",
  published: "January 24, 2025"
}, {
  image: picoImg,
  author: "Pico et al.",
  journal: "Cell Reports",
  abstract: "In vivo reprogramming through the forced expression of Oct4, Sox2, Klf4, and c-Myc (OSKM) has demonstrated great potential for reversing age-associated phenotypes, as the combination of these transcription factors actively promote cell regeneration and rejuvenation in various tissues and organs. However, continuous in vivo OSKM expression raised safety concerns due to loss of cell identity, decrease in body weight, and premature death. Although cyclic short-term or targeted expression of the reprogramming factors can mitigate some of these detrimental effects in mice, systemic rejuvenation of wild type mice has remained elusive potentially due to these current technical limitations. To improve the fundamental understanding of in vivo reprogramming, we conducted a comparative analysis across multiple reprogrammable mouse strains, tissues, and expression methods, presenting a comprehensive atlas of formerly established strains. In addition, we developed novel reprogrammable mouse strains by avoiding OSKM expression in specific organs, in dividing cells, or implementing chimeric expression approaches within specific cells, thereby offering safer strategies to induce in vivo reprogramming and fully harness its potential. We hope that these new tools will become valuable resources for future research in this very exciting field of research with potential implications to human health.",
  doi: "https://doi.org/10.1101/2024.03.08.584074",
  published: "March 8, 2024"
}];
export const ResearchSection = () => {
  const [selectedPaper, setSelectedPaper] = useState<Publication | null>(null);
  return <section id="research" className="py-12 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="section-title text-2xl">Our Expertise in Reprogramming</h2>
          <p className="section-subtitle mx-auto">
            Our team has published groundbreaking research in leading scientific journals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {publications.map(pub => <div key={pub.author} onClick={() => setSelectedPaper(pub)} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-border">
              <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center">
                <img src={pub.image} alt={pub.author} className="w-full h-full object-contain" />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-foreground">{pub.author}</h4>
                <p className="text-sm text-primary font-medium mt-1">{pub.journal}</p>
              </div>
            </div>)}
        </div>
      </div>

      <Dialog open={!!selectedPaper} onOpenChange={() => setSelectedPaper(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedPaper?.author}</DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-primary font-medium">
              {selectedPaper?.journal} • {selectedPaper?.published}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Abstract</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedPaper?.abstract}
              </p>
            </div>
            <Button asChild className="w-full">
              <a href={selectedPaper?.doi} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Paper
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
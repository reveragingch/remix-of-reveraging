import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import partialReprogImg from "@/assets/partial_reprog.png";
import petsAutumnImg from "@/assets/pets-autumn.png";
import petAgingSignsImg from "@/assets/pet-aging-signs.png";
import schoenImg from "@/assets/schoen.jpg";
import parrasImg from "@/assets/parrasetal.jpg";

const articles = [
  {
    slug: "chemical-reprogramming-schoenfeldt-2025",
    title: "Chemical reprogramming for aging: towards an optimized cocktail (Schoenfeldt et al., 2025)",
    date: "14.02.2026",
    category: "In Depth",
    excerpt:
      "This first description of chemical partial reprogramming opens a path towards future translational applications while avoiding the hurdles of gene therapy. For rever, this is the foundation: build around chemical reprogramming as a new class of anti-aging therapeutics.",
    inDepth: true,
  },
  {
    slug: "reprogramming-done-the-right-way",
    title: "Reprogramming done the right way",
    date: "31.01.2026",
    category: "Science",
    excerpt:
      "Full reprogramming turns an adult cell back into a stem-cell-like state. Partial reprogramming aims for the sweet spot, resetting age-associated features in a cell while keeping the cell what it is.",
  },
  {
    slug: "how-studying-cats-and-dogs-could-shed-light-on-human-aging",
    title: "How studying cats and dogs could shed light on human aging",
    date: "17.01.2026",
    category: "Human Aging",
    excerpt:
      "Cats and dogs do not age in controlled laboratory environments. They age in homes, with real diets, real stress, real infections, real routines, and real love. That makes their aging deeply relatable, but also scientifically valuable.",
  },
  {
    slug: "chemical-reprogramming-making-rejuvenation-druggable",
    title: "Chemical reprogramming: making rejuvenation druggable",
    date: "03.01.2026",
    category: "Science",
    excerpt:
      "Aging is still the biggest driver of chronic disease risk, frailty, and loss of independence. The reason reprogramming created so much excitement is simple: it suggests that cellular age is not irreparable damage accumulation.",
    thumbnail: partialReprogImg,
  },
  {
    slug: "companion-animals-longevity-that-matters-at-home",
    title: "Companion animals: longevity that matters at home",
    date: "20.12.2025",
    category: "Pet Aging",
    excerpt:
      "Dogs and cats are family. They shape our routines, fill our homes with presence, and give a kind of loyalty that is hard to put into words. Extending pet healthspan is not a luxury idea; it is a deeply practical goal for millions of families.",
    thumbnail: petsAutumnImg,
  },
  {
    slug: "aging-is-the-shared-root-cause",
    title: "Aging is the shared root cause, and why lifespan and healthspan both matter",
    date: "06.12.2025",
    category: "Science",
    excerpt:
      "Modern medicine has extended lifespan dramatically, which is a success story. The new challenge is that longer lives can come with more years lived with chronic disease, frailty, and loss of independence.",
    thumbnail: "/lovable-uploads/8e9a504f-8cb8-4256-8d61-d35d760f5d30.png",
  },
  {
    slug: "how-to-recognize-good-aging-in-a-pet",
    title: "How to recognize good aging in a pet",
    date: "22.11.2025",
    category: "Pet Aging",
    excerpt:
      "Good aging is less about the number of birthdays and more about daily function: how easily your pet moves, eats, plays, sleeps, and recovers. The most useful mindset is to watch for small, sustained shifts rather than one bad day.",
    thumbnail: petAgingSignsImg,
  },
  {
    slug: "partial-reprogramming-ocampo-2016",
    title: "Partial reprogramming: the safety switch that made rejuvenation plausible (Ocampo et al. 2016)",
    date: "13.11.2025",
    category: "In Depth",
    excerpt:
      "The key conceptual leap behind partial reprogramming is that there is an intermediary state of interest before reaching full pluripotency. The \"reset without erasure\" idea is what opened the door to rejuvenation as a therapeutic direction for aging.",
    inDepth: true,
  },
  {
    slug: "reversing-aging-isnt-magic-its-biology",
    title: "Reversing aging isn't magic, it's biology",
    date: "08.11.2025",
    category: "Science",
    excerpt:
      "\"Reversing aging\" can sound like science fiction, and the longevity space has earned some of that skepticism. The responsible way to talk about it is not as immortality or a fountain of youth, but as a measurable shift in biological state.",
  },
];

const Blog = () => {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());
  const [showInDepth, setShowInDepth] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(
      articles.filter((a) => !a.inDepth).map((a) => a.category)
    );
    return Array.from(cats);
  }, []);

  const toggleCategory = (category: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const filteredArticles = useMemo(() => {
    let result = articles.filter((a) => {
      if (a.inDepth) return showInDepth;
      return true;
    });
    if (activeCategories.size > 0) {
      result = result.filter((a) => activeCategories.has(a.category));
    }
    return result;
  }, [activeCategories, showInDepth]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategories.has(category) ? "default" : "outline"}
                className="cursor-pointer select-none transition-colors"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </Badge>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <Switch
                id="in-depth-toggle"
                checked={showInDepth}
                onCheckedChange={setShowInDepth}
              />
              <Label htmlFor="in-depth-toggle" className="cursor-pointer text-sm font-medium select-none">
                In Depth
              </Label>
            </div>
          </div>
          <div className="space-y-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Read more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                {article.thumbnail && (
                  <div className="md:w-48 lg:w-56 flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={article.thumbnail} 
                      alt={article.title} 
                      className="w-full h-40 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

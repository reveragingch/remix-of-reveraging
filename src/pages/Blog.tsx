import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import partialReprogImg from "@/assets/partial_reprog.png";
import petsAutumnImg from "@/assets/pets-autumn.png";
import petAgingSignsImg from "@/assets/pet-aging-signs.png";

const articles = [
  {
    slug: "reprogramming-done-the-right-way",
    title: "Reprogramming done the right way",
    date: "16.01.2026",
    category: "Science",
    excerpt:
      "Full reprogramming turns an adult cell back into a stem-cell-like state. Partial reprogramming aims for the sweet spot, resetting age-associated features in a cell while keeping the cell what it is.",
  },
  {
    slug: "how-studying-cats-and-dogs-could-shed-light-on-human-aging",
    title: "How studying cats and dogs could shed light on human aging",
    date: "16.01.2026",
    category: "Human aging",
    excerpt:
      "Cats and dogs do not age in controlled laboratory environments. They age in homes, with real diets, real stress, real infections, real routines, and real love. That makes their aging deeply relatable, but also scientifically valuable.",
  },
  {
    slug: "chemical-reprogramming-making-rejuvenation-druggable",
    title: "Chemical reprogramming: making rejuvenation druggable",
    date: "14.01.2026",
    category: "Science",
    excerpt:
      "Aging is still the biggest driver of chronic disease risk, frailty, and loss of independence. The reason reprogramming created so much excitement is simple: it suggests that cellular age is not irreparable damage accumulation.",
    thumbnail: partialReprogImg,
  },
  {
    slug: "companion-animals-longevity-that-matters-at-home",
    title: "Companion animals: longevity that matters at home",
    date: "18.12.2025",
    category: "Pet Aging",
    excerpt:
      "Dogs and cats are family. They shape our routines, fill our homes with presence, and give a kind of loyalty that is hard to put into words. Extending pet healthspan is not a luxury idea; it is a deeply practical goal for millions of families.",
    thumbnail: petsAutumnImg,
  },
  {
    slug: "aging-is-the-shared-root-cause",
    title: "Aging is the shared root cause, and why lifespan and healthspan both matter",
    date: "07.12.2025",
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
    slug: "reversing-aging-isnt-magic-its-biology",
    title: "Reversing aging isn't magic, it's biology",
    date: "08.11.2025",
    category: "Science",
    excerpt:
      "\"Reversing aging\" can sound like science fiction, and the longevity space has earned some of that skepticism. The responsible way to talk about it is not as immortality or a fountain of youth, but as a measurable shift in biological state.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Blog
          </h1>
          <div className="space-y-8">
            {articles.map((article) => (
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

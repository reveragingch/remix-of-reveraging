import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import diseaseIncidenceChart from "@/assets/disease-incidence-chart.png";
import agingImg from "@/assets/aging.png";
import partialReprogImg from "@/assets/partial_reprog.png";
import petsAutumnImg from "@/assets/pets-autumn.png";
import petAgingSignsImg from "@/assets/pet-aging-signs.png";
const glossary = {
  cellularAge: {
    term: "Cellular age",
    definition: "The biological \"state\" of a cell, reflected by gene expression and epigenetic patterns. It is measurable with biomarkers (e.g., methylation clocks) and has been shown to be at least partially reversible, not fixed in time."
  },
  rejuvenation: {
    term: "Rejuvenation",
    definition: "A shift of cells or tissues toward a younger functional and molecular state. In practice, it means improved function plus concordant changes in biomarkers, not just one marker moving."
  },
  epigeneticReprogramming: {
    term: "Epigenetic reprogramming",
    definition: "Resetting the regulatory layer that controls which genes are on or off. Partial reprogramming aims to restore youthful regulation while keeping cell identity intact."
  },
  cellIdentity: {
    term: "Cell identity",
    definition: "What makes a cell a muscle cell, neuron, skin cell, etc. The goal of partial reprogramming is to rejuvenate cells without pushing them back into a stem-cell-like state, keeping a cell a muscle cell, neuron, skin cell, etc."
  },
  chemicalReprogramming: {
    term: "Chemical reprogramming",
    definition: "Using small molecules, rather than gene delivery, to induce partial reprogramming rejuvenation. The advantage is drug-like control of dose, timing, reversibility, safety, and scalability."
  },
  synergy: {
    term: "Synergy",
    definition: "When two compounds together produce an effect that neither produces alone (or far smaller). In reprogramming, synergy is often the difference between marginal and meaningful rejuvenation."
  },
  regimen: {
    term: "Regimen",
    definition: "The timing and pattern of dosing (e.g., cyclic or intermittent vs continuous). In reprogramming, regimen can be as important as the compounds themselves for efficacy and safety."
  },
  agingHallmarks: {
    term: "Aging hallmarks",
    definition: "A set of biological processes that change with age (e.g., genomic instability, senescence, mitochondrial dysfunction). A key promise of reprogramming is that it can shift all the hallmarks at once."
  },
  methylationClock: {
    term: "Methylation clock",
    definition: "A quantitative readout built from DNA methylation patterns that correlates with biological age. It is widely used to track whether an intervention moves biology in a younger direction."
  },
  translation: {
    term: "Translation",
    definition: "The path from promising lab results to real-world therapies. For us, it means drug-like delivery, repeatable dosing, safety, and clear functional endpoints in relevant animal models and, later, humans and companion animals."
  },
  healthspan: {
    term: "Healthspan",
    definition: "The years of life spent in good health, with preserved strength, mobility, cognition, and independence, not just years lived."
  },
  lifespan: {
    term: "Lifespan",
    definition: "Total length of life. In longevity work, it is often tracked alongside healthspan to see whether extra years are also better years."
  },
  cellState: {
    term: "Cell state",
    definition: "The functional and molecular \"configuration\" of a cell, shaped by gene expression and regulation. Aging can be viewed as gradual drift in cell state over time."
  },
  biomarkersOfAging: {
    term: "Biomarkers of aging",
    definition: "Quantitative measurements that correlate with biological age or aging processes, used to track whether an intervention shifts biology in a younger direction."
  },
  biologicalAge: {
    term: "Biological age",
    definition: "An estimate of how \"old\" the body's biology is compared to chronological age. It can differ between individuals, or even between tissues, and can sometimes be shifted by interventions."
  },
  reprogrammingStrategies: {
    term: "Reprogramming-based strategies",
    definition: "Approaches that aim to reset aging-associated regulation in cells toward a younger pattern, ideally without changing cell identity."
  },
  concordance: {
    term: "Concordance",
    definition: "When functional outcomes and biomarkers move together, strengthening credibility."
  }
};
const articles: Record<string, {
  title: string;
  date: string;
  heroImage?: string;
  content: React.ReactNode;
}> = {
  "chemical-reprogramming-making-rejuvenation-druggable": {
    date: "14.01.2026",
    title: "Chemical reprogramming: making rejuvenation druggable",
    content: <>
        <div className="my-8">
          <img alt="Partial reprogramming using drugs" className="w-full max-w-2xl mx-auto rounded-lg" src="/lovable-uploads/c5679c3c-f1c4-4e00-89b2-1f9880e536a0.png" />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why we started looking upstream
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Aging is still the biggest driver of chronic disease risk, frailty, and loss of independence. What makes it hard to treat is that it is not a single pathway problem, it is a system-wide shift in <GlossaryTerm {...glossary.cellState}>cell state</GlossaryTerm> over time. The reason reprogramming created so much excitement is simple: it suggests that "<GlossaryTerm {...glossary.cellularAge}>cellular age</GlossaryTerm>" is not irreparable damage accumulation, it is also, at least in part, a reversible biological target.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            What reprogramming taught the aging space
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Classical cellular reprogramming started with genetic factors that can reset cell state, and partial reprogramming emerged as a way to capture <GlossaryTerm {...glossary.rejuvenation}>rejuvenation</GlossaryTerm> without erasing identity. The challenge is that gene delivery brings real <GlossaryTerm {...glossary.translation}>translational</GlossaryTerm> hurdles, including safety, control, and scalability. That is why many research have been motivated to find non-genetic ways to achieve reprogramming-like outcomes using alternatives. In this aging context, we were the first to demonstrate druggable small molecules as a viable path, where dose and timing can be tuned like standard therapeutics.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why small molecules are the turning point
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            <GlossaryTerm {...glossary.chemicalReprogramming}>Chemical reprogramming</GlossaryTerm> is the direct answer to that problem: using small molecules to induce a controlled, partial reset of aging features while keeping the cell what it is. In our work, partial chemical reprogramming shifted multiple molecular readouts in a younger direction, including epigenetic and transcriptomic age signals, and showed broad rejuvenation-associated changes rather than a single-biomarker effect.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            What makes this a new class of anti-aging drugs with a big vision
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The key takeaway, and the reason we believe this becomes a new class of anti-aging drugs, is that reprogramming is not "just another screen for marginal effects." It is an upstream control mechanism that can move many <GlossaryTerm {...glossary.agingHallmarks}>aging hallmarks</GlossaryTerm> at once, and our data support that unlocking it requires <GlossaryTerm {...glossary.synergy}>synergy</GlossaryTerm> and <GlossaryTerm {...glossary.regimen}>regimen</GlossaryTerm>, not a single compound chosen in isolation. That combination-first logic is what makes chemical reprogramming uniquely positioned as a translational path to real rejuvenation outcomes.
          </p>
        </section>
      </>
  },
  "aging-is-the-shared-root-cause": {
    date: "07.12.2025",
    title: "Aging is the shared root cause, and why lifespan and healthspan both matter",
    content: <>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            The problem isn't that we live longer
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Modern medicine has extended <GlossaryTerm {...glossary.lifespan}>lifespan</GlossaryTerm> dramatically, which is a success story. The new challenge is that longer lives can come with more years lived with chronic disease, frailty, and loss of independence. That gap is why aging is no longer a background concept; it is becoming a central target in biomedical innovation.
          </p>
          <div className="my-8">
            <img src={diseaseIncidenceChart} alt="Incidence of deaths from chronic disease increases with age" className="w-full max-w-2xl mx-auto rounded-lg" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Aging is upstream of most disease
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Aging is the single biggest risk factor for chronic diseases in humans and pets, including cancer and neurodegeneration. At a biological level, it looks like a progressive decline in cellular and tissue integrity, driven by interacting processes often grouped as "<GlossaryTerm {...glossary.agingHallmarks}>hallmarks of aging</GlossaryTerm>." The reality is that treating one disease at a time will allow us to make progress, but we often keep chasing the next downstream consequence.
          </p>
          <div className="my-8">
            <img alt="Healthspan extension" className="w-full max-w-2xl mx-auto rounded-lg" src="/lovable-uploads/8e9a504f-8cb8-4256-8d61-d35d760f5d30.png" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            <GlossaryTerm {...glossary.healthspan}>Healthspan</GlossaryTerm> and <GlossaryTerm {...glossary.lifespan}>lifespan</GlossaryTerm>: two outcomes that should move together
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            In practice, we care about both. Extending <GlossaryTerm {...glossary.lifespan}>lifespan</GlossaryTerm> is valuable, and so is extending the proportion of life spent healthy, independent, and resilient. The strongest interventions should improve functional outcomes while also shifting <GlossaryTerm {...glossary.biomarkersOfAging}>biological readouts of aging</GlossaryTerm> in a consistent direction. This framing changes how we judge longevity approaches: we look for function, and we look for biomarkers that match it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why this moment feels different
          </h2>
          <p className="text-foreground/80 leading-relaxed">For decades, "treating aging" sounded out of reach because the tools were missing. Now, biomarkers and mechanistic insights are maturing, and interventions that act upstream are becoming an ongoing narrative. That is why new approaches, including reprogramming-based strategies, are gaining attention, because they are built around the idea that parts of cellular aging can be shifted toward a younger state, and that this shift can matter across tissues, across organs, and across species. <GlossaryTerm {...glossary.biomarkersOfAging}>Biomarkers</GlossaryTerm> and mechanistic insights are maturing, and interventions that act upstream are becoming an ongoing narrative. That is why new approaches, including <GlossaryTerm {...glossary.reprogrammingStrategies}>reprogramming-based strategies</GlossaryTerm>, are gaining attention, because they are built around the idea that parts of <GlossaryTerm {...glossary.cellularAge}>cellular aging</GlossaryTerm> can be shifted toward a younger state, and that this shift can matter across tissues, across organs, and across species.
          </p>
        </section>
      </>
  },
  "companion-animals-longevity-that-matters-at-home": {
    date: "18.12.2025",
    title: "Companion animals: longevity that matters at home",
    heroImage: petsAutumnImg,
    content: <>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Pets are not secondary in our homes
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Dogs and cats are family. They shape our routines, fill our homes with presence, and give a kind of loyalty that is hard to put into words. When they slow down, we feel it, not only because their bodies change, but because the rhythm of the household changes with them. Extending pet <GlossaryTerm {...glossary.healthspan}>healthspan</GlossaryTerm> is not a luxury idea; it is a deeply practical goal for millions of families.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Healthspan is the point, not "more time on paper"
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            What people want for their pets is simple: more good days. More walks that feel easy, more play, more appetite, more curiosity, less pain, less confusion, fewer emergency visits. <GlossaryTerm {...glossary.lifespan}>Lifespan</GlossaryTerm> matters, but only if those extra months or years are healthy and dignified. That is the heart of pet longevity: preserving vitality, not prolonging decline.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why pet longevity is a serious medical path
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Veterinary medicine has a unique advantage: you can measure meaningful outcomes in real life. Mobility, activity, recovery after injury, resilience after stress, and quality of life are not abstract biomarkers, they are visible, daily signals that owners recognize immediately. This makes companion animals a powerful way to build confidence in interventions that aim to improve aging biology, because the benefits are both measurable and felt.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why it matters personally
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Pets are the heartbeat of the home, providing emotional stability that science shows can lower stress and keep us active, both of which support healthier aging in people. They are biological anchors in our everyday life. Focusing on pet longevity is an act of devotion, a way to redeem the years of unconditional love they give us. And you can see that devotion in real life, including financially. People already treat pets as family in how they spend: the U.S. pet market is hundreds of billions in 2025, with nearly $100B going to veterinary care, and in Switzerland estimates are around CHF 1,250 per cat and CHF 2,000 per dog per year. If we can reduce the impact of aging, more of that spend can go toward good years, play, comfort, and adventures, not just managing decline.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            A final thought
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            When we talk about longevity, it is easy to make it abstract. Pets make it real. Their aging happens in front of us and it reminds us what "better aging" should look like: strength, comfort, and presence. If we can help our companions stay healthy for longer, we are not only improving their lives, we are strengthening the households they hold together.
          </p>
        </section>
      </>
  },
  "how-to-recognize-good-aging-in-a-pet": {
    date: "22.11.2025",
    title: "How to recognize good aging in a pet",
    heroImage: petAgingSignsImg,
    content: <>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Start with function, not the calendar
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Good aging is less about the number of birthdays and more about daily function: how easily your pet moves, eats, plays, sleeps, and recovers. The most useful mindset is to watch for small, sustained shifts rather than one bad day. When something changes for days or weeks, it is worth logging and bringing to your vet.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Mobility is the clearest early signal
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Subtle stiffness, slower stairs, reluctance to jump, or shorter walks often appear before obvious pain. That matters because osteoarthritis is common and frequently under-recognized. Depending on how it is measured, studies report large proportions of older dogs with osteoarthritis, including around 38 to 40 percent in some clinical and radiographic cohorts.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Body condition is an amplifier on aging
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Extra weight makes joints, metabolism, and inflammation harder to manage, even when everything else is stable. Large veterinary datasets report overweight or obese body condition in substantial fractions of pets, for example about 26 percent of dogs and 40 percent of cats in one multi-million record analysis, with prevalence rising across adulthood. A simple rule that helps is to track waistline and ribs monthly, not yearly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Energy, cognition, and kidney health
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            In older dogs, cognitive dysfunction is real and often underdiagnosed. In cats, chronic kidney disease becomes a major aging driver, with estimates around 20 to 50 percent in cats over 10 years depending on definitions and populations. If you notice changes in sleep-wake cycles, house soiling, drinking, appetite, or social engagement, pair your observations with routine checkups and basic bloodwork.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Aging is the root cause behind the pattern
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Most of the issues we notice in older pets are not random. They cluster because aging gradually shifts how cells repair damage, manage inflammation, maintain muscle, and keep organs resilient. That is why joint stiffness, weight sensitivity, slower recovery, cognitive changes, and kidney vulnerability often appear together with time. Thinking this way helps: you are not just tracking separate problems, you are watching a shared biological process unfold. It also explains why the best interventions aim to preserve function across systems, not only treat one symptom at a time.
          </p>
        </section>
      </>
  },
  "reversing-aging-isnt-magic-its-biology": {
    date: "08.11.2025",
    title: "Reversing aging isn't magic, it's biology",
    content: <>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why the phrase triggers skepticism
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            "Reversing aging" can sound like science fiction, and the longevity space has earned some of that skepticism. The responsible way to talk about it is not as immortality or a fountain of youth, but as a measurable shift in biological state. If we can define and quantify what "older" looks like in cells and tissues, we can also test whether an intervention moves those measures in a younger direction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            What "reversal" actually means in practice
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            In our context, reversal does not mean turning an adult back into a child. It means restoring aspects of youthful function and regulation while preserving <GlossaryTerm {...glossary.cellIdentity}>identity</GlossaryTerm>. The gold standard is <GlossaryTerm {...glossary.concordance}>concordance</GlossaryTerm>: functional improvements paired with molecular evidence, for example improved strength or resilience alongside changes in muscle <GlossaryTerm {...glossary.biomarkersOfAging}>aging biomarkers</GlossaryTerm> that move consistently the same way.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why this is now testable, not just theoretical
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            For a long time, aging was hard to study because it lacked clear, quantitative endpoints. That has changed. <GlossaryTerm {...glossary.biomarkersOfAging}>Biomarkers</GlossaryTerm> like <GlossaryTerm {...glossary.agingHallmarks}>hallmarks of aging</GlossaryTerm>, gene signatures, <GlossaryTerm {...glossary.methylationClock}>DNA methylation clocks</GlossaryTerm>, and standardized functional assays give us a common language to evaluate interventions. We are moving from storytelling to measurement, which is how credible therapeutics get built.
          </p>
        </section>
      </>
  },
  "reprogramming-done-the-right-way": {
    date: "16.01.2026",
    title: "Reprogramming done the right way",
    content: <>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Full vs partial: the core distinction
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Full reprogramming turns an adult cell back into a stem-cell-like state. It is powerful, but it comes with a fundamental tradeoff: the loss of <GlossaryTerm {...glossary.cellIdentity}>cell identity</GlossaryTerm>. Partial reprogramming aims for the sweet spot, resetting age-associated features in a cell while keeping the cell what it is, a muscle cell stays muscle, a neuron stays neuron. That idea, a controlled reset without erasing identity, is why reprogramming became one of the most exciting approaches in aging biology.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why partial reprogramming is the rejuvenation route
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Aging is not only wear and tear; it is also a drift in gene regulation and <GlossaryTerm {...glossary.cellState}>cell state</GlossaryTerm> over time. Partial reprogramming acts upstream of many aging pathways by shifting that regulatory state back toward a younger configuration. The goal is not to "start over," but to restore function and resilience while staying inside safe boundaries.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why genetic delivery is not an ideal long-term solution
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Most of the early breakthroughs used genetic factors delivered by viral vectors (you might know it as a form of gene therapy). It proved the biology, but <GlossaryTerm {...glossary.translation}>translation</GlossaryTerm> is hard: gene delivery is complex, difficult to titrate, and persistent, in most current cases, by design. That creates a narrow safety window, because too much reprogramming risks loss of identity, and too little does not move the needle. Manufacturing, delivery, repeat dosing, and broad systemic use also become major hurdles for real-world medicine.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Why we focus on chemical partial reprogramming
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            <GlossaryTerm {...glossary.chemicalReprogramming}>Chemical partial reprogramming</GlossaryTerm> takes the same core concept and makes it druggable. Small molecules can be modulated via dosage, they are transient and reversible, can be paused, and repeated like conventional therapeutics. This gives far better control over exposure and safety. It is also scalable and compatible with standard development pathways. That is the logic behind rever: keep what is most compelling about reprogramming, the ability to reset aging biology, while choosing the modality most likely to reach people and pets safely.
          </p>
        </section>
      </>
  },
  "how-studying-cats-and-dogs-could-shed-light-on-human-aging": {
    date: "16.01.2026",
    title: "How studying cats and dogs could shed light on human aging",
    content: <>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Pets age with us, in the same world we live in
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Cats and dogs do not age in controlled laboratory environments. They age in homes, with real diets, real stress, real infections, real routines, and real love. That makes their aging deeply relatable, but also scientifically valuable: it reflects and is affected by the reality of human aging happening around them. Because they share many of the same organs and physiological systems we do, their age-related changes often map onto questions we care about in human health.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            A shared biology, different timelines
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Many core features of aging are conserved across mammals: declining resilience, chronic inflammation, reduced repair capacity, and progressive loss of organ function. Often referred as <GlossaryTerm {...glossary.agingHallmarks}>aging hallmarks</GlossaryTerm>, dogs and cats experience those on shorter timelines than humans, which makes it possible to observe meaningful outcomes faster. They also develop many of the same age-associated conditions we worry about in people, including osteoarthritis, kidney failures, muscle loss, and cognitive dysfunction, which creates a natural bridge between veterinary and human aging biology. Importantly, this is not about treating pets as proxies; it is about recognizing that their biology can teach us while we also aim to improve their lives directly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            What we can learn that matters for both species
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Companion-animal studies can inform how interventions behave in real-world settings: what dosing schedules are realistic, which functional endpoints actually matter, how variability appears across breeds and lifestyles, and what safety signals look like outside the lab. These insights help build better medicine, whether the end user is a dog, a cat, or a person. Cats and dogs can also help us connect molecular readouts to lived behavior, such as shifts in sleep-wake cycles, exploration, sociability, or confusion, which can mirror early cognitive changes that are hard to capture in short lab studies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Better aging is a shared goal
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We care about pets because they are family, and we care about people because aging touches everyone. The most compelling longevity approaches should improve vitality across species, not just in one narrow model. By learning from cats and dogs, we can accelerate understanding of aging biology and design interventions that are more likely to work in the real world, while honoring the original purpose: giving our companions, and ourselves, more good years.
          </p>
        </section>
      </>
  }
};
const BlogArticle = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const article = slug ? articles[slug] : null;
  if (!article) {
    return <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="section-container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article not found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <article className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-2 text-center">{article.date}</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
              {article.title}
            </h1>
            {article.heroImage && (
              <div className="my-10 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={article.heroImage} 
                  alt={article.title} 
                  className="w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}
            {article.content}
          </article>
        </div>
      </main>
      <Footer />
    </div>;
};
export default BlogArticle;

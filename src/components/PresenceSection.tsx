import { Calendar, MapPin } from "lucide-react";
const events = [{
  name: "Swiss Biotech Day",
  location: "Basel",
  date: "April 2024"
}, {
  name: "BSNL BioScience Network",
  location: "Lausanne",
  date: "April 2024",
  highlight: "Pitching"
}, {
  name: "Digital Vivarium Forum",
  location: "Buguggiate",
  date: "April 2024"
}, {
  name: "Life Science Career Day",
  location: "Lausanne",
  date: "May 2024",
  highlight: "Booth sponsorship"
}, {
  name: "Startup Day Switzerland",
  location: "Bern",
  date: "May 2024"
}, {
  name: "Aging Research and Drug Discovery Meeting",
  location: "Copenhagen",
  date: "August 2024"
}, {
  name: "Open Innovation in Life Sciences",
  location: "Zurich",
  date: "October 2024"
}, {
  name: "Future Health Lausanne",
  location: "Lausanne",
  date: "October 2024"
}, {
  name: "SGV Meeting 2024",
  location: "Lausanne",
  date: "November 2024"
}, {
  name: "Biopole Discovery Day",
  location: "Epalinges",
  date: "March 2025"
}, {
  name: "Transfer Meeting",
  location: "Sevilla",
  date: "June 2025"
}, {
  name: "Biotech Annual Congress",
  location: "Malaga",
  date: "July 2025"
}, {
  name: "The 12th Aging Research and Drug Discovery (ARDD) Conference 2025",
  location: "Copenhagen",
  date: "August 25–29, 2025"
}, {
  name: "Biospain",
  location: "Bilbao",
  date: "October 7–9, 2025",
  link: "https://biospain.com/"
}, {
  name: "Spanish Drug Discovery Network (SDDN)",
  location: "Galicia, Spain",
  date: "November 20–21, 2025",
  highlight: "Sponsor",
  link: "https://www.sddn.es/xvii-sddn-meeting-2025/"
}, {
  name: "EPFL EDBB Day 2026",
  location: "EPFL Lausanne",
  date: "February 13, 2026",
  link: "https://memento.epfl.ch/event/inaugural-edbb-research-day/"
}];
export const PresenceSection = () => {
  return <section id="presence" className="py-12 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="section-title text-3xl">Our Presence</h2>
          <p className="section-subtitle mx-auto">
            Engaging with the global biotech and aging research community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => {
            const card = (
              <div key={index} className={`bg-background rounded-lg p-5 border border-border hover:border-primary/20 transition-colors ${event.link ? 'cursor-pointer' : ''}`}>
              <h4 className="font-medium text-foreground">{event.name}</h4>
              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {event.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {event.date}
                </span>
              </div>
              {event.highlight && <span className="inline-block mt-3 px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {event.highlight}
                </span>}
            </div>
            );
            return event.link ? (
              <a key={index} href={event.link} target="_blank" rel="noopener noreferrer">{card}</a>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>;
};
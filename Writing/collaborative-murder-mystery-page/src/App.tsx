import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Play,
  Search,
  X,
} from "lucide-react";
import { people, stories, timeline, videos, type Person, type Story } from "./data";

type ManifestFilter = "all" | "passengers" | "crew" | "victims";

const sectionLinks = [
  { label: "Timeline", href: "#timeline" },
  { label: "Seat map", href: "#seat-map" },
  { label: "Manifest", href: "#manifest" },
  { label: "Stories", href: "#stories" },
  { label: "Watch", href: "#watch" },
];

const seatColumns = ["A", "C", null, "D", "E", "F", null, "J", "L"] as const;
const seatRows = [20, 21, 22, 23, 24];
const peopleBySeat = new Map(people.filter((person) => person.seat).map((person) => [person.seat, person]));
const peopleById = new Map(people.map((person) => [person.id, person]));

function Kicker({ number, children }: { number: string; children: ReactNode }) {
  return (
    <p className="section-kicker">
      <span className="kicker-mark" aria-hidden="true" />
      <span>{number}</span>
      <span className="kicker-divider" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Seat({
  seat,
  letter,
  selected,
  onSelect,
}: {
  seat: string;
  letter: string;
  selected: boolean;
  onSelect: (seat: string) => void;
}) {
  const person = peopleBySeat.get(seat);
  const status = person?.status ? "victim" : person ? "occupied" : "empty";

  return (
    <button
      type="button"
      className={`seat seat--${status}${selected ? " seat--selected" : ""}`}
      onClick={() => onSelect(seat)}
      aria-label={`Seat ${seat}: ${person ? `${person.name}${person.status ? `, ${person.status}` : ""}` : "not yet assigned"}`}
      aria-pressed={selected}
      title={person ? `${seat} - ${person.name}` : `${seat} - unassigned`}
    >
      {letter}
    </button>
  );
}

function SeatMap({
  selectedSeat,
  onSelect,
  onProfileLink,
}: {
  selectedSeat: string;
  onSelect: (seat: string) => void;
  onProfileLink: () => void;
}) {
  const selectedPerson = peopleBySeat.get(selectedSeat);
  const reduceMotion = useReducedMotion();

  return (
    <div className="cabin-content">
      <div className="seat-diagram" aria-label="Cabin seat diagram showing seat 17A and Premium Plus rows 20 through 24">
        <div className="map-direction">
          <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          <span>FRONT OF AIRCRAFT</span>
        </div>

        <div className="map-class-label">
          <span>POLARIS BUSINESS</span>
          <span>ONE SEAT IN VIEW</span>
        </div>
        <div className="seat-grid-row business-row">
          <span className="row-number">17</span>
          <Seat seat="17A" letter="A" selected={selectedSeat === "17A"} onSelect={onSelect} />
          <span className="business-row-note">A quiet space ahead of the main cabin</span>
        </div>

        <div className="map-class-label premium-label">
          <span>PREMIUM PLUS</span>
          <span>ROWS 20-24</span>
        </div>
        <div className="seat-grid-row column-labels" aria-hidden="true">
          <span />
          {seatColumns.map((letter, index) =>
            letter ? <span key={`${letter}-${index}`}>{letter}</span> : <span key={`aisle-${index}`} />,
          )}
        </div>
        {seatRows.map((row) => (
          <div className="seat-grid-row" key={row}>
            <span className="row-number">{row}</span>
            {seatColumns.map((letter, index) =>
              letter ? (
                <Seat
                  key={`${row}${letter}`}
                  seat={`${row}${letter}`}
                  letter={letter}
                  selected={selectedSeat === `${row}${letter}`}
                  onSelect={onSelect}
                />
              ) : (
                <span className="aisle-space" key={`${row}-aisle-${index}`} aria-hidden="true" />
              ),
            )}
          </div>
        ))}

        <div className="map-legend" aria-label="Seat map key">
          <span><i className="legend-swatch legend-swatch--occupied" />Named passenger</span>
          <span><i className="legend-swatch legend-swatch--victim" />Victim</span>
          <span><i className="legend-swatch legend-swatch--empty" />Unassigned</span>
        </div>
      </div>

      <div className="seat-detail" aria-live="polite">
        <div className="seat-detail-top">
          <span className="detail-label">SELECTED SEAT</span>
          <span className="detail-cabin">{selectedSeat === "17A" ? "POLARIS BUSINESS" : "PREMIUM PLUS"}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSeat}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.28 }}
            className="seat-detail-body"
          >
            <span className="detail-seat-number">{selectedSeat}</span>
            {selectedPerson ? (
              <>
                <p className={`detail-status${selectedPerson.status ? " detail-status--victim" : ""}`}>
                  {selectedPerson.status ?? selectedPerson.role}
                </p>
                <h3>{selectedPerson.name}</h3>
                <p className="detail-description">{selectedPerson.teaser}</p>
                <a
                  className="text-arrow-link detail-profile-link"
                  href={`#profile-${selectedPerson.id}`}
                  onClick={onProfileLink}
                >
                  Read the profile <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
                </a>
              </>
            ) : (
              <>
                <p className="detail-status">UNASSIGNED</p>
                <h3>No name on the manifest. Yet.</h3>
                <p className="detail-description">
                  This seat is part of the cabin, but no character has been assigned to it so far. Select a filled seat to follow a story.
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function PersonFile({ person, onStoryLink }: { person: Person; onStoryLink: () => void }) {
  const relatedStory = stories.find((story) => story.personId === person.id);

  return (
    <div className="file-content">
      <p className="file-eyebrow">PERSONNEL FILE / {String(people.indexOf(person) + 1).padStart(2, "0")}</p>
      {person.status && <p className="file-victim">{person.status}</p>}
      <h2 id="dialog-title" className="file-title">{person.name}</h2>
      <p className="file-role">{person.role}</p>

      <div className="file-facts">
        <div>
          <span>LOCATION</span>
          <strong>{person.seat ? `Seat ${person.seat}` : person.location}</strong>
        </div>
        <div>
          <span>ON THE MANIFEST</span>
          <strong>{person.status ?? (person.kind === "crew" ? "Cabin crew" : "Passenger")}</strong>
        </div>
      </div>

      <div className="file-prose">
        <h3>What we know</h3>
        <p>{person.description}</p>
        <h3>The open question</h3>
        <p className="file-question">{person.question}</p>
      </div>

      {relatedStory && (
        <a className="file-related-link" href={`#story-${relatedStory.id}`} onClick={onStoryLink}>
          <span>
            <small>RELATED SHORT STORY</small>
            <strong>{relatedStory.title}</strong>
          </span>
          <ArrowUpRight size={23} strokeWidth={1.4} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function StoryFile({ story, onProfileLink }: { story: Story; onProfileLink: () => void }) {
  const person = peopleById.get(story.personId)!;

  return (
    <div className="file-content story-file-content">
      <p className="file-eyebrow">SHORT STORY / {String(stories.indexOf(story) + 1).padStart(2, "0")}</p>
      <h2 id="dialog-title" className="file-title">{story.title}</h2>
      <p className="story-file-byline">A fragment from {person.seat ? `seat ${person.seat}` : person.location} / {person.name}</p>
      <div className="story-prose">
        {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <a className="file-related-link" href={`#profile-${person.id}`} onClick={onProfileLink}>
        <span>
          <small>FOLLOW THIS THREAD</small>
          <strong>Read {person.id === "d-randolph" ? "D's" : `${person.name.split(" ")[0]}'s`} profile</strong>
        </span>
        <ArrowUpRight size={23} strokeWidth={1.4} aria-hidden="true" />
      </a>
    </div>
  );
}

export default function App() {
  const [selectedSeat, setSelectedSeat] = useState("22F");
  const [manifestFilter, setManifestFilter] = useState<ManifestFilter>("all");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProfileId, setActiveProfileId] = useState<string | null>(null);
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);
  const returnHashRef = useRef("#manifest");
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const activePerson = activeProfileId ? peopleById.get(activeProfileId) : undefined;
  const activeStory = activeStoryId ? stories.find((story) => story.id === activeStoryId) : undefined;
  const overlayOpen = Boolean(activePerson || activeStory);

  const visiblePeople = useMemo(() => {
    const search = query.trim().toLowerCase();
    return people.filter((person) => {
      const matchesFilter =
        manifestFilter === "all" ||
        (manifestFilter === "passengers" && person.kind === "passenger") ||
        (manifestFilter === "crew" && person.kind === "crew") ||
        (manifestFilter === "victims" && Boolean(person.status));
      const matchesSearch =
        !search ||
        [person.name, person.seat ?? person.location ?? "", person.role, person.teaser]
          .join(" ")
          .toLowerCase()
          .includes(search);
      return matchesFilter && matchesSearch;
    });
  }, [manifestFilter, query]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash.startsWith("profile-") && peopleById.has(hash.slice(8))) {
        setActiveProfileId(hash.slice(8));
        setActiveStoryId(null);
      } else if (hash.startsWith("story-") && stories.some((story) => story.id === hash.slice(6))) {
        setActiveStoryId(hash.slice(6));
        setActiveProfileId(null);
      } else {
        setActiveProfileId(null);
        setActiveStoryId(null);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const closeOverlay = useCallback(() => {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${returnHashRef.current}`,
    );
    setActiveProfileId(null);
    setActiveStoryId(null);
  }, []);

  useEffect(() => {
    if (!overlayOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      dialogRef.current?.scrollTo(0, 0);
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'),
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [overlayOpen, activeProfileId, activeStoryId, closeOverlay]);

  return (
    <div className="site-shell">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-visual" aria-hidden="true">
          <img src="/images/night-flight-cabin.jpg" alt="" />
        </div>
        <div className="hero-shade" aria-hidden="true" />

        <motion.header
          className="site-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.8 }}
        >
          <div className="header-inner page-container">
            <a className="header-brand" href="#top" aria-label="The Night Flight, back to top" onClick={() => setMenuOpen(false)}>
              <svg className="brand-star" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 1V31M1 16H31M5.4 5.4L26.6 26.6M26.6 5.4L5.4 26.6" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="16" cy="16" r="3.1" fill="currentColor" />
              </svg>
              <span>THE NIGHT FLIGHT</span>
            </a>

            <nav className="desktop-nav" aria-label="Main navigation">
              {sectionLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
            </nav>

            <a className="header-action" href="#timeline">
              OPEN CASE FILE <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <button
              className="mobile-menu-button"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                className="mobile-nav"
                aria-label="Mobile navigation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {sectionLinks.map((link) => (
                  <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}<ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>

        <div className="hero-content page-container">
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.8, delay: 0.2 }}
          >
            AN OPEN-ENDED, COLLABORATIVE MURDER MYSTERY
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 1, delay: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
          >
            The Night<br /><em>Flight.</em>
          </motion.h1>
          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.8, delay: 0.55 }}
          >
            <p>Two victims. One cabin. A story told from every seat.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#timeline">Enter the case <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" /></a>
              <a className="hero-text-link" href="#seat-map">Explore the seat map <ArrowDown size={17} strokeWidth={1.6} aria-hidden="true" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      <main>
        <section className="timeline-section section-pad" id="timeline" aria-labelledby="timeline-title">
          <div className="page-container timeline-layout">
            <Reveal className="section-intro timeline-intro">
              <Kicker number="01">THE SEQUENCE</Kicker>
              <h2 id="timeline-title">How we<br /><em>got here.</em></h2>
              <p>An unfinished record of what is known, and what still needs answering.</p>
            </Reveal>
            <div className="timeline-list">
              {timeline.map((event, index) => (
                <Reveal key={event.number} delay={index * 0.08}>
                  <article className="timeline-event">
                    <span className="event-number">{event.number}</span>
                    <div>
                      <p className="event-when">{event.when}</p>
                      <h3>{event.title}</h3>
                      <p className="event-text">{event.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="cabin-section section-pad" id="seat-map" aria-labelledby="cabin-title">
          <div className="page-container">
            <Reveal className="cabin-heading section-heading-horizontal">
              <div className="section-intro">
                <Kicker number="02">THE CABIN</Kicker>
                <h2 id="cabin-title">Where everyone <em>sat.</em></h2>
              </div>
              <p>Choose a seat to find its story. The filled seats are the people we know so far.</p>
            </Reveal>

            <Reveal delay={0.12}>
              <SeatMap
                selectedSeat={selectedSeat}
                onSelect={setSelectedSeat}
                onProfileLink={() => { returnHashRef.current = "#seat-map"; }}
              />
              <div className="cabin-bottom">
                <p>
                  In the aisles: <a href="#profile-dorothy-jones" onClick={() => { returnHashRef.current = "#seat-map"; }}>Dorothy Jones</a> serves D-F;
                  {" "}<a href="#profile-candy-lebowitz" onClick={() => { returnHashRef.current = "#seat-map"; }}>Candy Lebowitz</a> serves J-L.
                  {" "}<a href="#profile-harold-vale" onClick={() => { returnHashRef.current = "#seat-map"; }}>Harold Vale</a> sits farther forward in 12A.
                </p>
                <a href="https://www.united.com/en/us/fly/company/aircraft/boeing-787-9-dreamliner.html#version-2" target="_blank" rel="noopener noreferrer">
                  Cabin layout reference <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="manifest-section section-pad" id="manifest" aria-labelledby="manifest-title">
          <div className="page-container">
            <Reveal className="section-heading-horizontal manifest-heading">
              <div className="section-intro">
                <Kicker number="03">THE PEOPLE</Kicker>
                <h2 id="manifest-title">Everyone <em>on board.</em></h2>
              </div>
              <p>Eleven passengers and two crew members. Select a name to open their file.</p>
            </Reveal>

            <div className="manifest-tools">
              <div className="manifest-filters" role="group" aria-label="Filter manifest">
                {([
                  ["all", "All"],
                  ["passengers", "Passengers"],
                  ["crew", "Crew"],
                  ["victims", "Victims"],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={manifestFilter === value ? "filter-button is-active" : "filter-button"}
                    onClick={() => setManifestFilter(value)}
                    aria-pressed={manifestFilter === value}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <label className="manifest-search">
                <Search size={18} strokeWidth={1.5} aria-hidden="true" />
                <span className="sr-only">Search by name, role, or seat</span>
                <input
                  type="search"
                  placeholder="Search name or seat"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>

            <div className="manifest-table" aria-live="polite">
              <div className="manifest-columns" aria-hidden="true">
                <span>SEAT</span><span>NAME / ROLE</span><span>THE STORY SO FAR</span><span>FILE</span>
              </div>
              {visiblePeople.length ? (
                visiblePeople.map((person) => (
                  <a
                    className="manifest-row"
                    href={`#profile-${person.id}`}
                    key={person.id}
                    onClick={() => { returnHashRef.current = "#manifest"; }}
                    aria-label={`Open profile for ${person.name}${person.seat ? `, seat ${person.seat}` : ", cabin crew"}`}
                  >
                    <span className="manifest-seat">{person.seat ?? "CREW"}</span>
                    <span className="manifest-identity">
                      <strong className={person.status ? "victim-name" : ""}>{person.name}</strong>
                      <small>{person.role}{person.status ? ` / ${person.status}` : person.location ? ` / ${person.location}` : ""}</small>
                    </span>
                    <span className="manifest-teaser">{person.teaser}</span>
                    <ArrowUpRight className="manifest-arrow" size={23} strokeWidth={1.3} aria-hidden="true" />
                  </a>
                ))
              ) : (
                <div className="manifest-empty">No names match that search. Try another name, role, or seat.</div>
              )}
            </div>
          </div>
        </section>

        <section className="stories-section section-pad" id="stories" aria-labelledby="stories-title">
          <div className="page-container stories-layout">
            <Reveal className="section-intro stories-intro">
              <Kicker number="04">SHORT STORIES</Kicker>
              <h2 id="stories-title">From the<br /><em>margins.</em></h2>
              <p>Three short fictional fragments. Each offers a point of view without closing the case.</p>
            </Reveal>
            <div className="story-list">
              {stories.map((story, index) => {
                const person = peopleById.get(story.personId)!;
                const byline = person.id === "d-randolph" ? '"D"' : person.name;
                return (
                  <Reveal key={story.id} delay={index * 0.08}>
                    <a
                      className="story-row"
                      href={`#story-${story.id}`}
                      onClick={() => { returnHashRef.current = "#stories"; }}
                    >
                      <span className="story-index">0{index + 1}</span>
                      <span className="story-row-main">
                        <small>{person.seat} / {byline}</small>
                        <strong>{story.title}</strong>
                        <span className="story-excerpt">{story.excerpt}</span>
                      </span>
                      <ArrowUpRight className="story-arrow" size={26} strokeWidth={1.3} aria-hidden="true" />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="watch-section section-pad" id="watch" aria-labelledby="watch-title">
          <div className="page-container">
            <Reveal className="section-heading-horizontal watch-heading">
              <div className="section-intro">
                <Kicker number="05">WATCH</Kicker>
                <h2 id="watch-title">Inside the <em>aircraft.</em></h2>
              </div>
              <p>Two YouTube cabin references for the setting. In-story footage can join the file as it grows.</p>
            </Reveal>
            <div className="video-grid">
              {videos.map((video, index) => (
                <Reveal key={video.youtubeId} delay={index * 0.1}>
                  <a
                    className="video-link"
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${video.title} on YouTube, opens in a new tab`}
                  >
                    <span className="video-image-wrap">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                      />
                      <span className="video-play"><Play size={22} strokeWidth={1.5} fill="currentColor" aria-hidden="true" /></span>
                    </span>
                    <span className="video-meta">CABIN REFERENCE / {video.number}<ArrowUpRight size={20} strokeWidth={1.4} aria-hidden="true" /></span>
                    <strong className="video-title">{video.title}</strong>
                    <span className="video-subtitle">{video.subtitle}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container">
          <div className="footer-main">
            <Kicker number="">THE FILE REMAINS OPEN</Kicker>
            <h2>The story is still <em>unfolding.</em></h2>
            <a className="text-arrow-link" href="#manifest">Return to the manifest <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></a>
          </div>
          <div className="footer-bottom">
            <a href="#top" className="footer-brand">THE NIGHT FLIGHT</a>
            <p>A collaborative murder mystery. All characters and events are fictional.</p>
            <a href="#top">Back to top <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            className="file-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.25 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) closeOverlay(); }}
          >
            <motion.aside
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              className="file-panel"
              initial={{ x: reduceMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduceMotion ? 0 : "100%" }}
              transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="file-panel-top">
                <span>THE NIGHT FLIGHT / CASE FILE</span>
                <button type="button" ref={closeButtonRef} onClick={closeOverlay} aria-label="Close file">
                  <X size={23} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>
              {activePerson ? (
                <PersonFile person={activePerson} onStoryLink={() => { returnHashRef.current = "#stories"; }} />
              ) : activeStory ? (
                <StoryFile story={activeStory} onProfileLink={() => { returnHashRef.current = "#manifest"; }} />
              ) : null}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

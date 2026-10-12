export type Person = {
  id: string;
  name: string;
  seat: string | null;
  kind: "passenger" | "crew";
  role: string;
  status?: "Victim 01" | "Victim 02";
  teaser: string;
  description: string;
  question: string;
  location?: string;
  image?: string;
};

const image = (filename: string) =>
  `${import.meta.env.BASE_URL}images/${filename}`;
  


export type Story = {
  id: string;
  title: string;
  personId: string;
  excerpt: string;
  paragraphs: string[];
};

export const people: Person[] = [
  {
    id: "harold-vale",
    name: "Harold Adrian Vale",
    seat: "13K",
    kind: "passenger",
    role: "Venture capitalist",
    teaser: "A tech investor questioning the Dulles disruption.",
    description:
      "At 43, Harold Adrian Vale is the brilliant, persuasive venture capitalist behind AetherGrid. He is looking into the disruption at Dulles and wants to know whether it was deliberately engineered.",
    question: "If the disruption was planned, who stood to benefit?",
  },
  {
    id: "ari-weinberg",
    name: "Ari Benjamin Weinberg",
    seat: "16D",
    kind: "passenger",
    role: "Former special-forces operative",
    teaser: "A former special-forces operative on a private mission.",
    description:
      "Remarkably fit at 72, Ari Benjamin Weinberg is an Israeli former IDF special-forces operative. His history reaches back to the era of the Munich Olympics massacre, and he is quietly pursuing another mission.",
    question: "What brought him aboard this particular flight?",
  },
  {
    id: "d-randolph",
    name: 'John Paul Winston George Montgomery Randolph "D"',
    seat: "16J",
    kind: "passenger",
    role: "Drifter",
    teaser: "A drifter, a portfolio tube, and an unseen assignment.",
    description:
      'Known as "D," the 23-year-old drifter was recruited into an online anarchist and disruption group. He is carrying out a mysterious mission involving a portfolio tube, without understanding what he is really doing.',
    question: "Who gave D the tube, and what is inside it?",
  },
  {
    id: "astrid-bielke",
    name: "Astrid Bielke",
    seat: "16K",
    kind: "passenger",
    role: "Performance consultant",
    teaser: "An ex-Olympian weighing a life-changing proposal.",
    description:
      "Astrid Bielke, 28, is a Swedish former Olympic rower turned performance consultant. Aristocratic and intensely disciplined, she is privately conflicted over a marriage proposal.",
    question: "What would choosing a different future cost her?",
  },
  {
    id: "eileen-michaels",
    name: "Eileen Michaels",
    seat: "17D",
    kind: "passenger",
    role: "Investigative journalist",
    teaser: "A reporter following contamination and corruption.",
    description:
      "Eileen Michaels is an investigative journalist focused on environmental contamination, corporate cost cutting, and government regulatory corruption. She has built her work around the things powerful people would rather leave buried.",
    question: "Which of her investigations might intersect with this flight?",
  },
  {
    id: "omar-faizan",
    name: "Omar Faizan",
    seat: "17J",
    kind: "passenger",
    role: "Traveler",
    teaser: "Traveling under another name to reach his family.",
    description:
      "Omar Faizan is a Middle Eastern man traveling under an assumed identity to reunite with family after entering the United States without authorization. He appears unaware of the intelligence interest surrounding him. He is the second victim in the case.",
    question: "Why was he being watched without his knowledge?",
  },
  {
    id: "nigel-leatherman",
    name: "Nigel Leatherman",
    seat: "18D",
    kind: "passenger",
    role: "MI6 operative",
    teaser: "An MI6 operative looking for a way out.",
    description:
      "Nigel Leatherman is a 44-year-old MI6 black-ops operative returning to England after a grueling overseas assignment. Highly perceptive, he wants retirement and peace more than another mission.",
    question: "Can someone trained to notice everything choose not to look?",
  },
  {
    id: "tessa-marlow",
    name: "Tessa Marlow",
    seat: "18E",
    kind: "passenger",
    role: "Aerospace systems engineer",
    teaser: "An engineer with a history with Daniel Rook.",
    description:
      "Tessa Marlow is an aerospace systems engineer and a former colleague of Daniel Rook. Their shared professional history puts her unusually close to one of the central figures in the case.",
    question: "What does she know about the work Rook left behind?",
  },
  {
    id: "daniel-rook",
    name: "Daniel Rook",
    seat: "18F",
    kind: "passenger",
    role: "Scientist",
    status: "Victim 01",
    image: image("NewspaperMay2028.png"),
    teaser: "A scientist missing for six months. Now in 18F.",
    description:
      "Daniel Rook is a scientist connected to sensitive military-related research. His exact field remains undecided. He officially disappeared about six months ago after a canceled flight, either immediately or three days later. Now his name is tied to seat 18F and the first victim in this case.",
    question: "What happened in the missing interval, and why has he resurfaced?",
  },
  {
    id: "melissa-bloom",
    name: "Melissa Bloom",
    seat: "19F",
    kind: "passenger",
    role: "Foundation program officer",
    teaser: "A program officer who knows too much about mobility research.",
    description:
      "Melissa Bloom, 29, is a humanitarian foundation program officer and an Effective Altruism prodigy. Her investigation into predictive human-mobility research has made her dangerously well informed.",
    question: "What has her research revealed, and who knows she found it?",
  },
  {
    id: "amara-mensah",
    name: "Amara Mensah",
    seat: "20K",
    kind: "passenger",
    role: "Physician",
    teaser: "A physician carrying a question about altered records.",
    description:
      "Amara Mensah, 46, is a British-Ghanaian physician. Calm, observant, and compassionate, she is haunted by a medical case involving altered records and an unresolved sense of guilt.",
    question: "Who changed the records, and what was hidden?",
  },
  {
    id: "candy-lebowitz",
    name: "Candy Lebowitz",
    seat: null,
    kind: "crew",
    role: "Flight attendant",
    location: "J-L aisle",
    teaser: "Crew member who chose this shift for a reason.",
    description:
      "Candy Lebowitz is a British flight attendant serving the J and L side of the cabin. She deliberately took this particular shift after recognizing a passenger connected to an old, painful secret.",
    question: "Who did she recognize before boarding?",
  },
  {
    id: "dorothy-jones",
    name: "Dorothy Louise Jones",
    seat: null,
    kind: "crew",
    role: "Flight attendant",
    location: "D-F aisle",
    teaser: "A veteran flight attendant carrying her father's wings.",
    description:
      "Dorothy Louise Jones is a 67-year-old British Airways flight attendant and former FBO manager. An outgoing, perceptive, independent American citizen, she carries the flight wings of her late father and serves the middle D-F seats.",
    question: "What has a lifetime around aircraft taught her to notice?",
  },
];

export const timeline = [
  {
    number: "01",
    when: "Six months before",
    title: "A scientist vanishes",
    text: "Daniel Rook is officially missing after a canceled flight. Whether he disappeared immediately or three days later is still an open detail.",
  },
  {
    number: "02",
    when: "One month before",
    title: "D goes to Amsterdam",
    text: 'D receives an assignment that will eventually bring him aboard Flight 487. He carries out instructions without fully understanding their purpose.',
    linkLabel: "Read D's backstory",
    linkHref: `${import.meta.env.BASE_URL}stories/D-goes-to-amsterdam.pdf`,
    linkPending: false,
  },
  {
    number: "03",
    when: "At Dulles",
    title: "A disruption draws attention",
    text: "Harold Vale suspects the disruption may have been engineered. The reason, and any connection to this group of travelers, is not yet known.",
    linkLabel: "Read Harold's account",
    linkHref: "https://aurametrix.substack.com/p/the-last-flight",
    external: true,
  },
  {
    number: "04",
    when: "9:00 PM",
    title: "The only flight left",
    text: "After severe weather disrupts departures from Dulles, Flight 487 departs for Heathrow. Other transatlantic flights have been canceled, and the aircraft is full.",
  },
  {
    number: "05",
    when: "9:30 PM",
    title: "The cabin settles",
    text: "The seatbelt sign switches off. Passengers can move around the cabin. Drinks are served, conversations begin, and ordinary movements become potential clues.",
  },
  {
    number: "06",
    when: "9:47 PM",
    title: "Seven coincidences",
    text: "Harold has counted seven coincidences. What began as suspicion has become a pattern he cannot ignore.",
    linkLabel: "Read The Last Flight: The Board",
    linkHref: "https://aurametrix.substack.com/p/the-last-flight-the-board",
    external: true,
  },
  {
    number: "07",
    when: "Later that evening",
    title: "The passenger in 18F",
    text: "Daniel Rook is found unresponsive in seat 18F. The flight's ordinary routines suddenly become part of a murder investigation.",
  },
  {
    number: "08",
    when: "After the discovery",
    title: "Everyone remembers differently",
    text: "Passengers and crew recall movements, conversations, and disturbances. Their accounts may overlap, contradict one another, or leave important gaps.",
  },
  {
    number: "09",
    when: "The investigation continues",
    title: "Another disappearance",
    text: "Another passenger's death/disappearance adds another mystery to the developing case. Its relationship to Daniel Rook's death remains to be established.",
  },
];

export const stories: Story[] = [
{
  id: "d-goes-to-amsterdam",
  title: "D Goes to Amsterdam",
  personId: "d-randolph",
  excerpt: "D had never felt he belonged in his family. Now, at last, he had a mission.",
  paragraphs: [
    "John Paul Winston George Montgomery Randolph has never fit the mold of his accomplished family. Known simply as D, he drifts through life in a digital haze, finding purpose and belonging in an online group called Bambi, whose cryptic operations promise something larger than himself.",
    "When Bambi's mysterious leader, Great Prince, sends him on an unexpected mission to Europe, D eagerly accepts. His assignment seems simple: carry an artist's portfolio tube to Amsterdam. Inside are ordinary posters, but D suspects there may be more to the mission than he understands.",
    "Waiting to board Flight 487 to London, D imagines himself a foot soldier in a vast, hidden organization. For once, he has a purpose—and perhaps the power to prove that his family has underestimated him. He has no idea what role he is really playing, or what awaits him at the end of the journey."
  ],
},

{
  id: "the-last-flight-the-pattern",
  title: "The Last Flight: The Pattern",
  personId: "harold-vale",
  excerpt: "The weather was real. The cancellations were not. And someone was making sure certain people boarded the same plane.",
  paragraphs: [
    "At Washington Dulles International Airport, investor and data analyst Harold Adrian Vale notices something unsettling amid a storm of flight cancellations. As departures disappear from the board, one transatlantic flight remains inexplicably available. To Harold, the chaos looks less like a weather disruption and more like a carefully engineered pattern.",
    "Armed with proprietary data from his startup, AetherGrid, and a notebook of suspicious names, Harold suspects someone is manipulating the airline system to funnel particular passengers onto Flight 487. But exposing the truth could destroy his company, his reputation, and everything he has built.",
    "Harold boards the flight with his suspicions still concealed. Hours later, as the aircraft crosses the Atlantic, a flight attendant urgently asks whether a doctor is on board. The carefully assembled pattern may be leading toward something far more dangerous than Harold imagined."
  ],
},
{
  id: "the-last-flight-the-board",
  title: "The Last Flight: The Board",
  personId: "harold-vale",
  excerpt: "One coincidence was nothing. Two were interesting. Three meant someone was playing chess, and he was the board.",
  paragraphs: [
    "As Flight 487 prepares to depart Dulles, Harold Adrian Vale begins studying the passengers being rerouted onto the same transatlantic journey. A disheveled young man carrying a portfolio tube, an Olympic rower and shipping heiress, an investigative journalist, and several other strangers each reveal details that seem ordinary in isolation but increasingly suspicious together.",
    "Harold recognizes some passengers from his research into anomalies detected by AetherGrid. Others display subtle signs of hidden connections: a lingering glance, a moment of recognition, or an expression that vanishes too quickly. Even the flight attendants seem unusually attentive to certain people aboard.",
    "With no passenger manifest and only fragments of information, Harold cannot yet explain what connects these strangers. But as the aircraft crosses the dark Atlantic, the coincidences accumulate. He begins to suspect that the passengers are pieces in a carefully arranged game—and that someone else has already decided how it will be played."
  ],
},
  {
    id: "weight-in-the-overhead",
    title: "A Weight in the Overhead",
    personId: "d-randolph",
    excerpt: "The tube fit in the overhead bin only if he turned it sideways.",
    paragraphs: [
      "The tube fit in the overhead bin only if he turned it sideways. D had checked twice. The person on the other end of the screen had called it an easy errand, the sort that took no courage at all.",
      "He had not asked what was inside. Asking would have made it something larger than an errand, and larger was the last thing he needed.",
      "Below him, the cabin settled into the practiced quiet of strangers. Somebody laughed softly a few rows back. Somebody else shut a book. D lowered the bin door and told himself that by morning, this would be someone else's problem.",
      "The latch clicked. It sounded final.",
    ],
  },
  {
    id: "the-clean-copy",
    title: "The Clean Copy",
    personId: "amara-mensah",
    excerpt: "Amara had learned to trust what a chart did not say.",
    paragraphs: [
      "Amara had learned to trust what a chart did not say. A number rewritten. A time adjusted. A signature placed a little too carefully at the bottom of a page.",
      "She could still picture the record that had been changed, although the official copy insisted nothing was missing. She folded her hands in her lap and watched a reading light tremble against the window.",
      "Around her, the ordinary sounds of flight went on. Cups. Seat belts. Someone asking for water. Guilt, she had discovered, was quiet enough to travel with you.",
      "When she finally looked up, she was not sure whether she was trying to remember a name or forget it.",
    ],
  },
  {
    id: "the-missing-interval",
    title: "The Missing Interval",
    personId: "tessa-marlow",
    excerpt: "Six months could be made to look like an ending. Tessa knew better.",
    paragraphs: [
      "Six months could be made to look like an ending. A canceled flight. A name gone from an inbox. A colleague spoken of in the past tense.",
      "Tessa had worked beside Daniel Rook long enough to know that absence did not suit him. He was a scientist who left questions unfinished, even when everyone else had gone home.",
      "Now she was in 18E, beside the seat assigned to him. 18F. She repeated the number silently, as if it might become an explanation.",
      "It did not. The aircraft kept moving forward.",
    ],
  },
];

export const videos = [
  {
    number: "01",
    title: "The Last Flight: Characters",
    subtitle: "Introducing 7 characters.",
    youtubeId: "O9Sp5GjGqlc",
  },
    {
    number: "01",
    title: "The Last Flight: Characters",
    subtitle: "Introducing 7 characters.",
    youtubeId: "TLPTKXJheN4",
  },
  {
    number: "02",
    title: "The Last Flight: Who Was Meant to Go",
    subtitle: "Intro Song",
    youtubeId: "hXHLj99fPqU",
  },
  {
    number: "03",
    title: "Inside World Traveller Plus on the 787-9",
    subtitle: "A look at the cabin where most of the story takes place.",
    youtubeId: "n9Rr4M1zRLA",
  },
    {
    number: "03",
    title: "Inside World Traveller Plus on the 787-9",
    subtitle: "On board of 787-9 Dreamliner",
    youtubeId: "8MTeL7zdZz8",
  },
  
  
  
  {
    number: "04",
    title: "Welcome to the Boeing 787 Dreamliner",
    subtitle: "A guided tour of Boeing 787 Dreamliner..",
    youtubeId: "gPi4R3aFeEc",
  },
];

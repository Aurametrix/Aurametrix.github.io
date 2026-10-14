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
    teaser: "An ex-Olympian concealing a warning from the man found dead in 18F.",
    description:
      "Astrid Bielke, 28, is a Swedish former Olympic rower turned performance consultant. After scientist Daniel Rook warned her about her politician boyfriend and his corporate supporters, she accepted his engagement ring but withheld her answer. On Flight 487, she recognizes Rook traveling under the name David Rowe and conceals their prior meeting.",
    question: "Why was Rook aboard her flight, and how much does Astrid dare reveal about him?",
  },
  {
    id: "eileen-michaels",
    name: "Eileen Michaels",
    seat: "17D",
    kind: "passenger",
    role: "Investigative journalist",
    teaser: "A journalist with a personal history with Rook—and a recent secret message from him.",
    description:
      "Eileen Michaels is an investigative journalist covering environmental contamination and corruption. She interviewed MIT professor Daniel Rook in 2020 about the environmental consequences of AI, then had a brief affair with him. Days before Flight 487, Rook contacted her through SecureDrop to request a confidential meeting about sensitive information; she could not meet before leaving for London.",
    question: "What did Rook want to tell Eileen, and did he contact her trusted colleague?",
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
    when: "2020",
    title: "Eileen interviews Daniel Rook",
    text: "After attending his MIT lectures, journalist Eileen Michaels interviews atmospheric physicist Daniel Rook about AI’s growing energy demands and environmental impact. Her article attracts little public attention, yet veiled threats follow. Eileen and Daniel later become lovers, but the affair is brief, and they eventually part on amicable terms.",
  },
  {
    number: "02",
    when: "Six months before",
    title: "A scientist vanishes",
    text: "Daniel Rook is officially missing after a canceled flight. Whether he disappeared immediately or three days later is still an open detail.",
    linkLabel: "Read the newspaper",
    linkHref: `${import.meta.env.BASE_URL}images/NewspaperMay2028.png`,
    linkPending: false,
  },
  {
    number: "03",
    when: "One month before",
    title: "D goes to Amsterdam",
    text: 'D receives an assignment that will eventually bring him aboard Flight 487. He carries out instructions without fully understanding their purpose.',
    linkLabel: "Read D's backstory",
    linkHref: `${import.meta.env.BASE_URL}stories/D-goes-to-amsterdam.pdf`,
    linkPending: false,
  },
  {
    number: "04",
    when: "Several weeks before",
    title: "A private warning for Astrid",
    text: "Daniel Rook approaches Astrid Bielke with allegations about her politician boyfriend's ties to a multinational corporation. After one private meeting, he warns her not to marry before learning the truth.",
  },
  {
    number: "05",
    when: "Weeks before departure",
    title: "A ring, but no answer",
    text: "Astrid's boyfriend proposes unexpectedly. She accepts the diamond ring but not the proposal, then arranges a trip to England to consider Rook's warning and her future.",
  },
  {
    number: "06",
    when: "Several days before departure",
    title: "A message through SecureDrop",
    text: "Daniel Rook contacts Eileen Michaels, saying he has sensitive information and asking to meet safely in person. Unable to meet before her London trip, Eileen asks him to wait or contact a trusted colleague.",
  },
  {
    number: "07",
    when: "At Dulles",
    title: "A disruption draws attention",
    text: "Harold Vale suspects the disruption may have been engineered. The reason, and any connection to this group of travelers, is not yet known.",
    linkLabel: "Read Harold's account",
    linkHref: "https://aurametrix.substack.com/p/the-last-flight",
    external: true,
  },
  {
    number: "08",
    when: "During boarding",
    title: "Astrid recognizes David Rowe",
    text: "Astrid sees the man she knows as Dr. Daniel Rook traveling under the name David Rowe. Their eyes meet briefly, but neither acknowledges the other; she keeps their connection secret.",
  },
  {
    number: "09",
    when: "9:00 PM",
    title: "The only flight left",
    text: "After severe weather disrupts departures from Dulles, Flight 487 departs for Heathrow. Other transatlantic flights have been canceled, and the aircraft is full.",
  },
  {
    number: "10",
    when: "9:30 PM",
    title: "The cabin settles",
    text: "The seatbelt sign switches off. Passengers can move around the cabin. Drinks are served, conversations begin, and ordinary movements become potential clues.",
  },
  
  {
    number: "11",
    when: "9:34 PM",
    title: "An MI6 agent lets his guard down",
    text: "Exhausted after a dangerous assignment, Nigel Leatherman boards Flight 487, unaware that trouble is closer than he thinks.",
    linkLabel: "Read Nigel's backstory",
    linkHref: `${import.meta.env.BASE_URL}stories/HabitofWatching.pdf`,
    external: true,
  },
  
  
  
  {
    number: "12",
    when: "9:47 PM",
    title: "Seven coincidences",
    text: "Harold has counted seven coincidences. What began as suspicion has become a pattern he cannot ignore.",
    linkLabel: "Read The Last Flight: The Board",
    linkHref: "https://aurametrix.substack.com/p/the-last-flight-the-board",
    external: true,
  },
  {
    number: "13",
    when: "Later that evening",
    title: "The passenger in 18F",
    text: "Daniel Rook is found unresponsive in seat 18F. The flight's ordinary routines suddenly become part of a murder investigation.",
  },
  {
    number: "14",
    when: "After Rook is found",
    title: "Astrid denies knowing the victim",
    text: "Astrid knows the dead man's real name and the threats he described against her boyfriend's political and corporate relationships. Asked if she knew him, she says no, fearing what admitting their secret meeting might imply.",
  },
  {
    number: "15",
    when: "After the discovery",
    title: "Everyone remembers differently",
    text: "Passengers and crew recall movements, conversations, and disturbances. Their accounts may overlap, contradict one another, or leave important gaps.",
  },
  {
    number: "16",
    when: "The investigation continues",
    title: "Another disappearance",
    text: "Another passenger's death/disappearance adds another mystery to the developing case. Its relationship to Daniel Rook's death remains to be established.",
  },
];

export const stories: Story[] = [
  {
    id: "astrid-the-warning",
    title: "Astrid's Story: The Warning",
    personId: "astrid-bielke",
    excerpt: "She recognized the dead man under another name—and denied ever knowing him.",
    paragraphs: [
      "Several weeks before Flight 487, Dr. Daniel Rook privately contacted Astrid Bielke with a warning about her politician boyfriend. Rook claimed to have information that could ruin the man's career and expose troubling ties to a multinational corporation that funded and supported him. Astrid initially doubted his motives, but he knew enough to persuade her to meet him. Rook alleged that her boyfriend knew about damaging environmental practices and helped protect the corporation's interests. Before leaving, he told her: 'Don't marry him until you know who you're marrying.'",
      "When her boyfriend unexpectedly proposed, Astrid accepted his diamond ring but did not agree to marry him. She arranged a trip to England to put some distance between herself and the question. Boarding Flight 487, she was stunned to recognize Rook traveling as David Rowe. Their eyes briefly met, but neither acknowledged the other.",
      "After Rook was found dead, Astrid faced a dilemma. She knew who he really was, what he had alleged about her boyfriend, and how suspicious their secret meeting might appear. When asked if she knew the victim, she calmly said no. Yet she could not stop wondering whether Rook had followed her to deliver one final warning—or one final piece of evidence."
    ],
  },
  {
    id: "eileen-daniel-rook",
    title: "Eileen's Story: The Scientist and the Journalist",
    personId: "eileen-michaels",
    excerpt: "A 2020 interview became a brief affair. Days before Flight 487, Daniel contacted her again with a secret.",
    paragraphs: [
      "Long before he developed Waymark, Daniel Rook was renowned for researching environmental contamination and remediation. Educated in environmental engineering at Stanford University and later a tenured MIT professor, he lectured internationally; among his best-known subjects was toxic dust exposure at Ground Zero in 2001. Investigative journalist Eileen Michaels saw him speak at several MIT seminars on contamination and health risks. After repeated refusals, she finally secured an interview in 2020.",
      "Rook surprised Eileen with his charisma and attractiveness, but she also found his ego inflated by his reputation. The interview ran long, and he invited her to dinner to continue talking. He flirted openly; she repeatedly reminded him that she was there as a journalist. Her interview article, published weeks later, featured his warning about the energy consumption, carbon footprint, and possible environmental consequences of artificial intelligence. Public response was muted, but Eileen received veiled threats against her life.",
      "They met again after publication. Daniel was unsurprised by the public indifference but worried about the threats; Eileen told him such dangers were part of her work and that previous threats had never been carried out. Their mutual attraction became a brief affair, despite a twenty-two-year age gap and lives dominated by their careers. Daniel became involved with the startup Waymark, while Eileen continued to work long hours and travel worldwide. They parted by agreement and were thereafter distant but polite when they crossed paths in public.",
      "Several days before Eileen's trip to London, Daniel unexpectedly contacted her through SecureDrop, her news organization's secure anonymous whistleblower system. He said he had sensitive information and wanted to meet in person somewhere safe. Eileen could not leave work before her trip. She asked whether it could wait until her return and, if not, offered the name of a trusted colleague. She did not know what Daniel meant to reveal."
    ],
  },
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
  {
  id: "the-habit-of-watching",
  title: "The Habit of Watching",
  personId: "nigel-leatherman",
  excerpt: "Nigel Leatherman had spent twenty years watching for danger. Tonight, all he wanted was sleep.",
  paragraphs: [
    "After a grueling MI6 assignment on a Caribbean island torn by a bloody military coup, Nigel Leatherman is finally heading home. Exhausted by twenty years of dangerous operations and increasingly conscious that his luck may be running out, he longs for a quiet vacation, time with family, and a reunion with his mischievous orange kitten, Booger.",
    "Settling into seat 18D aboard Flight 487, Nigel cannot resist an old professional habit: studying the passengers around him. His practiced scan reveals nothing unusual—just an ordinary collection of travelers brought together by delays and cancellations. Satisfied, he allows himself to relax.",
    "As the Dreamliner climbs into the night, Nigel falls into a deep, well-earned sleep. He knows no one aboard and has no reason to suspect anything is wrong. But just two seats away, a fellow passenger is beginning a journey from which he will never return."
  ],
},
];

export const videos = [
  {
    number: "01",
    title: "The Last Flight: The Seat Map",
    subtitle: "Introducing 13 characters.",
    youtubeId: "O9Sp5GjGqlc",
  },
    {
    number: "02",
    title: "The Last Flight: Characters",
    subtitle: "Introducing 7 characters.",
    youtubeId: "TLPTKXJheN4",
  },
  {
    number: "03",
    title: "The Last Flight: Who Was Meant to Go",
    subtitle: "Intro Song",
    youtubeId: "hXHLj99fPqU",
  },
  {
    number: "04",
    title: "Inside World Traveller Plus on the 787-9",
    subtitle: "A look at the cabin where most of the story takes place.",
    youtubeId: "n9Rr4M1zRLA",
  },
    {
    number: "05",
    title: "Inside World Traveller Plus on the 787-9",
    subtitle: "On board of 787-9 Dreamliner",
    youtubeId: "8MTeL7zdZz8",
  },
  
  
  
  {
    number: "06",
    title: "Welcome to the Boeing 787 Dreamliner",
    subtitle: "A guided tour of Boeing 787 Dreamliner..",
    youtubeId: "gPi4R3aFeEc",
  },
];

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
    seat: "17A",
    kind: "passenger",
    role: "Venture capitalist",
    teaser: "A tech investor questioning the Dulles disruption.",
    description:
      "At 43, Harold Adrian Vale is the brilliant, persuasive venture capitalist behind AetherGrid. He is looking into the disruption at Dulles and wants to know whether it was deliberately engineered.",
    question: "If the disruption was planned, who stood to benefit?",
  },
  {
    id: "yosef-katz",
    name: "Yosef Katz",
    seat: "20D",
    kind: "passenger",
    role: "Former special-forces operative",
    teaser: "A former special-forces operative on a private mission.",
    description:
      "Remarkably fit at 72, Yosef Katz is an Israeli former IDF special-forces operative. His history reaches back to the era of the Munich Olympics massacre, and he is quietly pursuing another mission.",
    question: "What brought him aboard this particular flight?",
  },
  {
    id: "d-randolph",
    name: 'John Paul Winston George Montgomery Randolph "D"',
    seat: "20J",
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
    seat: "20L",
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
    seat: "21D",
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
    seat: "21J",
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
    seat: "22D",
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
    seat: "22E",
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
    seat: "22F",
    kind: "passenger",
    role: "Scientist",
    status: "Victim 01",
    image: "/images/NewspaperMay2028.png",
    teaser: "A scientist missing for six months. Now in 22F.",
    description:
      "Daniel Rook is a scientist connected to sensitive military-related research. His exact field remains undecided. He officially disappeared about six months ago after a canceled flight, either immediately or three days later. Now his name is tied to seat 22F and the first victim in this case.",
    question: "What happened in the missing interval, and why has he resurfaced?",
  },
  {
    id: "melissa-bloom",
    name: "Melissa Bloom",
    seat: "23F",
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
    seat: "24L",
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
    when: "At Dulles",
    title: "A disruption draws attention",
    text: "Harold Vale suspects the disruption may have been engineered. The reason, and any connection to this group of travelers, is not yet known.",
  },
  {
    number: "03",
    when: "Boarding",
    title: "Names, seats, and secrets",
    text: 'Omar Faizan travels under another name. "D" carries a portfolio tube he does not understand. Across the cabin, others bring questions of their own.',
  },
  {
    number: "04",
    when: "The case now",
    title: "Two victims. No settled account.",
    text: "Daniel Rook and Omar Faizan are the two victims. The sequence of events, the motive, and the ties between the passengers remain to be uncovered.",
  },
];

export const stories: Story[] = [
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
      "Now she was in 22E, beside the seat assigned to him. 22F. She repeated the number silently, as if it might become an explanation.",
      "It did not. The aircraft kept moving forward.",
    ],
  },
];

export const videos = [
  {
    number: "01",
    title: "The Last Flight: Characters",
    subtitle: "Introducing 7 characters.",
    youtubeId: "TLPTKXJheN4",
  },
  {
    number: "02",
    title: "The Last Flight: Who Was Meant to Go",
    subtitle: "Introducing 7 characters",
    youtubeId: "hXHLj99fPqU",
  },
  {
    number: "03",
    title: "Inside United Premium Plus on the 787-9",
    subtitle: "A look at the cabin where most of the story takes place.",
    youtubeId: "Uy59Q7MDKt8",
  },
  {
    number: "04",
    title: "Business class vs. Premium Plus",
    subtitle: "A closer look at the two cabins in this case file.",
    youtubeId: "22PuI_jHD3o",
  },
];

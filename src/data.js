// All portfolio content lives here. Sources: the previous site (Timeline.jsx,
// About.jsx, projectsData.js), Education.md, and wayvibe.app's own meta text.
// Anything marked TODO is missing from the repo; the owner should fill it in.

export const profile = {
  name: "Urmil Rupareliya",
  short: "Urmil",
  role: "Software engineer",
  tagline: "Chessboard to codebase.",
  intro:
    "Software engineer, freelancer and storyteller. I build full-stack web and mobile products with JavaScript and TypeScript.",
  photo: "/me.jpeg",
  status: "Building WayVibe",
  email: "urmillive@gmail.com",
  // TODO(owner): add a resume/CV PDF to public/ and set its path here.
  resume: null,
  // TODO(owner): current city, if you want it shown next to the status pill.
  location: null,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/urmillive" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/urmillive" },
  { label: "Instagram", href: "https://www.instagram.com/urmillive/" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/12697583/urmil-rupareliya" },
  { label: "YouTube", href: "https://www.youtube.com/@urmillive" },
];

// `word` is the big poster word on the card; `tone` picks the poster colour.
export const projects = [
  {
    title: "WayVibe",
    word: "WayVibe",
    tone: "ember",
    featured: true,
    summary: "Plans with friends, anywhere.",
    description:
      "A social plans app. Tap a card and the plan locks itself; location is shared only until the plan ends. Free on Android; the iOS app is in App Store review.",
    stack: ["React Native", "NestJS", "PostgreSQL"],
    links: [
      { label: "wayvibe.app", href: "https://wayvibe.app" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.wayvibe.app" },
    ],
  },
  {
    title: "E-learning",
    word: "Learn",
    tone: "ink",
    summary: "Courses, blogs and paid certification tests.",
    description:
      "A MERN + Tailwind CSS platform. Admins manage users, content and certification tests; learners read blogs, use an in-browser code editor and take paid certification tests.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    links: [
      { label: "Live", href: "https://elearning-steel-three.vercel.app/" },
      { label: "Source", href: "https://github.com/urmillive/Elearning" },
    ],
  },
  {
    title: "Snake Game",
    word: "Snake",
    tone: "moss",
    summary: "Inspired by old Nokia keypad phones.",
    description: "A beginner-level Snake game inspired by old Nokia keypad phones.",
    stack: ["JavaScript"],
    links: [
      { label: "Play", href: "https://urmillive.github.io/snakegame/" },
      { label: "Source", href: "https://github.com/urmillive/snakegame" },
    ],
  },
  {
    title: "TicTacToe Game",
    word: "X·O",
    tone: "sky",
    summary: "A first React game.",
    description: "A beginner-level Tic Tac Toe game built with React.",
    stack: ["React"],
    links: [
      { label: "Play", href: "https://urmillive.github.io/TictactoeGameReact/" },
      { label: "Source", href: "https://github.com/urmillive/TictactoeGameReact" },
    ],
  },
];

// From Education.md (no public links exist for these).
export const earlierBuilds = [
  { title: "Advance Covid-19 Health Tracker", note: "Final-year college project showing live case data from an open API.", stack: "PHP, Bootstrap" },
  { title: "Jarvis AI for Desktop", note: "A desktop assistant, later rebuilt as Jarvis 2.0 with NLP.", stack: "Python" },
  { title: "Kitchen smarter QR stickers", note: "QR stickers to label and date food in the fridge.", stack: "Python" },
  { title: "Developer browser", note: "A browser for coders with quick Stack Overflow search.", stack: "Python, PyQt5" },
  { title: "College Management System", note: "Final-semester BCA project.", stack: "ASP.NET, C#" },
  { title: "Birthday Card Generator", note: "An Android app.", stack: "Android, Java" },
  { title: "Project Management System", note: "Corporate project.", stack: "Angular, Java Spring" },
];

// From the old Timeline.jsx, sorted by year. Wording lightly tidied, facts unchanged.
export const story = [
  { year: "2015", title: "Started coding", text: "Basic HTML and CSS during 10th standard." },
  { year: "2017", title: "Learnt C++", text: "Completed C++ during 12th standard." },
  { year: "2018", title: "BCA and a first laptop", text: "Started BCA, got my first laptop and built many Python projects." },
  { year: "2019", title: "First freelance project", text: "Started working on frontend projects as a freelancer." },
  { year: "2020", title: "First Hacktoberfest", text: "My first Hacktoberfest: contributing to open source." },
  { year: "2021", title: "GDSC and Google Cloud", text: "Joined the Google Developer Student Club at Parul University and completed a Google Cloud program." },
  { year: "2021", title: "Hackathons and MCA", text: "Built 12+ projects across hackathons and competitions. Started MCA at Parul University." },
  { year: "2022", title: "Won the Gateway hackathon", text: "Won the first hackathon organised by Gateway Group of Companies. Attended Hactrack 2.0 (cyber security track)." },
  { year: "2022", title: "Internships", text: "Web development intern at Fox Valley, then frontend developer at Warelogg, a logistics and warehousing startup." },
  { year: "2023", title: "Joined Asite Solutions", text: "Worked on projects at Asite Solutions." },
  { year: "2025", title: "Joined Upsquare Technologies", text: "Building products at Upsquare Technologies." },
  // TODO(owner): role titles and end dates for Asite and Upsquare are not in the repo.
];

export const skills = [
  { group: "Web", items: ["JavaScript", "TypeScript", "React", "Angular", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"] },
  { group: "Mobile", items: ["React Native", "Android (Java)", "Flutter UI"] },
  { group: "Backend & data", items: ["NestJS", "PostgreSQL", "Python", "NumPy", "Pandas"] },
  { group: "Craft", items: ["Data structures & algorithms", "Git", "Open source", "UI design (Canva, Photoshop, Adobe XD)"] },
];

export const education = [
  { place: "Parul University", course: "MCA", years: "Started 2021", note: null },
  { place: "Saurashtra University, Rajkot", course: "BCA, Computer Science", years: "Started 2018", note: "CGPA 8.9, college topper" },
  { place: "S.S.G.S School, Rajkot", course: "Senior secondary, science", years: "2017", note: null },
];
// TODO(owner): BCA/MCA start years come from the timeline; add completion years.

export const openSource = [
  "Hacktoberfest contributor",
  "GitHub Arctic Code Vault contributor",
  "Contributions to Eddiehub, codeforcauseorg and other communities",
];

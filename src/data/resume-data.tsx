import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Tobias Weißberg",
  initials: "TW",
  location: "Bonn, Germany, CET / CEST",
  locationLink: "https://www.google.com/maps/place/Bonn",
  about: "PhD Student in the Learning and Optimisation for Visual Computing Group at the University of Bonn.",
  summary: (
    <>
      PhD Student in the{" "}
      <a
        href="https://lovc.cs.uni-bonn.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-black hover:text-gray-700"
      >
        Learning and Optimisation for Visual Computing Group
      </a>{" "}
      at the University of Bonn.
      My interests lie in (Shape) Optimisation, Inverse Problems and Kinematics.
    </>
  ),
  avatarUrl: "https://lovc.cs.uni-bonn.de/wp-content/uploads/2024/09/weissberg.png",
  personalWebsiteUrl: "https://weissberg.io",
  contact: {
    email: "weissberg@uni-bonn.de",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tweissberg",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tobias-weißberg-84153b2a4/",
        icon: "linkedin",
      },
      {
        name: "GoogleScholar",
        url: "https://scholar.google.com/citations?hl=en&user=LlW4cpcAAAAJ",
        icon: "googleScholar",
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: "x",
      // },
    ],
  },
  education: [
    {
      school: "University of Bonn",
      degree: "Master's Degree in Computer Science (Graduated with distinction)",
      start: "2022",
      end: "2024",
    },
    {
      school: "University of Bonn",
      degree: "Bachelor's Degree in Mathematics",
      start: "2018",
      end: "2022",
    },
  ],
  work: [],
  // work: [
  //   {
  //     company: "Motion",
  //     link: "https://motionapp.com/",
  //     badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
  //     title: "Senior Software Engineer",
  //     start: "2025",
  //     end: null,
  //     description: (
  //       <>
  //         Working on internal AI agents platform allowing marketing specialists
  //         to create AI workflows.
  //       </>
  //     ),
  //   },
  //   {
  //     company: "Film.io",
  //     link: "https://film.io",
  //     badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
  //     title: "Software Architect",
  //     start: "2024",
  //     end: "2025",
  //     description: (
  //       <>
  //         Leading technical architecture of a blockchain-based film funding
  //         platform.
  //         <ul className="list-inside list-disc">
  //           <li>
  //             Architecting migration from CRA to Next.js for improved
  //             performance, SEO, and DX
  //           </li>
  //           <li>
  //             Established release process enabling faster deployments and
  //             reliable rollbacks
  //           </li>
  //           <li>
  //             Implementing system-wide monitoring and security improvements
  //           </li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     company: "Parabol",
  //     link: "https://parabol.co",
  //     badges: [
  //       "Remote",
  //       "React",
  //       "TypeScript",
  //       "Node.js",
  //       "GraphQL",
  //       "Tailwind CSS",
  //     ],
  //     title: "Senior Full Stack Developer",
  //     start: "2021",
  //     end: "2024",
  //     description: (
  //       <>
  //         Senior developer and squad leader for an enterprise agile meeting
  //         platform.
  //         <ul className="list-inside list-disc">
  //           <li>
  //             Built design system with Tailwind CSS, improving development speed
  //             and time to market
  //           </li>
  //           <li>
  //             Implemented engineering practices: PR automation, code review
  //             guidelines, and workflows
  //           </li>
  //           <li>
  //             Open source contributions to Relay DevTools and React i18n tooling
  //           </li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     company: "Clevertech",
  //     link: "https://clevertech.biz",
  //     badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
  //     title: "Lead Android Developer → Full Stack Developer",
  //     start: "2015",
  //     end: "2021",
  //     description: (
  //       <>
  //         Successfully transitioned from mobile to full-stack development while
  //         leading distributed teams.
  //         <ul className="list-inside list-disc">
  //           <li>
  //             Led frontend team at Evercast, building real-time platform
  //             supporting 30+ users per room with HD streaming and collaboration
  //             tools
  //           </li>
  //           <li>
  //             Developed offline-first Android app for DKMS, improving donor
  //             registration process
  //           </li>
  //           <li>
  //             Led development teams across multiple successful client projects
  //           </li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     company: "Jojo Mobile",
  //     link: "https://bsgroup.eu/",
  //     badges: ["On Site", "Android", "Java", "Kotlin"],
  //     title: "Android Developer → Lead Android Developer",
  //     start: "2012",
  //     end: "2015",
  //     description: (
  //       <>
  //         First Android developer, grew and led a team of 15+ engineers while
  //         establishing engineering culture.
  //         <ul className="list-inside list-disc">
  //           <li>
  //             Developed apps for major Polish companies including LOT, Polskie
  //             Radio, and Agora
  //           </li>
  //           <li>Built and mentored high-performing mobile development team</li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     company: "Nokia Siemens Networks",
  //     link: "https://www.nokia.com",
  //     badges: ["On Site", "C/C++", "LTE", "Agile"],
  //     title: "C/C++ Developer",
  //     start: "2010",
  //     end: "2012",
  //     description:
  //       "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
  //   },
  // ],
  skills: [
    "Numerical Mathematics",
    "Optimization",
    "Machine Learning",
    "Python",
    "C++",
    "Graphs",

  //   "TypeScript",
  //   "Tailwind CSS",
  //   "Design Systems",
  //   "WebRTC",
  //   "WebSockets",
  //   "Node.js",
  //   "GraphQL",
  //   "Relay",
  //   "System Architecture",
  //   "Remote Team Leadership",
  ],
  projects: [
  ],
  publications: [
    {
      title: "Symmetry Informative and Agnostic Feature Disentanglement for 3D Shapes",
      techStack: [
        "Shape Analysis",
        "Symmetry",
        "Meshes",
        "Feature Extraction",
        "Disentanglement",
        "Machine Learning",
        "Shape Matching",
      ],
      description:
        "",
      link: {
        label: "Link",
        href: "https://weissberg.io",
      },
      authors: [
        "Tobias Weißberg", "Weikang Wang", "Paul Roetzer", "Nafie El Amrani", "Florian Bernard"
      ],
      publisher: "International Conference on 3D Vision (3DV), March 2026",
    },
    {
      title: "χ: Symmetry Understanding of 3D Shapes via Chirality Disentanglement",
      techStack: [
        "Shape Analysis",
        "Symmetry",
        "Meshes",
        "Feature Extraction",
        "Disentanglement",
        "Machine Learning",
        "Shape Matching",
      ],
      description:
        "",
      link: {
        label: "Chi",
        href: "https://wei-kang-wang.github.io/chirality/",
      },
      authors: [
        "Weikang Wang †", "Tobias Weißberg †", "Nafie El Amrani", "Florian Bernard"
      ],
      publisher: "IEEE/CVF International Conference on Computer Vision (ICCV), Oct 2025",
    },
    {
      title: "Beyond Complete Shapes: A Benchmark for Quantitative Evaluation of 3D Shape Matching Algorithms",
      techStack: [
        "Shape Analysis",
        "Meshes",
        "Dataset",
        "Symmetry",
        "Shape Matching"
      ],
      description:
        "",
      link: {
        label: "BeCoS",
        href: "https://nafieamrani.github.io/BeCoS/",
      },
      authors: [
       "Viktoria Ehm †", "Nafie El Amrani †", "Yizheng Xie", "Lennart Bastian", "Maolin Gao", "Weikang Wang", "Lu Sang", "Dongliang Cao", "Tobias Weißberg", "Zorah Lähner", "Daniel Cremers", "Florian Bernard"
      ],
      publisher: "Computer Graphics Forum, Jun 2025",
    },
  ],
  achievements: [
    {
      title: "Prize for Outstanding Thesis, Bonn Computer Science Society (e.V.), 2024",
      techStack: [
      ],
      description:
        "Awarded for my master’s thesis 'Learning Semantic Understanding of Human-Made Sketches', which advanced methods for machine learning–based interpretation of hand-drawn sketches.",
      link: {
        label: "Bonn Computer Science Society",
        href: "https://big.cs.uni-bonn.de/aktivitaeten/post-11/",
      },
      date: "June 2025",
    },
  ],
} as const;

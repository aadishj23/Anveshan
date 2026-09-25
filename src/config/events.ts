export interface EventItem {
  id: number;
  slug: string;
  name: string;
  description: string;
  date: string;
  image: string;
}

export const eventsData: EventItem[] = [
  {
    id: 5,
    slug: "tech-starter-2k24",
    name: "Tech Starter 2k24",
    description:
      "Tech Starter is Anveshan's month-long foundational cohort, specially designed to equip students with essential skills across core tech domains. Led by our Core Team members, this immersive program included hands-on sessions on HTML & CSS, Git and GitHub, JavaScript, C++, Java, and an Introduction to Data Structures and Algorithms. Each session was crafted to provide a practical, beginner-friendly approach, allowing students to build confidence and solidify their understanding of these foundational topics.",
    date: "14-09-2024 to 17-10-2024",
    image: "/assets/event-photos/TechStarter 2k24/image.png",
  },
  {
    id: 3,
    slug: "meet-your-alumni-sawarnee-sethi",
    name: "Meet Your Alumni: Sawarnee Sethi",
    description:
      "Meet Your Alumni is a special event by Anveshan, designed to connect BPIT students with accomplished alumni for invaluable career guidance. Recently, we hosted Mr. Sawarnee Sethi, a Cloud Engineer at AWS, who shared his expertise on Internships and Placements.",
    date: "18-03-2024",
    image: "/assets/event-photos/Meet Your Alumni/1.png",
  },
  {
    id: 1,
    slug: "hackbpit-2k23",
    name: "HackBPIT 2k23",
    description:
      "HackBPIT, the flagship hackathon of BPIT, is where innovative ideas meet real-world problem-solving! Hosted by Anveshan, HackBPIT 2023 drew an impressive 100+ teams from across the country, all competing for a total prize pool of 1 Lakh with 50k Cash Prize. This high-energy, 30-hour offline event brought together students, industry mentors, and tech enthusiasts.",
    date: "29-11-2023 to 30-11-2023",
    image: "/assets/event-photos/HackBPIT 2k23/Square Poster .jpg",
  },
  {
    id: 2,
    slug: "technovation-2k23",
    name: "Technovation 2k23",
    description:
      "Technovation is Anveshan's annual learning series, dedicated to igniting passion and sparking innovation in tech. Over the course of an immersive week, juniors have the unique opportunity to learn from experienced seniors and alumni across multiple domains, including App Development, Open Source, Machine Learning, Web Development, Cloud Computing, and DevOps.",
    date: "25-09-2023 to 29-09-2023",
    image: "/assets/event-photos/Technovation 2k23/2.jpg",
  },
  {
    id: 4,
    slug: "cracking-gate-unacademy",
    name: "Cracking Gate by Unacademy",
    description:
      "Anveshan, in collaboration with Unacademy, hosted a focused session on GATE Preparation led by Mr. Gurupal Singh Chawla, a renowned GATE educator at Unacademy. This event provided students with essential insights into the GATE examination, covering preparation strategies and tips.",
    date: "28-03-2023",
    image: "/assets/event-photos/Gate Session by Unacademy/image copy.png",
  },
  {
    id: 6,
    slug: "placements-google",
    name: "Placements @Google",
    description:
      "Anveshan hosted an inspiring session on Placements, featuring our distinguished alumni, Neha Bedi and Chayan, both Engineers at Google. They shared their journeys from BPIT to landing positions at one of the world’s leading tech companies.",
    date: "19-06-2022",
    image: "/assets/event-photos/Placements @Google/image copy 2.png",
  },
  {
    id: 7,
    slug: "successful-engineer-fraz",
    name: "Successful Engineer ft Fraz",
    description:
      "Anveshan had the pleasure of hosting Mohammad Fraz, a Software Engineer at Google and a popular YouTuber known for his tech content. This engaging session was filled with engineering tips that ranged from optimizing study habits to technical skills and career development.",
    date: "12-03-2022",
    image: "/assets/event-photos/Succesfull Engineer ft Fraz/2.png",
  },
];

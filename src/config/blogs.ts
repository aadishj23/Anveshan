export interface BlogItem {
  title: string;
  description: string;
  src: string;
  content: string;
}

export const blogsData: BlogItem[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    content:
      "Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style.",
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    content:
      "Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics.",
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    content:
      "Metallica, an iconic American heavy metal band, is renowned for their powerful sound and intense performances.",
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    content:
      "Led Zeppelin, a legendary British rock band, is renowned for their innovative sound and profound impact on the music industry.",
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    content:
      '"Aawarapan", a Bollywood movie starring Emraan Hashmi, is renowned for its intense storyline and powerful performances.',
  },
];

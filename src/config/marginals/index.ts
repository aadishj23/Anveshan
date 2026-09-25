export const navItems = [
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
  { name: "Team", href: "/#team" },
  { name: "Projects", href: "/#projects" },
  { name: "Achievers", href: "/#achievers" },
  { name: "Stats", href: "/#stats" },
  { name: "Contact", href: "/#contact" },
];

export const logo = {
  href: "/#hero",
  src: "/assets/logo_bg_remove.png",
  alt: "Anveshan Logo",
  width: 140,
  height: 40,
};

export const hamburgerIcon = {
  src: "/hamburger.svg",
  alt: "Menu",
  width: 30,
  height: 30,
};

export const DISCORD_LINK = "https://discord.gg/";
export const DEVFOLIO_LINK = "https://anveshan.dev/";

export const background = "/assets/bg.svg";

export type Social = {
  name: string;
  href: string;
  icon: string;
};

export const SOCIALS: Social[] = [
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/anveshan.bpit/",
    icon: "/assets/Socials/Instagram.svg",
  },
  {
    name: "LINKEDIN",
    href: "https://www.linkedin.com/company/anveshan-community/",
    icon: "/assets/Socials/Linkedin.svg",
  },
  {
    name: "TWITTER",
    href: "https://x.com/An_veshan",
    icon: "/assets/Socials/x.svg",
  },
  {
    name: "YOUTUBE",
    href: "https://www.youtube.com/@anveshan_bpit",
    icon: "/assets/Socials/Youtube.svg",
  },
];

export const FOOTER_TEXT =
  "© All Rights Reserved | Designed & Built with ❤️ by Team Anveshan";

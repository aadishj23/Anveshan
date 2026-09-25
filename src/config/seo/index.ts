const images = ["/assets/logo.png", "/Cover.png"];
const description =
  "Anveshan is a premier technical society focused on providing mentorship to equip students with essential tech skills, knowledge, and hands-on experience in DSA, Web/App Development, AI/ML, and emerging technologies.";

const title = {
  default: "Anveshan | Explore. Innovate. Build.",
  template: `%s | Anveshan`,
};
const url = "https://anveshan.dev/";
const metadataBase = new URL(url);

export const metaDataObject = {
  metadataBase: metadataBase,
  title: title,
  openGraph: {
    url: url,
    description: description,
    images: images,
    siteName: "Anveshan",
  },
  description: description,
};

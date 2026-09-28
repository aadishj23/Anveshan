export const measurementData = {
  lines: [
    // Top guideline across Anveshan
    {
      id: "l-top",
      style: { width: "76%", height: "1px", top: "15%", left: "5%" },
    },
    // Baseline guideline under Anveshan
    {
      id: "l-baseline",
      style: { width: "76%", height: "1px", top: "55%", left: "5%" },
    },
    // Left vertical guideline framing Anve
    {
      id: "l-left",
      style: { width: "1px", height: "54%", top: "4%", left: "7%" },
    },
    // Right vertical guideline framing shan
    {
      id: "l-right",
      style: { width: "1px", height: "54%", top: "4%", left: "78.5%" },
    },
    // Center vertical guideline (Anve / shan boundary)
    {
      id: "l-mid-1",
      style: { width: "1px", height: "66%", top: "4%", left: "45.5%" },
    },
    // BPIT horizontal top guideline
    {
      id: "l-bpit-top",
      style: { width: "31%", height: "1px", top: "60%", left: "48%" },
    },
    // BPIT horizontal bottom guideline
    {
      id: "l-bpit-bottom",
      style: { width: "31%", height: "1px", top: "80%", left: "48%" },
    },
    // BPIT vertical left guideline
    {
      id: "l-bpit-left",
      style: { width: "1px", height: "25%", top: "57%", left: "49%" },
    },
    // BPIT vertical right guideline
    {
      id: "l-bpit-right",
      style: { width: "1px", height: "25%", top: "57%", left: "78.5%" },
    },
    // Horizontal Arrow above Anve (20cm)
    {
      id: "arr-anve",
      src: "/lines/line-132.svg",
      style: { width: "38.5%", height: "3.5%", top: "7%", left: "7%" },
      isSvg: true,
    },
    // Horizontal Arrow above shan (25cm)
    {
      id: "arr-shan",
      src: "/lines/line-132.svg",
      style: { width: "33%", height: "3.5%", top: "7%", left: "45.5%" },
      isSvg: true,
    },
    // Small Arrow between Anve and shan (0.5cm)
    {
      id: "arr-gap",
      src: "/lines/line-134.svg",
      style: { width: "3.5%", height: "2%", top: "62%", left: "43.8%" },
      isSvg: true,
    },
    // Vertical Arrow for BPIT (5cm)
    {
      id: "arr-bpit",
      src: "/lines/line-133.svg",
      style: { width: "2.5%", height: "20%", top: "60%", left: "80%" },
      isSvg: true,
    },
  ],
  labels: [
    { id: "lb1", label: "20cm", style: { top: "1%", left: "26.2%" } },
    { id: "lb2", label: "25cm", style: { top: "1%", left: "62%" } },
    {
      id: "lb3",
      label: "0.5cm",
      style: { top: "69%", left: "45.5%" },
      isSmall: true,
    },
    { id: "lb4", label: "5cm", style: { top: "70%", left: "85%" } },
  ],
};

export const textItems = [
  { id: "ti1", text: "EXPLORE", isBold: false },
  { id: "ti2", text: "INNOVATE", isBold: true },
  { id: "ti3", text: "BUILD", isBold: false },
];

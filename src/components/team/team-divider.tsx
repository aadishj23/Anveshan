import React from "react";

export default function TeamDivider() {
  return (
    <div id="team-divider" className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-1 bg-transparent">
      <svg
        viewBox="0 -15 1714 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 sm:h-24 md:h-32 lg:h-40 xl:h-48 block"
        preserveAspectRatio="none"
      >
        {/* Grey contour ribbon offset */}
        <path
          d="M155.712 149.534L-36 93.6447V230H1750V28.017L1612.62 129.211L1519.11 17.8553L1402.62 172.821L1223.45 129.211L1117.4 6C994.646 51.022 743.697 142.76 721.966 149.534C700.235 156.309 692.017 71.3454 690.624 28.017L474.36 141.066L209.516 17.8553L155.712 149.534Z"
          fill="#B0B0B0"
          transform="translate(0, -14)"
        />
        {/* Dark mountain body blending into Achievers / Hall of Fame */}
        <path
          d="M155.712 149.534L-36 93.6447V230H1750V28.017L1612.62 129.211L1519.11 17.8553L1402.62 172.821L1223.45 129.211L1117.4 6C994.646 51.022 743.697 142.76 721.966 149.534C700.235 156.309 692.017 71.3454 690.624 28.017L474.36 141.066L209.516 17.8553L155.712 149.534Z"
          fill="#0D0D0D"
        />
      </svg>
    </div>
  );
}

export const WaveProjects = ({ className, colorWave }: { className: string, colorWave: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 2479 542"
      fill={colorWave}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stopColor={colorWave} />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      <g filter="url(#filter0_ii_996_4797)">
        <path
          d="M2479 0H1.94224C1.94224 0 -7.5514 394.15 15.4399 389.174C80.0275 375.196 377.421 291.049 458.432 293.429C539.443 295.81 531.9 443.324 675.789 367.342C675.789 367.342 703.483 344.862 852.831 324.142C1002.18 303.422 1135.81 548.446 1272.49 533.997C1362.98 524.43 1431.31 437.676 1563.91 425.259C1696.51 412.841 1686.31 307.511 1748.97 304.125C1811.63 300.738 1934.03 442.976 1963.17 324.142C1992.31 205.309 2135.11 385.706 2219.63 354.924C2304.14 324.142 2339.12 354.924 2339.12 354.924L2479 421.516V0Z"
          fill='url(#gradient)'
        />
      </g>
      <defs>
        <linearGradient id="gradient_2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="65%" stopColor={colorWave} />
          <stop offset="100%" stopColor="#00" />
        </linearGradient>
      </defs>
      <g filter="url(#filter1_i_996_4797)">
        <path
          d="M0 0H16.1379L18 389.041L0 393V0Z"
          fill='url(#gradient_2)'
          fill-opacity="0.9"
        />
      </g>
    </svg>
  );
};

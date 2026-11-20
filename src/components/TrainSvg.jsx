export default function TrainSvg(){return(
<svg viewBox="0 0 900 130" width="100%" aria-hidden="true">
<defs><linearGradient id="bd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f4f7ff"/><stop offset=".55" stopColor="#cfd8ee"/><stop offset="1" stopColor="#7d8aa8"/></linearGradient>
<linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1b2a4d"/><stop offset="1" stopColor="#4f78c9"/></linearGradient>
<radialGradient id="hl"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#bcd2ff00"/></radialGradient></defs>
<path d="M8 28H700Q850 28 892 88V100H8Z" fill="url(#bd)"/>
<path d="M8 66H880L890 78H8Z" fill="#e11d48"/><path d="M8 78H890V84H8Z" fill="#4f7cff"/>
{[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(i=><rect key={i} x={24+i*47} y="40" width="32" height="20" rx="5" fill="url(#gl)"/>)}
<path d="M760 38H820Q850 44 872 74H760Z" fill="url(#gl)"/>
{[170,330,490,650].map(x=><rect key={x} x={x} y="28" width="3" height="72" fill="#5a667f"/>)}
<rect x="300" y="14" width="60" height="6" rx="3" fill="#475069"/><path d="M330 14L316 28H344Z" fill="#475069"/>
<circle cx="888" cy="90" r="26" fill="url(#hl)"/>
{[60,150,250,340,430,520,610,700,790].map(x=><g key={x}><circle cx={x} cy="110" r="11" fill="#1f2433"/><circle cx={x} cy="110" r="4" fill="#9aa5c0"/></g>)}
</svg>)}

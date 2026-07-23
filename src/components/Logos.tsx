export const JeonnamLogo = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Yellow Square Background */}
    <rect x="5" y="5" width="90" height="90" rx="8" fill="#FFD600" />
    <rect x="5" y="5" width="90" height="90" rx="8" stroke="#FFFFFF" strokeWidth="4" />
    
    {/* Red Sun */}
    <circle cx="35" cy="35" r="12" fill="#FF4B4B" />
    
    {/* Green Leaf */}
    <path d="M50 55 C 65 35, 85 40, 85 40 C 85 40, 80 55, 65 55 Z" fill="#00A859" />
    
    {/* Blue Wave */}
    <path d="M15 65 C 25 50, 40 70, 50 65 C 60 60, 75 60, 85 75 L 85 85 C 65 75, 45 90, 25 80 C 15 75, 10 70, 15 65 Z" fill="#0072CE" />
  </svg>
);

export const GwangyangLogo = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Blue Brush Stroke 'G' */}
    <path d="M 85 30 A 40 40 0 1 0 50 90 A 40 40 0 0 0 85 65" stroke="#004EA2" strokeWidth="16" strokeLinecap="round" fill="none" />
    
    {/* Red Sun */}
    <circle cx="50" cy="40" r="10" fill="#E60012" />
    
    {/* Yellow Stroke */}
    <path d="M 40 60 L 95 60" stroke="#FFC72C" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

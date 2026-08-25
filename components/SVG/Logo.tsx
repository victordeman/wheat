import React from "react";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  showTagline?: boolean;
  variant?: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-10",
  showWordmark = true,
  showTagline = false,
  variant = "dark",
}) => {
  const textColor = variant === "light" ? "text-white" : "text-brand-dark";
  const subtextColor = variant === "light" ? "text-gray-300" : "text-gray-600";
  const goldColor = "#DAA520";
  const greenColor = variant === "light" ? "#1B634B" : "#0F382C";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Symbol: Wheat Sheaf Interlocking with Gear forming 'W' */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-square flex-shrink-0"
      >
        {/* Background emblem shape */}
        <circle cx="50" cy="50" r="46" fill={greenColor} />
        <circle cx="50" cy="50" r="44" stroke={goldColor} strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Gear Teeth Outer Ring */}
        <path
          d="M50 12 L53 18 H47 L50 12 Z M88 50 L82 53 V47 L88 50 Z M50 88 L47 82 H53 L50 88 Z M12 50 L18 47 V53 L12 50 Z M77 23 L73 28 L68 23 L77 23 Z M77 77 L68 77 L73 72 L77 77 Z M23 77 L23 68 L28 73 L23 77 Z M23 23 L28 23 L23 28 L23 23 Z"
          fill={goldColor}
        />

        {/* Stylized W (Left arm gear/industrial, middle wheat sheaf stem, right arm wheat grain) */}
        {/* Left 'W' stalk / gear arc */}
        <path
          d="M 28 30 C 28 30, 32 65, 42 75 C 45 78, 48 78, 50 72 C 52 78, 55 78, 58 75 C 68 65, 72 30, 72 30"
          stroke={goldColor}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Inner Wheat Ears forming center of 'W' */}
        {/* Left Wheat Grains */}
        <path d="M 33 40 C 26 36, 25 28, 32 30 C 35 38, 38 48, 45 60" fill={goldColor} />
        <path d="M 38 48 C 30 46, 30 38, 36 39 C 40 47, 44 54, 48 64" fill={goldColor} />

        {/* Right Wheat Grains */}
        <path d="M 67 40 C 74 36, 75 28, 68 30 C 65 38, 62 48, 55 60" fill={goldColor} />
        <path d="M 62 48 C 70 46, 70 38, 64 39 C 60 47, 56 54, 52 64" fill={goldColor} />

        {/* Center Wheat Head */}
        <path d="M 50 22 C 46 30, 48 40, 50 50 C 52 40, 54 30, 50 22 Z" fill={goldColor} />
        <path d="M 50 18 L 50 24" stroke={goldColor} strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif font-bold text-lg md:text-xl tracking-tight ${textColor}`}>
              Project <span className="text-brand-gold font-extrabold uppercase">WHEAT-NESS</span>
            </span>
          </div>
          {showTagline && (
            <span className={`text-[10px] md:text-xs font-semibold tracking-wider uppercase mt-0.5 ${subtextColor}`}>
              Federal Republic of Nigeria
            </span>
          )}
        </div>
      )}
    </div>
  );
};

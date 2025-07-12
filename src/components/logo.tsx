import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* Abstract SVG Logo */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand-orange"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M17.6 10L12.8 22"
          stroke="#0D1B2A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 13L19.2 19"
          stroke="#0D1B2A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13L7.2 19"
          stroke="#0D1B2A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Site Name */}
      <span className="text-2xl font-bold text-white">
        Jay Tech
      </span>
    </Link>
  );
};

export default Logo;
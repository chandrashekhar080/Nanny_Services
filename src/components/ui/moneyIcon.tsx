export default function MoneyBagIcon({ size = 32, color = "#8B0000", className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2H8l1.5 3h5L16 2zM12 7C8.686 7 6 9.686 6 13s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm1 8h-2v-1h2v1zm0-2h-2c0-1 .5-1.5 1-1.5s1 .5 1 1.5z" />
      <circle cx="4" cy="8" r="1" />
      <circle cx="19" cy="9" r="1" />
      <circle cx="6" cy="6" r="1" />
    </svg>
  );
}

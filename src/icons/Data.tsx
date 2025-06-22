"use client";

const Data = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0H12V12H8V0ZM6 7H2V12H6V7ZM0 16V13H20V16H0ZM18 3H14V12H18V3Z"
      />
    </svg>
  );
};

export default Data;

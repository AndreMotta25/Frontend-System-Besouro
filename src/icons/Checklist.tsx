const Checklist = ({className, style}: { className: string, style?: { color: string } }) => {
  return (
    <svg
      className={className}
      width='19'
      height='20'
      viewBox='0 0 19 20'
      fill={style?.color}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.5 2H12.32C11.9 0.84 10.8 0 9.5 0C8.2 0 7.1 0.84 6.68 2H2.5C1.4 2 0.5 2.9 0.5 4V18C0.5 19.1 1.4 20 2.5 20H16.5C17.6 20 18.5 19.1 18.5 18V4C18.5 2.9 17.6 2 16.5 2ZM9.5 2C10.05 2 10.5 2.45 10.5 3C10.5 3.55 10.05 4 9.5 4C8.95 4 8.5 3.55 8.5 3C8.5 2.45 8.95 2 9.5 2ZM6.79 15.29L4.2 12.7C4.01275 12.5132 3.90751 12.2595 3.90751 11.995C3.90751 11.7305 4.01275 11.4768 4.2 11.29C4.59 10.9 5.22 10.9 5.61 11.29L7.5 13.17L13.38 7.29C13.77 6.9 14.4 6.9 14.79 7.29C15.18 7.68 15.18 8.31 14.79 8.7L8.2 15.29C7.82 15.68 7.18 15.68 6.79 15.29Z'
      />
    </svg>
  );
};

export default Checklist;

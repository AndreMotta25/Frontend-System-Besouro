const RightArrow = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      fill='currentColor'
      width='7'
      height='12'
      viewBox='0 0 7 12'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.2925 10.2875L4.1725 6.40751L0.2925 2.52751C-0.0975004 2.13751 -0.0975005 1.50751 0.2925 1.11751C0.6825 0.727514 1.3125 0.727514 1.7025 1.11751L6.2925 5.70751C6.6825 6.09751 6.6825 6.72751 6.2925 7.11751L1.7025 11.7075C1.51567 11.8948 1.26202 12 0.9975 12C0.732982 12 0.479331 11.8948 0.2925 11.7075C-0.0875 11.3175 -0.0975001 10.6775 0.2925 10.2875Z'
      />
    </svg>
  );
};

export default RightArrow;

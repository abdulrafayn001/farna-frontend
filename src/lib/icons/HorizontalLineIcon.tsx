import React from 'react';

const HorizontalLineIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12h18"
    />
  </svg>
);

HorizontalLineIcon.defaultProps = {
  className: '',
};

export default HorizontalLineIcon;

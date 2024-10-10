import React from 'react';
type Props = {
  isOpenBurguer: boolean;
  classStyle?: string;
  classStyleResponsive?: string;
  handleNavbar: () => void;
};
const BurguerButton = (props: Props) => {
  return (
    <svg
      className={`${props.isOpenBurguer && props.classStyle} ${props.classStyleResponsive}`}
      stroke='currentColor'
      fill='currentColor'
      onClick={props.handleNavbar}
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='40'
      height='40'
      viewBox='0 0 50 50'
    >
      <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z'></path>
    </svg>
  );
};

export default BurguerButton;

'use client';

import { HideMenu } from '@/functions/HideMenu';
import RightArrow from '@/icons/RightArrow';
import React from 'react';

interface HideSideMenuButton {
  hideMenuClick: () => void
}

const HideSideMenuButton: React.FC<HideSideMenuButton> = ({hideMenuClick}) => {
  return (
    <button
      className='hide-menu bg-bettleBlue p-1 w-6 h-6 flex items-center justify-center rounded-full m-0 absolute right-[-12px] top-[47%] cursors-pointer'
      onClick={() => {HideMenu('hide-class', 'side-menu-button'); hideMenuClick()}}>
      <RightArrow className='h-3 scale-x-[-1] w-fit text-white mr-1' />
    </button>
  );
};

export default HideSideMenuButton;

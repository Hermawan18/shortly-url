'use client';
import Image from 'next/image';
import VisibleNavbar from './visibleNavbar';

import Logo from '@/app/assets/images/logo.svg';
import { useState } from 'react';

export default function Navbar() {
  const [visibleNavbar, setVisibleNavbar] = useState<boolean>(false);
  return (
    <div className="flex justify-between md:justify-normal mx-3 relative">
      <a href="#">
        <Image src={Logo} alt="logo" />
      </a>

      <div className="hidden md:visible md:flex md:mx-7">
        <a href="#" className="md:mx-4">
          <h1>Features</h1>
        </a>
        <a href="#" className="md:mx-4">
          <h1>Pricing</h1>
        </a>
        <a href="#" className="md:mx-4">
          <h1>Resources</h1>
        </a>
      </div>

      <label htmlFor="nav-visible" className="sm:hidden">
        <button onClick={() => setVisibleNavbar(true)}>
          <svg className="icon-menu" width="25" viewBox="0 0 512 512">
            <g>
              <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"></path>
            </g>
            <g>
              <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"></path>
            </g>
            <g>
              <path
                d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
                  C512,404.954,503.046,396,492,396z"
              ></path>
            </g>
          </svg>
        </button>
      </label>

      {visibleNavbar ? <VisibleNavbar setVisibleNavbar={setVisibleNavbar} /> : null}
    </div>
  );
}

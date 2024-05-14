'use client';

import { ReactNode } from 'react';

export default function VisibleNavbar({ setVisibleNavbar }: { setVisibleNavbar: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="absolute top-10 right-0 bg-dark-violet text-white rounded-md py-5 px-14 w-full">
      <ul className="text-center">
        <li className="mb-3">
          <a href="#">Feauters</a>
        </li>
        <li className="mb-3">
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
      <button onClick={() => setVisibleNavbar(false)} className="absolute right-3 top-2">
        X
      </button>
    </div>
  );
}

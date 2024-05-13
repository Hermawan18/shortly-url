'use client';

import { useState } from 'react';

export default function ResultGenerate() {
  const [links, setLinks] = useState([]);
  return (
    <>
      <div className="bg-sky lg:flex lg:justify-between px-5 py-2">
        <div className="bg-white">
          <h1 className=" px-3 py-3 border-b-4 border-b-sky">https://tailwindcss.com/docs/flex-grow</h1>
          <div className="lg:flex px-3">
            <h1 className="text-cyan py-3">https://rebrand.ly/egjf26e</h1>
            <button className="lg:ms-5 bg-cyan p-2 rounded-md w-full my-3">Copy</button>
          </div>
        </div>
      </div>
    </>
  );
}

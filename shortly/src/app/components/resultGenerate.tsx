'use client';
import { TypeLink } from '@/type';
import { ReactNode } from 'react';

export default function ResultGenerate({ links }: { links: TypeLink[] }) {
  return (
    <>
      <div className="bg-sky lg:flex lg:flex-col px-5 py-2 overflow-auto h-[500px]">
        {links.map((el, i) => {
          return (
            <div key={i} className="bg-white lg:flex lg:justify-between lg:border-b-4 lg:border-b-sky">
              <h1 className=" px-3 py-3 border-b-4 border-b-sky lg:w-1/2">{el.destination}</h1>
              <div className="lg:flex px-3">
                <h1 className="text-cyan py-3 lg:grow">{el.shortUrl}</h1>
                <button className="lg:ms-5 bg-cyan p-2 rounded-md w-full my-3">Copy</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

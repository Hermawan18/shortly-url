'use client';
import { TypeLink } from '@/type';
import { useState } from 'react';

export default function ResultGenerate({ links }: { links: TypeLink[] }) {
  const [copyLink, setCopyLink] = useState<boolean>(false);
  const [textLink, setTextLink] = useState<string>(links[0].shortUrl);

  const handleCopyClick = async () => {
    setCopyLink(true);
    await navigator.clipboard.writeText(textLink);

    setInterval(() => {
      setCopyLink(false);
    }, 4000);
  };
  return (
    <>
      <div className="bg-sky lg:flex lg:flex-col px-5 py-2">
        <div className="bg-white lg:flex lg:justify-between lg:border-b-4 lg:border-b-sky">
          <h1 className=" px-3 py-3 border-b-4 border-b-sky lg:w-1/2">{links[0].destination}</h1>
          <div className="lg:flex px-3">
            <h1 className="text-cyan py-3 lg:grow">{links[0].shortUrl}</h1>
            {copyLink ? (
              <button className="lg:ms-5 bg-grayish-violet p-2 rounded-md w-full my-3">Copied!</button>
            ) : (
              <button onClick={handleCopyClick} className="lg:ms-5 bg-cyan p-2 rounded-md w-full my-3">
                Copy
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

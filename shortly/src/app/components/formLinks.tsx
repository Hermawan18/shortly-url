'use client';
import Image from 'next/image';
import ResultGenerate from './resultGenerate';

import BgForm from '@/app/assets/images/bg-shorten-mobile.svg';

import { useEffect, useState, CSSProperties } from 'react';
import { FormEvent } from 'react';
import { ClipLoader, BarLoader } from 'react-spinners';
import { TypeLink, TypeFetchLinks, TypeErrFetch } from '@/type';

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : 'http://localhost:3000';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export default function FormLinks() {
  const [links, setLinks] = useState<TypeLink[]>([]);
  const [inputLink, setInputLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');
  const [apiLImit, setApiLimit] = useState<boolean>(false);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl + '/api/links', {
        method: 'GET',
        cache: 'no-store',
      });

      const responseBody: TypeFetchLinks = await response.json();
      setLinks(responseBody?.data);

      if (inputLink !== responseBody?.data[0]?.destination) {
        setApiLimit(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setInputLink('');
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLink(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(baseUrl + '/api/links', {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({ link: inputLink }),
    });

    const responseBody: TypeErrFetch = await response.json();

    setErrMsg(responseBody.message);

    if (responseBody.statusCode !== 400) {
      fetchLinks();
    }
  };

  return (
    <>
      <div className="relative lg:top-3 overflow-hidden rounded-lg bg-grayish-violet p-5 h-36 mt-10 mb-3 mx-3 lg:mx-0 lg:mt-20">
        <Image src={BgForm} alt="backgroun form" className="absolute -z-0 top-0 right-0" />
        <form onSubmit={handleSubmit} className="absolute z-10 left-3 top-7 right-3 bottom-3 flex flex-col lg:flex-row py-1">
          <div className="lg:grow ">
            <input type="text" onChange={handleInput} placeholder="Shorten a link here..." className="my-3 rounded-lg h-10 px-3 w-full lg:mb-1" />
            {apiLImit ? <p className="text-red lg:ps-2">API requests are already limited</p> : errMsg ? <p className="text-red lg:ps-2">{errMsg}</p> : null}
          </div>
          <button type="submit" className="bg-cyan text-white rounded-lg h-10 lg:my-[13.5px] lg:ms-2 lg:p-2">
            Shorten it!
          </button>
        </form>
      </div>

      <BarLoader color="#b759ff" loading={loading} cssOverride={override} height={4} width={200} aria-label="Loading Spinner" data-testid="loader" />
      {links.length !== 0 ? <ResultGenerate links={links} /> : null}
    </>
  );
}

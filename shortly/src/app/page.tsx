import Logo from '@/app/assets/images/logo.svg';
import WorkIlustration from '@/app/assets/images/illustration-working.svg';
import BrandRecognition from '@/app/assets/images/icon-brand-recognition.svg';
import DetailedRecord from '@/app/assets/images/icon-detailed-records.svg';
import FullyCustom from '@/app/assets/images/icon-fully-customizable.svg';
import Footer from '@/app/assets/images/bg-boost-mobile.svg';

import Image from 'next/image';
import FormLinks from './components/formLinks';

export default function Home() {
  return (
    <div className="lg:mx-28 md:mx-32 pt-6 lg:pt-14">
      {/* navbar */}
      <div className="flex justify-between md:justify-normal mx-3">
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
        </label>
      </div>
      {/* end navbar */}

      {/* banner */}
      <div className="text-center lg:text-left my-4 mx-3 lg:flex">
        <div className="overflow-hidden lg:order-2">
          <Image src={WorkIlustration} alt="work ilustration" className="ms-10 md:ms-28 lg:m-auto" />
        </div>

        <div className="my-4 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">More than just</h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">shorter links</h1>
          <p className="text-gray">{"Build your brand's recognition and get detailed insights on how your links are performing"}</p>
        </div>
      </div>
      {/* end banner */}

      {/* form input */}
      <FormLinks />
      {/* end form input */}

      {/* result short link */}

      {/* end result short link */}

      {/* profit */}
      <div className="text-center bg-sky pt-2 lg:h-[800px] lg:mx-0 pb-20 lg:px-2 md:pb-3">
        <div className="mt-14">
          <h1 className="text-2xl font-bold mb-5 ">Advanced Statistics</h1>
          <p className="text-gray">Track how links are performing across the web with our advanced statistics dashbord.</p>
        </div>

        <div className="lg:flex lg:justify-center lg:mt-24">
          {/* brand recognitioin */}
          <div className="bg-white rounded-md relative lg:mt-0 mt-24 pt-16 pb-3 px-3 lg:px-5 lg:w-[300px] lg:me-0 mx-3 ">
            <div className="absolute left-1/2 -top-1/2 lg:-top-1/4 -translate-x-1/2 translate-y-1/2 lg:translate-y-1/4 bg-dark-violet w-24 py-8 rounded-full">
              <Image src={BrandRecognition} alt="Brand Recognition" className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold mb-5 ">Brand Recognition</h1>
            <p className="text-gray">{"Boost your brand recognition with each click. Generic links dont't mean a thing. Branded links help instil confidence in your content."}</p>
          </div>

          <div className="bg-cyan lg:w-12 w-2 lg:h-2 h-12 m-auto lg:my-auto lg:mx-0"></div>

          {/* detailed record */}
          <div className=" bg-white rounded-md relative lg:top-5 mt-8 pt-16 pb-3 px-3 lg:px-5 lg:w-[300px] mx-3 lg:mx-0">
            <div className="absolute left-1/2 -top-1/2 lg:-top-1/4 -translate-x-1/2 translate-y-1/2 lg:translate-y-1/4 bg-dark-violet w-24 py-8 rounded-full">
              <Image src={DetailedRecord} alt="Detail record" className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold mb-5 ">Detialed Record</h1>
            <p className="text-gray">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>

          <div className="bg-cyan lg:w-12 w-2 lg:h-2 h-12 m-auto lg:my-auto lg:mx-0"></div>

          {/* fully customizable */}
          <div className="bg-white rounded-md relative lg:top-20 mt-8 pt-16 pb-3 px-3 lg:px-5 lg:w-[300px] mx-3 lg:ms-0">
            <div className="absolute left-1/2 -top-1/2 lg:-top-1/4 -translate-x-1/2 translate-y-1/2 lg:translate-y-1/4 bg-dark-violet w-24 py-8 rounded-full">
              <Image src={FullyCustom} alt="fully custom" className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold mb-5 ">Fully customizable</h1>
            <p className="text-gray">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
      {/* end profit */}

      {/* footer */}
      <div className="relative overflow-hidden bg-grayish-violet h-40 lg:mt-0">
        <Image src={Footer} alt="footer" className="absolute top-0 right-0 -z-0" />
        <h1 className="absolute z-10 top-1/3 left-1/2 -translate-x-1/2 text-2xl lg:text-4xl md:text-3xl text-white font-bold">Boost your links today</h1>
      </div>
      {/* end footer */}
    </div>
  );
}

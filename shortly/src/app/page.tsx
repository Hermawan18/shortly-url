import Logo from '@/app/assets/images/logo.svg';
import WorkIlustration from '@/app/assets/images/illustration-working.svg';
import BgForm from '@/app/assets/images/bg-shorten-mobile.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="lg:mx-80 md:mx-32 my-6 mx-3">
      {/* navbar */}
      <div className="flex justify-between md:justify-normal">
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
      <div className="text-center my-4">
        <div className="overflow-hidden">
          <Image src={WorkIlustration} alt="work ilustration" className="ms-10" />
        </div>

        <div className="my-4">
          <h1 className="text-4xl font-bold">More than just</h1>
          <h1 className="text-4xl font-bold mb-3">shorter links</h1>
          <p className="text-gray">Build your brand's recognition and get detailed insights on how your links are performing</p>
        </div>
      </div>
      {/* end banner */}

      {/* form input */}
      <div className="relative overflow-hidden rounded-lg bg-grayish-violet p-5 h-36 my-10">
        <Image src={BgForm} alt="backgroun form" className="absolute -z-0 top-0 right-0" />
        <form className="absolute z-10 left-3 top-3 right-3 bottom-3 flex flex-col py-1">
          <input type="text" placeholder="Shorten a link here..." className="my-3 rounded-lg h-10 px-3" />
          <button type="submit" className="bg-cyan text-white rounded-lg h-10">
            Shorten it!
          </button>
        </form>
      </div>
      {/* end form input */}
    </div>
  );
}

import HERO_IMAGE from '../assets/hero-image.png';
import LEFT_RECTANGLE from '../assets/left-retrangle.svg';
import RIGHT_RECTANGLE from '../assets/right-retrangle.svg';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

export const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full" src={HERO_IMAGE} alt="Hero Image" />
        <div className="relative">
          <img
            className="w-full absolute -top-12"
            src={RIGHT_RECTANGLE}
            alt="Hero Image"
          />
          <img
            className="w-full absolute -top-14"
            src={LEFT_RECTANGLE}
            alt="Hero Image"
          />
          <div className="absolute z-10 px-8 py-4  mt-1">
            <h1 className="text-white text-4xl">Discover Your Wonder</h1>
            <h6 className="text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </h6>
          </div>
        </div>
        <div className="absolute w-full mt-3 h-full z-50 flex justify-center items-end">
          <div className=" bg-white w-10 h-10 justify-center items-center flex  rounded-full shadow-md ">
            <ChevronDoubleDownIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

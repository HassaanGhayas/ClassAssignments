import Image from "next/image";
import iphone from "../../../public/images/products/iphone.png";
import ipad from "../../../public/images/products/camera.png";
import camera from "../../../public/images/products/watch.png";
import watch from "../../../public/images/products/headphone.png";
import headphones from "../../../public/images/products/watch2.png";
import watch2 from "../../../public/images/products/galaxyfold.png";
import galaxyfold from "../../../public/images/products/galaxybuds.png";
import galaxybuds from "../../../public/images/products/ipad.png";

export default function SectionThree() {
  return (
    <section className="px-[20px] my-[56px] max-w-[1200px] mx-auto">
      <div className="flex items-center sm:gap-10 gap-6 sm:text-[18px] text-[16px]">
        <span className="border-b-2 border-black">New Arrival</span>
        <span>Bestseller</span>
        <span>Featured Products</span>
      </div>
      <div className="grid-layout-two justify-center text-center">
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={iphone} alt="iphone" />
          <p>Apple iPhone 14 Pro Max 128GB Deep Purple</p>
          <span className="font-semibold text-[24px]">$900</span>
          <span className="max-w-[200px]  py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={camera} alt="camera" />
          <p>Blackmagic Pocket Cinema Camera 6k</p>
          <span className="font-semibold text-[24px]">$2535</span>
          <span className="max-w-[200px]  py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={watch} alt="watch" />
          <p>Apple Watch Series 9 GPS 41mm Starlight Aluminium</p>
          <span className="font-semibold text-[24px]">$399</span>
          <span className="max-w-[200px] py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={headphones} alt="headphones" />
          <p>AirPods Max Silver Starlight Aluminium</p>
          <span className="font-semibold text-[24px]">$549</span>
          <span className="max-w-[200px] py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={watch2} alt="watch" />
          <p>Samsung Galaxy Watch6 Classic 47mm Black</p>
          <span className="font-semibold text-[24px]">$549</span>
          <span className="max-w-[200px] py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={galaxyfold} alt="smartphone" />
          <p>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</p>
          <span className="font-semibold text-[24px]">$1799</span>
          <span className="max-w-[200px] py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="none"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={galaxybuds} alt="galaxybuds" />
          <p>Galaxy Buds FE Graphite</p>
          <span className="font-semibold text-[24px]">$99.99</span>
          <span className="max-w-[200px] py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
        <div className="h-[400px] bg-lightBlue rounded-xl flex flex-col justify-between items-center p-[20px]">
          <span className="w-full flex justify-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src={ipad} alt="ipad" />
          <p>Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</p>
          <span className="font-semibold text-[24px]">$398</span>
          <span className="max-w-[200px] py-[12px] w-full bg-black text-white rounded-lg hover:bg-transparent border-2 hover:text-black btn-transition border-black">
            Buy Now
          </span>
        </div>
      </div>
    </section>
  );
}

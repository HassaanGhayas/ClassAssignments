import Image from "next/image";
import headphones from "../../../public/images/productsOne/headphones.png";
import macbook from "../../../public/images/productsOne/macbook.png";
import playstation from "../../../public/images/productsOne/PlayStation.png";
import visionpro from "../../../public/images/productsOne/visionpro.png";
import headphonefull from "../../../public/images/headphones.png";
import visionprofull from "../../../public/images/visionpro.png";
import macbookfull from "../../../public/images/macbook.png";
import playstationfull from "../../../public/images/playstation.png";

export default function SectionOne() {
  return (
    <section className="grid xl:grid-cols-2 text-textColor text-center sm:text-start">
      <div className="grid">
        <div className="sm:p-0 p-5 flex flex-col sm:py-0 py-[20px] sm:flex-row items-center sm:justify-start justify-center sm:pr-[20px] xl:pr-[40px]">
          <Image
            src={playstation}
            alt="playstation"
            className="sm:block hidden"
          />
          <Image
            src={playstationfull}
            alt="playstation"
            className="sm:hidden block"
          />
          <div className="sm:ml-5 mt-5 max-w-[300px]">
            <span className="md:text-[48px] text-[30px] text-black">
              Playstation 5
            </span>
            <p className="text-[14px]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 flex items-center bg-lightBlue">
          <div className="sm:p-0 p-5 flex flex-col sm:flex-row sm:py-0 py-[20px] items-center sm:justify-start justify-center sm:pr-[20px] xl:pr-[40px]">
            <Image
              src={headphones}
              alt="headphones"
              className="sm:block hidden"
            />
            <Image
              src={headphonefull}
              alt="headphones"
              className="sm:hidden block"
            />
            <div className="sm:ml-5 mt-5 max-w-[300px]">
              <span className="text-[29px] text-black">
                Apple AirPods <b>Max</b>
              </span>
              <p className="text-[14px]">
                Computational audio. Listen, it&apos;s powerful
              </p>
            </div>
          </div>
          <div className="sm:p-0 p-5 flex flex-col sm:flex-row sm:py-0 py-[20px] items-center sm:justify-start justify-center sm:pr-[20px] xl:pr-[40px] bg-Graybg h-full">
            <Image
              src={visionpro}
              alt="visionpro"
              className="sm:block hidden"
            />
            <Image
              src={visionprofull}
              alt="visionpro"
              className="sm:hidden block"
            />
            <div className="sm:ml-5 mt-5 max-w-[300px]">
              <span className="text-[29px] text-white">
                Apple Vision <b>Pro</b>
              </span>
              <p className="text-[14px]">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:p-0 p-5 flex flex-col sm:flex-row items-center sm:justify-between justify-center sm:pl-[40px] xl:pl-[56px] bg-lightBlue">
        <Image
          src={macbookfull}
          alt="macbook"
          className="sm:hidden block"
        />
        <div className="max-w-[300px] mt-5">
          <span className="sm:text-[64px] text-[30px] text-black">
            Macbook <b>Air</b>
          </span>
          <p className="text-[14px] flex flex-col sm:items-start items-center">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
            <span className="w-full max-w-[190px] h-[56px] btn-transition border-2 border-Graybg text-Graybg flex items-center justify-center rounded-md hover:bg-Graybg hover:text-white mt-5">Shop Now</span>
          </p>
        </div>
        <Image
          src={macbook}
          alt="macbook"
          className="sm:block hidden my-10"
        />
      </div>
    </section>
  );
}

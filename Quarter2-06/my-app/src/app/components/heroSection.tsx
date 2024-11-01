import Image from "next/image";
import iphone from "../../../public/images/iphone.png";

export default function Hero() {
  return (
    <section className="bg-heroColor lg:px-[140px] xl:pt-[0] pt-[60px] px-[20px] flex items-center justify-between xl:flex-row flex-col 2xl:justify-center 2xl:gap-52">
      <div className="flex flex-col text-white xl:items-start items-center text-center xl:text-start">
        <span className="font-semibold text-[16px] sm:text-[20px] opacity-40">
          Pro Beyond
        </span>
        <span className="xl:text-[80px] text-[40px] sm:text-[60px]">
          IPhone 14 <span className="font-semibold">Pro</span>
        </span>
        <span className="sm:text-[16px] text-[12px] font-medium opacity-40">
          Created to change everything for the better. For everyone
        </span>
        <span className="sm:h-[56px] sm:w-[191px] border-2 inline-flex items-center justify-center mt-5 rounded-md h-[40px] w-[110px] sm:text-[16px] text-[12px] hover:bg-white hover:text-heroColor hover:opacity-90 btn-transition font-semibold">
          Shop Now
        </span>
      </div>
      <div className="xl:h-auto h-[281px]">
        <Image src={iphone} alt="" className="h-[100%] w-auto object-cover" />
      </div>
    </section>
  );
}

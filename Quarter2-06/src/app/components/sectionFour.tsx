import Image from "next/image";
import macbook from "../../../public/images/productsTwo/macbook.png";
import airpods from "../../../public/images/productsTwo/airpods.png";
import smartphone from "../../../public/images/productsTwo/smartphone.png";
import tablet from "../../../public/images/productsTwo/tablet.png";

export default function SectionFour() {
  return (
    <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      <div className="px-[32px] py-[56px] flex gap-4 flex-col justify-between sm:text-left text-center sm:items-start items-center">
        <Image src={airpods} alt="" />
        <span className="text-[33px] font-light">Popular Products</span>
        <p className="max-w-[300px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
        <span className="w-full max-w-[190px] h-[56px] btn-transition border-2 border-black flex items-center justify-center rounded-md hover:bg-black hover:text-white">Shop Now</span>
      </div>
      <div className="px-[32px] py-[56px] flex gap-4 flex-col bg-[#F9F9F9] justify-between sm:text-left text-center sm:items-start items-center">
        <Image src={tablet} alt="" />
        <span className="text-[33px] font-light">Ipad Pro</span>
        <p className="max-w-[300px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
        <span className="w-full max-w-[190px] h-[56px] btn-transition border-2 border-black flex items-center justify-center rounded-md hover:bg-black hover:text-white">Shop Now</span>
      </div>
      <div className="px-[32px] py-[56px] flex gap-4 flex-col bg-[#EAEAEA] justify-between sm:text-left text-center sm:items-start items-center">
        <Image src={smartphone} alt="" />
        <span className="text-[33px] font-light">Samsung Galaxy</span>
        <p className="max-w-[300px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
        <span className="w-full max-w-[190px] h-[56px] btn-transition border-2 border-black flex items-center justify-center rounded-md hover:bg-black hover:text-white">Shop Now</span>
      </div>
      <div className="px-[32px] py-[56px] flex gap-4 flex-col bg-[#2C2C2C] justify-between text-[#EAEAEA] sm:text-left text-center sm:items-start items-center">
        <Image src={macbook} alt="" />
        <span className="text-[33px] font-light">Macbook Pro</span>
        <p className="max-w-[300px]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
        <span className="w-full max-w-[190px] h-[56px] btn-transition border-2 border-[#F9F9F9] flex items-center justify-center rounded-md hover:bg-[#EAEAEA] hover:text-black">Shop Now</span>
      </div>
    </section>
  );
}

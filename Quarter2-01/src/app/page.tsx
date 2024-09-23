import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-between w-8/12 m-auto text-center">
    <div id="personalInfo" className="w-7/12">
      <h1 className="text-5xl pb-3 font-bold text-orange-400">Hassaan Ghayas</h1>
      <p className="text-xl ">I'm a student at Governor House Karachi, aiming to become a Cloud API Engineer</p>
    </div>
    <img className="rounded-full w-52" src="/images/pfp.jpg" alt="" />
    </div>
  );
}

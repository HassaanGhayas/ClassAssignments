import Image from "next/image";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
    <Header/>
    <SectionOne/>
    <Footer/>
    </div>
  );
}

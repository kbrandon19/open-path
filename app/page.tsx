import Image from "next/image";
import Hero from './components/hero/hero'
import IntroBanner from "./components/introBanner";
import Services from "./components/services";
import Search_cta from "./components/search_cta";
import FAQ from "./components/faq";

export default function Home() {
  return (

    
    <div className="">
    <Hero/>
    <IntroBanner/>
    <Services/>
    <Search_cta/>
    <FAQ/>

    </div>
  );
}

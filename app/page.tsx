import Image from "next/image";
import Hero from './components/hero/hero'
import IntroBanner from "./components/introBanner";

export default function Home() {
  return (

    
    <div className="lg:px-16">
    <Hero/>
    <IntroBanner/>

    </div>
  );
}

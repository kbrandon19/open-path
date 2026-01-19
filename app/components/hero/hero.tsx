import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
      <div className="relative min-h-screen lg:h-screen w-full ">
      <div className="relative mx-auto max-w-7xl h-full  flex flex-col lg:flex-row items-center">

        {/* Image */}
        <div className="w-full lg:w-2/3 ml-auto relative md:rounded-3xl">
          <div className="relative w-full h-[600px] ">
            <Image
              src="/images/hero-labyrinth.jpg"
              alt="Person walking a stone labyrinth near the ocean"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Card */}
        <div className="px-6 lg:px-0">
          <div
            className="
            relative
            h-auto
            lg:absolute
            lg:left-10
            -translate-y-1/1
            lg:top-1/2
            lg:-translate-y-1/2
            w-full lg:w-[450px]
            bg-[#658E9C]
            rounded-3xl
            p-8
            shadow-lg
            mt-8 lg:mt-0
            z-5
            
          "
          >
            <h2 className="text-4xl font-semibold text-white mb-4">
              Simplifying access to addiction treatment services
            </h2>

            <p className="text-lg text-black/80 mb-6 leading-relaxed">
              OpenPath is a cloud-based, mobile-friendly web platform designed to
              connect individuals seeking addiction treatment with providers who
              have available services.
            </p>

            <Button>Learn More</Button>

          </div>
        </div>

      </div>
    </div>
    
  );
}

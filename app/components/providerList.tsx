import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

function providerList() {
  return (
    <div>

      
      {/* Provider List Wrapper */}
      <div className="w-full h-auto flex flex-col md:flex-row gap-4 p-4 ">
        {/* provider card */}
        <div className="max-w-72 h-auto">
          <div className="p-2 bg-white">
            {/* provider image */}
            <div className="w-[250px] h-[275] bg-red-200">
              <Image src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1768273358/Open%20Path/Providers/David_Brooks_caaxxk.jpg`} alt="Provider" width={250} height={275} />
            </div>

            {/* ratings */}
            <div className="my-4">
              <Star />
            </div>

            {/* name */}
            <h1 className="text-2xl font-bold">David Brook</h1>

            {/* specialities */}
            <p className=" w-auto">
              Anger Management, Addiction, Stress, Something, Potential hack
            </p>
          </div>
        </div>

        {/* provider card */}
        <div className="max-w-72 h-auto">
          <div className="p-2 bg-white">
            {/* provider image */}
            <div className="w-[250px] h-[275] bg-red-200"></div>

            {/* ratings */}
            <div className="my-4">
              <Star />
            </div>

            {/* name */}
            <h1 className="text-2xl font-bold">David Brook</h1>

            {/* specialities */}
            <p className=" w-auto">
              Anger Management, Addiction, Stress, Something, Potential hack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default providerList;

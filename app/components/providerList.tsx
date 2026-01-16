import React from "react";
import Image from "next/image";


function providerList() {
  return (
    <div>
      {/* Provider List Wrapper */}
      <div className="w-full h-auto flex flex-col justify-center items-center flex-wrap md:flex-row gap-4 p-4 ">
        {/* provider card */}
        <div className="w-64 h-auto">
          <div className="w-auto h-auto p-2 ">
            {/* provider image */}
            <div className="flex justify-center items-center mb-4">
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/g_face:center,x_0/v1768530513/Open%20Path/Providers/brian-lundquist-7B4zs9M8rYI-unsplash_aouapn.jpg`}
                alt="Provider"
                width={200}
                height={225}
              />
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
        <div className="w-64 h-auto">
          <div className="w-auto h-auto p-2 ">
            {/* provider image */}
            <div className="flex justify-center items-center mb-4">
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/g_face:center,x_0/v1768530513/Open%20Path/Providers/brian-lundquist-7B4zs9M8rYI-unsplash_aouapn.jpg`}
                alt="Provider"
                width={200}
                height={225}
              />
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
        <div className="w-64 h-auto">
          <div className="w-auto h-auto p-2 ">
            {/* provider image */}
            <div className="flex justify-center items-center mb-4">
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/g_face:center,x_0/v1768530513/Open%20Path/Providers/brian-lundquist-7B4zs9M8rYI-unsplash_aouapn.jpg`}
                alt="Provider"
                width={200}
                height={225}
              />
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
        <div className="w-64 h-auto">
          <div className="w-auto h-auto p-2 ">
            {/* provider image */}
            <div className="flex justify-center items-center mb-4">
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/g_face:center,x_0/v1768530513/Open%20Path/Providers/brian-lundquist-7B4zs9M8rYI-unsplash_aouapn.jpg`}
                alt="Provider"
                width={200}
                height={225}
              />
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

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

function search_cta() {
  return (
    <div className="bg-[#658E9C] w-5/6 mx-auto h-auto py-8  text-white px-4 md:px-16 mt-64 p-16 rounded-3xl">
      <div className="flex flex-col md:flex-row gap-16  items-center justify-between m-16">
        <div className="basis-1/2">
          <h1 className="text-5xl font-bold">
            Simplifying access to addiction treatment services.
          </h1>
          <p className="my-4 text-base">
            Our platform connects individuals seeking help with a curated
            network of verified mental health providers, ensuring personalized
            and effective care.
          </p>
          <Input className="w-64 placeholder-grey-400" placeholder="Location" />{" "}
          <button className="bg-white text-[#658E9C]  h-auto px-4 py-2 rounded-md font-semibold">
            Search
          </button>
        </div>

        <div className="basis-1/2 relative w-auto h-128">
          <Image
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1768419835/Open%20Path/photo-1589156280159-27698a70f29e_tjmibq.avif`}
            alt="hand"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default search_cta;

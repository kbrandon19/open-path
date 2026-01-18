'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Service {
  _id: string;
  id: number;
  service: string;
  service_desciption: string;
}

function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const result = await response.json();

        if (result.success) {
          setServices(result.data);
        } else {
          setError('Failed to fetch services');
        }
      } catch (err) {
        setError('Error fetching services');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-lg">Loading services...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  // Default images for services if no icon is provided
  const defaultImages = [
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1766521140/Open%20Path/Services/Rectangle_3_b7xigp.jpg`,
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1766521140/Open%20Path/Services/Rectangle_5_ogoxtz.jpg`,
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1766521140/Open%20Path/Services/Rectangle_4_osikvo.jpg`,
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1766521140/Open%20Path/Services/Rectangle_6_thxqrg.jpg`,
  ];

  return (
    <div className="w-full h-auto flex flex-col gap-4 md:flex-row basis px-16">
      {services.length === 0 ? (
        <div className="w-full text-center text-lg text-gray-500">No services found</div>
      ) : (
        services.map((service, index) => (
          <div key={service._id} className='basis-1/4'>
            {/* Image Div */}
            <div className="relative w-auto h-64 basis-1/4">
              <Image
                src={defaultImages[index % defaultImages.length]}
                alt={service.service || 'Service Image'}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Text Div */}
            <div className='h-auto my-6 text-center'>
              <h2 className='font-bold text-xl'>{service.service}</h2>
              <p className='text-sm'>{service.service_desciption}</p>
              <p className='hidden'>Learn More</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Services;
'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Provider {
  _id: string;
  provider_id: string;
  first_name: string;
  last_name: string;
  credentials?: string;
  specialties: string[];
  modalities?: string[];
  insurances?: string[];
  languages?: string[];
  bio?: string;
  location?: string;
  email?: string;
  phone?: string;
  is_accepting_clients: boolean;
}

function ProviderList() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch('/api/providers');
        const result = await response.json();

        if (result.success) {
          setProviders(result.data);
        } else {
          setError('Failed to fetch providers');
        }
      } catch (err) {
        setError('Error fetching providers');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-lg">Loading providers...</div>
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

  return (
    <div>
      {/* Category Filter Options */}
      <div className="w-full h-36 bg-gray-100"></div>

      {/* Provider List Wrapper */}
      <div className="w-5/6 h-auto mx-auto flex flex-col justify-center items-center flex-wrap md:flex-row gap-y-10 gap-x-4 p-4">
        {providers.length === 0 ? (
          <div className="text-lg text-gray-500">No providers found</div>
        ) : (
          providers.map((provider) => (
            <div key={provider._id} className="w-64 h-auto">
              <div className="w-auto h-auto p-2">
                {/* provider image */}
                <div className="flex justify-start items-center mb-4">
                  <Image
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/g_face:center,x_0/v1768530513/Open%20Path/Providers/brian-lundquist-7B4zs9M8rYI-unsplash_aouapn.jpg`}
                    alt={`${provider.first_name} ${provider.last_name}`}
                    width={200}
                    height={225}
                  />
                </div>

                {/* name */}
                <h1 className="text-xl font-bold">{provider.first_name} {provider.last_name}{provider.credentials ? `, ${provider.credentials}` : ''}</h1>

                {/* specialties */}
                <p className="w-auto mb-2">
                  <strong>Specialties:</strong> {provider.specialties?.join(', ') || 'Not specified'}
                </p>

                {/* location */}
                {provider.location && (
                  <p className="w-auto mb-2">
                    <strong>Location:</strong> {provider.location}
                  </p>
                )}

                {/* bio */}
                {provider.bio && (
                  <p className="text-sm text-gray-600 mb-2">{provider.bio}</p>
                )}

                {/* contact info */}
                <div className="text-sm text-gray-500">
                  {provider.email && <p>Email: {provider.email}</p>}
                  {provider.phone && <p>Phone: {provider.phone}</p>}
                </div>

                {/* accepting clients status */}
                <div className={`mt-2 px-2 py-1 rounded text-xs ${provider.is_accepting_clients ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {provider.is_accepting_clients ? 'Accepting New Clients' : 'Not Accepting Clients'}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProviderList;

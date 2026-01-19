'use client';

import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import FilterOption, { FilterOptionItem } from "@/components/ui/filter-option";

import { Mail, Phone, MapPin } from "lucide-react";

// Debounce utility function
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

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
  profile_image?: string;
}

interface FilterOptions {
  specialties: FilterOptionItem[];
  insurances: FilterOptionItem[];
  accepting_clients: FilterOptionItem[];
}

function ProviderList() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [listOpacity, setListOpacity] = useState(0);

  // Filter states
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedInsurances, setSelectedInsurances] = useState<string[]>([]);
  const [selectedAcceptingClients, setSelectedAcceptingClients] = useState<string[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    specialties: [],
    insurances: [],
    accepting_clients: [
      { label: "Accepting Clients", value: "true" },
      { label: "Not Accepting Clients", value: "false" }
    ]
  });
  const [loadingFilters, setLoadingFilters] = useState(true);

  // Debounced API call to prevent rapid successive calls
  const debouncedFetchProviders = useMemo(
    () => debounce(async (specs: string[], ins: string[], acc: string[]) => {
      try {
        setLoading(true);
        setListOpacity(0); // Fade out on start
        const params = new URLSearchParams();

        specs.forEach(s => params.append('specialties', s));
        ins.forEach(i => params.append('insurances', i));
        acc.forEach(a => params.append('is_accepting_clients', a));

        const queryString = params.toString();
        const url = `/api/providers${queryString ? `?${queryString}` : ''}`;

        const response = await fetch(url);
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
    }, 300), // 300ms debounce delay
    []
  );

  // Effect to fade in when loading completes
  useEffect(() => {
    if (!loading) {
      setListOpacity(1);
    }
  }, [loading]);

  // Memoized filter change handlers to prevent unnecessary re-renders
  const handleSpecialtiesChange = useCallback((specialties: string[]) => {
    setSelectedSpecialties(specialties);
  }, []);

  const handleInsurancesChange = useCallback((insurances: string[]) => {
    setSelectedInsurances(insurances);
  }, []);

  const handleAcceptingClientsChange = useCallback((acceptingClients: string[]) => {
    setSelectedAcceptingClients(acceptingClients);
  }, []);

  // Fetch filter options on component mount
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await fetch('/api/providers/filters');
        const result = await response.json();
        if (result.success) {
          setFilterOptions({
            specialties: result.data?.specialties || [],
            insurances: result.data?.insurances || [],
            accepting_clients: [
              { label: "Accepting Clients", value: "true" },
              { label: "Not Accepting Clients", value: "false" }
            ]
          });
        }
      } catch (error) {
        console.error('Error fetching filter options:', error);
      } finally {
        setLoadingFilters(false);
      }
    };

    fetchFilterOptions();
  }, []);

  // Trigger debounced API call when filters change
  useEffect(() => {
    debouncedFetchProviders(selectedSpecialties, selectedInsurances, selectedAcceptingClients);
  }, [selectedSpecialties, selectedInsurances, selectedAcceptingClients, debouncedFetchProviders]);

  // Skeleton card component
  const SkeletonCard = () => (
    <div className="w-64 h-auto p-2">
      {/* provider image skeleton */}
      <div className="flex justify-start items-center mb-4">
        <div className="w-[200px] h-[225px] bg-gray-200 animate-pulse rounded"></div>
      </div>

      {/* name skeleton */}
      <div className="h-6 bg-gray-200 animate-pulse mb-2 rounded"></div>

      {/* specialties skeleton */}
      <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>

      {/* location skeleton */}
      <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>

      {/* bio skeleton */}
      <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>

      {/* contact info skeleton */}
      <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>
      <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>

      {/* accepting clients status skeleton */}
      <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );

  if (error) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="scroll-smooth mt-6" id="list">
      {/* Category Filter Options */}
      <div className="w-full h-auto bg-gray-100 p-4 border-b  top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Specialty and Insurance Filters */}
            <h1>Filter Options :</h1>
            <div className="flex flex-wrap gap-4"> 
              <FilterOption
                title="Specialties"
                options={filterOptions.specialties}
                selected={selectedSpecialties}
                onChange={handleSpecialtiesChange}
              />
              <FilterOption
                title="Insurance"
                options={filterOptions.insurances}
                selected={selectedInsurances}
                onChange={handleInsurancesChange}
              />

              <FilterOption
                title="Accepting Clients"
                options={filterOptions.accepting_clients}
                selected={selectedAcceptingClients}
                onChange={handleAcceptingClientsChange}
              />
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="">
            {selectedSpecialties.map(specialty => (
              <span key={specialty} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 mr-2 mb-2">
                {specialty}
                <button
                  onClick={() => handleSpecialtiesChange(selectedSpecialties.filter(s => s !== specialty))}
                  className="ml-2 text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            ))}
            {selectedInsurances.map(insurance => (
              <span key={insurance} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 mr-2 mb-2">
                {insurance}
                <button
                  onClick={() => handleInsurancesChange(selectedInsurances.filter(i => i !== insurance))}
                  className="ml-2 text-purple-600 hover:text-purple-800"
                >
                  ×
                </button>
              </span>
            ))}
            {selectedAcceptingClients.map(accepting => (
              <span key={accepting} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 mr-2 mb-2">
                {accepting === "true" ? "Accepting Clients" : "Not Accepting Clients"}
                <button
                  onClick={() => handleAcceptingClientsChange(selectedAcceptingClients.filter(a => a !== accepting))}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Provider List Wrapper */}
      <div className="w-5/6 h-auto mx-auto flex flex-col justify-center items-center flex-wrap md:flex-row gap-y-10 gap-x-4 p-4">
        {loading ? (
          // Show skeletons during loading
          Array.from({ length: 6 }, (_, i) => <SkeletonCard key={i} />)
        ) : (
          // Show providers with fade in/out
          <div
            style={{
              opacity: listOpacity,
              transition: 'opacity 0.5s ease-in-out',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2.5rem 1rem'
            }}
          >
            {providers.length === 0 ? (
              <div className="text-lg text-gray-500">No providers found</div>
            ) : (
              providers.map((provider) => (
                <div key={provider._id} className="w-64 h-auto">
                  <div className="w-auto h-auto p-2">
                    {/* provider image */}
                    <div className="flex justify-start items-center mb-4">
                      <Image
                        src={`${provider.profile_image || '/default-profile.png'}`}
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
                        <strong><MapPin className="w-4 h-4 inline-block mr-1" /></strong> {provider.location}
                      </p>
                    )}

                    {/* bio */}
                    {provider.bio && (
                      <p className="text-sm text-gray-600 mb-2">{provider.bio}</p>
                    )}

                    {/* contact info */}
                    <div className="text-sm text-gray-500">
                      {provider.email && <p><Mail className="w-4 h-4 inline-block mr-1" /><a href={`mailto:${provider.email}`}>{provider.email}</a></p>}
                      {provider.phone && <p><Phone className="w-4 h-4 inline-block mr-1" /><a href={`tel:${provider.phone}`}> {provider.phone}</a></p>}
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
        )}
      </div>
    </div>
  );
}

export default memo(ProviderList);
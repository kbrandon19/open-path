export interface Provider {
  _id?: string; // MongoDB ObjectId as string
  provider_id: string;
  first_name: string;
  last_name: string;
  credentials: string;
  specialties: string[];
  modalities: string[];
  insurances: string[];
  languages: string[];
  bio: string;
  location: string;
  email?: string;
  phone?: string;
  is_accepting_clients: boolean;
}

export interface CreateListing {
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    region: string
  };
  images: string[];
  capacity: number;
  amenities: string[];
  category: string;
  rules: {
    alcoholAllowed: Boolean,
    petsAllowed: Boolean
  };
  address: string;
}
export interface Listing {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    region: string
  };
  images: string[];
  capacity: number;
  averageRating: number;
}
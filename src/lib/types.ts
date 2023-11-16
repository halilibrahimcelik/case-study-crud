export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  brand: string;
  thumbnail: string;
  images?: string[];
  category?: string;
};

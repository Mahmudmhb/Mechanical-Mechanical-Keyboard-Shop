export type TProductProps = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  product: TProductProps;
  key: string;
};

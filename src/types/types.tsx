export type TCardIncrement = {
  id: string;
  values: number;
};
export type ProductsState = {
  products: TProductProps[];
  searchQuery: string;
  value: number;
  card: number;
  selectedProduct: TProductProps | null;
  cardPrduct: TProductProps[];
  cardInrement: TCardIncrement[];
};

export interface CartItem extends ProductsState {
  quantity: number;
}

export interface TProductProps {
  quantity: number;
  _id: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
}

export interface AddToCartPayload {
  product: TProductProps;
  quantity: number;
}

export interface TCartItem extends TProductProps {
  quantity: number;
}

export interface TCard {
  items: TCartItem[];
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface PriceRange {
  minVariantPrice: Money;
}

export interface Image {
  url: string;
  altText: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      };
    }>;
  };
  image: Image;
  priceRange: PriceRange;
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}
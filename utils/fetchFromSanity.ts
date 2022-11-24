import { Category, Product } from "../typings";

export const fetchCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
  );

  const data = await res.json();
  const categories: Category[] = data.categories;

  return categories;
};

export const fetchLineItems = async (sessionId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSession?session_id=${sessionId}`
  );

  if (!res.ok) return;

  const data = await res.json();
  const products = data.session.data;

  return products;
};

export const fetchProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  );

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};

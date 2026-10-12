export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type ProductsResponse = {
  success?: boolean;
  products?: Product[];
};

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: ProductsResponse = await response.json();
    if (!Array.isArray(data?.products)) {
      throw new Error('Unexpected products payload');
    }
    return data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export default getProducts;

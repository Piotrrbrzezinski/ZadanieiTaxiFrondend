// src/components/ProductList.tsx
import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { getAllProducts, deleteProduct } from '../services/ProductService';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h2>Lista Produktów</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} zł
            <button onClick={() => handleDelete(product.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

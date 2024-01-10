// src/components/AddProductForm.tsx
import React, { useState } from 'react';
import { Product } from '../types/product'; // Zaimportuj interfejs Product
import { addProduct } from '../services/ProductService'; // Zaimportuj funkcję addProduct

export const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({ id: 0, name: '', price: 0 });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (product.name && product.price) {
      await addProduct(product);
      setProduct({ id: 0, name: '', price: 0 }); // Resetuj stan formularza
      // Możesz też dodać tutaj logikę do odświeżenia listy produktów, jeśli jest to potrzebne
    } else {
      alert('Proszę wypełnić wszystkie pola!');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: name === 'price' ? parseFloat(value) : value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj Produkt</h2>
      <div>
        <label>
          Nazwa produktu:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Cena produktu:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Dodaj Produkt</button>
    </form>
  );
};

export default AddProductForm;

// src/services/ProductService.ts
import axios from 'axios';
import { Product } from '../types/product';

const API_URL = 'http://localhost:8080/products'; // Zmień na właściwy URL

export const getAllProducts = async () => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};

export const addProduct = async (product: Product) => {
  const response = await axios.post<Product>(API_URL, product);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};

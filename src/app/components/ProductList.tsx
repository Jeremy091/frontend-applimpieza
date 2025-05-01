// src/app/components/ProductList.tsx
"use client";
import { useEffect, useState } from 'react';
import { api } from '../lib/api';         
import { Product } from '../types/product'; 

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get<Product[]>('/products')
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded">
          <h3 className="font-bold">{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
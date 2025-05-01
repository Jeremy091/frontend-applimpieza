// src/app/components/CreateProductForm.tsx
"use client";
import { useState } from 'react';
import { api } from '../lib/api';
import { Product } from '../types/product';

export default function CreateProductForm() {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    category: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/products', formData);
      alert('Producto creado!');
      setFormData({ name: '', price: 0, category: '' });
    } catch (error) {
      alert('Error al crear el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Precio"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Categoría"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Crear Producto
      </button>
    </form>
  );
}
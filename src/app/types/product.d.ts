// src/types/product.d.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  // Tipo para la respuesta de la API
  export interface ApiResponse<T> {
    data: T;
    status: number;
  }

  
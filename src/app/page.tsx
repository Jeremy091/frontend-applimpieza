// src/app/page.tsx
import ProductList from '../app/components/ProductList';
import CreateProductForm from '../app/components/CreateProductForm';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tienda de Productos de Limpieza</h1>
      <CreateProductForm />
      <ProductList />
    </main>
  );
}
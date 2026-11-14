import './index.css';
import { Header } from './components/layout/header.tsx';
import { Footer } from './components/layout/footer.tsx';
import { NavigationBar } from './components/layout/navigation.tsx';
import { categories } from './data/categories.ts';
import { useState } from 'react';
import { ProductCard } from './cases/products/components/product-card.tsx';
import { useProducts } from './cases/products/hooks/use-product.ts';


function App() {

  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [labelActiveCategory, setLabelActiveCategory] = useState<string>('Todos');

  const { products, loading, error } = useProducts();

  const visibleProducts = activeCategory === 'todos' ? products : products.filter(product => product.category === activeCategory);

  function handleSelectCategory(alias: string, Label: string) {
    setActiveCategory(alias);
    setLabelActiveCategory(Label);
  }

  return (
    <>
      <Header />

      <NavigationBar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory} />

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <div className="products-info">
              <p>{visibleProducts.length} itens</p>
              <p id="selected-category">Categoria selecionada: {labelActiveCategory} </p>
            </div>
          </header>

          {loading && <p className='loading'>Carregando produtos...</p>}

          {error && <p className='error'>Erro ao carregar produtos: {error}</p>}

          {visibleProducts.map((product) => (
            <ProductCard product={product} />
          ))}

        </section>

        <aside aria-label="Resumo do pedido">
          <h2>Seu pedido</h2>

          <div className="cart-empty">
            <img src="/assets/img/cart.svg" alt="" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para começar</p>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}

export default App;
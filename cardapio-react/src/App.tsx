import './index.css';
import { Header } from './components/layout/header.tsx';
import { Footer } from './components/layout/footer.tsx';
import { NavigationBar } from './components/layout/navigation.tsx';
import { categories } from './data/categories.ts';


function App() {
  function handleSelectCategory(alias: string) {
    alert(`Categoria selecionada: ${alias}`);
  }

  return (
    <>
      <Header />

      <NavigationBar 
      categories={categories} 
      activeCategory='todos' 
      onSelectCategory={handleSelectCategory} />

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <div className="products-info">
              <p>10 itens</p>
              <p id="selected-category">Categoria selecionada: Todos</p>
            </div>
          </header>

          <article>
            <figure>
              <img src="/assets/img/x-burger.jpg" alt="X-Burger Aurora" />
              <figcaption>lanches</figcaption>
            </figure>
            <h3>X-Burger Aurora</h3>
            <p>Pão brioche, hambúrguer 160g, queijo e molho da casa.</p>
            <p>R$ 18,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/margherita.jpg" alt="Pizza Margherita" />
              <figcaption>pizzas</figcaption>
            </figure>
            <h3>Pizza Margherita</h3>
            <p>Molho de tomate, muçarela e manjericão fresco.</p>
            <p>R$ 42,00</p>
            <button type="button">Adicionar</button>
          </article>
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
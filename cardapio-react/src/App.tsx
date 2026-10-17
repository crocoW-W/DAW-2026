import './index.css';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="brand">
            <img src="/assets/img/logo_lanchonete.svg" alt="Logotipo da lanchonete" />
            <div>
              <h1>Cardápio Digital</h1>
              <p>Faça seu pedido pelo nosso cardápio digital</p>
            </div>
          </div>

          <div className="cart-buttom">
            <img src="/assets/img/cart.svg" alt="Carrinho de compras" />
          </div>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#todos" className="active">Todos</a></li>
          <li><a href="#lanches">Lanches</a></li>
          <li><a href="#porcoes">Porções</a></li>
          <li><a href="#bebidas">Bebidas</a></li>
          <li><a href="#sobremesas">Sobremesas</a></li>
        </ul>
      </nav>

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

      <footer>
        <div className="container">
          <p>Cardápio Digital - Desenvolvimento Aplicações Web 2026</p>
          <p>Rua Mato Grosso, 200 - Centro - Pato Branco</p>
        </div>
      </footer>
    </>
  );
}

export default App;
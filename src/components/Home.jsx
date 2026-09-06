import React from 'react';
import Header from './Header.jsx';
import CardPizza from './CardPizza.jsx';

import napolitana from '../assets/imgs/napolitana.png';

const pizzas = [
  {
    name: 'Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: napolitana,
  },
  {
    name: 'Española',
    price: 6950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    img: napolitana,
  },
  {
    name: 'Pepperoni',
    price: 6950,
    ingredients: ['mozzarella', 'pepperoni', 'orégano'],
    img: napolitana,
  },
];

const Home = () => {
  return (
    <main>
      <Header />

      <section className="py-5 pizza-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">NUESTRO MENÚ</span>
            <h2 className="fw-bold mt-2">Elige tu pizza favorita</h2>
            <p className="text-secondary">
              Recetas clásicas preparadas con ingredientes seleccionados.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {pizzas.map((pizza) => (
              <div className="col-12 col-md-6 col-lg-4" key={pizza.name}>
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;


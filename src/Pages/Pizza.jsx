import React, { useEffect, useState } from 'react'
import './Pizza.css'

const Pizza = () => {
    
    const [pizza, setPizza] = useState({})
    
    const getPizza= async () => {
        const res = await fetch('http://localhost:5000/api/pizzas/p001')
        const pizza = await res.json()
        setPizza(pizza)
    }
    
    useEffect(() => {
        getPizza()
    }

    )

  return (
    <div className="pizza-container">
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <h1 className="pizza-name">{pizza.name}</h1>
      <p className="pizza-price">{pizza.price}</p>
      <ul className="pizza-ingredients">
        {pizza.ingredients?.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p className="pizza-description">{pizza.desc}</p>
      <button>Añadir al carrito</button>
    </div>
    
  );
};

export default Pizza
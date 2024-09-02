import React, { useState } from "react";
import pizzas from "../pizzas";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    const existingItem = cartItems.find((item) => item.id === pizza.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (pizzaId) => {
    const existingItem = cartItems.find((item) => item.id === pizzaId);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== pizzaId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container">
      <h2>Menú de Pizzas</h2>
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.img} alt={pizza.name} className="pizza-img" />
            <div className="pizza-info">
              <h3 className="pizza-title">{pizza.name}</h3>
              <p className="pizza-desc">{pizza.desc}</p>
              {/* Mostrar los ingredientes en la carta de pizzas */}
              <ul className="pizza-ingredients">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p className="pizza-price">{pizza.price} CLP</p>
              <button className="add-to-cart" onClick={() => addToCart(pizza)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay pizzas en el carrito</p>
      ) : (
        <div className="cart-container">
          <ul>
            {cartItems.map((pizza) => (
              <li key={pizza.id} className="cart-item">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <span className="cart-item-name">
                    {pizza.name} (x{pizza.quantity})
                  </span>
                  <span className="cart-item-price">
                    {pizza.price * pizza.quantity} CLP
                  </span>
                  <div className="cart-item-controls">
                    <button
                      className="quantity-control"
                      onClick={() => decreaseQuantity(pizza.id)}
                    >
                      -
                    </button>
                    <button
                      className="quantity-control"
                      onClick={() => addToCart(pizza)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: {calculateTotal()} CLP</h3>
          <button className="checkout-button">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

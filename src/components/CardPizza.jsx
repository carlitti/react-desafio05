import React from "react";
import Card from "react-bootstrap/Card";
import "./CardPizza.css";

const CardPizza = ({ pizza }) => {
  return (
    <Card className="card-pizza mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={pizza.img}
        alt={pizza.name}
        className="img-pizza"
      />
      <Card.Body className="text-center">
        <Card.Title className="pizza-title">{pizza.name}</Card.Title>
        <Card.Text className="pizza-price">{pizza.price} CLP</Card.Text>
        <ul className="list-group list-group-flush">
          {pizza.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="list-group-item text-center pizza-ingredient"
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

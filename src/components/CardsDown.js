import React from "react";
import CardDown from "./CardDown";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const cards = [
  {
    id: 1,
    image: img1,
    texto: "Browse the menu and order directly from the aplication.",
  },
  {
    id: 2,
    image: img2,
    texto: "Your order will be immediately collected and sent by our courier.",
  },
  {
    id: 3,
    image: img3,
    texto: "Pick up delivery at your door and enjoy groceries.",
  },
];

function CardsDown() {
  return (
    <>
      
        <div className="d-flex justify-content-evenly">
          {cards.map((card) => (
            <div className="col-md-4" key={card.id}>
              <CardDown image={card.image} texto={card.texto} />
            </div>
          ))}
        </div>
      
    </>
  );
}

export default CardsDown;

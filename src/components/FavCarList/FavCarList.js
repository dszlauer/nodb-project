import React from "react";

function FavCarList(props) {
  const { car } = props;
  return (
    <div key={car.id} className="car-card">
      <img src={car.imageUrl} alt="" />
      <div className="fav-car-info">
        <span>Make: {car.make}</span>
        <span>Year: {car.year}</span>
        <span>Price: {car.price}</span>
        <button className="buy-btn" onClick={() => props.deleteCar(car.id)}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default FavCarList;

import React from "react";

const CarDisplay = props => {
  const { car } = props;
  return (
    <div key={car.id} className="car-card">
      <img src={car.imageUrl} alt="" />
      <div className="car-info">
        <span>Make: {car.make}</span>
        <span>Year: {car.year}</span>
        <span>Price: {car.price}</span>
        <button className="add-btn" onClick={() => props.addToMyList(car)}>
          Add to my list
        </button>
        <br />
        <input
          onChange={e => props.handleInputMake(e.target.value)}
          placeholder="Update Make"
        />
        <input
          onChange={e => props.handleInputYear(e.target.value)}
          placeholder="Update Year"
        />
        <input
          onChange={e => props.handleInputPrice(e.target.value)}
          placeholder="Update Price"
        />
        <button onClick={() => props.editCar(car.id)}>Update</button>
      </div>
    </div>
  );
};

export default CarDisplay;

import React, { Component } from "react";
import axios from "axios";
import AddCarForm from "./components/AddCarForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      myCarList: []
    };
    this.addCar = this.addCar.bind(this);
    this.getCars = this.getCars.bind(this);
  }
  componentDidMount() {
    this.getCars();
  }

  getCars() {
    axios.get("/api/cars").then(response => {
      this.setState({ cars: response.data });
    });
  }

  addCar() {
    this.getCars();
  }

  addToMyList(cars) {
    const { id, imageUrl, make, year, price } = cars;
    let newList = {
      id,
      imageUrl,
      make,
      year,
      price
    };

    axios.post("/api/favcars", newList).then(response => {
      console.log(response.data);
      this.setState({ myCarList: response.data });
    });
  }

  deleteCar(id) {
    axios.delete(`/api/cars/${id}`).then(response => {
      this.setState({ myCarList: response.data });
    });
  }

  render() {
    const { cars, myCarList } = this.state;
    let mappedCars = cars.map(car => {
      return (
        <div key={car.id} className="car-card">
          <img src={car.imageUrl} alt="" />
          <div className="car-info">
            <span>Make: {car.make}</span>
            <span>Year: {car.year}</span>
            <span>Price: {car.price}</span>
            <button className="add-btn" onClick={() => this.addToMyList(car)}>
              Add to my list
            </button>
          </div>
        </div>
      );
    });

    const myMappedList = myCarList.map(car => {
      return (
        <div key={car.id} className="car-card">
          <img src={car.imageUrl} alt="" />
          <div className="fav-car-info">
            <span>Make: {car.make}</span>
            <span>Year: {car.year}</span>
            <span>Price: {car.price}</span>
            <button className="buy-btn" onClick={() => this.deleteCar(car.id)}>
              Buy
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="form">
          <AddCarForm addCar={this.addCar} />
        </div>
        <div className="main">{mappedCars}</div>
        <div className="myfav">{myMappedList}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import AddCarForm from "./components/AddCarForm/AddCarForm";
import CarDisplay from "./components/CarDisplay/CarDisplay";
import "./App.css";
import FavCarList from "./components/FavCarList/FavCarList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      myCarList: [],
      make: "",
      year: 0,
      price: 0
    };
    this.addCar = this.addCar.bind(this);
    this.getCars = this.getCars.bind(this);
    this.addToMyList = this.addToMyList.bind(this);
    this.editCar = this.editCar.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
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

  myList() {
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
      // console.log(response.data);
      this.setState({ myCarList: response.data });
    });
  }

  editCar(id) {
    const { make, year, price } = this.state;
    axios.put("/api/cars/", { id, make, year, price }).then(response => {
      this.setState({ cars: response.data });
    });
  }

  deleteCar(id) {
    axios.delete(`/api/cars/${id}`).then(response => {
      this.setState({ myCarList: response.data });
    });
  }

  handleInputMake = e => {
    this.setState({
      make: e
    });
  };
  handleInputYear = e => {
    this.setState({
      year: e
    });
  };
  handleInputPrice = e => {
    this.setState({
      price: e
    });
  };

  render() {
    console.log("APP", this.state);

    const { cars, myCarList } = this.state;
    /* 
add to my list from app
handleinputmake
handleinputyear
handleprice

*/
    let mappedCars = cars.map(car => {
      return (
        <CarDisplay
          car={car}
          addToMyList={this.addToMyList}
          handleInputMake={this.handleInputMake}
          handleInputYear={this.handleInputYear}
          handleInputPrice={this.handleInputPrice}
          editCar={this.editCar}
        />
      );
    });

    const myMappedList = myCarList.map(car => {
      return <FavCarList car={car} deleteCar={this.deleteCar} />;
    });

    return (
      <div className="App">
        <div>
          <Header />
        </div>
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

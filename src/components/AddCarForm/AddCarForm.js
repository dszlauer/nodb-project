import React, { Component } from "react";
import axios from "axios";
import "./addCarForm.css";

class AddCarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      imageUrl: "",
      make: "",
      year: "",
      price: ""
    };
    this.add = this.add.bind(this);
  }

  add() {
    const { id, imageUrl, make, year, price } = this.state;

    console.log("Form Axios", newCar);
    let newCar = {
      id,
      imageUrl: imageUrl
        ? imageUrl
        : "https://img.newatlas.com/mazda-vision-coupe-wins-2018-concept-car-of-the-year-4.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C106%2C1620%2C912&w=616&s=a40e38fdb6995f043b03589dd2e2bf6e",
      make,
      year,
      price
    };

    axios.post("/api/cars", newCar).then(response => {
      this.props.addCar();
    });
    this.setState({
      id: this.state.id + 1,
      imageUrl: "",
      make: "",
      year: "",
      price: ""
    });
  }

  render() {
    console.log("FORM", this.state);
    const { imageUrl, make, year, price } = this.state;
    return (
      <div className="add-car">
        <h1>Add Car Form</h1>
        <label>Car make</label>
        <input
          value={make}
          onChange={e => this.setState({ make: e.target.value })}
          placeholder="Type, car make"
        />
        <label>Car Year</label>
        <input
          value={year}
          onChange={e => this.setState({ year: e.target.value })}
          placeholder="Type, car year"
        />
        <label>Car Price</label>
        <input
          value={price}
          onChange={e => this.setState({ price: e.target.value })}
          placeholder="Type, car price"
        />
        <label>Image Url</label>
        <input
          value={imageUrl}
          onChange={e => this.setState({ imageUrl: e.target.value })}
          placeholder="Paste image Url"
        />
        <br />
        <button className="submit-btn" onClick={this.add}>
          Submit
        </button>
      </div>
    );
  }
}

export default AddCarForm;

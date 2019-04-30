let cars = [];
let myList = [];

let id = 0;

module.exports = {
  getCars: (req, res) => {
    res.status(200).json(cars);
  },

  addCar: (req, res) => {
    const { id, imageUrl, make, year, price } = req.body;
    cars.push({
      id,
      imageUrl,
      make,
      year,
      price
    });
    // console.log("CONTROLLER_ADDCAR", req.body);
    res.status(200).json(cars);
  },

  addToMyList: (req, res) => {
    let { id, imageUrl, make, year, price } = req.body;
    myList.push({
      id,
      imageUrl,
      make,
      year,
      price
    });
    res.status(200).json(myList);
  },

  editCar: (req, res) => {
    let { id, make, year, price } = req.body;

    // +id is set because sometimes data comes in as a string instead of an index, +id will set it as a integer
    let index = cars.findIndex(car => {
      return +id === car.id;
    });

    cars[index].make = make;
    cars[index].year = year;
    cars[index].price = price;

    // console.log("EDITCAR", id);
    res.status(200).json(cars);
  },

  deleteCar: (req, res) => {
    let { id } = req.params;
    myList = myList.filter(car => {
      return car.id !== +id;
    });
    // console.log(myList);
    // console.log(id);
    res.status(200).json(myList);
  }
};

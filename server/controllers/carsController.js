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

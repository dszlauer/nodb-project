const express = require("express");
const bodyParser = require("body-parser");
const carsController = require("./controllers/carsController");

const app = express();
app.use(bodyParser.json());

app.get("/api/cars", carsController.getCars);
app.post("/api/cars", carsController.addCar);
app.post("/api/favcars", carsController.addToMyList);
app.put("/api/cars/", carsController.editCar);
app.delete("/api/cars/:id", carsController.deleteCar);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

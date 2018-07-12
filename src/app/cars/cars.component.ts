import { Component, OnInit } from "@angular/core";
import { CarService } from "../shared/car.service";
import { Car } from "../shared/car.model";

@Component({
  selector: "app-employee-car",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
  cars: Car[];
  currentCar: Car;



  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    this.carService.getAllCars()
      .subscribe(cars => this.cars = cars);
  }

  selectCar(car) {
    this.currentCar = car;
  }

  cancel(car) {
    this.reset();
  }
  reset() {
    this.currentCar = {
      id: null,
      year: "",
      model: "",
      make: "",
    };
  }

  save(car) {
    if(car.id) {
      this.updateCar(car);
    } else {
      this.createCar(car);
    }
  }
  createCar(car) {
    this.carService.create(car)
      .subscribe(create => {
        this.cars.push(car);
        this.getCar();
        this.reset();
      });
  }
  updateCar(car) {
    this.carService.update(car)
      .subscribe(update => {
        this.getCar();
        this.reset();

      });

  }
  deleteCar(car) {
    this.carService.delete(car.id)
      .subscribe(deleted => {
        this.getCar();
        this.reset();
      });
  }

}

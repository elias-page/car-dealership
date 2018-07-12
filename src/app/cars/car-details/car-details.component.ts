import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Car} from "../../shared/car.model";

@Component({
  selector: "app-car-detail",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.css"]
})
export class CarDetailsComponent implements OnInit {
  selectedCar
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set currentCar(value: Car) {
    this.selectedCar = Object.assign({}, value);
  };

  ngOnInit() {
  }
}

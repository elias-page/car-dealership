import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Car} from "../../shared/car.model";

@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"]
})
export class CarListComponent {
  @Input() cars: Car[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

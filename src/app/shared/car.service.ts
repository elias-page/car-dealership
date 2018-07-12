import { Injectable } from "@angular/core"
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";
import {Car} from "./car.model";

const BASE_URL = "https://elias-page.herokuapp.com/dealership";

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {}

  getAllCars() {
    return this.http.get<Car[]>(BASE_URL)
      .pipe(map(res => res));
  }

  create(car: Car) {
    return this.http.post<Car>(BASE_URL, car)
      .pipe(map(res => res));
  }

  update(car: Car) {
    return this.http.patch<Car>(`${BASE_URL}/${car.id}`, car)
      .pipe(map(res => res));
  }

  delete(id: number){
    return this.http.delete<Car>(`${BASE_URL}/${id}`)
      .pipe(map(res => res));
  }


}

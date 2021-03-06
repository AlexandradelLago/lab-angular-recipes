import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {
  
  constructor(private http: Http) { }

  getAllDishes(){
    return this.http.get('http://localhost:3000/api/dishes')
      .map(res => res.json());
  }
  getOneDish(id){
    return this.http.get(`http://localhost:3000/api/dishes/${id}`)
      .map(res =>  res.json() );
  }

  createDish(newdish){

    return this.http.post('http://localhost:3000/api/dishes',newdish)
    .map(res => res.json());
  }
}
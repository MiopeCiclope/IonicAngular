import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'São João de Meriti',
      'Worst Place to be',
      'http://www.meriti.rj.gov.br/semtracite1/wp-content/uploads/2017/03/praca_matriz.jpg',
      50.00),
    new Place(
      'p2',
      'Floripa',
      'Not bad place to be',
      'https://media-cdn.tripadvisor.com/media/photo-s/0f/24/9c/e9/photo0jpg.jpg',
      179.00),
    new Place(
      'p3',
      'Norway',
      'My life dream',
      'http://conexaoplaneta.com.br/wp-content/uploads/2018/03/auroras-boreais-zig-koch-conexao-planeta.jpg',
      550.00),
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}

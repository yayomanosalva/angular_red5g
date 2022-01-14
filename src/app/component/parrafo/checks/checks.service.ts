import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChecksService {

  terminos = new EventEmitter<boolean>();

  constructor() { }
}

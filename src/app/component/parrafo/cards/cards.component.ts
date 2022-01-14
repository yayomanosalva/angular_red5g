import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { CardsModel } from './cards.model';
import cardjson from './cards.json';
import { faThermometerEmpty } from '@fortawesome/free-solid-svg-icons';
import { ChecksService } from '../checks/checks.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private checksService: ChecksService) {}
  ngOnInit(): void {}

  img: String = '../../../../assets/man.jpg';
  img2: string = '../../../../assets/grupo.jpg';
  parrafcard: string = 'Seleccione esta opción si usted es persona natural.';
  parrafcard2: string = 'Seleccione esta opción si usted es persona jurídica.';
  tittleCard: string =
    'Seleccione el tipo de persona bajo el cual desea realizar el registro';
  faThermometerEmpty = faThermometerEmpty;

  cards: CardsModel[] = [
    new CardsModel(this.img, this.parrafcard),
    new CardsModel(this.img2, this.parrafcard2),
  ];

  @Input() isChecked: boolean;

  registro() {
    //this.personas.push(catchPerson);
    //console.log('isChecked cards == ', this.checksService.terminos);
    this.checksService.terminos.subscribe(
      (isChecked: boolean) => {
        if (isChecked === true) {
          console.log('bien');
        } else {
          console.log('mal');
        }
      // alert('emiter' + isChecked);
      }
    );
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChecksService } from './checks.service';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.css'],
})
export class ChecksComponent implements OnInit {
  constructor(private checksService: ChecksService) {}
  ngOnInit(): void {}

  public isChecked: boolean;

  //this.checkeded.emit(isChecked)

  log() {
    console.log('checksService -->> ', this.isChecked);
    this.checksService.terminos.emit(this.isChecked);
  }
}

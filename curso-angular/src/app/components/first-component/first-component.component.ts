import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name = 'Daniel';
  age = 30;
  job = 'programador';
  hobbies = ['Correr', 'jogar', 'Estudar'];
  car = {
    name: 'Polo',
    years: 2019,
  };
}

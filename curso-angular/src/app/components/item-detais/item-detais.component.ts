import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-item-detais',
  templateUrl: './item-detais.component.html',
  styleUrls: ['./item-detais.component.css'],
})
export class ItemDetaisComponent {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}

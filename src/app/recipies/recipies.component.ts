import { Component, OnInit } from '@angular/core';
import { Recipies } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  selectedRecipe: Recipies;
  constructor() { }

  ngOnInit() {

  }

}

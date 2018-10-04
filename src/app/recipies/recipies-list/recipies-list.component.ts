import { Component, OnInit } from '@angular/core';
import { Recipies } from '../recipies.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipies[] =[
    new Recipies('Recipie', 'this is a sample input of description of recipie', 'https://www.foodforfitness.co.uk/wp-content/uploads/2017/08/protein-pancakes-recipe-horizontal-e1504088873721.jpg'),
    new Recipies('Recipie', 'this is a sample input of description of recipie', 'https://www.foodforfitness.co.uk/wp-content/uploads/2017/08/protein-pancakes-recipe-horizontal-e1504088873721.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}


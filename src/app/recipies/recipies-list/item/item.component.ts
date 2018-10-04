import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipies } from '../../recipies.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() r: Recipies;
  @Output() recipeSelected= new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

    onSelected()
    {
      this.recipeSelected.emit();

    }
  

}

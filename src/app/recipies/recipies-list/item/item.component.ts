import { Component, OnInit, Input } from '@angular/core';
import { Recipies } from '../../recipies.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() r: Recipies;

  constructor() { }

  ngOnInit() {
  }

}

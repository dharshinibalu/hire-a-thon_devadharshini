import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
@Input() url = '';
@Input() name = '';
@Input() text = '';
  constructor() { }

  ngOnInit(): void {
  }

}

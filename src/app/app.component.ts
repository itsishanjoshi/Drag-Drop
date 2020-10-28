import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Handson';
  store=[];
  constructor(){
    for(let i=0;i<30;i++){
      this.store[i]= 'x';
    }
  }
}

import { Component } from '@angular/core';
import {lorem} from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText = lorem.sentence();
  enteredText = '';

  // tslint:disable-next-line:typedef
  onChangeInput(value: string){
    if (value){
      this.enteredText = value;
    }
  }

  compare(randomLetter: string, enteredLetter: string){
    if (!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}

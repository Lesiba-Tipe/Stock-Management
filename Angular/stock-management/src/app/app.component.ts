import { Component } from '@angular/core';
import { users } from './Globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stock Management';
  users(){ return users }


}

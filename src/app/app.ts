import { Component } from '@angular/core';

@Component({
  selector: 'app-satyam',
  
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App 
{
 // protected title = 'LatestApp';
 name ? : string ="Satyam";
changeMyName() : void 
{
  this.name="Shivam";
  
}

}

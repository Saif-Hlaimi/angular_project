import { Component } from '@angular/core';
import { retryWhen } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  

  test : string = "Liste des produits";
  imagepath : string = "assets/images/OIP.jpeg"
  quantity = 0;
  color : string = ""

  isValidColor: boolean = false;



  add(){
    this.quantity++;
  }

  delete(){
    this.quantity--;
  }

  validateColor() {
    const s = new Option().style;
    s.color = this.color;
    this.isValidColor = s.color !== '';
  }




 



}

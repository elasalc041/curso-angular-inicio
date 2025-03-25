import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  //templateUrl: './avatar-alt.component.html',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  name = "Avatar";
  surname = "Component";
  age = 30;
  married = true;
  address = {
    street : "Calle Falsa",
    number : 123
  }
  private dni = "12345678A";
  public nacionalidad = "Española"; 

  getDate(){
    return new Date();
  }

  num_productos = 0;

  //binding propiedades
  foto = "https://www.w3schools.com/howto/img_avatar.png";
  descripcion = "Imagen de Avatar";

}

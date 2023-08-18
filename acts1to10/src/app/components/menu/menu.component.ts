import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuTittle:string = "Tittle Menu";
  menuScript: string[] = [
    "Home",
    "Services",
    "About",
    "Contact"
  ];
}

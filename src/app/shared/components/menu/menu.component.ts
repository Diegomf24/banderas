import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] | undefined;

  public ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: PrimeIcons.HOME,
        routerLink: 'preguntas/home'
      },
      {
        label: 'Banderas',
        icon: PrimeIcons.FLAG_FILL,
        routerLink: 'preguntas/banderas'
      },
      {
        label: 'Capitales',
        icon: PrimeIcons.GLOBE,
        routerLink: 'preguntas/capitales'
      },
      {
        separator: true
      },
      {
        label: 'Configuración',
        icon: PrimeIcons.COG,
        disabled: true,
      }
    ];
  }
}


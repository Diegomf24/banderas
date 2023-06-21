import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Banderas',
        icon: 'pi pi-flag-fill',

      },
      {
        label: 'Capitales',
        icon: 'pi pi-globe',
      },
      {
        separator: true
      },
      {
        label: 'Configuración',
        icon: 'pi pi-fw pi-cog',
        disabled: true,
      }
    ];
  }
}


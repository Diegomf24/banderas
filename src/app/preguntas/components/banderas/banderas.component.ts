import { Component } from '@angular/core';

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})
export class BanderasComponent {
  public visible: boolean = false;

  public showDialog() {
    this.visible = true;
  }
}

import {Component, OnInit} from '@angular/core';
import {PaisesService} from "../../../shared/services/paises.service";
import {Pais} from "../../../shared/models/pais.model";

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})
export class BanderasComponent implements OnInit{
  public mostrarDialogoEmpezar!: boolean;
  public puntos!: number;
  public cargandoPaises!: boolean;


  constructor(private paisesService: PaisesService) {
  }

  public ngOnInit(): void {
    this.mostrarDialogoEmpezar = true;
    this.puntos = 0;
    this.cargandoPaises = false;
    this.paisesService.getAllCountries().subscribe(
      {
        next: (paises: Pais[]) => {
          console.log("La lista de paises ha llegado bien", paises);
          this.paisesService.paises = paises;
        }, error: (error) => {
          console.error("He encontrado un error por favor espere o reinicie");
        }
      }
    );
  }
  }

  mostrarBanderas() {
    this.mostrarDialogoEmpezar = false;
  }

  empezarBanderas() {

  }
}

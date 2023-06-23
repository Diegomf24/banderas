import {Component, OnInit} from '@angular/core';
import {PaisesService} from "../../../shared/services/paises.service";
import {Pais} from "../../../shared/models/pais.model";
import {PreguntasBanderas} from "../../../shared/models/preguntas-banderas.model";

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.css']
})
export class BanderasComponent implements OnInit{

  public mostrarDialogoEmpezar: boolean;
  public puntos: number;
  public cargandoPaises: boolean;
  public pregunta!: PreguntasBanderas | null;
  private pais!: string;
  public respuestaCorrecta: string;
  public reinicio!: boolean;
  public interval: any;
  public tiempo!: number;


  constructor(private paisesService: PaisesService) {
    this.mostrarDialogoEmpezar = true;
    this.puntos = 0;
    this.cargandoPaises = false;
    this.respuestaCorrecta = "¿Cuál es la bandera?";
  }

  public ngOnInit(): void {
    this.mostrarDialogoEmpezar = true;
    this.puntos = 0;
    this.cargandoPaises = false;
    this.paisesService.getAllCountries().subscribe(
      {
        next: (paises: Pais[]) => {
          console.log("La lista de paises ha llegado bien", paises);
          for(let pais of paises){
            console.log(pais.name.common)
          }
          this.paisesService.paises = paises;
        }, error: (error) => {
          console.error("He encontrado un error por favor espere o reinicie", error);
        }
      }
    );
  }




  public evaluarRespuesta(respuesta: string) {
    if (respuesta === this.pregunta!.respuesta) {
      this.puntos += 10;
    } else {
      this.puntos -=10;
    }
    this.respuestaCorrecta = this.pregunta!.respuesta
    this.mostrarDialogoEmpezar = false;
    this.mostrarBanderas();
  }



  mostrarBanderas() {
    this.mostrarDialogoEmpezar = false;
    this.pregunta = this.paisesService.getFlagsQuestions();
    clearInterval(this.interval);
    this.mirarTiempo();
    this.reinicio = true;
  }

  public mirarTiempo() {
    this.tiempo = 20;
    this.interval = setInterval(
      (): void => {
        if (this.tiempo > 0) {
          this.tiempo--;
        } else {
          clearInterval(this.interval);
        }
      },1000);
  }

  public reiniciar() {
    clearInterval(this.interval);
    this.puntos= 0;
    this.reinicio = false;
    this.mostrarBanderas();
  }


}

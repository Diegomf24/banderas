import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pais} from "../models/pais.model";
import {PreguntasBanderas} from "../models/preguntas-banderas.model";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _paises!: Pais[];

  constructor(private httpClient: HttpClient) {
  }


  get paises(): Pais[] {
    return this._paises;
  }

  set paises(value: Pais[]) {
    this._paises = value;
  }

  public getAllCountries(): Observable<Pais[]> {
    return this.httpClient.get<Pais[]>("https:restcountries.com/v3.1/all");
  }

  public getFlagsQuestions(): PreguntasBanderas | null {
    if(this._paises.length == 0) {
      return null;
    }
    let valoresDesordenados = [
      this.paisRandom().name.common,
      this.paisRandom().name.common,
      this.paisRandom().name.common,
      this.paisRandom().name.common
    ];
    let pais: Pais = this.paisRandom();
    let posicionAleatoria: number = Math.floor(Math.random() * valoresDesordenados.length);
    valoresDesordenados[posicionAleatoria] = pais.name.common;
    return {
      bandera: pais.flags.svg,
      respuesta: pais.name.common,
      desordenadas: valoresDesordenados
    };
  }

  public paisRandom(): Pais {
    let index: number = Math.floor(this._paises.length * Math.random());
    return this._paises[index];
  }
}


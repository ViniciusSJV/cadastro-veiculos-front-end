import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Veiculo } from './veiculo';

@Injectable()
export class VeiculoService {

  constructor(private http:Http) { }

    getVeiculos(): Observable<Veiculo[]> {
        return this.http.get("http://localhost:8080/RESTFull/rest/veiculoService/getVeiculos")
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
    }

    getVeiculoById(idVeiculo: number): Observable<Veiculo> {
      return this.http.get("http://localhost:8080/RESTFull/rest/veiculoService/getVeiculoById/"+ idVeiculo.toString())
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
    }

    deleteVeiculo(id: number): Observable<number> {
      return this.http.delete("http://localhost:8080/RESTFull/rest/veiculoService/deleteVeiculo/"+ id.toString())
	       .map(success => success.status)
               .catch(this.handleErrorObservable);
    }

    updateVeiculo(veiculo:Veiculo, id: number): Observable<number> {
      veiculo.id = id;
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });

      return this.http.put("http://localhost:8080/RESTFull/rest/veiculoService/updateVeiculo", veiculo, options)
	       .map(success => success.status)
               .catch(this.handleErrorObservable);
    }

    addVeiculo(veiculo:Veiculo): Observable<number> {
      veiculo.id = null;
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });

      return this.http.post("http://localhost:8080/RESTFull/rest/veiculoService/addVeiculo", veiculo, options)
         .map(success => success.status)
            .catch(this.handleErrorObservable);
}

  private extractData(res: Response) {
	     let body = res.json();
       return body;
  }

  private handleErrorObservable (error: Response | any) {
	    return Observable.throw(error.message || error);
  }

}

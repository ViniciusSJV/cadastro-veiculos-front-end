import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../service/veiculo.service';
import { Veiculo } from '../service/veiculo';

@Component({
  selector: 'veiculos',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  veiculos: Veiculo[];
  errorMessage: String;

  //variavel que indica primeira paginacao na carregar da pagina
  //Ref HTML (pageChange)="p = $event"
  p: number = 1;

  constructor(private veiculoService : VeiculoService) {

  }

  getAllVeiculos() {
        this.veiculoService.getVeiculos().subscribe(
          body => this.veiculos = body,
          error =>  this.errorMessage = <any>error);

   }

  deleteVeiculo(id: number) {
      this.veiculoService.deleteVeiculo(id).subscribe(
        successCode => {
		        this.getAllVeiculos();
            alert("Deletado");
		    },
		    errorCode => this.errorMessage = errorCode);
   }

  ngOnInit() {
    this.getAllVeiculos();
  }


}

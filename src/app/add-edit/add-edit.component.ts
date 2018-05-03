import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }   from '@angular/forms';


import { VeiculoService } from '../service/veiculo.service';
import { Veiculo } from '../service/veiculo';

@Component({
    selector: 'add-edit',
    templateUrl: './add-edit.component.html',
	  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
    //id do veiculo para edicao
    id: number;
    private sub: any;

	  veiculo: Veiculo = new Veiculo();
    errorMessage: String;
    
    // form do HTML
    form;

	constructor(private router: Router,
	            private veiculoService: VeiculoService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      //validacoes dos campos. Ref HTML formControlName
      //mesma validação de campos é feita do lado do servidor
      this.form = new FormGroup({
        'alugado': new FormControl(this.veiculo.alugado),
        'placa': new FormControl(this.veiculo.placa, Validators.required),
        'modelo': new FormControl(this.veiculo.modelo, Validators.required),
        'ano': new FormControl(this.veiculo.ano, Validators.required),
        'cor': new FormControl(this.veiculo.modelo, Validators.required)
  })

      //variavel responsavel por receber o id do veiculo para edição via parametro
      this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];

      //verifica se possui Id pra buscar os dados do veiculo para edição, senão ñ faz nada pois se trata de um novo veiculo
      if(this.id != 0){
        this.getVeiculoById(this.id);
      }

     });
    }

    getVeiculoById(id: number) {
          this.veiculoService.getVeiculoById(this.id).subscribe(
            body => this.veiculo = body,
            errorCode =>  this.errorMessage = <any>errorCode);
     }

    addEditVeiculo(): void {
      //verifica se possui Id pra saber se deve salvar um novo ou atualizar um existente
      if(this.id != 0){
        this.veiculoService.updateVeiculo(this.veiculo, this.id)
        .subscribe(
          successCode => {
           this.router.navigate(['/veiculos']);
         },
         errorCode => this.errorMessage = errorCode);
      }else{
        this.veiculoService.addVeiculo(this.veiculo)
        .subscribe(
          successCode => {
           this.router.navigate(['/veiculos']);
         },
         errorCode => this.errorMessage = errorCode);
      }
   }
}

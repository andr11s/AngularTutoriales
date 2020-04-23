import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormDatos } from './datos'
import { PersonasService } from './formreat.service'

@Component({
  selector: 'app-formreact',
  templateUrl: './formreact.component.html',
  styleUrls: ['./formreact.component.css']
})
export class FormreactComponent {

  formulario: FormGroup;
  Datos: any = [];


  constructor(private _formBuilder: FormBuilder, private _PersonsService: PersonasService) {
    this.Datos = this._PersonsService.getAllPerson();

    this.formulario = this._formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required]
    })
  }
  onSubmit(param) {
    console.log(param);
  }

  value() {
    console.log("aqui");
  }

  getPerson(index: number) {
    this._PersonsService.getPerson(index);
  }
}

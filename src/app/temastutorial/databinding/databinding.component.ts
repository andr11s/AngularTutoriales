import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public titulotema: string = "DATA BINDING";
  public temasinterpolacion: string = "Interpolacion";
  public propetybinding: string = "Propety Binding";
  public eventbinding: string = "Event Binding";

  public personas: any = { nombre: "andres", genero: "m" };

  constructor() {

  }

  ngOnInit(): void {
  }

}

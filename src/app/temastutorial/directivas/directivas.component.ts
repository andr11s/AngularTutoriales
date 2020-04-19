import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  public TempNotica: any;

  public categorias: any = [
    { "codigo": 0, "nombre": "Todo" }, { "codigo": 1, "nombre": "Informatica" }, { "codigo": 2, "nombre": "Politica" }, { "codigo": 3, "nombre": "Educacion" }
  ];

  public noticias: any = [{
    "categoria": { "codigo": 1, "tipo": "Informatica" },
    "nombre": "La interacción física en época de coronavirus",
    "descripcion": "Es inevitable hablar de la pandemia de covid-19 en estos días,", "img": "https://ep01.epimg.net/elpais/imagenes/2020/04/16/opinion/1587037208_401620_1587048467_noticia_normal_recorte1.jpg"
  },
  {
    "categoria": { "codigo": 2, "tipo": "Politica" },
    "nombre": "Sectores resaltan la urgencia de crear un task force social",
    "descripcion": "Representantes de los grupos que levantan el reclamo se reunieron con miembros del Ejecutivo", "img": "https://rec-end.elnuevodia.com/images/tn/0/202/5339/2861/900/447/2020/04/14/c5c4ffab0d57479ca514579711715f21.jpg"
  },
  {
    "categoria": { "codigo": 3, "tipo": "Educacion" },
    "nombre": "Ahora me cuesta más estudiar y me da miedo que me baje la nota",
    "descripcion": "Estudiantes y familias de las autonomías que rechazan el pacto escolar denuncian que quedan en desventaja", "img": "https://imagenes.elpais.com/resizer/Bp9d2Z1sVkIevdR6FWm8mTBP6xE=/1500x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UKFNSXVR5FAHPKC55ZHME6LFOU.JPG"
  }]
  constructor() {
    this.TempNotica = this.noticias;
  }

  ngOnInit(): void {
  }


  eventFilter(event) {
    console.log(event.target.value);
    if (event.target.value == 0) {
      this.noticias = this.TempNotica;
    } else {
      let noticia = this.noticias.filter((item) => {
        return item.categoria.codigo == event.target.value;
      })
    }

  }
}

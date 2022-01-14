import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parrafo',
  templateUrl: './parrafo.component.html',
  styleUrls: ['./parrafo.component.css'],
})
export class ParrafoComponent implements OnInit {
  tittle: string = 'Formulario de inscripción de proveedores';
  parrafo1: string =
    'Podrán inscribirse todas las personas interesadas en ser proveedores de bienes y servicios. Cualquier persona natural o jurídica podrá registrarse, cumpliendo con los requisitos exigidos y el procedimiento que la Empresa define para tal efecto.';
  parrafo2: string =
    'Teniendo en cuenta la estrategia de aprovisionamiento, la Empresa establece criterios de capacidad jurídica, financiera, técnica, administrativa, operativa y demás que se consideran pertinentes, con el fin de que los proveedores registrados puedan ser precalificados para las diferentes categorías de bienes y servicios, lo cual servirá de fuente de información para realizar solicitudes de ofertas, según los procedimientos establecidos en el Reglamento de Contratación.';
  parrafo3: string =
    '  Para poder participar en los procesos de contratación de FINSOCIAL, es requisito para el proveedor, estar registrado en el sistema ';
  linkParrafo: string =
    'diligenciando todos los datos solicitados a continuación.';

  constructor() {}

  ngOnInit(): void {}
}

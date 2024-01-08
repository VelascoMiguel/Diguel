import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyect-content',
  standalone: true,
  imports: [],
  templateUrl: './proyect-content.component.html',
  styleUrl: './proyect-content.component.css',
})

export class ProyectContentComponent {
  proyects = [
    {
      id:1,
      nombreProyecto: 'NASA',
      fechaProyecto: '11/2023',
      descripcionProyecto: 'jaskdjasdlkajweljajdhwaljdwhlakldjhaldjal',
    },
    {
      id:2,
      nombreProyecto: 'Jaguar',
      fechaProyecto: '1/2023',
      descripcionProyecto: 'lñakxlñksjxklajxlkjx',
    },
    {
      id:3,
      nombreProyecto: 'Ford',
      fechaProyecto: '10/2023',
      descripcionProyecto: 'alkshdiyuiwdkuqyuwydqi',
    },
    {
      id:4,
      nombreProyecto: 'Ferrari',
      fechaProyecto: '07/2023',
      descripcionProyecto: 'quiweoiqudliwqiuiwd',
    },
  ];
}

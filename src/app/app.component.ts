import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Sintomas', url: '/folder/Sintomas', icon: 'body' },
    { title: 'Riesgos', url: '/folder/Riesgos', icon: 'bandage' },
    { title: 'Tipos de Cancer', url: '/folder/Tipos de Cancer', icon: 'medical' },
    { title: 'Prevención', url: '/folder/Prevención', icon: 'heart' },
    { title: 'Más fuentes', url: '/folder/Más fuentes', icon: 'book' },
  ];
  public labels = [];
  constructor() {}
}

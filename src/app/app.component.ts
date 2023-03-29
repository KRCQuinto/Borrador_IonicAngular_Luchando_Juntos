import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sintomas', url: '/sintomas', icon: 'body' },
    { title: 'Riesgos', url: '/riesgos', icon: 'bandage' },
    { title: 'Tipos de Cancer', url: '/tipos', icon: 'medical' },
    { title: 'Prevención', url: '/revencion', icon: 'heart' },
    { title: 'Más fuentes', url: '/folder/Más fuentes', icon: 'book' },
  ];
  public labels = [];
  constructor() {}
}

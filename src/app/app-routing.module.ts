import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sintomas',
    loadChildren: () => import('./sintomas/sintomas.module').then( m => m.SintomasPageModule)
  },
  {
    path: 'riesgos',
    loadChildren: () => import('./riesgos/riesgos.module').then( m => m.RiesgosPageModule)
  },
  {
    path: 'prevencion',
    loadChildren: () => import('./prevencion/prevencion.module').then( m => m.PrevencionPageModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./tipos/tipos.module').then( m => m.TiposPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

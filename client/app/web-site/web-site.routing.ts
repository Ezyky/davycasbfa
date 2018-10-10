import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebSiteComponent } from './web-site.component';
import { AccueilComponent } from './components/acceuil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { GallerieComponent } from './components/gallerie/gallerie.component';
import { PartenaireComponent } from './components/partenaire/partenaire.component';


const routes: Routes = [
  { path: '',
    component: WebSiteComponent,
    children: [
      { path: '', redirectTo: '/accueil', pathMatch: 'full' },
      { path: 'accueil', component: AccueilComponent },
      { path: 'about', component: AboutComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'gallerie', component: GallerieComponent },
      { path: 'partenaire', component: PartenaireComponent }
    ]
  },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class WebSiteRoutingModule {

}

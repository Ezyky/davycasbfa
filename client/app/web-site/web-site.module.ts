import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WebSiteComponent } from './web-site.component';
import { NotFoundComponent } from './components/not-fount/not-found.component';
import { WebSiteRoutingModule } from './web-site.routing';
import { AccueilComponent } from './components/acceuil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GallerieComponent } from './components/gallerie/gallerie.component';
import { PartenaireComponent } from './components/partenaire/partenaire.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        WebSiteRoutingModule
    ],
    exports: [
        NotFoundComponent
    ],
    declarations: [
        WebSiteComponent,
        NotFoundComponent,
        NavBarComponent,
        AccueilComponent,
        AboutComponent,
        ServiceComponent,
        GallerieComponent,
        PartenaireComponent,
        MapComponent
        ,
        FooterComponent,
        CarouselComponent
    ],
    providers: [],
})
export class WebsiteModule { }

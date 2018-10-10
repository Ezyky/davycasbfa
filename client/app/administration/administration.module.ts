import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdministrationComponent } from './administration.component';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
    ],
    exports: [],
    declarations: [AdministrationComponent],
    providers: [],
})
export class AdministrationeModule { }

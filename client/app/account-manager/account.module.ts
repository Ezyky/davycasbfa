import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AccountComponent } from './account.component';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
    ],
    exports: [],
    declarations: [AccountComponent],
    providers: [],
})
export class AccountModule { }

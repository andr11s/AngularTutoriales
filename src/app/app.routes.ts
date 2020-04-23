import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './temastutorial/databinding/databinding.component';
import { DirectivasComponent } from './temastutorial/directivas/directivas.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { FormreactComponent } from './temastutorial/formreact/formreact.component';

const routes: Routes = [
    { path: '', component: ApphomeComponent },
    { path: 'databing', component: DatabindingComponent },
    { path: 'directivas', component: DirectivasComponent },
    { path: 'formulario', component: FormreactComponent },
    { path: '**', component: ApphomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    // { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}

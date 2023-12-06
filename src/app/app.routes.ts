import { Routes } from '@angular/router';
import { RegistrationfirstpageComponent } from './auth/registrationfirstpage/registrationfirstpage.component';
import path from 'path';
import { Component } from '@angular/core';
import { RegistrationsecondpageComponent } from './auth/registrationsecondpage/registrationsecondpage.component';


export const routes: Routes = [
    {path:'signup',component:RegistrationfirstpageComponent},
    {path:'signupmobile' ,component:RegistrationsecondpageComponent}
];

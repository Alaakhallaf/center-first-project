import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { register } from 'module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import path from 'path';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
{path:'auth' ,component:AuthLayoutComponent,
    children:[
        {path:'register', component:RegisterComponent},
                {path:'login',component:LoginComponent},

    ]
},
{path:'blank' ,component:BlankLayoutComponent
    ,children:[
{        path:'home',component:HomeComponent
}  ,
{        path:'contact',component:ContactComponent
} ,
{        path:'about',component:AboutComponent
} ,
{        path
    :'services',component:ServicesComponent
} ,
{        path:'cart',component:CartComponent
} 
  ]
},
{path:'**' ,component:NotfoundComponent}

];

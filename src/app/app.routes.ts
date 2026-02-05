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
import { VolunteringComponent } from './components/voluntering/voluntering.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ManagementComponent } from './components/management/management.component';
import { CoursesComponent } from './components/courses/courses.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { SignoutComponent } from './components/signout/signout.component';
import { LeaderWordComponent } from './components/leader-word/leader-word.component';
import { CenterBirthComponent } from './components/center-birth/center-birth.component';
import { CenterGoalsComponent } from './components/center-goals/center-goals.component';

export const routes: Routes = [



{ path: '', redirectTo: 'blank/home', pathMatch: 'full' }
,
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

{        path:'voluntering',component:VolunteringComponent
} 
,
{        path:'jobs',component:JobsComponent
} 
,
{        path:'courses',component:CoursesComponent
} 

,
{        path:'workshops',component:WorkshopsComponent
} 
,
{        path:'signout',component:SignoutComponent
} 
,
{        path:'leader-word',component:LeaderWordComponent
} 
,
{        path:'center-birth',component:CenterBirthComponent
} ,
{        path:'center-goals',component:CenterGoalsComponent
} 
  ]
},
{path:'**' ,component:NotfoundComponent}

];

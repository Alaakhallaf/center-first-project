import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
  private readonly _AuthServiceService =inject(AuthServiceService)
  private readonly _formBuilder =inject(FormBuilder)
  private readonly _router =inject(Router)
  
  
  
  msgError:string="";
  isLoading:boolean=false;
  
  
  
  
 loginForm:FormGroup=this._formBuilder.group({
  email:[null,[Validators.required,Validators.email]],
  
  password:[null,[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
  
 
})
  //  loginForm:FormGroup =new FormGroup({
  // name:new FormControl(null,[Validators.required,Validators.minLength(3)]) ,
  // email:new FormControl(null,[Validators.required,Validators.email]),
  // phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  
  // password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  
  // rePassword:new FormControl(null)
  
  // } ,this.confirmpassword)
  
  
  
 loginSubmit():void{
  if (this.loginForm.valid){
  
    this.isLoading=true;
    this._AuthServiceService.setloginForm(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res)
      if (res.token) {
          localStorage.setItem('userToken', res.token);
          // كمان ممكن تخزني الاسم لو حبيتي
          localStorage.setItem('fullName', res.fullName);
          this._router.navigate(['/home']);
        }
          this.isLoading=false;
  
      },
  
        error: (err: HttpErrorResponse) => {
        this.msgError = err.error.message;
        console.log(err);
        this.isLoading = false;
      }
    })
    console.log(this.loginForm.value)
  }
  }
  
  
  
  
  
  
  
}


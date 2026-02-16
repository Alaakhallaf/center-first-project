import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
private readonly _AuthServiceService =inject(AuthServiceService)
private readonly _formBuilder =inject(FormBuilder)
private readonly _router =inject(Router)



msgError:string="";
isLoading:boolean=false;




registerForm:FormGroup=this._formBuilder.group({
name:[null,[Validators.required,Validators.minLength(3)]],
email:[null,[Validators.required,Validators.email]],

password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],

rePassword:[null],

phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]


}, {Validators:this.confirmpassword})
//   registerForm:FormGroup =new FormGroup({
// name:new FormControl(null,[Validators.required,Validators.minLength(3)]) ,
// email:new FormControl(null,[Validators.required,Validators.email]),
// phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

// password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),

// rePassword:new FormControl(null)

// } ,this.confirmpassword)



registerSubmit():void{
if (this.registerForm.valid){

  this.isLoading=true;
  this._AuthServiceService.setRegisterForm(this.registerForm.value).subscribe({
    next:(res)=>{
      console.log(res)
  if(res.message=='success'){
    this._router.navigate(['/auth/login'])
  }
        this.isLoading=false;

    },

     error:(err:HttpErrorResponse)=>{
      this.msgError = err.error.message
      console.log(err);
        this.isLoading=false;

      
    }
  })
  console.log(this.registerForm.value)
}
}


 confirmpassword(g:AbstractControl ){
  if(g.get('password')?.value === g.get('rePassword')?.value)
{
    return null
  }
  else{
    return{ mismatch:true }
  }
 }





}

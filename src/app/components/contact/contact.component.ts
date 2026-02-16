import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoading: boolean = false;
  msgError: string = '';
  msgSuccess: string = '';

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    issue: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    this.msgError = '';
    this.msgSuccess = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const payload = this.contactForm.value;
    console.log('Contact Payload:', payload);

    // mock send
    setTimeout(() => {
      this.isLoading = false;
      this.msgSuccess = 'Your message has been sent.';
      this.contactForm.reset();
    }, 900);
  }
}

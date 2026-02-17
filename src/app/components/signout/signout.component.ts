import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  standalone: true,
  template: `` // مفيش HTML أصلاً، تحويل مباشر
})
export class SignoutComponent {

  private readonly _router = inject(Router);

  ngOnInit(): void {
    // امسحي أي توكن / بيانات لوجن
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData'); // لو عندك

    // روحي على صفحة اللوجن
    this._router.navigate(['/auth/login']);
  }
}

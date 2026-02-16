import { Component, inject, OnInit } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

   private readonly _CoursesServiceh=inject(CoursesService)

   
  ngOnInit(): void {
    this._CoursesServiceh.getAllcources().subscribe({
      next:(res)=>{
        console.log(res)
      },
       error:(err)=>{
        console.log(err)
      }

    })
  }


}

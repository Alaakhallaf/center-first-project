import { Component, inject, OnInit } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { WishListService } from '../../core/services/wishlist.service';
import { Icources } from '../../core/interfaces/icources';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

   private readonly _CoursesServiceh=inject(CoursesService)
private readonly  _WishlistService=inject(WishListService)


   coursesLIst:Icources[]=[]
  ngOnInit(): void {
    this._CoursesServiceh.getAllcources().subscribe({
      next:(res)=>{
        console.log(res)
        this.coursesLIst = res ;
         this.trainingAndAdvisingCourses = this.coursesLIst.filter(
        course => course.type === 'Training' || course.type === 'Advising'
      );
      },
       error:(err)=>{
        console.log(err)
      }

    })
  }
addToWishlist(id:any):void{
 this._WishlistService.addToWishlist(id).subscribe({
  next:(res)=>{
    console.log(res);     
  },
  error:(err)=>{
    console.log(err);
    
  }
 })
}


// filtering
trainingAndAdvisingCourses: Icources[] = [];
}

import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-paid-courses',
  templateUrl: './paid-courses.component.html',
  styleUrls: ['./paid-courses.component.css'],
})
export class PaidCoursesComponent {
  paidCourses: any = [];

  constructor(private coursesService: CoursesService) {
    this.paidCourses = this.coursesService.getCourses();
  }
}

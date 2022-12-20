import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-free-courses',
  templateUrl: './free-courses.component.html',
  styleUrls: ['./free-courses.component.css'],
})
export class FreeCoursesComponent {
  freeCourses: any = [];

  constructor(private coursesService: CoursesService) {
    this.freeCourses = this.coursesService.getCourses();
  }
}

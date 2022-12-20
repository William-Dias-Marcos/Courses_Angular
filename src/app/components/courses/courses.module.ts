import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from './courses.service';

import { PaidCoursesComponent } from './paid-courses/paid-courses.component';
import { FreeCoursesComponent } from './free-courses/free-courses.component';

@NgModule({
  declarations: [PaidCoursesComponent, FreeCoursesComponent],
  imports: [CommonModule],
  exports: [PaidCoursesComponent, FreeCoursesComponent],
  providers: [CoursesService],
})
export class CoursesModule {}

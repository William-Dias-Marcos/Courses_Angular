import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from './courses.service';

import { PaidCoursesComponent } from './paid-courses/paid-courses.component';
import { FreeCoursesComponent } from './free-courses/free-courses.component';
import { OnlineBooksComponent } from './online-books/online-books.component';

@NgModule({
  declarations: [
    PaidCoursesComponent,
    FreeCoursesComponent,
    OnlineBooksComponent,
  ],
  imports: [CommonModule],
  exports: [PaidCoursesComponent, FreeCoursesComponent, OnlineBooksComponent],
  providers: [CoursesService],
})
export class CoursesModule {}

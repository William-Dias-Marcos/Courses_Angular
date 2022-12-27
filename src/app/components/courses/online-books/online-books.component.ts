import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-online-books',
  templateUrl: './online-books.component.html',
  styleUrls: ['./online-books.component.css'],
})
export class OnlineBooksComponent {
  onlineBooks: any = [];

  constructor(private coursesService: CoursesService) {
    this.onlineBooks = this.coursesService.getOnlineBooks();
  }
}

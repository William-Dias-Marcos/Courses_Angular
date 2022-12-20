import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses() {
    return [
      {
        courseName: 'Desenvolvimento Web',
        description:
          'Curso para iniciantes e estudantes de desenvolvimento Web.',
        technologies: 'HTML, CSS e JavaScript',
        url: 'https://go.hotmart.com/A77264446R?dp=1',
        hours: '',
        price: 'R$ 39,90',
      },
      {
        courseName: 'Lógica de Programação',
        description:
          'Este é um curso para quem quer começar a sua carreira como programador e não sabe por onde começar.',
        technologies: 'Algoritmos, estruturas, vetores e matrizes',
        url: 'https://go.hotmart.com/I77264651K?dp=1',
        hours: '3 hrs',
        price: 'R$ 19,90',
      },
      {
        courseName: 'SCRUM, Metodologias ágeis.',
        description:
          'Curso para conhecer o SCRUM, uma metodologia ágil de trabalho.',
        technologies: 'SCRUM',
        url: 'https://go.hotmart.com/R77264609O?dp=1',
        hours: '3 hrs',
        price: 'R$ 50,00',
      },
    ];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCoursesPaid() {
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
          'Este é um curso para quem quer iniciar a sua carreira como programador.',
        technologies: 'Algoritmos, estruturas, vetores e matrizes',
        url: 'https://go.hotmart.com/I77264651K?dp=1',
        hours: '3 hrs',
        price: 'R$ 19,90',
      },
      {
        courseName: 'SCRUM, Metodologias ágeis',
        description:
          'Curso para conhecer o SCRUM, uma metodologia ágil de trabalho.',
        technologies: 'SCRUM',
        url: 'https://go.hotmart.com/R77264609O?dp=1',
        hours: '3 hrs',
        price: 'R$ 50,00',
      },
    ];
  }

  getCoursesFree() {
    return [
      {
        courseName: 'Curso em Vídeo',
        description:
          'Plataforma de cursos gratuitos para iniciantes do mundo da tecnologia',
        technologies: 'Diversas tecnologias',
        url: 'https://www.cursoemvideo.com/cursos/',
        hours: ' infinit hrs',
      },
      {
        courseName: 'Angular 2',
        description:
          'Curso para aprender o framework Angular 2, nescessário ter experiência prévia antes.',
        technologies: 'Angular 2, TypeScript',
        url: 'https://loiane.training/cursos/angular',
        hours: '+ 28 hrs',
      },
    ];
  }
}

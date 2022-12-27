import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCoursesPaid() {
    return [
      {
        courseName: 'Pacote Full Stack Master',
        description: 'Curso completo para desenvolver sites, sistemas e apps.',
        technologies: '+ de 15 cursos sobre tecnologia',
        url: 'https://go.hotmart.com/D77620489N',
        hours: '1000 hrs',
        price: 'R$ 247,00',
      },
      {
        courseName: 'Curso de Java Web',
        description: 'Curso que ensina a programar sistemas completos em java.',
        technologies: 'Java Web, Design Patterns e Frameworks',
        url: 'https://go.hotmart.com/Y77620524W',
        hours: '',
        price: 'R$ 195,00',
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
      {
        courseName: 'Bootcamp Programador Full Stack',
        description:
          'Torne-se um desenvolvedor Full Stack através de uma única linguagem, o Javascript.',
        technologies: 'JavaScript, Vue.js e Node.js',
        url: 'https://go.hotmart.com/S77616822M',
        hours: '',
        price: 'R$ 297,63',
      },
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
        courseName: 'Curso de NodeJS',
        description:
          'Aprenda tudo sobre NodeJS e criar qualquer aplicação utilizando essa tecnologia.',
        technologies: 'NodeJS, MongoDB e JavaScript',
        url: 'https://go.hotmart.com/R77620551B',
        hours: '',
        price: 'R$ 247,00',
      },
    ];
  }

  getCoursesFree() {
    return [
      {
        courseName: 'Curso em Vídeo',
        description:
          'Plataforma de cursos gratuitos para iniciantes do mundo da tecnologia.',
        technologies: 'Diversas tecnologias',
        url: 'https://www.cursoemvideo.com/cursos/',
        hours: '',
      },
      {
        courseName: 'Angular 2',
        description:
          'Curso para aprender o framework Angular 2, nescessário ter experiência prévia antes.',
        technologies: 'Angular 2 e TypeScript',
        url: 'https://loiane.training/curso/angular',
        hours: '+ 28 hrs',
      },
      {
        courseName: 'Desenvolvedor WordPress',
        description:
          'Ensina a criar e fazer customizações em templates para o WordPress.',
        technologies: 'WordPress',
        url: 'https://university.br.rockcontent.com/courses/desenvolvedor-wordpress-cert',
        hours: '3 hrs',
      },
    ];
  }

  getOnlineBooks() {
    return [
      {
        bookName: 'Manual do Programador',
        description:
          'Para programadores ambiciosos que querem mudar sua visão, maneira de produzir e negociar.',
        technologies: 'Desenvolvimento de software',
        url: 'https://go.hotmart.com/P77776584Q',
        price: 'R$ 59,00',
      },
      {
        bookName: 'PYTHON DATA SCIENCE',
        description: 'O Guia de Programação Python Passo a Passo Completo.',
        technologies: 'Python',
        url: 'https://go.hotmart.com/C77776774V',
        price: 'R$ 57,00',
      },
      {
        bookName: 'Programação Python Ilustrada',
        description:
          'Tem o objetivo fornecer uma visão aprofundada da linguagem de programação Python.',
        technologies: 'Python',
        url: 'https://go.hotmart.com/B77776796E',
        price: 'R$ 37,00',
      },
    ];
  }
}

import { Component, signal } from '@angular/core';
import { IExperiences } from '../../../../../modules/portfolio/interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: "Full-Stack Developer",
        p: "Agosto 2021"
      },
      text: "Promec - Projetos e Mecânica",
    },

    {
      summary:{
        strong: "Advogada",
        p: "Novembro 2016"
      },
      text: "Lilian Fonseca Advocacia Empresarial"
    },

    {
      summary:{
        strong: "Polícia Civil do Estado de São Paulo",
        p: "Julho 2002"
      },
      text: "Escrivã de Polícia"
    },

  ])

}

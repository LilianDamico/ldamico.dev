import { Component, signal } from '@angular/core';
import { IProjects } from '../../../../../modules/portfolio/interface/Iprojects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: '',
      alt: '',
      title: 'Osprey',
      width: '100px',
      height: '51px',
      description:'<p>Aplicativo Desktop para gerenciamento de movimentação de carga em terminais logísticos</p>' ,
      links: [{
        name: 'Osprey',
        href: ''
        },
      ],
    },
  ]);
}


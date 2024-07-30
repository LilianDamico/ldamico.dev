import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../../../../modules/portfolio/interface/IKnowlwdge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.jpg',
      alt: 'icone do html5'
    },

    {
      src: 'assets/icons/knowledge/css3.jpg',
      alt: 'icone do css3'
    },

    {
      src: 'assets/icons/knowledge/java.png',
      alt: 'icone do java'
    },

    {
      src: 'assets/icons/knowledge/download.png',
      alt: 'icone do html5'
    },

    {
      src: 'assets/icons/knowledge/angular.jpg',
      alt: 'icone do angular'
    },

    {
      src: 'assets/icons/knowledge/react.jpg',
      alt: 'icone do react'
    },
    {
      src: 'assets/icons/knowledge/flutter.jpeg',
      alt: 'icone do flutter'
    },
    {
      src: 'assets/icons/knowledge/sql.png',
      alt: 'icone do sql'
    },


  ]);

}

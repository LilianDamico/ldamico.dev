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
      src: 'assets/icons/knowledge/csharp.png',
      alt: 'icone do csharp'
    },

    {
      src: 'assets/icons/knowledge/nodejs.jpg',
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

  ]);

}

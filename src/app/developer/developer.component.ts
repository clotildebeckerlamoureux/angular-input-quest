import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
  skills: Skill[] = [
    new Skill(
      0,
      "Angular", 
      "https://blog.ninja-squad.com/assets/images/angular_gradient.png", 
      "https://angular.io/"),
    new Skill (
      1,
      "Java",
      "https://banner2.cleanpng.com/20181126/zpf/kisspng-java-scalable-vector-graphics-computer-software-lo-reveal-js-the-html-presentation-framework-5bfb8a6be76274.8225297015432116279478.jpg",
      "https://www.java.com/fr/"
      )
    ]

  dev: Developer = new Developer("Becker", "Clotilde", 27, "F", "Hello, I like to code. I'm learning Angular and Java.", this.skills)
}

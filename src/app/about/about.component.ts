import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  dogs = [
    { name: 'Rex', age: 4, personality: 'Protector', image: 'assets/dog1.jpg' }]
}

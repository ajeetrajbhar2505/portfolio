import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrollValue:number = 0
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollValue = window.scrollY; 
  }
  testimonials = [
    {
      img: 'https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/testimonials/1.png',
      name: 'Alice Johnson',
      title: 'Frontend Developer',
      description: '“Working with them was an absolute pleasure! Their expertise in Angular is top-notch.”',
      shrinkValue: 1 // Default flex-shrink value
    },
    {
      img: 'https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/testimonials/2.png',
      name: 'Bob Smith',
      title: 'Backend Engineer',
      description: '“Their attention to detail and coding standards is impressive. Highly recommend!”',
      shrinkValue: 1
    },
    {
      img: 'https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/testimonials/3.png',
      name: 'John Doe',
      title: 'Software Engineer',
      description: '“I learned so much collaborating on projects. Their insights are invaluable.”',
      shrinkValue: 1
    }
  ];
  selectedIndex: number = 0;


  // Adjust the positions of testimonials based on action
// Adjust the positions of testimonials based on action
adjustFlexShrink(action: string) {
  if (action === 'increase' && this.selectedIndex > 0) {
    // Swap with the previous testimonial
    [this.testimonials[this.selectedIndex], this.testimonials[this.selectedIndex - 1]] = [
      this.testimonials[this.selectedIndex - 1],
      this.testimonials[this.selectedIndex]
    ];
    this.selectedIndex--; // Move selection up
  } else if (action === 'decrease' && this.selectedIndex < this.testimonials.length - 1) {
    // Swap with the next testimonial
    [this.testimonials[this.selectedIndex], this.testimonials[this.selectedIndex + 1]] = [
      this.testimonials[this.selectedIndex + 1],
      this.testimonials[this.selectedIndex]
    ];
    this.selectedIndex++; // Move selection down
  }
  this.randomSelect()
}

randomSelect() {
  this.selectedIndex = Math.floor(Math.random() * this.testimonials.length);
}

  // Set selected index for swapping
  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }
  
}

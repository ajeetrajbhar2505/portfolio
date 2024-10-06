import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrollValue: number = 0
  activeTab:string = 'Home'
  isSticky:boolean = false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY; 
    if (scrollPosition > 100) {  // Adjust scroll position for when you want the background to change
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  
  
    // Define scroll ranges for each tab
    if (scrollPosition >= 0 && scrollPosition < 800) {
      this.activeTab = 'Home';
    } else if (scrollPosition >= 800 && scrollPosition < 1636) {
      this.activeTab = 'Product';
    } else if (scrollPosition >= 1636 && scrollPosition < 2800) {
      this.activeTab = 'Services';
    } else if (scrollPosition >= 2800 && scrollPosition < 4000) {
      this.activeTab = 'Methodologies';
    } else if (scrollPosition >= 4000 && scrollPosition < 5333) {
      this.activeTab = 'Process';
    } else if (scrollPosition >= 5333 && scrollPosition < 7902) {
      this.activeTab = 'Technologies';
    } else if (scrollPosition >= 7902) {
      this.activeTab = 'Contact';
    }
  }
  
  scrollTo(scrollValue: number,activeTab:string) {
    this.activeTab = activeTab
    window.scrollTo({ top: scrollValue, behavior: "smooth" });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  content: any[] = [
    {
      img: '/angular.png',
      title: 'angular',
    },
    {
      img: '/api.png',
      title: 'api',
    },
    {
      img: '/coding.png',
      title: 'coding',
    },
    {
      img: '/css.png',
      title: 'css',
    },
    {
      img: '/javascript.svg',
      title: 'JavaScript'
    },
    {
      img: '/database.png',
      title: 'database'
    },
    {
      img: '/nosql.png',
      title: 'nosql'
    },
    {
      img: '/sql.png',
      title: 'sql'
    },
  ]
  testimonials = [
    {
      img: 'https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/testimonials/1.png',
      name: 'Alice Johnson',
      title: 'Frontend Developer',
      description: '“Working with them was an absolute pleasure! Their expertise in Angular is top-notch.”',
    },
    {
      img: 'https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/testimonials/2.png',
      name: 'Bob Smith',
      title: 'Backend Engineer',
      description: '“Their attention to detail and coding standards is impressive. Highly recommend!”',
    },
    {
      img: 'https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/testimonials/3.png',
      name: 'John Doe',
      title: 'Software Engineer',
      description: '“I learned so much collaborating on projects. Their insights are invaluable.”',
    },
    {
      img: 'https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/testimonials/2.png',
      name: 'Smriti',
      title: 'Software Engineer',
      description: '“I learned so much collaborating on projects. Their insights are invaluable.”',
    }
  ];
  technologies: any[] = [
    {
      img: '/HTML5.png',
      imageName: 'HTML5'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      imageName: 'CSS3'
    },
    {
      img: '/javascript.svg',
      imageName: 'JavaScript'
    },
    {
      img: 'https://www.capitalnumbers.com/images/technologies-icons/angular-icon.svg',
      imageName: 'Angular'
    },
    {
      img: 'https://www.capitalnumbers.com/images/technologies-icons/typescript-icon.svg',
      imageName: 'TypeScript'
    },
    {
      img: 'https://www.capitalnumbers.com/images/technologies-icons/nodejs-icon.svg',
      imageName: 'Node.js'
    },
    {
      img: 'https://www.capitalnumbers.com/images/technologies-icons/azure-icon.svg',
      imageName: 'Azure'
    }
  ];

  slideConfig1 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  slideConfig2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  slideConfig3 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

}

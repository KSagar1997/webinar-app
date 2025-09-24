import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';
import { FormsModule } from '@angular/forms';


interface NavItem {
  route: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  navItems = [
    {
      route: '/',
      name: 'Home',
      icon: 'assets/icons/Home.png',
      isActive: true
    },
    {
      route: '/webinars',
      name: 'Webinar',
      icon: 'assets/icons/webinar.png',
      isActive: false
    },
    {
      route: '/ski',
      name: 'SKP',
      icon: 'assets/icons/SKP.png',
      isActive: false
    },
    {
      iroute: '/calendar',
      name: 'Calendar',
      icon: 'assets/icons/Calendar.png',
      isActive: false
    },
    {
      route: '/notifications',
      name: 'Notifications',
      icon: 'assets/icons/Notifications.png',
      isActive: false
    }
  ];
  
  
  user = {
    name: 'Aaron',
    avatar: 'assets/icons/User.png',
    isOnline: true
  };

  searchQuery: string = '';
  isMobileMenuOpen: boolean = false;
  isMobile: boolean = false;
  smallDesktop: boolean = false;
  hoveredItem: string | null = null;

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }
  
  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }


  onMouseEnter(item: any) {
    this.hoveredItem = item.name;
  }

  onMouseLeave() {
    this.hoveredItem = null;
  }

  checkScreenSize() {
    this.smallDesktop = window.innerWidth < 1185;
    this.isMobile = window.innerWidth < 768;
    console.log('Window width:', window.innerWidth, '=> smallDesktop:', this.smallDesktop);
  }

  onNavItemClick(item: any) {
    // Reset all items to inactive
    this.navItems.forEach(navItem => navItem.isActive = false);
    // Set clicked item as active
    item.isActive = true;

    // Close mobile menu after selection
    this.isMobileMenuOpen = false;

    // Handle navigation here
    console.log(`Navigating to: ${item.name}`);
  }

  onSearchSubmit() {
    console.log('Search query:', this.searchQuery);
    // Handle search functionality
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onPostClick() {
    console.log('Post button clicked');
    // Handle post functionality
  }
}

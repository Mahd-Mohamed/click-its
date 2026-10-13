import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);
  protected readonly activeDropdown = signal<string | null>(null);
  protected readonly expandedSection = signal<string | null>(null);

  protected readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    {
      label: 'About Us',
      path: '/about-us',
      
    },
    {
      label: 'Solutions',
      path: '/solutions',
    
    },
    { label: 'Services', path: '/services' },
    { label: 'Partners', path: '/partners' },
    { label: 'Service Center', path: '/service-center' },
    { label: 'Customers', path: '/customers' },
    {
      label: 'Support',
      path: '/support',
      children: [
        { label: 'Ticket', path: '/ticket' },
        { label: 'Complain', path: '/complain' },
        { label: 'Warranty', path: '/warranty' },
        { label: 'S.O.', path: '/so' },
      ],
    },
    { label: 'Events', path: '/events' },
    { label: 'News', path: '/news' },
    { label: 'Careers', path: '/careers' },
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.expandedSection.set(null);
  }

  protected openDropdown(label: string): void {
    this.activeDropdown.set(label);
  }

  protected closeDropdown(label: string): void {
    if (this.activeDropdown() === label) {
      this.activeDropdown.set(null);
    }
  }

  protected toggleSection(label: string): void {
    this.expandedSection.update((current) => (current === label ? null : label));
  }
}
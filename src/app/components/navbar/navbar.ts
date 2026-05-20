import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { ScrollService } from '../../services/scroll-service';
import { NAV_LINKS } from '../../data/content.data';
import { BRAND, SOCIAL } from '../../constants/app-constants';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgStyle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly languageService = inject(LanguageService);
  protected readonly scrollService = inject(ScrollService);

  protected readonly navLinks = NAV_LINKS;
  protected readonly brand = BRAND;
  protected readonly social = SOCIAL;

  isMenuOpen = signal<boolean>(false);
  isScrolled = signal<boolean>(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }
  onToggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }
  closeMenu() {
    this.isMenuOpen.set(false);
  }
  navigateTo(fragment: string): void {
    this.scrollService.scrollTo(fragment);
    this.closeMenu();
  }
}

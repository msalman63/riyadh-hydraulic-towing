import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { SOCIAL } from '../../constants/app-constants';

@Component({
  selector: 'app-floating-buttons',
  imports: [],
  templateUrl: './floating-buttons.html',
  styleUrl: './floating-buttons.css',
})
export class FloatingButtons {
  protected readonly languageservice   = inject(LanguageService);

  protected readonly social = SOCIAL;

  //  Visibility Signal 
  // Buttons hidden on page load (hero already has CTAs)
  // Appear after user scrolls 300px down
  // Prevents duplicate CTAs cluttering the hero view
  protected readonly isVisible = signal(false);

  // Sets isVisible true after 300px scroll depth
  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 300);
  }
}

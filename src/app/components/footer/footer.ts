import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { ScrollService } from '../../services/scroll-service';
import { NAV_LINKS } from '../../data/content.data';
import { BRAND, SOCIAL } from '../../constants/app-constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly languageService   = inject(LanguageService);
  protected readonly scroll = inject(ScrollService);

  protected readonly navLinks = NAV_LINKS;
  protected readonly brand    = BRAND;
  protected readonly social   = SOCIAL;

  // ── Current Year ──────────────────────────
  protected readonly year = new Date().getFullYear();
}

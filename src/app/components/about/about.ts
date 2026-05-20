import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { ABOUT_FEATURES } from '../../data/content.data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly languageService = inject(LanguageService);
  protected readonly features = ABOUT_FEATURES;
}

import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { ScrollService } from '../../services/scroll-service';
import { SOCIAL } from '../../constants/app-constants';
import { HOME_BADGES, HOME_STATS } from '../../data/content.data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly languageService = inject(LanguageService);
  protected readonly scrollService = inject(ScrollService);

  protected readonly social = SOCIAL;
  protected readonly stats = HOME_STATS;
  protected readonly badges = HOME_BADGES;
}

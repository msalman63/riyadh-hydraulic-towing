import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { WHY_DATA } from '../../data/content.data';

@Component({
  selector: 'app-why-us',
  imports: [],
  templateUrl: './why-us.html',
  styleUrl: './why-us.css',
})
export class WhyUS {
  protected readonly languageService = inject(LanguageService);
  protected readonly items = WHY_DATA;
}

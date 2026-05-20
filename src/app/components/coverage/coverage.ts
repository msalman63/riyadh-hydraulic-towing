import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { COVERAGE_DATA } from '../../data/content.data';
import { SOCIAL } from '../../constants/app-constants';

@Component({
  selector: 'app-coverage',
  imports: [],
  templateUrl: './coverage.html',
  styleUrl: './coverage.css',
})
export class Coverage {
 protected readonly languageService  = inject(LanguageService);
  protected readonly areas  = COVERAGE_DATA;
  protected readonly social = SOCIAL;
}

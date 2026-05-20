import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { SERVICES_DATA } from '../../data/service.data';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly languageService = inject(LanguageService);
  protected readonly services = SERVICES_DATA;
}

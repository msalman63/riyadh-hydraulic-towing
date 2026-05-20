import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { GALLERY_DATA } from '../../data/content.data';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
protected readonly languageService = inject(LanguageService);
  protected readonly items = GALLERY_DATA;
}

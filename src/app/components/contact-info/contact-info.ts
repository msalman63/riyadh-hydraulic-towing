import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CONTACT_DATA } from '../../data/contact.data';
import { SOCIAL } from '../../constants/app-constants';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.css',
})
export class ContactInfo {
  protected readonly languageService = inject(LanguageService);
  private   readonly sanitizer = inject(DomSanitizer);


  protected readonly contacts = CONTACT_DATA;
  protected readonly social   = SOCIAL;

  // ── Safe Map URL ──────────────────────────
  // Angular blocks unsafe iframe URLs by default
  // bypassSecurityTrustResourceUrl marks this specific
  // Google Maps embed URL as safe to use in [src]
  // Replace the URL with your exact business location later
  protected readonly mapUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115754.38!2d46.7219503!3d24.6877338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa'
    );
}

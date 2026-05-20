import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

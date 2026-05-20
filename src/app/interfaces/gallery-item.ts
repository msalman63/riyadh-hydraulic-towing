import { Translation } from './translation';

export interface GalleryItem {
  id: number;
  emoji: string;
  label: Translation;
  imageUrl?: string; // placeholder for real images later
  span?: 'single' | 'wide'; // grid layout hint
}

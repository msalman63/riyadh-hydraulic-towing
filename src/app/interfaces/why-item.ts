//  Why-Choose-Us Card
import { Translation } from './translation';

export interface WhyItem {
  id?: number;
  icon: string;
  stat: string; // e.g. "15", "+20", "24/7"
  unit: Translation; // e.g. { ar: 'دقيقة', en: 'Min Response' }
  title: Translation;
}

import { Translation } from './translation';

export interface CoverageArea {
  id?: number;
  pin: string;
  name: Translation;
  coordinates?: { lat: number; lng: number }; // ready for Google Maps late
}

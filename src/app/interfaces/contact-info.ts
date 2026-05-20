import { Translation } from "./translation";

export interface ContactInfo {
  icon: string;
  label: Translation; // always bilingual in template
  value: Translation;
  href?: string;
}

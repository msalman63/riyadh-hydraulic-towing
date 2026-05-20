import { Translation } from "./translation";

export interface Service {
  id?: number;
  icon: string;
  title: Translation;
  description: Translation;
  slug?: string; // future Supabase/CMS key
}

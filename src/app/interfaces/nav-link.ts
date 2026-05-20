import { Translation } from './translation';

export interface NavLink {
  id: string;
  label: Translation;
  fragment: string; // scroll target section id
}

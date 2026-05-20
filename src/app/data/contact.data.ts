import { ContactInfo }             from '../interfaces/contact-info';
import { PHONE_NUMBER, SOCIAL }    from '../constants/app-constants';

// ── Contact Info Cards ──────────────────────────
// 4 items displayed in the contact section
// href makes card clickable (call or WhatsApp)
export const CONTACT_DATA: ContactInfo[] = [
  {
    icon:  '📞',
    label: { ar: 'اتصل بنا مباشرة',       en: 'Call Us Directly'   },
    value: { ar: PHONE_NUMBER,             en: PHONE_NUMBER         },
    href:  SOCIAL.callUrl,
  },
  {
    icon:  '💬',
    label: { ar: 'تواصل عبر واتساب',      en: 'WhatsApp Us'        },
    value: { ar: PHONE_NUMBER,             en: PHONE_NUMBER         },
    href:  SOCIAL.whatsappUrl,
  },
  {
    icon:  '📍',
    label: { ar: 'موقعنا',                 en: 'Our Location'       },
    value: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia' },
  },
  {
    icon:  '🕐',
    label: { ar: 'ساعات العمل',            en: 'Working Hours'      },
    value: { ar: 'متاح 24/7 — طوال الأسبوع', en: '24/7 — Every Day' },
  },
];
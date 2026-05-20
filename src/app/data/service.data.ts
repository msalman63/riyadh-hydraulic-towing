import { Service } from "../interfaces/service";

export const SERVICES_DATA: Service[] = [
  {
    id: 1, icon: '🏗️', slug: 'hydraulic-towing',
    title:       { ar: 'سطحة هيدروليكية',        en: 'Hydraulic Towing'     },
    description: { ar: 'سطحة هيدروليكية متطورة لجميع أنواع المركبات بأمان تام', en: 'Advanced hydraulic flatbed for all vehicle types with full safety' },
  },
  {
    id: 2, icon: '🚨', slug: 'accident-recovery',
    title:       { ar: 'إنقاذ حوادث',             en: 'Accident Recovery'    },
    description: { ar: 'استجابة سريعة لحوادث الطرق مع معدات متخصصة للإنقاذ',  en: 'Rapid response for road accidents with specialized recovery equipment' },
  },
  {
    id: 3, icon: '🚛', slug: 'long-distance',
    title:       { ar: 'نقل مسافات طويلة',        en: 'Long Distance Towing' },
    description: { ar: 'نقل مركبتك بين المدن — من الرياض إلى أي مدينة في المملكة', en: 'City-to-city vehicle transport across Saudi Arabia' },
  },
  {
    id: 4, icon: '🔋', slug: 'battery-service',
    title:       { ar: 'شحن وتبديل البطارية',     en: 'Battery Service'      },
    description: { ar: 'خدمة تشغيل البطارية الميتة وتبديلها في موقعك',       en: 'Jump-start and battery replacement at your location' },
  },
  {
    id: 5, icon: '⛽', slug: 'fuel-delivery',
    title:       { ar: 'توصيل الوقود',            en: 'Fuel Delivery'        },
    description: { ar: 'نوصل لك الوقود أينما نفد في الرياض وضواحيها',        en: 'Emergency fuel delivery wherever you run out in Riyadh' },
  },
  {
    id: 6, icon: '🏠', slug: 'showroom-delivery',
    title:       { ar: 'تسليم سيارات المعارض',    en: 'Showroom Delivery'    },
    description: { ar: 'نوصل سيارتك الجديدة من المعرض إلى باب منزلك بأمان',  en: 'New car delivery from showroom to your doorstep safely' },
  },
  {
    id: 7, icon: '🔧', slug: 'tire-assistance',
    title:       { ar: 'مساعدة الإطارات',         en: 'Tire Assistance'      },
    description: { ar: 'تغيير الإطارات وخدمة العجلات على الطريق باحترافية',  en: 'Roadside tire change and wheel services professionally' },
  },
  {
    id: 8, icon: '🛻', slug: 'flatbed-towing',
    title:       { ar: 'سطحة مسطحة',              en: 'Flatbed Towing'       },
    description: { ar: 'سطحات مسطحة مناسبة لنقل السيارات الفاخرة والرياضية', en: 'Flatbed transport ideal for luxury and sports vehicles' },
  },
];
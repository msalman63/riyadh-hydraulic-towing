import { AboutFeature } from "../interfaces/about-feature";
import { CoverageArea } from "../interfaces/coverage-area";
import { GalleryItem } from "../interfaces/gallery-item";
import { NavLink } from "../interfaces/nav-link";
import { WhyItem } from "../interfaces/why-item";
import { Translation } from "../interfaces";

export interface HomeBadge {
  icon:  string;
  label: Translation;
}

export interface HomeStat {
  number: string;
  label:  Translation;
}

export const HOME_STATS: HomeStat[] = [
  { number: '500+', label: { ar: 'سيارة تم نقلها',       en: 'Vehicles Towed'   } },
  { number: '5+',   label: { ar: 'سنوات خبرة',            en: 'Years Experience' } },
  { number: '24/7',  label: { ar: 'خدمة مستمرة',           en: 'Always On'        } },
  { number: '15',    label: { ar: 'دقيقة وقت الاستجابة',   en: 'Min Avg Response' } },
];

export const HOME_BADGES: HomeBadge[] = [
  { icon: '🕐', label: { ar: 'خدمة 24/7',              en: '24/7 Service'           } },
  { icon: '⚡', label: { ar: 'وصول سريع',               en: 'Fast Arrival'           } },
  { icon: '🏗️', label: { ar: 'سطحة هيدروليك احترافية', en: 'Professional Hydraulic' } },
];

export const WHY_DATA: WhyItem[] = [
  { id: 1, icon: '⚡',  stat: '15',    unit: { ar: 'دقيقة',       en: 'Min Response'   }, title: { ar: 'وقت استجابة سريع',      en: 'Fast Response Time'          } },
  { id: 2, icon: '👷',  stat: '5+',   unit: { ar: 'سائق محترف',  en: 'Pro Drivers'    }, title: { ar: 'سائقون محترفون',         en: 'Professional Drivers'        } },
  { id: 3, icon: '🕐',  stat: '24/7',  unit: { ar: 'متاح دائماً', en: 'Always Open'    }, title: { ar: 'خدمة مستمرة',            en: 'Round-the-Clock Service'     } },
  { id: 4, icon: '💰',  stat: '✓',     unit: { ar: 'أسعار منافسة',en: 'Fair Pricing'   }, title: { ar: 'أسعار عادلة وشفافة',    en: 'Affordable & Transparent'    } },
  { id: 5, icon: '🛡️', stat: '100%',  unit: { ar: 'ضمان السلامة',en: 'Safety Promise' }, title: { ar: 'ضمان سلامة المركبة',    en: 'Vehicle Safety Guaranteed'   } },
];

export const COVERAGE_DATA: CoverageArea[] = [
  { id: 1, pin: '🏙️', name: { ar: 'وسط الرياض',     en: 'Central Riyadh'       }, coordinates: { lat: 24.6877, lng: 46.7219 } },
  { id: 2, pin: '⬆️', name: { ar: 'شمال الرياض',     en: 'North Riyadh'         }, coordinates: { lat: 24.8024, lng: 46.6383 } },
  { id: 3, pin: '➡️', name: { ar: 'شرق الرياض',      en: 'East Riyadh'          }, coordinates: { lat: 24.7136, lng: 46.8753 } },
  { id: 4, pin: '⬇️', name: { ar: 'جنوب الرياض',     en: 'South Riyadh'         }, coordinates: { lat: 24.5494, lng: 46.7294 } },
  { id: 5, pin: '⬅️', name: { ar: 'غرب الرياض',      en: 'West Riyadh'          }, coordinates: { lat: 24.7136, lng: 46.5253 } },
  { id: 6, pin: '🛣️', name: { ar: 'النقل بين المدن', en: 'Inter-City Transport'  } },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    span: 'wide',
    emoji: '🚛',
    imageUrl: 'images/gallery/lamborghini-riyadh.jpeg',
    label: { ar: 'نقل لامبورغيني — وسط الرياض', en: 'Lamborghini Transport — Riyadh' }
  },
  {
    id: 2,
    span: 'single',
    emoji: '🚙',
    imageUrl: 'images/gallery/range-rover-loading.jpeg',
    label: { ar: 'رنج روفر — عملية تحميل ليلية', en: 'Range Rover — Night Loading Operation' }
  },
  {
    id: 3,
    span: 'single',
    emoji: '🚗',
    imageUrl: 'images/gallery/camaro-mosque-night.jpeg',
    label: { ar: 'كامارو — خدمة ليلية احترافية', en: 'Camaro — Professional Night Service' }
  },
  {
    id: 4,
    span: 'single',
    emoji: '🚛',
    imageUrl: 'images/gallery/fleet-trucks-daytime.jpeg',
    label: { ar: 'أسطولنا — جاهزون على مدار الساعة', en: 'Our Fleet — Ready 24/7' }
  },
  {
    id: 5,
    span: 'single',
    emoji: '🏎️',
    imageUrl: 'images/gallery/rollsroyce-showroom-delivery.jpeg',
    label: { ar: 'رولز رويس — تسليم من المعرض', en: 'Rolls Royce — Showroom Delivery' }
  },
];

export const ABOUT_FEATURES: AboutFeature[] = [
  { id: 1, icon: '🛡️', title: { ar: 'أمان وأمانة',    en: 'Safety & Trust'    }, description: { ar: 'نتعامل مع مركبتك كأنها ملكنا بأعلى معايير الأمان',              en: 'We treat your vehicle like our own to the highest safety standards'       } },
  { id: 2, icon: '⚡',  title: { ar: 'استجابة سريعة',  en: 'Fast Response'     }, description: { ar: 'نصل إليك في أسرع وقت — متوسط الاستجابة 15 دقيقة في الرياض',    en: 'We reach you fast — average 15-minute response across Riyadh'             } },
  { id: 3, icon: '🔧',  title: { ar: 'معدات متطورة',   en: 'Modern Equipment'  }, description: { ar: 'أسطول حديث من السطحات الهيدروليكية المجهزة بأحدث التقنيات',    en: 'A modern fleet of hydraulic flatbeds equipped with the latest technology' } },
];

export const NAV_LINKS: NavLink[] = [
  { id: 'home',     label: { ar: 'الرئيسية',      en: 'Home'     }, fragment: 'home'     },
  { id: 'services', label: { ar: 'الخدمات',       en: 'Services' }, fragment: 'services' },
  { id: 'about',    label: { ar: 'من نحن',        en: 'About'    }, fragment: 'about'    },
  { id: 'coverage', label: { ar: 'مناطق التغطية', en: 'Coverage' }, fragment: 'coverage' },
  { id: 'gallery',  label: { ar: 'معرض الصور',    en: 'Gallery'  }, fragment: 'gallery'  },
  { id: 'contact',  label: { ar: 'تواصل معنا',    en: 'Contact'  }, fragment: 'contact'  },
];
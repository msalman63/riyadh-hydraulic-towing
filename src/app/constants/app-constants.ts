export const PHONE_NUMBER    = '+966500000000';
export const WHATSAPP_NUMBER = '966500000000';

export const BRAND = {
  nameAr:      'سطحة هيدروليك نقل سيارات الرياض',
  nameArShort: 'سطحة هيدروليك الرياض',
  nameEn:      'Riyadh Hydraulic Car Towing',
  tagEn:       'RIYADH HYDRAULIC TOW',
  city:        'Riyadh',
  countryAr:   'المملكة العربية السعودية',
  countryEn:   'Saudi Arabia',
} as const;

export const SOCIAL = {
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  callUrl:     `tel:${PHONE_NUMBER}`,
  mapsUrl:     `https://maps.google.com/?q=Riyadh+Saudi+Arabia`,
} as const;
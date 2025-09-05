export type Locale = 'en' | 'fa';

export const locales: Locale[] = ['en', 'fa'];
export const defaultLocale: Locale = 'en';

const dictionaries = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      menu: 'Menu',
      reservations: 'Reservations',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact',
      language: 'Language'
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      submit: 'Submit',
      cancel: 'Cancel',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      search: 'Search',
      filter: 'Filter',
      clear: 'Clear',
      viewAll: 'View All',
      readMore: 'Read More',
      showLess: 'Show Less',
      price: 'Price',
      perPerson: 'per person',
      openingHours: 'Opening Hours',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    // Homepage
    home: {
      hero: {
        title: 'Saffron & Song',
        subtitle: 'Iranian Traditional Restaurant, London',
        description: 'Experience authentic Persian cuisine in the heart of Kensington',
        cta: 'Reserve a Table',
        viewMenu: 'View Menu'
      },
      features: {
        authentic: {
          title: 'Authentic Recipes',
          description: 'Traditional Persian dishes prepared with centuries-old recipes'
        },
        fresh: {
          title: 'Fresh Ingredients',
          description: 'Daily sourced premium ingredients and imported Persian spices'
        },
        atmosphere: {
          title: 'Warm Atmosphere',
          description: 'Experience Persian hospitality in an elegant setting'
        }
      }
    },
    // Menu
    menu: {
      title: 'Our Menu',
      subtitle: 'Authentic Persian Cuisine',
      categories: 'Categories',
      dietary: 'Dietary',
      searchPlaceholder: 'Search dishes...',
      noResults: 'No dishes found',
      addToFavorites: 'Add to favorites',
      removeFromFavorites: 'Remove from favorites',
      favorites: 'Favorites',
      tags: {
        halal: 'Halal',
        veg: 'Vegetarian',
        gf: 'Gluten Free'
      }
    },
    // Reservations
    reservations: {
      title: 'Table Reservation',
      subtitle: 'Book your table online',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        date: 'Date',
        time: 'Time',
        partySize: 'Party Size',
        notes: 'Special Requests',
        submit: 'Reserve Table',
        submitting: 'Submitting...',
        success: 'Reservation confirmed! We\'ll send you a confirmation email shortly.',
        error: 'Failed to submit reservation. Please try again.'
      },
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email address',
        phoneRequired: 'Phone is required',
        dateRequired: 'Date is required',
        timeRequired: 'Time is required',
        partySizeRequired: 'Party size is required'
      }
    },
    // Gallery
    gallery: {
      title: 'Gallery',
      subtitle: 'A visual journey through Persian cuisine',
      loading: 'Loading images...',
      viewFullsize: 'View full size'
    },
    // About
    about: {
      title: 'About Us',
      subtitle: 'Our Story',
      story: {
        title: 'A Taste of Persia in London',
        content: 'Founded in 2020, Saffron & Song brings the rich culinary heritage of Iran to the heart of London. Our restaurant is more than just a place to dine – it\'s a cultural experience that celebrates centuries of Persian tradition.'
      },
      heritage: {
        title: 'Culinary Heritage',
        content: 'Persian cuisine is one of the world\'s oldest, with roots dating back over 2,500 years. We honor this legacy by using traditional cooking methods and authentic recipes passed down through generations.'
      },
      team: {
        title: 'Our Team',
        chef: {
          name: 'Chef Reza Mohammadi',
          title: 'Head Chef',
          bio: 'With over 20 years of experience in Persian cuisine, Chef Reza brings authentic flavors from Tehran to London.'
        }
      }
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      visitUs: 'Visit Us',
      writeUs: 'Write to Us',
      callUs: 'Call Us',
      hours: 'Opening Hours',
      getDirections: 'Get Directions',
      sendMessage: 'Send Message',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.'
      }
    },
    // Footer
    footer: {
      tagline: 'Authentic Persian Cuisine',
      newsletter: {
        title: 'Newsletter',
        placeholder: 'Enter your email',
        button: 'Subscribe'
      },
      quickLinks: 'Quick Links',
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    }
  },
  fa: {
    // Navigation
    nav: {
      home: 'خانه',
      menu: 'منو',
      reservations: 'رزرو میز',
      gallery: 'گالری',
      about: 'درباره ما',
      contact: 'تماس',
      language: 'زبان'
    },
    // Common
    common: {
      loading: 'در حال بارگذاری...',
      error: 'مشکلی پیش آمده است',
      submit: 'ارسال',
      cancel: 'لغو',
      close: 'بستن',
      back: 'بازگشت',
      next: 'بعدی',
      previous: 'قبلی',
      search: 'جستجو',
      filter: 'فیلتر',
      clear: 'پاک کردن',
      viewAll: 'مشاهده همه',
      readMore: 'بیشتر بخوانید',
      showLess: 'کمتر نشان دهید',
      price: 'قیمت',
      perPerson: 'به ازای هر نفر',
      openingHours: 'ساعات کار',
      address: 'آدرس',
      phone: 'تلفن',
      email: 'ایمیل',
      followUs: 'ما را دنبال کنید',
      allRightsReserved: 'تمامی حقوق محفوظ است',
      monday: 'دوشنبه',
      tuesday: 'سه‌شنبه',
      wednesday: 'چهارشنبه',
      thursday: 'پنج‌شنبه',
      friday: 'جمعه',
      saturday: 'شنبه',
      sunday: 'یکشنبه'
    },
    // Homepage
    home: {
      hero: {
        title: 'زعفران و آواز',
        subtitle: 'رستوران سنتی ایرانی، لندن',
        description: 'تجربه غذای اصیل ایرانی در قلب کنزینگتون',
        cta: 'رزرو میز',
        viewMenu: 'مشاهده منو'
      },
      features: {
        authentic: {
          title: 'دستور‌های اصیل',
          description: 'غذاهای سنتی ایرانی با دستور‌های چند صد ساله'
        },
        fresh: {
          title: 'مواد اولیه تازه',
          description: 'مواد اولیه درجه یک روزانه و ادویه‌های وارداتی ایرانی'
        },
        atmosphere: {
          title: 'محیط گرم',
          description: 'تجربه مهمان‌نوازی ایرانی در محیطی زیبا'
        }
      }
    },
    // Menu
    menu: {
      title: 'منوی ما',
      subtitle: 'غذای اصیل ایرانی',
      categories: 'دسته‌بندی‌ها',
      dietary: 'رژیمی',
      searchPlaceholder: 'جستجوی غذا...',
      noResults: 'غذایی یافت نشد',
      addToFavorites: 'افزودن به علاقه‌مندی‌ها',
      removeFromFavorites: 'حذف از علاقه‌مندی‌ها',
      favorites: 'علاقه‌مندی‌ها',
      tags: {
        halal: 'حلال',
        veg: 'گیاهی',
        gf: 'بدون گلوتن'
      }
    },
    // Reservations
    reservations: {
      title: 'رزرو میز',
      subtitle: 'میز خود را آنلاین رزرو کنید',
      form: {
        name: 'نام کامل',
        email: 'آدرس ایمیل',
        phone: 'شماره تلفن',
        date: 'تاریخ',
        time: 'زمان',
        partySize: 'تعداد نفرات',
        notes: 'درخواست‌های ویژه',
        submit: 'رزرو میز',
        submitting: 'در حال ارسال...',
        success: 'رزرو تایید شد! به زودی ایمیل تاییدیه برایتان ارسال خواهد شد.',
        error: 'رزرو انجام نشد. لطفا دوباره تلاش کنید.'
      },
      validation: {
        nameRequired: 'نام الزامی است',
        emailRequired: 'ایمیل الزامی است',
        emailInvalid: 'آدرس ایمیل نامعتبر',
        phoneRequired: 'تلفن الزامی است',
        dateRequired: 'تاریخ الزامی است',
        timeRequired: 'زمان الزامی است',
        partySizeRequired: 'تعداد نفرات الزامی است'
      }
    },
    // Gallery
    gallery: {
      title: 'گالری',
      subtitle: 'سفری تصویری در غذای ایرانی',
      loading: 'در حال بارگذاری تصاویر...',
      viewFullsize: 'مشاهده اندازه کامل'
    },
    // About
    about: {
      title: 'درباره ما',
      subtitle: 'داستان ما',
      story: {
        title: 'طعم ایران در لندن',
        content: 'رستوران زعفران و آواز در سال ۲۰۲۰ تاسیس شد و میراث غنی آشپزی ایران را به قلب لندن آورد. رستوران ما فقط مکانی برای غذا خوردن نیست - این یک تجربه فرهنگی است که قرن‌ها سنت ایرانی را جشن می‌گیرد.'
      },
      heritage: {
        title: 'میراث آشپزی',
        content: 'آشپزی ایرانی یکی از قدیمی‌ترین‌های جهان است، با ریشه‌هایی که به بیش از ۲۵۰۰ سال پیش برمی‌گردد. ما با استفاده از روش‌های پخت سنتی و دستور‌های اصیلی که نسل به نسل منتقل شده‌اند، این میراث را گرامی می‌داریم.'
      },
      team: {
        title: 'تیم ما',
        chef: {
          name: 'سرآشپز رضا محمدی',
          title: 'سرآشپز',
          bio: 'با بیش از ۲۰ سال تجربه در آشپزی ایرانی، سرآشپز رضا طعم‌های اصیل تهران را به لندن می‌آورد.'
        }
      }
    },
    // Contact
    contact: {
      title: 'تماس با ما',
      subtitle: 'در ارتباط باشید',
      visitUs: 'به ما سر بزنید',
      writeUs: 'به ما بنویسید',
      callUs: 'با ما تماس بگیرید',
      hours: 'ساعات کار',
      getDirections: 'مسیریابی',
      sendMessage: 'ارسال پیام',
      form: {
        name: 'نام شما',
        email: 'ایمیل شما',
        message: 'پیام شما',
        submit: 'ارسال پیام',
        success: 'پیام با موفقیت ارسال شد!',
        error: 'ارسال پیام انجام نشد. لطفا دوباره تلاش کنید.'
      }
    },
    // Footer
    footer: {
      tagline: 'غذای اصیل ایرانی',
      newsletter: {
        title: 'خبرنامه',
        placeholder: 'ایمیل خود را وارد کنید',
        button: 'عضویت'
      },
      quickLinks: 'لینک‌های سریع',
      legal: {
        privacy: 'حریم خصوصی',
        terms: 'شرایط خدمات'
      }
    }
  }
} as const;

export function getDictionary(locale: Locale = 'en') {
  return dictionaries[locale] || dictionaries.en;
}

export type Dictionary = ReturnType<typeof getDictionary>;
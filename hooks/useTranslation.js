'use client'

import { useCallback } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const translations = {
  uk: {
    startScreen: {
      title: 'Daily Space',
      subtitle: 'Щоденна порція космічної краси від NASA',
      howItWorks: 'Як це працює:',
      dailyPhotos: 'Щоденні фото',
      dailyPhotosDesc: 'Кожного дня NASA публікує нове вражаюче фото або відео космосу через сервіс APOD (Astronomy Picture of the Day).',
      timeTravel: 'Подорож у часі',
      timeTravelDesc: 'Ви можете переглядати архів космічних фотографій починаючи з 16 червня 1995 року, використовуючи зручний календар.',
      differentMedia: 'Різні медіа',
      differentMediaDesc: 'Окрім фотографій, ви також можете знайти захоплюючі відео про космічні явища та відкриття.',
      educationalContent: 'Освітній контент',
      educationalContentDesc: 'Кожне фото супроводжується детальним описом від професійних астрономів, що допоможе вам краще зрозуміти побачене.',
      easyNavigation: 'Зручна навігація',
      easyNavigationDesc: 'Використовуйте стрілки або календар для переміщення між датами, а також насолоджуйтесь повноекранним переглядом зображень.',
      startButton: 'Розпочати'
    },
    dailyImage: {
      title: 'Астрономічне зображення дня',
      noData: 'Немає даних для відображення',
      loadError: 'Помилка завантаження зображення',
      viewHD: 'Переглянути в HD'
    },
    datePicker: {
      selectDate: 'Оберіть дату',
      weekDays: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    }
  },
  en: {
    startScreen: {
      title: 'Daily Space',
      subtitle: 'Daily dose of cosmic beauty from NASA',
      howItWorks: 'How it works:',
      dailyPhotos: 'Daily Photos',
      dailyPhotosDesc: 'Every day NASA publishes a new stunning photo or video of space through the APOD (Astronomy Picture of the Day) service.',
      timeTravel: 'Time Travel',
      timeTravelDesc: 'You can browse the archive of space photographs starting from June 16, 1995, using a convenient calendar.',
      differentMedia: 'Different Media',
      differentMediaDesc: 'In addition to photos, you can also find fascinating videos about space phenomena and discoveries.',
      educationalContent: 'Educational Content',
      educationalContentDesc: 'Each photo is accompanied by a detailed description from professional astronomers to help you better understand what you see.',
      easyNavigation: 'Easy Navigation',
      easyNavigationDesc: 'Use arrows or calendar to navigate between dates, and enjoy fullscreen image viewing.',
      startButton: 'Start'
    },
    dailyImage: {
      title: 'Astronomy Picture of the Day',
      noData: 'No data available',
      loadError: 'Error loading image',
      viewHD: 'View in HD'
    },
    datePicker: {
      selectDate: 'Select date',
      weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  },
  es: {
    startScreen: {
      title: 'Daily Space',
      subtitle: 'Dosis diaria de belleza cósmica de la NASA',
      howItWorks: 'Cómo funciona:',
      dailyPhotos: 'Fotos Diarias',
      dailyPhotosDesc: 'Cada día, la NASA publica una nueva foto o video impresionante del espacio a través del servicio APOD (Astronomy Picture of the Day).',
      timeTravel: 'Viaje en el Tiempo',
      timeTravelDesc: 'Puedes explorar el archivo de fotografías espaciales desde el 16 de junio de 1995, usando un calendario conveniente.',
      differentMedia: 'Diferentes Medios',
      differentMediaDesc: 'Además de fotos, también puedes encontrar videos fascinantes sobre fenómenos y descubrimientos espaciales.',
      educationalContent: 'Contenido Educativo',
      educationalContentDesc: 'Cada foto está acompañada de una descripción detallada de astrónomos profesionales para ayudarte a comprender mejor lo que ves.',
      easyNavigation: 'Navegación Fácil',
      easyNavigationDesc: 'Usa flechas o el calendario para navegar entre fechas y disfruta de la visualización de imágenes en pantalla completa.',
      startButton: 'Comenzar'
    },
    dailyImage: {
      title: 'Imagen Astronómica del Día',
      noData: 'No hay datos disponibles',
      loadError: 'Error al cargar la imagen',
      viewHD: 'Ver en HD'
    },
    datePicker: {
      selectDate: 'Seleccionar fecha',
      weekDays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    }
  },
  fr: {
    startScreen: {
      title: 'Daily Space',
      subtitle: 'Dose quotidienne de beauté cosmique de la NASA',
      howItWorks: 'Comment ça marche :',
      dailyPhotos: 'Photos Quotidiennes',
      dailyPhotosDesc: 'Chaque jour, la NASA publie une nouvelle photo ou vidéo impressionnante de l\'espace via le service APOD (Astronomy Picture of the Day).',
      timeTravel: 'Voyage dans le Temps',
      timeTravelDesc: 'Vous pouvez parcourir les archives des photographies spatiales depuis le 16 juin 1995, à l\'aide d\'un calendrier pratique.',
      differentMedia: 'Différents Médias',
      differentMediaDesc: 'En plus des photos, vous pouvez également trouver des vidéos fascinantes sur les phénomènes et découvertes spatiales.',
      educationalContent: 'Contenu Éducatif',
      educationalContentDesc: 'Chaque photo est accompagnée d\'une description détaillée d\'astronomes professionnels pour vous aider à mieux comprendre ce que vous voyez.',
      easyNavigation: 'Navigation Facile',
      easyNavigationDesc: 'Utilisez les flèches ou le calendrier pour naviguer entre les dates et profitez de la visualisation plein écran des images.',
      startButton: 'Commencer'
    },
    dailyImage: {
      title: 'Image Astronomique du Jour',
      noData: 'Aucune donnée disponible',
      loadError: 'Erreur de chargement de l\'image',
      viewHD: 'Voir en HD'
    },
    datePicker: {
      selectDate: 'Sélectionner une date',
      weekDays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    }
  },
  de: {
    startScreen: {
      title: 'Daily Space',
      subtitle: 'Tägliche Dosis kosmischer Schönheit von der NASA',
      howItWorks: 'So funktioniert\'s:',
      dailyPhotos: 'Tägliche Fotos',
      dailyPhotosDesc: 'Jeden Tag veröffentlicht die NASA ein neues beeindruckendes Foto oder Video des Weltraums über den APOD-Service (Astronomy Picture of the Day).',
      timeTravel: 'Zeitreise',
      timeTravelDesc: 'Sie können das Archiv der Weltraumfotos ab dem 16. Juni 1995 mit einem praktischen Kalender durchsuchen.',
      differentMedia: 'Verschiedene Medien',
      differentMediaDesc: 'Neben Fotos finden Sie auch faszinierende Videos über Weltraumphänomene und Entdeckungen.',
      educationalContent: 'Bildungsinhalte',
      educationalContentDesc: 'Jedes Foto wird von einer detaillierten Beschreibung professioneller Astronomen begleitet, die Ihnen hilft, das Gesehene besser zu verstehen.',
      easyNavigation: 'Einfache Navigation',
      easyNavigationDesc: 'Verwenden Sie Pfeile oder den Kalender zur Navigation zwischen den Daten und genießen Sie die Vollbildansicht der Bilder.',
      startButton: 'Starten'
    },
    dailyImage: {
      title: 'Astronomisches Bild des Tages',
      noData: 'Keine Daten verfügbar',
      loadError: 'Fehler beim Laden des Bildes',
      viewHD: 'In HD ansehen'
    },
    datePicker: {
      selectDate: 'Datum auswählen',
      weekDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
    }
  }
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }
    
    return value || translations.en[keys[0]][keys[1]] || key
  }, [language])

  return { t }
}

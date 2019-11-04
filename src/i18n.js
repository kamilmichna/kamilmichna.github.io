import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'es'
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: {
          hero: { first1: ' My name is Kamil and I`m a web developer. And You may need', first2: 'Me', first3: 'in future.', second: 'I`m 18 years old web developer from Krosno. I became interested in coding when i turn 16 and it still stays my biggest hobby. Follow the dashed line to see more!'},
          languageButtons: {pl:"Polish", en: "English"},
          navButtons: {first: 'My blog', second: "Github", third: "Contact"},
          home: { label: 'Home', },
          name: { label: 'chujec<span>asd</span>'},
        },
      },
      pl: {
        translation: {
          hero: { first1: 'Mam na imię Kamil i jestem web developerem. Całkiem możliwe, że będziesz potrzebował', first2:'Mnie', first3: 'w przyszłości.', second: 'Jestem 18 letnim web developerem z Krosna. Zainteresowałem się programowaniem w wieku 16 lat i nadal pozostało ono moim największym hobby. Podążaj za przerywaną linią aby dowiedzieć się więcej!' },
          languageButtons: {pl:"Polski", en: "Angielski"},
          navButtons: {first: 'Mój blog', second: "Github", third: "Kontakt"},
          home: { label: 'Casa', },
          name: { label: 'Nombre', },
        },
      },
    },
  })

export default i18next

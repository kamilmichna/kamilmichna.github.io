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
          hero: { first1: `My name is Kamil and I'm a web developer. And You may need`, first2: 'Me', first3: `in future.`, second: `I'm 18 years old web developer from Krosno. I became interested in coding when i turn 16 and it still stays my biggest hobby. Follow the dashed line to see more!`},
          languageButtons: {pl:"Polish", en: "English"},
          navButtons: {first: 'My blog', second: "Github", third: "Contact"},
          technologies: {heading: "Technologies that I use"},
          newestposts: {heading: 'I`m also writing a blog about webdevelopement. Please give me a favor and read few articles!'},
          resume: {heading: "Still interested? Check out my resume!"},
          projects: {text: 'Here is my Royal Flush - 5 projects that im mostly proud of (temporary):', button: 'Go to page',thisSite: "It's here"}
        },
      },
      pl: {
        translation: {
          hero: { first1: 'Mam na imię Kamil i jestem web developerem. Całkiem możliwe, że będziesz potrzebował', first2:'Mnie', first3: 'w przyszłości.', second: 'Jestem 18 letnim web developerem z Krosna. Zainteresowałem się programowaniem w wieku 16 lat i nadal pozostało ono moim największym hobby. Podążaj za przerywaną linią aby dowiedzieć się więcej!' },
          languageButtons: {pl:"Polski", en: "Angielski"},
          navButtons: {first: 'Mój blog', second: "Github", third: "Kontakt"},
          technologies: {heading: "Technologie których używam "},
          newestposts: {heading: 'Prowadzę także bloga poświęconego web developementowi. Spraw mi tę przyjemność i przeczytaj kilka artykułów!'},
          resume: {heading: "Nadal zainteresowany? Sprawdź moje resume!"},
          projects: {text: 'Oto mój Royal Flush - 5 projektów z których jestem najbardziej dumny (tymczasowe):', button: 'Idź do strony', thisSite: "To tutaj!"}
        },
      },
    },
  })

export default i18next

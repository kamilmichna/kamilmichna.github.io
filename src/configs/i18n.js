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
          hero: { first1: `My name is Kamil and I'm a web developer. And You may need`, first2: 'Me', first3: `in future.`, second: `I'm 18 years old web developer from Krosno. I became interested in coding when i turn 16 and it still stays my biggest hobby. Go down to see more!`},
          languageButtons: {pl:"Polish", en: "English"},
          
          navButtons: {first: 'Dostępne wkrótce', second: "Github", third: "Kontakt"},
          technologies: {heading: "Technologies that I use"},
          newestposts: {heading: 'I`m also writing a blog about webdevelopement. Please give me a favor and read few articles!'},
          resume: {heading: "Still interested? Check out my resume!"},
          projects: {text: 'Here is my Royal Flush - 5 projects that im mostly proud of (temporary):', button: 'Go to page',thisSite: "It's here"},
          contact: {header: "Or just contact with me!",email:"Your email address",content: "Content of email",send:"Send",newsletter: "*You will not receive a newsletter, we only need your email address for return contact.",pl1:'Your email adress', pl2: 'Email content'}
        },
      },
      pl: {
        translation: {
          hero: { first1: 'Mam na imię Kamil i jestem web developerem. Całkiem możliwe, że będziesz potrzebował', first2:'Mnie', first3: 'w przyszłości.', second: 'Jestem 18 letnim web developerem z Krosna. Zainteresowałem się programowaniem w wieku 16 lat i nadal pozostało ono moim największym hobby. Zejdź na dół by dowiedzieć się więcej! ' },
          languageButtons: {pl:"Polski", en: "Angielski"},
          navButtons: {first: 'Coming Soon', second: "Github", third: "Contact"},
          technologies: {heading: "Technologie których używam "},
          newestposts: {heading: 'Prowadzę także bloga poświęconego web developementowi. Spraw mi tę przyjemność i przeczytaj kilka artykułów!'},
          resume: {heading: "Nadal zainteresowany? Sprawdź moje resume!"},
          projects: {text: 'Oto mój Royal Flush - 5 projektów z których jestem najbardziej dumny (tymczasowe):', button: 'Idź do strony', thisSite: "To tutaj!"},
          contact: {header: "Lub po prostu skontaktuj się ze mną",email:"Twój adres email",content: "Treść wiadomości",send: "Wyślij",newsletter: "*nie będziesz otrzymywał newslettera, adres email potrzebny jest jedynie do kontaktu zwrotnego",pl1: 'Twój adres email', pl2: 'Treść wiadomości'}
        },
      },
    },
  })

export default i18next

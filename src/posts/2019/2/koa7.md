---
title:  "Poradnik Koa #7 - pliki statyczne"
date:   "2019-02-13"
path: "/2019/2/koa7"
---
# Koa - pliki statyczne.
## W dzisiejszym tutorialu odkryjemy, jak sprawić aby nasz serwer hostował pliki statyczne takie jak zdjęcia lub pliki kaskadowych arkuszów styli.

Za przykład weźmiemy sobie znany nam z poprzednich postów plik __index.pug__:
```pug

html
    head
        title=title
    body
        h1=content


```
Zmodyfikujmy także nasz plik __router.js__ - póki co nie hostuje on naszego pliku __index.pug__. Zamieńmy więc to:
```javascript
const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');


router
    .get('/',async (ctx)=>{
        await ctx.render("forms.pug");
    })
    .post('/sendData', async (ctx)=>{
        console.log(`WARTOŚĆ POLA TEKSTOWEGO: ${ctx.request.body.content}`)
    })


module.exports = router




```
na to:
``` js
const Router = require('koa-router');
const router = new Router();



router
    .get('/',async (ctx)=>{
        await ctx.render("index.pug",{content:"hello"});
    })
    


module.exports = router



```
Teraz nasza strona dostępna jest pod adresem __http://localhost:3000/__. 
## Dodawanie arkuszy styli do strony.
Stwórzmy sobie zatem katalog __public__ w naszym projekcie. Niech znajduje się on w jego katalogu głównym. Będzie nam służył jako miejsce w którym zgromadzimy wszystkie pliki statyczne - takie jak __arkusze styli, strony w czystym html czy zdjęcia__.

Struktura naszego projektu powinna teraz wyglądać tak:
``` text
- node_modules
- views
    - index.pug
- public
- main.js
- package.json
- package.lock.json
- router.js

```
W katalogu __public__ utwórzmy sobie podkatalog __styles__ (który będzie zawierał pliki css naszego projektu) a w nim prosty plik __style.css__ który będzie zawierał bardzo prostą regułę - cały tekst na stronie ma być czerwony. Tak naprawdę jest kompletnie obojętne jakie reguły css zdefiniujemy wewnątrz pliku, ale w ten sposób będziemy mogli łatwo sprawdzić czy wszystko działa tak jak powinno
```css
*{
    color:red;
}

```
A w ten sposób podłączymy sobie nasz plik css do pliku index.pug:
```pug

html
    head
        title=title
        link(rel="stylesheet", href="./styles/style.css")
    body
        h1=content

```
Jak jednak łatwo zauważyć, kolor czcionki na naszej stronie nie zmienia się. __Musimy więc tak skonfigurować nasz serwer, aby przy zapytaniu o jakikolwiek plki statyczny szukał go w katalogu public__.
## Jak to osiągnąć?
Przyda nam się do tego kolejny middleware o wiele mówiącej nazwie __koa-static__. Zainstalujemy go poleceniem `npm install koa-static`.
## Dodawanie middleware do aplikacji
Po pomyślnej instalacji musimy dodać odrobinę kodu do naszego pliku __main.js__:
```js
const Koa = require("koa");
const app = new Koa();
const router = require('./router')
const views = require('koa-views');
const bodyparser = require('koa-bodyparser');

const serve = require('koa-static'); //#1

app.use(serve(__dirname + '/public/'));//#2
app.use(bodyparser())
app.use(views(__dirname + '/views', {
    map: {
        extension: 'pug' 
    }
  }));
  
app.use(router.routes())
app.listen(3000);
    



```
__#1__ to import zainstalowanej przez nas wcześniej biblioteki, a __#2__ to definicja użycia __koa-static__ w naszej aplikacji. Podajemy tam jako argument absolutną ścieżkę (a więc poprzedzoną `__dirname`) do naszego katalogu public, co pozwoli nam uzyskać dostęp do zawartych tam plików.
## Zdjęcia
Jak zatem dodać zdjęcie? W folderze public stwórzmy sobie katalog __images__ a do niego dodajmy zdjęcie o nazwie, na przykład __image.jpg__. Następnie aby dodać je w naszym pliku __index.pug__ musimy dodać w sekcji body następującą linie:
```pug
img(src="./images/image.jpg", alt="alternatywny tekst dla obrazka")

```
A więc teraz plik będzie wyglądał tak: 
```pug
html
    head
        title=title
        link(rel="stylesheet", href="./styles/style.css")
    body
        h1=content
        img(src="./images/image.jpg", alt="alternatywny tekst dla obrazka")

```
### Dzięki za uwagę, Kamil Michna ;)
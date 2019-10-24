---
title:  "Poradnik Koa #6 - Formularze"
date:   "2019-01-31"
path: "/2019/1/koa6"
---
# Podstawowa obsługa formularzy w Koa.

Ostatnio nauczyliśmy się jak na podstawie danych z serwera tworzyć wygląd naszych podstron, dzisiaj nauczymy się komunikacji w drugą stronę - serwer odbierze dane z naszej witryny!

## Zacznijmy więc od stworzenia podstrony, z formularzem
Wejdźmy zatem do naszego katalogu __views__ i stwórzmy tam plik o nazwie "forms.pug". Nazwa jest całkowicie dowolna. Zacznijmy więc tworzyć stronę z prostym formularzem:
```pug
html
    head
        title=title
    body
        form(action="/sendData" method="POST")
            input(type="text" name="formContent")
            input(type="submit", value="Wyślij dane")

```
Nasza strona zawiera prosty formularz z dwoma inputami: jeden, o typie __text__ będzie miejscem do którego wprowadzimy tekst który następnie wyślemy do serwera,jego name, czyli __formContent__ będzie nam potrzebny do uzyskania tych konkretnie danych po stronie serwera, a input o typie __submit__ to przycisk, który wyśle dane. Cały formularz ma atrybut __action__ ustawiony pod adres __/sendData__, oznacza to że wszystkie dane będą wysyłane pod adres `http://localhost:3000/sendData`. Atrybut __method__ ustawiłem na wartość __POST__.Na pełne __REST API__ przyjdzie czas niebawem.

## Co chcemy osiągnąć?
Wyobraźmy sobie że podstrona z naszym formularzem to coś w rodzaju okienka czatu - chcemy po prostu wpisany tam tekst dostarczyć do serwera. Podobnie będzie to działać z kilkoma polami - jak na przykład w przypadku logowania, gdzie potrzebujemy zarówno hasła jak i loginu. 

Zacznijmy więc od podpięcia naszego __forms.pug__ pod `/` w naszych __routes__. Zedytujmy więc plik __router.js__:
```javascript
const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');


router
    .get('/',async (ctx)=>{
        await ctx.render("forms.pug");
    })


module.exports = router

```
Póki co dokładnie w ten sposób powinien przedstawiać się nasz plik z routingiem. Usunęliśmy routa wskazującego na `/hello`, pozostał jedynie ten wskazujący na `/`, ale teraz renderuje on nasz plik z formularzem. I dokładnie o to nam chodziło. Aby sprawdzić czy wszystko działa poprawnie wejdź pod adres `/http://localhost:3000/` i sprawdź czy strona rzeczywiście zawiera nasz prosty formularz. Przypomnę jedynie że __Po zedytowaniu naszych plików takich jak main.js albo router.js należy ponownie urochomić serwer poleceniem__ `node main.js`.

## Reagowanie na wysłane dane
To co teraz chcemy zrobić, to odebrać dane z naszego formularza. Wysłaliśmy je pod adres `/sendData` metodą __POST__, dodajmy więc w naszym pliku __router.js__ kod, który pozwoli nam zareagować na wysłane dane. Tym razem nie użyjemy w routerze __.get__, a __.post__, ze względu na metodę którą wysłaliśmy dane:
```javascript
const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');


router
    .get('/',async (ctx)=>{
        await ctx.render("forms.pug");
    })
    .post('/sendData', async (ctx)=>{
        console.log('FORMULARZ ODEBRANY!')
    })


module.exports = router

```
Jak nietrudno się domyślić, po wysłaniu danych w naszym terminalu powinien wyświetlić się napis `FORMULARZ ODEBRANY`. Sprawdźmy więc czy tak się dzieje.

## Sukces!
Terminal wyświetlił zadany komunikat. To co nam pozostało, to sprawić aby wyświetlił również wartość pola tekstowego. Jako że znajduje się ona w obiekcie __ctx.request.body__, do jego obsługi potrzebny jest nam kolejny middleware, tym razem jest to __bodyparser__. Zainstalujemy go poleceniem `node install koa-bodyparser`. Jeżeli instalacja się powiodła, dodajmy go do naszej aplikacji. Zedytujmy więc plik __main.js__:
```javascript
const Koa = require("koa");
const app = new Koa();
const router = require('./router')
const views = require('koa-views');

const bodyparser = require('koa-bodyparser'); //#1

app.use(bodyparser())//#2

app.use(views(__dirname + '/views', {
    map: {
        extension: 'pug' 
    }
  }));
  
app.use(router.routes())
app.listen(3000);
    
```
__#1__ to po prostu zaimportowanie naszej biblioteki, natomiast w __#2__ definiujemy __bodyparser__ jako __middleware__. Przejdźmy teraz z powrotem do __router.js__ i zedytujmy go odpowiednio: __ctx.request.body__ jest obiektem, który zawiera wszystkie pola wysłane przez nasz formularz, każde z nich jest jednym z właściwości obiektu __body__. Aby więc dostać się do tekstu który znajdował się w polu tekstowym o atrybucie __name="content"__ musimy użyć __ctx.request.body.content__. Po edycji nasz plik powinien wyglądać tak:
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
Od teraz przy każdym wysłaniu formularza nasz terminal wyświetli stosowny komunikat, wraz z wartością pobraną z pola tekstowego.


__To tyle na dzisiaj, w następnym poradniku dowiemy się w jaki sposób skonfigurować nasz serwer tak, aby serwował pliki statyczne, czyli pliki css oraz zdjęcia__


### Dzięki za uwagę, Kamil Michna ;)
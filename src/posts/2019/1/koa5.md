---
title:  "Poradnik Koa #5 - template engines"
date:   "2019-01-28"
path: "/2019/1/koa5"
---
#Template engines w Koa.js

## Czym są template engines?.

Na to pytanie odpowiedziałem dokładniej w tym poście: [Link](https://kamilmichna.github.io/2019/1/koa3). W skrócie przypomnę jednak że tak zwane __template engines__ to w dużym uproszczeniu często bardzo podobne składnią do __języka html__ "foremki" które pozwalają w bardzo prosty sposób dostosować treść na naszej stronie do tego, co na przykład pobiera z bazy danych nasz serwer. Nie dzieje się to co prawda dynamicznie, jak przy użyciu __technologii AJAX__ i pobieraniu danych na przykład z Api wystawianego przez nas serwer (czym również niebawem się zajmiemy). Dane z serwera wpływ na treść naszej strony mają tylko raz, przy jej wyrenderowaniu - czyli na przykład dane na stronie mogą zmienić się po odświeżeniu okna przeglądarki, ale nie stanie się to dynamicznie.

## Zalety template engines
Przede wszystkim jest to najprostszy sposób na dostosowanie __treści strony__ do danych z serwera. Dzisiaj stworzymy sobie bardzo prosty przykład i przekażemy naszej stronie __odrobinę tekstu z serwera__

# Do dzieła!

## Wybór i instalacja template engine

Podobnie jak w przypadku starszego brata Koa.js czyli __Express.js__ do wyboru mamy ich całkiem sporo. Wymieniłem już wcześniej kilka z najpopularniejszych w poście w których omówiłem czym dokładnie są __template engines__. Większość z nich oferuje bardzo podobną funkcjonalność i wybór odpowiedniego dla nas sprowadza się głównie do własnych preferencji, lub tego który silnik jest aktualnie używany w projekcie do którego chcemy dołączyć.

## Na początku zainstalujmy niezbędny pakiet.

Nasz __template rendering__ zaimplementujemy do przykładu który stworzyliśmy w poprzednim poście: [Link](https://kamilmichna.github.io/2019/1/koa4). Musimy doinstalować tam dwie niezbędne paczki. Pierwszą z nich będzie __koa_views__, która pozwala nam na implementację __template_renderingu__, a drugą będzie już paczka adekwatna do języka w którym będziemy pisać nasze szablony, ja wybrałem __pug__.
Zainstalujmy więc paczkę __koa_views__: 
```
npm install koa-views 
```
A teraz paczkę __pug__:
```
npm install pug

```

Teraz zmieńmy trochę nasz plik __main.js__ z poprzedniego poradnika

```javascript
//main.js
const Koa = require("koa");
const app = new Koa();
const router = require('./router')
//1
const views = require('koa-views');

//2
app.use(views(__dirname + '/views', {
    map: {
        extension: 'pug' 
    }
  }));
  
app.use(router.routes())
app.listen(3000);
    

```
Na początku zajmijmy się punktem __numer 1__. `const views = require('koa-views');` po prostu przypisuje nam do stałej views wcześniej zaimportowaną paczkę __koa-views__, co pozwoli nam w prosty sposób jej użyć. Ciekawiej natomiast robi się przy bloku kodu oznaczonym komentarzem __2__, rozłózmy go więc na czynniki pierwsze.

Składnia __app.use__ przywodzi nam (i słusznie) znane już z poprzednich poradników __middleware__, tym razem nie służy nam ono do routingu aplikacji a właśnie do konfiguracji renderowania naszych templatek. Wiem że brzmi to trochę skomplikowanie, przyjrzyjmy mu się więc z bliska. Argumentem funkcji __app.use__ jest 
```javascript
views(__dirname + '/views', {
    map: {
        extension: 'pug' 
    }
  }));

```
fragment `__dirname + '/views'` mówi nam, że nasze templatki powinny znajdować się w folderze __views__ w tym katalogu co nasz plik __main.js__.

Obiekt 
```
{
    map: {
        extension: 'pug' 
    }
}

```
i jego właściwość __extension__ mówi nam o tym, jakiego template engine użyjemy. Jak już wspomniałem, u mnie jest to __pug__.

Następnie stwórzymy wspomniany wcześniej folder __views__, a w nim plik site.pug.
Nie będę w tym poradniku omawiał składni poszczególnych __template languages__, umieszczę jedynie tekst naszego pliku site.pug
```pug
//site.pug
html
    head
        title=title
    body
        h1=content

```
Jak widać, struktura jest dosyć podobna do __czystego html__, zaobserwować można tutaj również __zmienne__ title oraz __content__.


## Przekazywanie danych i renderowanie.
Jako że chcemy aby nasza strona w zależności od ścieżki miała różną treść, definicje poszczególnych renderów naszej aplikacji zdefiniujemy w pliku __router.js__ - tym samym który grał główne skrzypce w naszym poprzednim wpisie.

```javascript
//router.js
const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');


router
    .get('/hello', async (ctx) => {
        await ctx.render("site.pug",{title:"Hello Page",content: "Witaj na podstronie /hello"});
    })
    .get('/',(ctx)=>{
        await ctx.render("site.pug",{title:"Hello Page",content: "Witaj na podstronie /"});
    })

module.exports = router


```
po pierwsze, na samej górze dodaliśmy podobnie jak w __main.js__ kolejny import - czyli nasze __koa-views__. Pozwoli nam to użyć tutaj __ctx.render__ które pozwala wyrenderować nasz plik w __template language__. Jako argument funkcji __ctx.render__ podajemy nazwę pliku wraz z rozszerzeniem - w tym przypadku __pug__, a następnie obiekt w którym definiujemy nasze zmienne. Po ponownym odpaleniu naszego serwera w koa pod odpowiednimi adresami w przeglądarce powinniśmy ujrzeć nasze __templatki__ uzupełnione o podane przez nas dane.

### Dzięki za uwagę! ;)
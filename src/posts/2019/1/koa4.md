---
title:  "Poradnik Koa #4 Routing w oddzielnym pliku"
date:   "2019-01-23"
path: "/2019/1/koa4"
---

# Jak stworzyć routing w oddzielnym pliku?.

Mimo iż stworzenie routingu tak jak zrobiliśmy to w tutorialu nr 2 jest bardzo proste i intuicyjne, warto przenieść routy naszej aplikacji do odzielnego pliku. Jak to zrobić? Zacznijmy od standardowego serwera w __Koa__, pliki serwera umieśćmy w pliku __main.js__:

```javascript
//plik main.js

const Koa = require("koa");
const app = new Koa();



app.listen(3000);
    
```
Teraz stwórzymy oddzielny plik. Nazwiemy go __router.js__. Możesz umieścić go gdzie tylko chcesz w swoim projekcie, ja umieszczę go w tym samym folderze, obok pliku __main.js__.


## Jak stworzyć routing? 
Jak wiadomo, jedną z głównych różnic między __Express__ a __Koa__ jest to, że potrzebny nam middleware musimy doinstalować sobie sami. Zainstalujmy więc przy pomocy npm paczkę __koa-router__ która pozwoli nam na stworzenie routingu. Jeżeli zainstalowałeś już tą paczkę przy okazji czytania jednego z poprzednich poradników, pomiń ten krok, ja jednak przypomnę jak to zrobić: `npm install --save koa-router`.
## Uzupełnianie pliku router.js
Na początku, podobnie jak w tutorialu nr 2, musimy zdefiniować sobie w pliku __router.js__ nasze podstawowe routy.
```javascript
//plik router.js
const Router = require('koa-router');
const router = new Router();


router
    .get('/hello', (ctx) => {
        ctx.body = "HELLO WORLD!";
    })
    .get('/',(ctx)=>{
        ctx.body+"THIS IS MAIN PAGE"
    })

module.exports = router

```
Na początku definiujemy sobie stałe Router, czyli klasę potrzebną do stworzenia routingu, oraz router, czyli jej instancję którą będziemy używać przy obsłudze naszych zapytań. Używając składni __module.exports__, czyli składni modułów __CJS__ eksportujemy nasze routy i umożliwiamy ich zaimportowanie w pliku __main.js__:
```javascript
//plik main.js


const Koa = require("koa");
const app = new Koa();
const router = require('./router')

app.use(router.routes())

app.listen(3000);
    


```
Teraz pora wejść na adres localhost:3000 i przetestować nasze routy. Pierwszy zdefiniowany przez nas to `/hello`, gdy wejdziemy pod adres `localhost:3000/hello` naszym oczom ukaże się treść __HELLO WORLD__, a gdy pod adres `localhost:3000/` naszym oczom ukaże się zdefiniowane w routes __THIS IS MAIN PAGE__.

## Myślę że przeniesienie routingu naszego prostego serwera, szczególnie osobom dopiero zaczynającym przygodę z Koa pozwoli lepiej uporządkować strukturę swojej aplikacji. W następnym poście zaczniemy wykorzystywać możliwości template engines.
### Dzięki za uwagę, Kamil Michna ;)

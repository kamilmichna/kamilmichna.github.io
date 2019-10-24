---
title:  "Poradnik Koa #8.2 - własne podstawowe REST API w Koa.js"
date:   "2019-03-24"
path: "/2019/3/koa-api2"
---
# Rest Api w koa.js.
Ostatnio zajmowaliśmy się pobieraniem danych z REST Api zewnętrznego serwera. Jak samemu stworzyć takie Api? Przekonamy się dzisiaj!

## Jakie rodzaje zapytań wysępują w REST Api?
Tak naprawdę w naszym __REST Api__ możemy wykorzystać wszyskie metody __HTTP__, jednak my zajmiemy się tymi najpopularniejszymi, oraz ich rolą. Do grupy 4 najczęściej używanych metod, które są niejako __must have__ każdej aplikacji o dużym zasobie danych to:
* GET
* POST
* PUT
* DELETE


## Metoda __GET__:
Służy ona do pobierania danych z serwera. Powinniśmy ich używać tylko do pobierania danych, i tylko takich, które nie są zbyt `tajne` - metoda get pewne parametry "przymyca" w url zapytania. Przykładowo, jeżli stworzylibyśmy formularz z loginem i hasłem (__czego nie powinniśmy robić!__) url wyglądałby dokładnie tak: `https:\\strona.com?login=naszfajnylogin%password=naszefajnehaslo`. Niezbyt bezpieczne, prawda? Dodatkowo zapytania __get__ są przechowywane na przykład w historii przeglądarki. Jednym słowem, nie używaj ich nigdy do wysyłania danych, a jedynie do ich pobierania.


## Metoda __POST__:
Metoda służąca do wysyłania danych. Nie jest zapisywana w historii przeglądarki, a w __REST API__ wykorzystuje się ją do tworzenia nowych zasobów, na przykład stworzenia nowego użytkownika w bazie danych.

## Metoda __PUT__:
Metoda bardzo podobna do metody __POST__, z tą różnicą że używana jest do __aktualizacji danych__, a nie ich tworzenia.

## Metoda __DELETE__:
Podobna do dwóch poprzednich, służy jednak do usuwania danych.


# Tworzymy REST Api w KOA
Na początku stwórzmy sobie nowy katalog, a w nim użyjmy dwóch znanym nam już komend: `npm init` oraz `npm i koa`, aby stworzyć plik __package.json__ a następnie zainstalować __koa__. Stwórzmy także jeden plik - server.js w którym będą znajdować się cały nasz kod. Zainstalujmy także __koa-router__, ponieważ to on obsługuje wymienione wyżej metody. Zrobimy to za pomocą polecenia `npm i koa-router`.

Wszystkie nasze metody zaimplementowane w __koa__ wyglądają tak: 

```javascript
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/', (ctx)=>{
    ctx.body = "zapytanie GET";
})

router.post('/', (ctx)=>{
    ctx.body = "zapytanie POST";
})

router.put('/put', (ctx)=>{
    ctx.body = "zapytanie PUT";
})

router.delete('/', (ctx)=>{
    ctx.body = "zapytanie DELETE";
})
app.listen(3000,()=>{
    console.log('server is working');
})



```
działanie __GET__ możemy sprawdzić wchodząc na adres naszego serwera, czyli `http://localhost:3000/`, a __POST__ wysyłając tam metodą __POST__ dane z formularza w __HTML__. Niestety, __DELETE__ ani __PUT__ nie są obsługiwane przez __formularz HTML__, więc ich działanie sprawdzimy z poziomu __fetch Api__, ale to już w przyszłym wpisie ;).

### Dzięki za uwagę, Kamil Michna ;)
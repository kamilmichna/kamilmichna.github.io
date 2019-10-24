---
title:  "Poradnik Koa #2: routing"
date:   "2019-01-20"
path: "/2019/1/koa2"
---


# Routing w Koa.
Dzisiaj zajmiemy się czymś bardzo ważnym dla praktycznie każdej aplikacji internetowej - __routingiem__. Zanim jednak przejdziemy do kodu, musimy ustalić, czym właściwie ten routing jest.
## Czym jest Routing?
Dzięki __routingowi__ możemy w prosty sposób ustalić jak nasza aplikacja reagować będzie na zapytania do niej kierowane - jednym słowem możemy ściśle ustalić sposób zachowania naszej aplikacji w zależności od typu zapytania, oraz ścieżki wskazanej przez zapytanie. Pozwala nam to w znacznie prostszy sposób komunikować się z frontem aplikacji - chociażby poprzez __REST API__.

## Routing w Koa - jak zacząć?
Budowa __Koa__ trochę różni się od budowy innego frameworka - __Express.js__. W __Expressie__ na starcie mieliśmy moduł pozwalający na obsługę routingu, natomiast w __Koa__ musimy sami go doinstalować. Potrzebny moduł nosi nazwę __koa-router__ i podobnie jak w przypadku __koa__ doinstalujemy go za pomocą polecenia
`npm i koa-router` (instalujemy oczywiście w folderze z zainstalowanym koa)

## Używamy routera
Zaczynamy z kodem z poprzedniego wpisu: 
```javascript
    const Koa = require('koa');
    const app = new Koa();

    app.use( ctx => {
        ctx.response.body = 'Hello World';
    });

    app.listen(3000);

```
aby skorzystać z __routera__, musimy "pobrać" go do naszej aplikacji, przypiszemy go do stałej __Router__:

```javascript
    const Koa = require('koa');
    const Router = require('koa-router')
    const app = new Koa();

    app.use( ctx => {
         ctx.response.body = 'Hello World';
    });

    app.listen(3000);

```
Następnie wprowadzimy kilka istotnych zmian w kodzie:
```javascript
    const Koa = require('koa');
    const Router = require('koa-router')
    const app = new Koa();
    const router = new Router();

   app.use(router.routes())
   app.use(router.allowedMethods())

    router.get('/',(ctx,next)=>{
        ctx.body = 'this is index page'
    })

    app.listen(3000);

```
Po pierwsze, podobnie jak w przypadku __app__ tworzymy stałą router, która staje się instancją klasy __Router__. Brzmi to skomplikowanie, ale można to sobie bardzo prosto wyobrazić - z "foremki" jaką jest __Router__ powstaje __router__, czyli jego mała , fizyczna instacja skrojona idealnie na potrzeby naszej aplikacji:
```javascript
     const router = new Router();
```


Następnie dwukrotnie korzystamy ze składni __app.use__:
`app.use(router.routes())` - tutaj mówimy naszej aplikacji aby przy użyciu funkcji __routes__ pobrała od naszego routera wszystkie potrzebne informacje i użyła ich w razie jakiegokolwiek zapytania. To właśnie ta funkcja łączy nasz router (czyli tzw middleware) z aplikacją


`app.use(router.allowedMethods()))` - ta linia nie jest niezbędna do podstawowego działania, ale pozwala na obsługę zapytania OPTIONS - warto więc ją dodać, nawet jeżeli nie do końca wiemy jeszcze do czego dokładnie służy


## Zabawa routingiem
Po wstępnej konfiguracji przyszedł czas na właściwie zastosowanie routera:
```javascript

    router.get('/',(ctx,next)=>{
        ctx.body = 'this is index page'
    })
```
Po wejściu w przeglądarce pod adres http://localhost:3000/ naszym oczom powinno ukazać się "this is index page". Nic w tym jednak niezwykłego - podobny efekt moglibyśmy osiągnąć używając kodu z poprzedniej częśći, podmieniając jedynie 'hello' na wybrany przez nas tekst. 
## Więcej routingu
Dodajmy sobie do naszego skryptu jeszcze jeden route: 
```javascript
    const Koa = require('koa');
    const Router = require('koa-router')
    const app = new Koa();
    const router = new Router();

   app.use(router.routes())
   app.use(router.allowedMethods())

    router.get('/',(ctx,next)=>{
        ctx.body = 'this is index page'
    })

     router.get('/hello',(ctx,next)=>{
        ctx.body = 'this is hello page'
    })

    app.listen(3000);

```
Teraz po wejściu na http://localhost:3000/hello nasz serwer wykryje odpowiednią ścieżkę i zamiast "this is index page" zwróci "this is hello page"

## Fajne, ale jak to działa?
Rozłóżmy sobie routing na części pierwsze. Jako przykładem posłużymy się tym routem:
```javascript

      router.get('/hello',(ctx,next)=>{
        ctx.body = 'this is hello page'
    })

```

`router.get` informuje dany route aby regował na zapytanie o danej metodzie - w tym przypadku __get__. Oprócz __get__ możemy użyć także innych słów kluczowych, odpowiadających metodom zapytań __http__ używanych do stworzenia __REST API__:
- post (odpowiada za obsługę zapytania `post`)
- put  (odpowiada za obsługę zapytania `put`)
- del (odpowiada za obsługę zapytania `delete`)
- all (obsługuje wszystkie powyższe typy zapytań )

Pierwszym parametrem funkcji jest __relatywna ścieżka naszego zapytania__. Przykładowo `/hello` w naszej aplikacji nasłuchuje zapytań tylko pod adresem http://localhost:3000/hello


Następny parametr to funkcja, opisująca zachowanie naszego routa: 

```javascript

(ctx,next)=>{
        ctx.body = 'this is hello page'
})

```
Korzystamy tutaj z tzw __arrow function__

O parametrze __next__ opowiem w innym wpisie, natomiast ctx to  __kontekst__, czyli obiekt który zawiera w sobie znane z Expressa __res__ i __req__ - obiekty zapytań. Tutaj można dowiedzieć się o nim więcej: https://github.com/koajs/koa/blob/master/docs/api/context.md.

__ctx.body__ (a dokładniej ctx.response.body) to treść która zostanie wysłana do klienta który wykonał zapytanie które spełnia warunki naszego routa.

### Dzięki za uwagę, Kamil Michna ;)

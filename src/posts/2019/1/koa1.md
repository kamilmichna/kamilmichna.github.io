---
title:  "Poradnik Koa #1: Instalacja i Hello-World"
date:   "2019-01-19"
path: "/2019/1/koa1"
---

# Witaj w pierwszej części poradnika koa.
Zanim przystąpimy do używania frameworka musimy go zainstalować
## Instalacja potrzebnych pakietów
__Koa__ do działania potrzebuje node.js, natomiast do poprawnej i prostej instalacji frameworka potrzebujemy Node Package Managera, czyli __npm__. Sprawdzmy więc,czy je posiadamy
### Sprawdzenie wersji node
``` 
    node -v
```
Jeżeli posiadasz poprawnie zainstalowane środowisko __node.js__, komenda powinna zwrócić wersję node, w moim przypadku: 
``` 
    v10.6.0
```
Następnym krokiem jest sprawdzenie, czy posiadamy __npm__
```
    npm -v
```
W moim przypadku komenda ta zwraca:
```
   6.3.0
```
Oznacza to że zarówno __node__ i __npm__ jest poprawnie zainstalowane i gotowe do użycia
### Stworzenie środowiska dla koa
__Krok pierwszy:__ stwórz nowy folder dla aplikacji z użyciem koa (pamiętaj aby nie nazywał sie po prostu koa - nie mozna zainstalować modułu w folderze o tej samej nazwie)
__Krok drugi:__ otwórz ten folder w terminalu, wierszu poleceń lub PowerShell  (w przypadku windows)
Następnie należy użyć polecenia `npm init` które stworzy w folderze plik __package.json__ oraz pozwoli na instalację modułów npm (czyli naszego __koa__). Wypełnienie wszystkich informacji nie jest konieczne.
### Instalacja Koa
Jeżeli wszystkie poprzednie kroki zostały spełnione, polecenie `npm i koa` zainstaluje __framework koa__ w naszym folderze.

## Pierwsza aplikacja
W naszym folderze tworzymy plik javascript o dowolnej nazwie, ja nazwę go __start.js__. Następnie wklejamy do niego kod:
``` javascript
    const Koa = require('koa');
    const app = new Koa();

    app.use(async ctx => {
        ctx.body = 'Hello World';
    });

    app.listen(3000);
```

Aby uruchomić teraz nasz skrypt, używamy polecenia: `node start.js`
Następnie wejdź w przeglądarce pod adres __http://localhost:3000/__, nasz skrypt wyświetla __Hello Wordl__
### No okej, ale jak to działa? Przejrzyjmy kod linia po linii

Aby móc użyć koa w naszym pliku, importujemy go za pomocą require i przypisujemy do stałej  __Koa__:
```javascript
    const Koa = require('koa');
```
Następnie tworzymy instancję klasy __Koa__, i przypisujemy do kolejnej stałej, tym razem __app__
```javascript
    const app = new Koa();
```

Następna część jest odrobine bardziej skomplikowana:
```javascript
    app.use(async ctx => {
        ctx.body = 'Hello World';
    });
```

__app.use()__ dodaje do aplikacji funkcję podaną jako argument, dzięki temu możemy chociażby wysyłać czy pobierać pliki na serwerze, dokładniej omówimy to jednak w następnej części poradnika. Bardziej interesująca dla nas jest natomias funkcja znajdująca się wewnątrz - wyciągnijmy ją więc z __app.use__ i omówmy:
```javascript
    async ctx => {
        ctx.body = 'Hello World';
    }
```
Jest to tak zwana __funkcja strzałkowa__ - jeżeli jest ci obca to odsyłam do MDN: [link](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Functions/Funkcje_strzalkowe). Widzimy tutaj również __async__ - jak wspomniałem koa w dużej mierze wykorzystuje asynchroniczność oraz składnię __async/await__ jednak w tym przykładzie nie ma to żadnego znaczenia.

Jako parametr przyjmuje argument __ctx__. Jest to skrót od __context__, oraz zawiera w sobie zarówno __req__ jak i __res__ (request i response) znane z node.
Oznacza to że zarówno przy pobieraniu danych z zapytania jak i wysyłaniu naszych do użytkownika będziemy korzystać właśnie z __ctx__. Przy wysłaniu odpowiedzi musimy skorzystać z obiektu ctx.response, czyli obiektu który zawiera ogół informacji o odpowiedzi z serwera. W tym przykładzie interesuje nas konkretnie __body__, do którego można dostać się zarówno poprzez `ctx.body` jak i `ctx.response.body`. Jeżeli mi nie wierzysz - po prostu podmień odpowiednie fragmenty i sprawdz czy kod nadal działa (gwarantuję że tak).

Ostatnia część pliku to `app.listen(3000);`. Mówi on aplikacji, aby nasłuchiwała pod adresem http://localhost:port/, gdzie __port__ podajemy właśnie wewnątrz funkcji listen.


### Dzięki za uwagę, Kamil Michna ;)

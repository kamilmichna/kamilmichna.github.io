---
title:  "Poradnik Koa #2.5: next"
date: "2019-01-21"
path:   "/2019/1/koanext"
---

# Next w koa().
W poprzednim wpisie stworzyliśmy sobie prosty routing w koa, dzisiaj natomiast w niemal __telegraficznym__ skrócie przyjrzymy się metodzie __next()__ którą udostępnia nam __koa__ oraz jego "starszy brat" czyli __Express__. 
## Jak działa next?
Jeżeli w danym routcie wywołamy metodę __next()__, zostanie natychmiastowo wykonany kolejna metoda przypisana do routa, który spełnia wymogi określone w nim samym. Wiem brzmi to bardzo skomplikowanie - warto jednak zobaczyć jego działanie w praktyce, a stanie się to o wiele prostsze. Skopiujmy zatem kod który napisaliśmy w ostatnim poście:
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
usunęliśmy jednak route dla `/hello` - nie będzie nam potrzebny.

## Co chcemy zrobić?
Stworzymy sobie prosty skrypt, który pozwoli nam pobrać parametr z __url__ i w zależności od jego długośći wyświetlić odpowiedni komunikat. Dla przykładu, jeżeli ciąg znaków będzie dłuższy niż 10, serwer __koa__ zwróci komunikat "długi string" natomiast jeżeli będzie krótszy, zwróci "krótki string";
### Do dzieła!
```javascript 
const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/:int',(ctx,next)=>{
    console.log(ctx.params.int);
})


app.listen(3000);
    


```
Jeżeli teraz przejdziesz pod `localhost:3000/123456' w konsoli twojego serwera powinna ukazać się liczba - a właściwie napis __123456__. Oznacza to że pobraliśmy z url strony właśnie potrzebny nam string. Teraz sprawdźmy czy jest on większy czy mniejszy:
```javascript

const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/:int',async (ctx,next)=>{
    if (ctx.params.int.length <= 10){
        ctx.body = "mniejszy";
    }
    else {
       await next();
    }
})

router.get('/:int', (ctx,next) => {
    ctx.body = "większy";
})
app.listen(3000);

```
__Gotowe__. Teraz jeżeli po __localhost:3000/__ wpiszesz dowolny ciąg znaków nasz skrypt sprawdzi czy jest on dłuższy niż 10, jeżeli tak wyświetli odpowiedni komunikat.

## Okej ale jak to działa?

### Weźmy pod lupę pierwszego routa:

```javascript
router.get('/:int',async (ctx,next)=>{
    if (ctx.params.int.length <= 10){
        ctx.body = "mniejszy";
    }
    else {
       await next();
    }
})

```
na początku mamy prostą konstrukcję __if else__ która zwyczajnie sprawdza nam czy ciąg jest dluższy czy krótszy niż 10 znaków. Jeżeli długość ciągu jest mniejsza lub równa wymienionej wcześniej liczbie, serwer od razu zwraca "mniejszy", jeżeli natomiast jest większy wywoła __next()__ - i tutaj zaczyna się cała magia.
### Jak właściwie działa next()?
Wywołanie next() przeniesie nas od razu do kolejnego routa którego warunki spełnia nasz aktualny url - w tym przypadku:
```javascript
router.get('/:int', (ctx,next) => {
    ctx.body = "większy";
})
```
Oznacza to ze w przypadku gdy ciąg znaków jest dłuższy niż 10 pierwszy route przeniesie nas za pomocą __next__ do drugiego routa. Może ten przykład nie jest zbyt praktyczny - __next__ może mieć w końcu z goła inne zastosowanie - jednak myślę że może pomóc zrozumieć jego działanie.

### Dzięki za uwagę, Kamil Michna ;)

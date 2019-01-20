---
layout: post
title:  "Gra w javascript #2: Rysowanie obiektów."
date: "2017-08-10"
author: Kamil Michna
categories: javascript
tags: gry javascript
path: "/blog/hehe"
---

#Cześć
## W poprzednim wpisie stworzyliśmy sobie podstawowy layout naszej gry - teraz pora nadać mu trochę ruchu ;) 
Stworzymy sobie zatem klasę, która pozwoli nam w prosty sposób wyrysowywać proste obiekty. Warto dodać że będę używał składni __class__ - jeśli więc twoja przeglądarka jej nie obsługuje, zaktualizuj ją lub użyja narzędzia __babel__.

## Klasa  obiektów
Klasa Element będzie przyjmować 4 argumenty - szerokość, wysokość, startowe koordynaty x i y naszego obiektu oraz jego kolor. Stworzymy ją w pliku script.js, którego używaliśmy w poprzednim wpisie. Na początku jednak zmodyfikujmy go nieco.

```javascript
"use strict"
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


```
`use strict` pozwoli nam w łatwiejszy sposób wykrywac błedy naszego skryptu. Stwórzmy teraz zatem klasę __Element__.


```javascript
"use strict"
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Element{
    constructor(width,height,x,y,color){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
    }
}


```
Jak widać jest to bardzo prosta składnia. Jeżeli nie znasz programowanie obiektowego w javascript, odsyłam do dokumentacji mdn: [Link](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Classes)

### Funkcja rysująca. 
Teraz stworzymy sobie funkcje odpowiadającą za rysowanie odpowiednich obiektów na naszym canvas - nazwiemy ją po prostu __draw__.
```javascript
function draw(el){
    
    ctx.fillStyle = el.color;
    ctx.fillRect(el.x,el.y,el.width,el.height)
}


```

Wykorzystajmy teraz ją w akcji , aby narysować czerwony kwadrat na naszym canvas.
Stwórzmy zatem instancję klasy __Element__ i przekażmy do jej __konstruktora__ odpowiednie parametry: `let square = new Element(100,100,200,100,"red");`.
Następnie przekażmy obiekt do funkcji draw w ten sposób: `draw(square)`

Cały nasz kod powinien teraz wyglądać w ten sposób: 
```javascript
    "use strict"
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Element{
    constructor(width,height,x,y,color){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

function draw(el){
    
    ctx.fillStyle = el.color;
    ctx.fillRect(el.x,el.y,el.width,el.height)
}

let square = new Element(100,100,200,100,"red");
draw(square)


```

Nasz canvas powinien teraz wyglądać w ten sposób:


__W następnym wpisie stworzymy obiekt gracza którym możemy sterować za pomocą klawiszy.__
### Dzięki za uwagę ;)

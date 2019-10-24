---
title:  "Poradnik Koa #3: Wstęp do template engines"
date:   "2019-01-22"
path: "/2019/1/koa3"
---

# Template engines w koa.js.

## Co to template engine-y?
W pewnym momencie odczujemy potrzebę pobrania pewnych danych na przykład z serwera, a następnie przekazanie go do route naszego serwera w __koa__. W jaki sposób możemy to osiągnąć? Sposoby są co najmniej dwa. Jeden z nich, szczególnie przydatny przy szybko zmieniającej się treści strony jak na przykład przy projekcie który zawiera chat to strona która za pośrednictwem __Javascriptu__ łączy się z interfejsem serwera i z niego dynamicznie pobiera dane. Wspominałem już o __Rest API__, i to jest właśnie jedno z jego głównych zastosowań. Dynamiczne pobieranie tresci z serwera jest co prawda bardzo przydatne, ale nie zawsze potrzebne. Na przykład w przypadku prostego bloga takiego jak ten (mimo że ten właśnie oparty jest o tzw __static site generator__, będzie o tym inny wpis) nie potrzebujemy stałego połączenia z naszym backendem, wystarczy przecież pobranie listy postów i wyświetlenie jej gdy przeglądarka pobiera stronę główną. Do takich zastosowań warto użyć właśnie __template engines__, o których jest ten post.
## Jak działa template engine?
Zasada działania jest bardzo prosta. Jest to właściwie taki __"html na sterydach"__. Co to oznacza? Nasze strony zapisujemy w jednym z odpowiednich języków, a serwer podczas zapytania przetwarza nasz szablon i zamienia na zwykły plik html.
### Więc co jest w tym takiego super?
Główną zaletą używania __template engines__ jest możliwość użycia czegoś w rodzaju zmiennych - w odpowiednim miejscu w kodzie naszej strony mówimy na przykład __"Do tego nagłówka wstaw zmienną title"__ (której wartość pobierana jest przy przetwarzaniu szablonu) a nasz backend, w tym wypadku __serwer w koa__ w puste miejsce wstawi żądaną wartość.
Mimo iż brzmi to nieco enigmatycznie, niebawem powinno się rozjaśnić.
### Jaki template engine wybrać?
W świecie __Jsa__ istnieje zatrzęsienie bibliotek, frameworków i różnych pomniejszych rozwiązań do wyboru. Podobnie jest w przypadku __template engines__ - mamy ich do wyboru całkiem sporo. Najpopularniejsze z nich to:
* Pug
* Underscore
* EJS
* Handlebars
* Mustache

Warto przy wyborze kierować się głównie naszym gustem - mają bardzo zblizone możliwości, a warto zadbać aby wybrać ten z którym będzie nam się przyjemnie pracować.

#### W następnym poście zaczniemy pracę z template engine.
### Dzięki za uwagę, Kamil Michna ;)

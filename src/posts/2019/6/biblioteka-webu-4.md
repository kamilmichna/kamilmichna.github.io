---
title:  "Biblioteka Webu #4 - Angular"
date:   "2019-06-28"
path: "/2019/6/bliblioteka-webdevu-4"
---
# Biblioteka Webu #4 - Angular
![Znalezione obrazy dla zapytania angular](https://cdn-images-1.medium.com/max/1600/1*P7x-_0XfQz6CVmMY_QAv0w.png)
__Angular__ to obok __Reacta__ i __Vue__ najpopularniejszy framework webowy. Stworzony i rozwijany przez __Google__. Początkowo __Angular__ miał być kontynuacją frameworka __Angular JS__, jednak porzucono ten pomysł, należy więc pamiętać że to dwie różne technologie, i __bardzo mocno sugerował bym naukę Angulara zamiast AngularJS__. Dlaczego? O tym przeczytacie  między innymi tutaj: [https://gorrion.io/blog/angularjs-vs-angular](https://gorrion.io/blog/angularjs-vs-angular).

## Co posiada Angular?

* Templates, czyli Html do którego możemy "wszczepiać" dane z naszej aplikacji
* Wstrzykiwanie zależności
* Pobieranie danych np z __REST Api__ za pomocą __HttpClient__
* Naprawdę prosty i przyjemny system routingu
* Komponenty
* Serwisy
* __Typescript__

Oraz wiele wiele więcej!

## Jak zainstalować Angulara?
To bardzo proste. Jak zwykle skorzystamy z `npm`. Musimy zainstalować globalnie paczkę `@angular/cli`. Co to takiego? To bardzo przydatne narzędzie konsolowe pozwalające na tworzenie nowych projektów w __Angular__, komponentów, serwisów oraz uruchamiania skryptów, na przykład do __budowania wersji produkcyjnej aplikacji__. Użyjmy zatem polecenia 
`
npm install -g @angular/cli
`.
 Gotowe!
 ## Tworzymy pierwszy projekt
 Stworzenie projektu w __Angular__ jest bardzo proste. Zrobimy to za pomocą komendy __ng new nazwaaplikacji__, która utworzy nam folder o podanej przez nas nazwie. Następnie wchodzimy do niego poleceniem __cd nazwa__. W środku możemy zauważyć kilka katalogów, najbardziej istotny dla nas jest jednak ten o nazwie __src__. To na plikach w nim zawartych będzie skupiać się nasza praca i to one odpowiadają za działanie aplikacji. Znajdują się tam między innymi foldery z naszymi komponentami oraz serwisami. Nie będę tutaj omawiał dokładnego tworzenia aplikacji w __Angular__, jednak więcej informacji znajdziesz w jego oficjalnej dokumentacji: [https://angular.io/](https://angular.io/). Jeszcze jednym poleceniem które będzie nam przydatne będzie __ng serve -o__. Powoduje ono że nasza aplikacja jest hostowana pod adresem [http://localhost:4200/](http://localhost:4200/).  Argument `-o` otwiera ten adres w nowej karcie przeglądarki
 ## Kto używa Angulara?
 __Angular__ używany jest przez wiele firm, między innymi
 
 - Samsung 
 - Google
 - Microsoft 
 - Forbes
 - Indiegogo
 
Więcej ciekawych przykładów na wykorzystanie __Angulara__ oraz listę firm używających tej technologii znajdziesz pod adresem: [https://www.madewithangular.com/](https://www.madewithangular.com/)
### Dzięki za uwagę, Kamil Michna ;)
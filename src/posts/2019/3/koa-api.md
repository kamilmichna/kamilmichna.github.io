---
title:  "Poradnik Koa #8.1 - podstawowe REST Api"
date:   "2019-03-10"
path: "/2019/3/koa-api"
---
# Podstawowe REST Api.
Dzisiejszy tytuł jest nieco zwodniczy - co prawda nie będziemy korzystać z KOA, ale nauczymy się jak odpytać Api o dane, co przyda nam się w następnych postach.


## Czym jest REST Api?

REST Api, to w dużym skrócie taki interfejs w napisanym przez nas oprogramowaniu, który pozwala pobierać innym aplikacjom kluczowe do ich działania dane.

## Po co mi REST Api skoro umiem przekazywać dane do strony w Koa?

Przewagi REST Api nad powyższym rozwiązaniem są dwie - chociaż oba rozwiązania są dobre, REST Api pozwala nam po pierwsze pobierać dane bez potrzeby przeładowywania naszej strony, a po drugie na korzystanie z naszych danych przez wiele aplikacji. Może teraz wydaje się to dla Ciebie lekko abstrakcyjne - w końcu interesuje nas napisanie funkcjonalnego serwera w __Koa__, a nie __kilku__ aplikacji, i to jeszcze zapewne w różnych językach, ale wyobraź sobie taki przykład: razem z zespołem programistów zakładacie startup - nowy, rewolucyjny portal społecznościowy. Odpowiadasz w nim właśnie za __backend__, czyli serwer w __koa__ oraz bazę danych zawierającą na przykład informacje o użytkownikach - ich imiona, nazwiska, maile, wpisy. Sposób który już znamy - przekazywanie informacji do pliku przy renderowaniu sprawdził by się - serwer pobierze dane o użytkowniku, a następnie wyrenderuje template strony uzupełniając go odpowiednimi informacjami. Problem zaczyna się jednak, gdy oprócz aplikacji webowej, osoby w twoim zespole piszą także aplikacje na przykład na __Androida w języku JAVA, aplikację na Ios w języku Swift, oraz aplikację natywną na system Windows w języku C#__. W jaki sposób mają oni uzyskać dane? Właśnie przez REST Api, które __Ty__ stworzysz. Aby nie narobić bałaganu, także klient przeglądarkowy - czyli strona powinna pobierać dane właśnie z Api, a nie poprzez dane przekazywane przy renderowaniu.

## Do dzieła!

Stwórzymy sobie prostą stronę __.html__ w dowolnym wybranym przez ciebie miejscu na dysku. Większość naszych zapytań będzie się opierać na __javascriptcie__, więc po prostu wklejmy do naszego pliku taki kod:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        alert("Działa!")
    </script>
</body>
</html>



```
a następnie otwórz w przeglądarce. Jeśli wyświetli ona komunikat o treści __Działa!__ to wszystko idzie po naszej myśli.

## Zapytanie do api.
Wykorzystajmy, w ramach testu darmowe api dostępne w internecie. Zawiera ono podobnie jak nasz przykład, listę użytkowników, wraz z danymi o nich. Aby odpytać nasze REST Api, użyjemy __fetch Api__ w javascript. Kod który będę teraz pisał, musi znajdować się w tagu __script__, tam gdzie nasz alert (który możesz już usunąć).

```javascript

fetch(url do naszego api)

```
jako url użyjemy `https://jsonplaceholder.typicode.com/users`, ponieważ właśnie spod tego adresu mozemy pobrać dane o naszych użytkownikach. Zwróci nam to obiekt __Promise__, a więc następnie użyjemy __then__, gdzie wykorzystamy specjalną funkcję która przekonwertuje dane w formacie __JSON__ (najczęściej taki format wykorzystuje sie przy komunikacji z serwerem) na znany nam obiekt w javascript.


```javascript

fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(resp => console.log(resp));
```
Powyższy kod wyświetli w konsoli obiekt zawierający dane użytkowników. Teraz, dla przykładu wyświetlmy imiona wszystkich użytkowników:
```javascript

fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(resp => console.log(resp.map(el => el.name)));

```
I voila! Konsola wyświetliła nam listę imion i nazwisk wszystkich użytkowników.

## Nauczyliśmy się już podstaw korzystania z REST Api po stronie klienta, w następnym poście nauczymy się jak stworzyć taki interfejs samemu, w koa.
### Dzięki za uwagę, Kamil Michna ;)
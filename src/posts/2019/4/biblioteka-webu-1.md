---
title:  "Biblioteka Webu #1 - Parcel.js"
date:   "2019-04-26"
path: "/2019/4/bliblioteka-webdevu-1"
---
# Biblioteka Webu #1 - Parcel.js. 
## Tym postem zaczynam nową serię o nazwie Biblioteka Webu. Będę w niej zajmował się krótkim przedstawianiem ciekawych bibliotek oraz technologii związanych z webdevem, zarówno od strony frontendu jak i backendu. Dzisiaj na warsztat weźmiemy Parcel.js. Do dzieła!


!["Parcel js logo"](https://parceljs.org/assets/logo.svg)

__Parcel__ to jak możemy przeczytać na [jego stronie głównej](https://parceljs.org/) __Oszałamiająco szybki, niewymagający konfiguracji program tworzący pakiety__. Dlaczego warto go poznać? __Parcel__ pozwala nam na:
* Szybkie budowanie naszej aplikacji
* Automatyczne transformacje kodu
* Dzielenie kodu bez żadnej konfiguracji
* Szybki reload aplikacji w przeglądarce
* Wyświetlanie błędów w kodzie w przystępny sposób
* Jest bardzo szybki w porównaniu z podobnymi aplikacjami.

## Duża część, zwłaszcza osób początkujących ma duży problem z odpowiednią konfiguracją na przykład Webpacka. Parcel rozwiązuje ten problem, jest również świetnym rozwiązaniem do pomniejszych projektów. Jak go użyć?

Załóżmy dosyć typowy scenariusz - mamy jedną prostą aplikację webową - żadnych frameworków, jedynie kilka plików Javascript, każdy z osobnym modułem którym musi zająć się nasz __module bundler__ oraz kilka plików __.scss__ które musimy przetranspilowac na css, no i oczywiście plik __index.html__.


Struktura katalogu będzie wyglądać z grubsza tak:
```
--project
    index.html
    --style
        main.scss
    --script
        main.js
        mainTests.js
```

Oczywiście struktura jest praktycznie dowolna - mój przykład po prostu będzie odnosił się do dokładnie takiej.

Na początku przy użyciu __npm__ zainstalujmy __Parcela__ globalnie: `npm install -g parcel-bundler`. 

## Wszystko przebiegło po naszej myśli? To super! Przejdźmy dalej:

Parcel, jak praktycznie każdy module bundler musi mieć podany jakiś plik od którego zacznie budowanie naszej paczki. W przypadku __Parcela__ dobrze podać plik __Html__ (jak w naszym przypadku) lub na przykład plik __Javscript__. Uzupełnijmy jednak wpierw nasze pliki kodem:

```html
//index.html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Początek przygody z parcelem!</h1>
</body>
</html>


```

plik w folderze style, jest to plik scss więc użyjmy w nim na przykład zmiennej scss:

```scss
//style/style.scss

$color : crimson;
h1{
    color: $color;
    font-size: 20px;
    font-weight: 900;
}

```

Dodatkowo mamy dwa pliki __js__ - `main.js` oraz `mainTest.js`. Zaimportujmy funkcję z `main` do `mainTest`
```js
//scripts/main.js

function naszaFajnaFunkcja(tekst){
    alert(tekst);
}
export default naszaFajnaFunkcja;


```

```js
//scripts/mainTest.js
import main from './main';

main("Parcel działa!");

```
Jak pewnie zauważyłeś, zarówno style jak i javascript nie są podlinkowane w naszym __index.html__. Pora więc zająć się tym. Zamieńmy tekst strony na następujący: 
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./style/style.scss">
</head>
<body>
    <h1>Początek przygody z parcelem!</h1>
    <script src="./scripts/mainTests.js"></script>
</body>
</html>


```
Myślę że link do style.scss nie powinien budzić wątpliwości, dlaczego jednak podlinkowaliśmy mainTest.js a nie main? Sprawa jest bardzo prosta - musimy podlinkować moduł od którego Parcel zacznie budowanie - a to mainTest "zasysa" funkcję zdefiniowaną w main.
Aby teraz użyć __Parcela__ wejdźmy w terminalu lub cmd do folderu zawierającego nasz katalog projektu, a następnie po protu użyjmy polecenia `parcel index.html`. __Banalne prawda?__. Po chwili w terminalu pojawi nam się link do naszej strony działającej najprawdopodobniej pod adresem: `http://localhost:1234/`. To tutaj działą nasz hot reloading w przeglądarce, a aby wstawić stronę na przykład na hosting, wystarczy użyć do tego polecenia `parcel build index.html --public-url ./` a następnie pliki z katalogu __dist__ wrzucić na dowolny hosting.

__Mam nadzieję że zadziałało jak trzeba!__
### Dzięki za uwagę, Kamil Michna ;)
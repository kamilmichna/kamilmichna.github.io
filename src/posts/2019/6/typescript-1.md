---
title:  "Typescript #1 - typowanie statyczne zmiennych"
date:   "2019-06-24"
path: "/2019/6/typescript-1"
---

# Typescript #1 - typowanie statyczne zmiennych
 Jedną z głównych zalet, o którą de facto oparty jest cały __TypeScript__ jest typowanie statyczne. Zapewne część z was spotkała się z nim w innych językach programowania, jednak warto przyjrzeć mu się bliżej. Istnieje kilka typów zmiennych. Jak je zadeklarować? Odpowiem na to pytanie poniżej!
## Boolean
```javascript
let booleanVariable: bool;
booleanVariable = true; //OK
booleanVariable = false; //OK
booleanVariable = 123; //Error
```
Co tutaj się dziej? Za pomocą  : typ_zmiennej` określamy że dana zmienna może mieć wartość tylko danego typu, w tym przypadku __true__ lub __false__. Próba przypisania na przykład __stringa__ zwróci błąd. I to w zasadzie główne założenie __TypeScripta__ i coś co stanowi jego podstawę. Jakie typy danych jeszcze istnieją? Sprawdźmy!

## Number
Typ number działa identycznie jak w __JavaScript__ - są to wszystkie liczby typu __float__. Zdefiniowanie go jest dziecinnie proste:
```typescript
let numberVariable: number;
numberVariable = 100; //OK
numberVariable = true; //Error
numberVariable = "100"; //Error
```
## String
Działa identycznie jak string w __JavaScript__. Jest to ciąg znaków ograniczony znakiem `'` lub `"`.
```typescript
let stringVariable: string;
stringVariable = "hello; //OK
stringVariable = true; //Error
stringVariable = 10; //Error
```
Dozwolone są także tzw. __template stringi__
```typescript
	stringVariable = `wynik dodawania to ${2+2}`; //OK
```

## Tablice
__TypeScript__ pozwala nam także na pracę z tablicami. Najpierw podobnie jak wcześniej definiujemy rodzaj danych w tablicy, a następnie dodajemy __[]__. Przykłady:
```typescript
let arrayOfNumbers: number[];
arrayOfNumbers = [1,2,3,4,5] // OK
arrayOfNumbers = ["jeden","dwa","trzy"] // Error

let arrayOfStrings: string[];
arrayofStrings = ["jeden","dwa","trzy"] //OK
arrayOfStrings = [1,2,3] // Error

```

Możemy także użyć tzw __generic array type__, w następujący sposób:
``` typescript
let arrayOfNumbers: Array<number>;
arrayOfNumbers = [1,2,3,4,5] // OK
arrayOfNumbers = ["jeden","dwa","trzy"] // Error
```
## Tuple (krotka)
Tuple to uporządkowany ciąg danych, przypomina tablicę o stałej, określonej długości. Jak ją zdefiniować w __TypeScript?__ to proste!

```javascript
let tuple: [number, string];
tuple = [100,"hello"] // OK
tuple = ["hello",100] // Error

```
## Any
Typ any oznacza że do danej zmiennej może zostać przypisana wartość dowolnego typu.
```javascript
let anyVariable: any;
anyVariable = 123; // OK
anyVariable = "12345"; // OK
anyVariable = false // OK
```
Mam nadzieję że powyższy post przybliżył Ci typy zmiennych w __TypeScript__! Po więcej wiedzy zajżyj
[do dokumentacji](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### Dzięki za uwagę, Kamil Michna ;)
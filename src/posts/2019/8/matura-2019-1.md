---
title:  "Matura 2019 - Ulubione cyfry"
date:   "2019-08-08"
path: "/2019/8/matura-2019-1"
---


# Matura 2019 - Ulubione cyfry
Cześć! Nowa seria polegać będzie na wspólnym rozwiązywaniu zadań z matury rozszerzonej z informatyki, do której właśnie się przygotowuję. Wykorzystywać będziemy język __Python__ - jako jeden z dostępnych obecnie. Zaczniemy od tegorocznej matury. Arkusze matury możesz znaleźć na stronie Centralnej Komisji Egzaminacyjnej:  [Link](https://cke.gov.pl/egzamin-maturalny/egzamin-w-nowej-formule/arkusze/2019-2/).
## Treść zadania: 
`
Małgosia i Jaś lubią liczby. Małgosia lubi liczby nieparzyste, a Jaś lubi liczby parzyste. Każde z dzieci zapisało po kilka spośród swoich ulubionych liczb na jednej wspólnej kartce. Najpierw Małgosia zapisała wszystkie swoje liczby, a potem Jaś dopisał swoje.
`
"Kartkę" możemy przedstawić jako __tablicę dwuwymiarową__ która zawiera najpierw bliżej nieokreśloną ilość liczb nieparzystych, a następnie - również nieokreśloną ilość liczb parzystych. Dla przykładu, zbiór liczb wypisanych przez Jasia i Małgosie może wyglądać w ten sposób: 
`
{5, 99, 3, 7, 111, 13, 4, 24, 4, 8}
`
Od lewej mamy zapisane liczby Małgosi - nieparzyste. Naszym celem jest znalezienie pierwszej liczby Jasia - czyli pierwszej liczby parzystej. W tym przypadku jest to __4__.

## Zadanie 1.1:
`
Napisz algorytm (w postaci listy kroków, w pseudokodzie lub w wybranym języku programowania), który dla danego ciągu liczb zapisanych przez dzieci znajdzie pierwszą liczbę zapisaną przez Jasia. Zakładamy, że każde z dzieci zapisało co najmniej jedną liczbę. 

Przy ocenie będzie brana pod uwagę złożoność czasowa Twojego algorytmu. Maksymalną liczbę punktów uzyskasz za algorytm o złożoności lepszej niż liniowa. 

Uwaga: W zapisie algorytmu możesz wykorzystać tylko operacje arytmetyczne (dodawanie, odejmowanie, mnożenie, dzielenie, dzielenie całkowite, reszta z dzielenia), instrukcje porównania, instrukcje sterujące i przypisania do zmiennych lub samodzielnie napisane funkcje, wykorzystujące wyżej wymienione operacje.
`
O co chodzi? Ano mamy za zadanie napisać w __dowolnym języku programowania lub pseudokodzie__ program który w ciągu liczb znajdzie nam pierwszą liczbę parzystą (napisaną przez Jasia). Jest to stosunkowo proste na pierwszy rzut oka, ale sprawa komplikuje się przy __złożoności obliczeniowej__. Wykonajmy więc póki co zadanie w najprostszy sposób, taki po "najmniejszej linii oporu"  - najszybszy ale jednocześnie dający nam najmniejszą liczbę punktów.

W jaki sposób to zrobimy? Pewnie większość z Was gdyby bez względu na wspomnianą już __złożoność obliczeniową__ miała napisać wymagany algorytm zrobiła by to w ten sposób. po prostu sprawdzamy naszą tablicę od lewej do prawej, i gdy tylko natrafimy na liczbę parzystą zatrzymujemy go i zwracamy wynik. Użyjemy do tego __pętli__
```python
# używam polskiej nazwy zmiennej jedynie dla lepszej czytelności kodu.
lista = [5, 99, 3, 7, 111, 13, 4, 24, 4, 8]

for liczba in lista:
	if liczba %2 == 0:
		print('Pierwsza liczba parzysta to: ' + str(liczba))
	break;

```

Myślę że kod jest bardzo prosty - i co ważne czytelny. Moglibyśmy również zrobić z niego funkcję która odnajdzie pierwszą liczbę parzystą dla każdego zbioru liczb podanego jako argument. Do dzieła!
```python
# używam polskiej nazwy zmiennej jedynie dla lepszej czytelności kodu.
lista = [5, 99, 3, 7, 111, 13, 4, 24, 4, 8]

def pierwsza_parzysta(liczby):
	for liczba in liczby:
		if liczba%2 == 0:
			return liczba

print('Pierwsza parzysta liczba to: '+str(pierwsza_parzysta(lista)))
```
Program w obu powyższych przypadkach zwróci 4 - czyli działa. Kod jest czytelny, prosty, sukces, prawda? Ano nie. Rozwiązanie jest prawidłowe, ale dostalibyśmy za nie minimalną liczbę punktów. 
## Dlaczego? 
Problemem jest  wspomniana już wcześniej __złożoność obliczeniowa__. O co chodzi? Ważnym problemem w informatyce jest opisanie szybkości danego programu. Jednak istnieje całe mnóstwo konfiguracji sprzętowych - zwyczajny pomiar czasu wykonania nie jest miarodajny. Dlatego używa się różnych sposobów na określenie szybkości działania algorytmu. W skrócie, nasz algorytm ma obecnie złożoność liniową. Dlaczego? Ano jeżeli narysowalibyśmy sobie wykres ilości przeprowadzonych operacji do ilości liczb to była by to linia prosta - im więcej liczb tym więcej razy musimy iterować przez tablicę. Lepszym rozwiązaniem jest zastosowanie algorytmu o złożoności logarytmicznej. Zapisany przeze mnie w pythonie algorytm wygląda w ten sposób: 
```python 
A = [1,2,5,6,22,44,18]

while True:
	n = len(A)
	if A[n//2] %2 == 0  and A[n//2-1] %2 == 1:
		print(A[n//2]) #Otrzymaliśmy wynik, wyświetlamy go
		break
	elif A[n//2] %2 == 1  and A[n//2-1] %2 == 1:
		A = A[n//2:]
	elif A[n//2] %2 == 0  and A[n//2-1] %2 ==0:
	A = A[:n//2]
```
Co dzieje się w tym programie? Załóżmy że mamy tablicę: `1,2,5,6,22,44,18`. Program znajduje jej środek, czyli `6`. Następnie sprawdza wartość elementu wcześniejszego, czyli `5`. Jeżeli nasz  parzysty środek jest poprzedzony liczbą nieparzystą, oznacza to że znaleźliśmy poszukiwaną przez nas wartość. Sprawdźmy teraz działanie algorytmu na innym zbiorze danych, na przykład podanym wcześniej: `5, 99, 3, 7, 111, 13, 4, 24, 4, 8`. Program środek tablicy znajduje wzorem `długość tablicy//2`, czyli w naszym przypadku jest to indeks 5 - wartość `13`. Program sprawdza element poprzedzający - `111`. Instrukcja warunkowa nr 2 (środkowy elif) mówi mu, że w takim przypadku ma uciąć pierwszą połowę naszej tabeli - element szukany na pewno znajduje się bardziej na prawo! Następuje kolejna iteracja. Tym razem za środek zostaje przyjęty element o indeksie `2`, a A ma teraz elementy: `13, 4, 24, 4, 8`. 24 jest podzielne przez 2, element poprzedzający - 4 - też. W tym wypadku odcinamy wszystko na prawo, razem z 24. Pozostaje nam `[13,4]`, z którego program zwraca wartość 4 dzięki pierwszej instrukcji warunkowej. I  voilà! Użyliśmy tutaj wariacji algorytmu `binary search`, który według Wikipedii ma złożoność __O(log n)__. Oznacza to że __w przypadku miliona elementów w tablicy program musiałby sprawdzić maksymalnie 20 elementów aby znaleźć pożądany, a nasz wcześniejszy algorytm - w najgorszym wypadku - aż milion!__ To gigantyczna przepaść w złożoności, ważna zwłaszcza w dużych zbiorach danych. Następnie pozostało nam udzielić odpowiedzi - złożoność naszego algorytmu jest __logarytmiczna__. Zadanie gotowe!
### Dzięki za uwagę, Kamil Michna ;)
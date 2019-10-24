---
title:  "Jak dynamicznie dodawać treść do strony?"
date:   "2019-05-22"
path: "/2019/5/dynamiczne"
---
# Dynamiczne dodawanie treści do strony.



  W pewnym momencie statyczne strony, oparte o __hmtl__ __css__ i __javascript__ przestają nam wystarczać - potrzebujemy szybkiego sposobu na dodawanie nowej treści do strony. Gdybyśmy na przykład prowadzili bloga, i przy każdym nowym wpisie musieli ręcznie modyfikować pliki strony, a następnie wysyłać całość na serwer, zajęło by nam to mnóstwo czasu, naraziło by nas też na pomyłki - ręczne dodawanie każdej podstrony i modyfikacja treści na innych nawet dla doświadczonego webmastera może okazać się nieco skomplikowane i przy odrobinie zgubnej rutyny spowodować poważne  błędy w funkcjonowaniu serwisu. Potrzebujemy więc narzędzia, tylko jakiego? Są dwa główne sposoby na rozwiązanie naszego problemu.

## Podejście nr 1 - CMS (content management system)

Bardzo popularne rozwiązanie. Polega ono na stworzeniu systemu przy użyciu jakiegoś języka działającego po stronie serwera (najpopularniejsze to PHP, Node.js czyli backendowe wcielenie JavaScript i inne). Dane o na przykład postach i ich treści zapisywane są przez skrypt serwerowy w bazie danych, a gdy jest to potrzebne, na przykład gdy ktoś wchodzi na naszą stronę, dane są pobierane i bardzo szybko "wrzucane" do szablonu strony. Rozwiązanie takie ma kilka ważnych wad, jak i zalet:

##Zalety CMS:

* łatwiejsze zarządzanie dużym serwisem
* uruchomienie serwisu z popularnym CMS, na przykład Wordpress jest bardzo proste
* łatwiejsze tworzenie kopi zapasowych
* łatwiej tworzyć stronę z kilkoma autorami publikującymi treści niezależnie od siebie

## Wady CMS

* działanie wolniejsze niż w przypadku stron statycznych (aplikacja musi pobrać dane z bazy, a dopiero później wygenerować na ich podstawie widok)
* systemy zarządzania treścią narażone są na ataki - w przypadku stron statycznych jedynym miejscem w którym zazwyczaj możemy obawiać się ataku który zaszkodzi naszej stronie jest nasze konto na hostingu - w przypadku systemu CMS zazwyczaj dodatkowo narażone na atak są: baza danych oraz panel administracyjny naszego serwisu, często powinniśmy również zatroszczyć się o to czy wtyczki, których niektóre serwisy mają naprawdę sporo nie są szczególnie podatne na ataki

## Podejście nr 2 - static site generators

Rozwiązanie które ostatnimi czasy zyskuje dużą popularność. Na czym polega? W zasadzie dużą część wad podejścia nr 1 stanowią: wolne działanie i stosunkowo duże narażenie na ataki. Wyżej wymienione minusy nie dotyczą stron statycznych, jednak pisanie na przykład bloga całkowicie "z palca" to dosyć karkołomny pomysł. Generatory stron statycznych stanowią jednak bardzo dobry kompromis pomiędzy tymi dwoma rozwiązaniami.

## Jak to działa?

W dużym skrócie - na podstawie pewnych danych - na przykład postów zapisanych jako zwykłe pliki tekstowe nasz generator tworzy nam za pomocą jednej komendy pliki statyczne, wstrzykując odpowiednią treść w odpowiednie dla niej miejsce. Następnie jedyne co nam pozostaje to wrzucić nowe pliki na nasz serwer i gotowe :)

## Zalety generatorów stron statycznych:

* Bardzo szybkie. Niektóre generatory dodatkowo  minifikują i kompresują nasze pliki tak, że strona działa szybciej niż w przypadku pisania strony "z palca"!
* Bezpieczne. Tutaj podobnie jak w przypadku stron statycznych nie musimy się martwić o atak na bazę danych naszej strony lub jej panel administracyjny. Jedyne o co musimy się martwić to dostęp do naszego hostingu.
* Tanie. Generatory stron statycznych znacznie obniżają koszty utrzymania w porównaniu do systemów CMS. Oszczędzimy min. na bazie danych oraz na hostingu - strona stworzona przy pomocy generatora będzie działać płynnie nawet na tańszym hostingu - co nie zawsze jest możliwe przy __CMS__

## Wady generatorów statycznych:

* Trudniejsze w skonfigurowaniu niż standardowe CMS
* Trudniej pracować nad treścią strony w kilka osób. 
* Trudniej skonfigurować niektóre usługi, np mailing ze względu na brak kodu po stronie serwera

## CMS czy generator? Co wybrac?

  Odpowiedź jest jedna: to zależy. Jeżeli planujesz stworzenie dużego serwisu, nad którym prawdopodobnie będzie pracowało kilku lub nawet kilkunastu redaktorów, CMS okaże się najlepszym wyjściem. Jeżeli jednak chcesz stworzyć stronę na którą będzie można szybko i dynamicznie dodawać treść, a przy tym ma być ona tania i szybka, oraz będzie zarządzana przez jedną lub maksymalnie kilka osób to generator stron statycznych wydaje się idealnym rozwiązaniem

## No okej, wiem już co wybrać, ale jakie narzędzia mam do wyboru:

Lista popularnych narzędzi z obu stron "barykady" jest bardzo duża. Oto kilka najpopularniejszych pozycji:

## CMSY:

  * Wordpress
  * Joomla
  * Drupal

## Generatory stron statycznych: 

  * Gatsby.js
  * Jekyll
  * Hugo

I wiele wiele więcej! Mam nadzieję że chociaż trochę pomogłem ci w dodaniu odrobiny życia na twojej stronie ;)

### Dzięki za uwagę, Kamil Michna ;)
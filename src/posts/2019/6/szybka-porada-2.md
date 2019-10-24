---
title:  "Szybka porada #2 - Serveo"
date:   "2019-06-14"
path: "/2019/6/szybka-porada-2"
---
# Czym jest Serveo?

Na pewno niejednokrotnie podczas pisania aplikacji webowej lub zwykłej strony dla klienta, spotkałeś się ze z sytuacją, gdy musiałeś przedstawić mu na przykład jak zachowują się interaktywne elementy po najechaniu na nie, lub jak wyglądają animacje na stronie. Jest to dosyć problematyczne ze względu na to, że nie można przecież przedstawić tego na statycznej grafice. Wielu programistów radzi sobie na przykład nagrywając ekran za pomocą programu, ale nie pozwala to klientowi "poczuć" jak działa strona na własnej skórze. Jest na to jedno dość proste rozwiązanie. Nazywa się Serveo. 

Dzisiejszy post będzie bardzo krótki, bo samo narzędzie jest bardzo proste. Pozwala na udostępnienie adresu lokalnego do sieci. Jak to działa? Wyobraź sobie że twoja aplikacja, na przykład w __Reactcie__ (ale może być to również dowolna inna technologia) za pomocą polecenia `npm start` jest "hostowana" pod adresem `localhost:3000`. Aby udostępnić ją w sieci globalnej, użyjmy polecenia w terminalu: `ssh -R 80:localhost:3000 serveo.net`. Używamy tutaj polecenia __ssh__, w które nie będę się bardziej zagłębiał, warto jednak zaznaczyć, że zapytania z serveo są przekierowane na nasz __localhost__ i odwrotnie. Zwróć jednak uwagę na jakim porcie działa twój serwer lokalny - jeżeli nie jest to __3000__, musisz zastąpić port w poleceniu na swój. Po poprawnym użyciu polecenia w terminalu pojawi się adres sieci globalnej pod którym dostępny jest twój projekt. Więcej o __Serveo__ przeczytasz na [stronie projektu](https://serveo.net/)

### Dzięki za uwagę, Kamil Michna ;)
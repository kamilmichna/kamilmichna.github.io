---
title:  "Biblioteka Webu #3 - React Native"
date:   "2019-06-11"
path: "/2019/6/bliblioteka-webdevu-3"
---

  # Biblioteka webu #3: Czym jest React Native?
__React Native__ to framework pozwalający tworzyć aplikacje mobilne z wykorzystaniem __Javascript__ oraz __React__. Jego główną zaletą jest prostota, w szczególności dla frontend developerów. Przeniesienie się na niego z webowej wersji React jest bardzo proste i intuicyjne.
## Jak zacząć? - instalacja i wymagania wstępne
React Native jest szczególnie dobrym wyborem, przy tworzeniu aplikacji mobilnej przez developera znającego __React__, powinna być więc możliwie jak najbardziej zbliżona do tego co znamy z wersji webowej frameworka. Aby rozpocząć, potrzebujemy:

* Zainstalowany __Android SDK__
* Android Studio, aby łatwiej zarządzać emulatorami __Android__
* React Native CLI

## React Native CLI
React Native CLI to narzędzie pozwalające nam na łątwe tworzenie i zarządzanie projektem __React Native__ z posiomu konsoli lub terminala. Zainstalujemy je poprzez __npm__:
`npm install -g react-native-cli
`
Następnie aby stworzyć nowy projekt użyj polecenia: 
`react-native init AwesomeProject`
## Pierwszy projekt 
Aby uruchomić pierwszy projekt, konieczne będzie uruchomienie emulatora Android. W __Android Studio__ wejdź w zakładkę __AVD Manager__ - ikonka w prawym górnym rogu. Utwórz tam emulator z obrazem __Pie API Level 28 image.__ Po przejściu do terminala komenda `emulator @nazwanaszegoemulatora` powinno bezproblemowo odpalić emulator __Android__. Jeżeli nie wiesz jakie nazwy mają emulatory skonfigurowane na twoim komputerze polecenie `emulator -list-avds` wyświetli wszystkie dostępne. Następnie w oddzielnym oknie terminala przechodzimy do katalogu z zainicjowanym wcześniej projektem __AwesomeProject__ i uruchamiamy polecenie `react-native run-android`. Na naszym emulatorze powinna uruchomić się podstawowa aplikacja w __React Native__. Więcej na temat instalacji i konfiguracji przeczytasz [tutaj](https://facebook.github.io/react-native/docs/getting-started).

## Czy warto używać React Native? 
React Native to naprawdę świetna technologia, zwłaszcza dla developerów piszących obecnie w __React__ - mi napisanie prostej aplikacji w __React Native__ zajęło niewiele więcej niż analogiczna aplikacja w webowej wersji frameworka. Dodatkowo oszczędzasz czas - framework pozwala na pisanie jednocześnie na __Android__ oraz __Ios__. Multiplatformowość oraz prostota nawet kosztem mniejszej wydajności jest w przypadku prostych aplikacji bardzo cenna. Oczywiście nie zawsze __React Native__ jest najlepszym wyborem - w przypadku gier, aplikacji bardzo mocno korzystających np z czujników telefonu czy kamery, albo aplikacji potrzebujących naprawdę dużej wydajności framework sprawdzi się gorzej niż na przykład języki natywne, ale do pisania klienta aplikacji webowej na urządzenia mobilne nada się idealnie. Dodatkowym plusem jest możliwość (mimo iż w __React Native__ wykorzystuje się komponenty, a nie tagi html) używania części logiki między aplikacją webową w __React__ a klientem w __React Native__.

## Kto używa React Native?
Przede wszystkim firma odpowiedzialna za jego rozwój - __Facebook__. Dodatkowo znajdziemy go u takich firm jak: 
* Walmart
* Instagram
* Soundcloud

Mam nadzieję że powyższy post chociaż trochę przybliżył ci czym jest React Native, i dlaczego warto go używać. Dodam również że warto także mieć na oku stworzonę przez __Google__ technologie __Flutter__ która zdobywa popularność i dla wielu może stanowić przyszłość aplikacji mobilnych. Kto wie, może znajdzie ona swoje miejsce w kolejnych postach?
### Dzięki za uwagę, Kamil Michna ;)
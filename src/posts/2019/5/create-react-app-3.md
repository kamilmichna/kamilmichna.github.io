---
title:  "Biblioteka create-react-app 3.0 - co nowego?"
date:   "2019-05-19"
path: "/2019/5/create-react-app-3"
---
# create-react-app 3.0 - co nowego?

## Całkiem niedawno, bo na początku maja udostępniono nową wersję popularnego i używanego przez wielu developerów pracujących z Reactem narzędzia do szybkiego tworzenia gotowego, podstawowego projektu. 

Aby zainstalować wersję >= 3.0 użyj polecenia `npm i -g create-react-app`. Prawdopodobnie będziesz musiał również użyć `sudo`. Aby sprawdzić wersję wpisz: `create-react-app -V`.

Oto najważniejsze nowości nowej wersji:



## Komponenty funkcyjne zamiast komponentów opartych na klasach

To chyba jak dla mnie najważniejsza zmiana. Narzędzie zamienia nam komponenty oparte o klasę Component, w zamian oferując komponenty funkcyjne. Oczywiście wiąże się to również z używaniem __React Hooks__ zamiast __setState__. Poniżej przykład tego samego komponentu napisanego z użyciem klasy oraz komponentu czysto funkcyjnego:

```javascript
function Hello(props) {
  return <h1>Hello, {props.text}</h1>;
}
```

```javascript
class Hello extends Component {
  render() {
    return <h1>Hello, {this.props.text}</h1>;
  }
}
```

## Ustawianie bazowego  URl

Zapewne często zdażyło wam się mieć coś takiego w swoim imporcie:

```js
const Component = require('../../../../../Component');
```

Teraz możemy rozwiązać to, określając tzw baseUrl w naszym pliku __jsconifg.json__:

```js
{
  "compilerOptions": {
    "baseUrl": "src"
  },
}
```

Teraz coś takiego: 

```js
import Component from 'src/components/Component
```

zostaje zamienione na to:

```js
import Menu from 'components/Menu';
```

## Ważną zmianą w  create-react-app od wersji 3.0 jest dostępna w narzędziu najnowsza wersja Jest, która pozwala min na transpilację plików TypeScript

Mam nadzieję że przekonałem was do zaktualizowania __create-react-app__

### Dzięki za uwagę, Kamil Michna ;)
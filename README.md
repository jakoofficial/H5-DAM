# D.A.M.
Dette er en proof of concept udgave at min tværfagligt projekt applikation.<br>
Projektet er en daglig opgave tracker hvor man alene eller med sine venner kan oprette, og se en oversigt over grupper eller opgaver man vil udføre.

## Systemer/programmer og frameworks brugt
| Navn | Brugt til |
| ---- | ----- |
| SQLite3 | Databasen |
| DB Browser | Visuel Database værktøj for SQLite |
| FastAPI | WebAPI |
| Visual Studio Code | IDE til opgave |

## Sprog brugt i produktets opbygning
| Navn | Brugt til |
| -----| --------- |
| HTML/CSS | Grundlæggende web opsætning |
| Svelte | Funktionalitet af web/dom elementer og filstruktur |
| Python | WebAPI opbygget i python og et virtuelt enviornment |
| SQLite3 | Brugt til opsætning af Database tabeller og indhold |

## Brug af produktet
### Applikation
Find projektets mappe (DAM) og åbne en konsol og skrive kommmandoen ``npm run dev``<br>
Dette starter en lokal server hvor applikationen vil køre.<br>
Dette kræver at man har Node.js installere og have kørt ``npm install`` før det kan køres.

### WebAPI
Find WebAPI mappen (WebAPI) og start et python virtuelt enviornment og kør kommandoen ``fastapi dev main.py``<br>
Hvis intet enviornment kan findes skal sådan et oprettes. Skriv kommandoen ``python -m venv WebAPI``<br>
Kør herefter ``source [MappeTilAPI]/WebAPI/bin/activate`` for at bruge det nye enviornment.

### I Applikationen
Efter opsætningen er gjort kan man nu bruge app'en, hvis api'en er oppe og køre kan man lave eller bruge en bruger som er lavet for eksempel brugeren admin med koden admin.<br>
Da dette er et proof of concept og ikke produktions klart er brugeren admin en almindelig bruger og kan det samme som de andre brugere i systemmet.

Der er nogle funktioner i applikationen som ikke fungere da disse er kun opsat visuelt men giver en god ide i hvordan disse dele ville fungere og se ud.


### Andre readme filer
[Svelte projekt creation](./DAM/README.md)

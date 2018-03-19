# Fra DB til OOP
Forlængelse af Gallery opgaven (del 1)

WI73 Avanceret Webintegration, uge 12 2018

## Mål
Du kan hente data fra en database og via routes overføre til et fetch, for derefter at inlæse som objekter i et array (OOP).

## Øvelse
Vi skal koble Gallery øvelsen op mod en database, hvor arbejdsgangen går fra udvikling af database mod front-end, altså galleriet.

### 1. Database
1.1 Opret en database kaldet Galleri

1.2 Opret en tabel kaldet Billede med information om id, titel, kategori, filnavn, dato og fotograf. Sørg for at databasen er normaliseret og indeholder relationer.

1.3 Indsæt test-data i databasen, så du har noget at arbejde med i næste øvelse.

1.4 Opret to sql-sætninger, en som henter alle informationer om alle billeder - og en som henter alle billeder i en bestemt kategori.

## 2. Nodejs backend
2.1 Opret et Nodejs projekt enten med Restify eller Express.

2.2 Opret to routes, et som leverer alle informationer om alle billeder - og et som kun leverer billeder i en bestemt kategori.

2.3 Opret endnu et route som leverer alle kategorier (id og navn).

2.4 Opret en public folder til dine billeder - indæst en række billeder og opdater databasen manuelt.

## 3. Frontend
3.1 Indsæt din Gallerí webside som frontend i din applikation.

3.2 Opret en Class kaldet Image som indeholder properties svarende til den data de to routes leverer.

3.3 Opret en metode i din Gallery-class kaldet getData som henter billeder gennem api'et og indsætter i galleriet.

3.4 Udvid dit galleri med visning af kategorinavn, titel, fotograf og dato.

3.5 Indsæt en galleri-vælger funktion, så brugeren kan vælge hvilket galleri som skal vises.
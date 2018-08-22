## Opgave 1

Opret en database. 

Emner: 

* Datatyper 

* Relationer  (Fremmednøgler, constraints) 

Niveauer: 

Kun ét niveau: Vi forventer, at alle kan klare denne opgave. 

Tid:  ca. 2 lektioner til opbygning, relationer, osv (eksklusiv indsætning af data) 

 

## Opgave 2 

 

Gør en applikation klar.  Der skal ikke ske noget på siden endnu. Serveren skal blot gøres klar, så I kan begynde at implementere komponenter i efterfølgende opgaver. 

Emner: 

* Repository 

* Genbrug egen boiler template 

* Gør views og routes klar 

Niveauer: 

Kun ét niveau: Vi forventer, at alle kan klare denne opgave. 

Tid:  1 lektion  (helst under) 

## Opgave 3 

 

Der skal laves services. I første omgang er det ikke nødvendigt, at lave services til ALT. I skal have lavet nok til, at vi kan se, at I sagtens ville kunne bygge videre på det. I skal altså have forholdsvist nemt ved at genbruge en service og tilpasse den. 

Emner: 

* Routes 

* Services:  Hvad er fordelen? 

* Test routes direkte i browseren (i URL'en) 

* Test routes vha. POST-man eller lignende værktøjer til POST, PUT, DELETE, osv. 

* Async await 

* Funktionsparametre og return  (array med objekter eller ét objekt?) 

* CRUD  (her menes der ikke admin) 

* Fejlfinding 

* Log SQL 

Tid:  1 - 2 dage. 


## Opgave 4 

Udtræk af data på siden. 

Emner: 

* Render vs Fetch: Vurder hvornår der skal bruges Render og hvornår der skal bruges Fetch 

* EJS:  Tjek om en variabel er defineret 
https://stackoverflow.com/questions/5372559/what-is-the-proper-way-to-check-for-existence-of-variable-in-an-ejs-template-us 

EJS:  <% %> kan bruges hvor som helst i HTML'en. 

### Ekstraopgaver: 

Hent data fra databasen, vis dataen tabulært og gør det muligt at sortere listen efter det felt man trykker på (kolonne-overskrifter). 

## Opgave 5 

Indsæt validering på alle formularer og giv brugeren besked når noget er gået godt eller mindre godt (lad applikationen interagere med brugeren)

Tip: Brug evt. NPM Express-validate. Lav gerne dine egne validerings-funktioner (services backend)

### Emner: 

* Send post vha. fetch() 

* Brugervenlighed.  Indtastede oplysninger må ikke forsvinde, når brugeren laver en fejl (validering). 

* Beskeder til brugeren 

* event.preventDefault 
 

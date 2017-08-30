<div style='text-align:right; width:100%'>Frank Goldmann August 2017</div>

# Database
En database er kort sagt et sted hvor man kan gemme data. I modsætning til f.eks. variable, som ikke er tilgængelige når programmet er kørt - er en database et sted hvor data kan gemmes permanent, også selvom serveren lukkes ned. Ved hjælp af et database management system (DBMS) præsenteres dataen i tabeller, og kan både læses, redigeres, oprettes og slettes. Det er det vi skal arbejde med i undervisningen og vores kommende webapplikationer. Vi skal arbejde med en mysql-database og tilgå den både med phpmyadmin (DBMS) og via nodejs (javascript). Vi skal lære et nyt sprog kaldet SQL (Structured Query Language )

### Undervisningen
> Vi skal lære en lang række begreber og anvende dem i praksis.<br>
> Der er en del tavleundervisning og selvfølgelig en del kodeundervisning som vi plejer.<br>
> I denne dokumentation lægges en række kodeeksempler, men det er ikke alle begreber der forklares skriftligt - det bliver de i undervisningen, så det er vigigt at du er deltagende og tager de nødvendige noter i undervisningen.

#### Liste over hvad vi kommer igennem

* Hvad en database/relationsdatabase er
* MySQL og phpmyadmin (DBMS)
* SQL (primært CRUD)
* Tabeller (tables/entities)
    * felter (fields) og metadata
        * datatyper
        * primærnøgler (primary keyes)
        * lånenøgler (foreign keyes)
        * auto increment
        * unique
        * indexes
* Relationer
    * 1:n, n:1 og n:m
    * update- og deleterules
* E/R-diagram
* Databasedesign vha. Objekt Orienteret Analyse og Design (OOAD) og normalisering

* Nodejs og database


--- 
### Database lektion 1-4
---


DBMS - XAMPP https://www.apachefriends.org/download.html 
# Formål og mål
Kan implementere en database i egen webapplikation
### 

# SQL 
Hvad er SQL

Begrebet CRUD

SELECT statement

WHERE 

Test I konsollen I phpadmin

Øvelse: Åben phpmyadmin, opret en database med en table kaldet todolist med felterne id, task og state. Senere laves en tabel kaldet states, hvor status på opgaven kan være flere.

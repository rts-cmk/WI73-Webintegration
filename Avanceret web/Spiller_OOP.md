# Javascript og OOP

Her vises en række eksempler på hvordan et objekt kan opbygges.

Eksemplerne tager udgangspunkt i et simpelt objekt som udbygges i efterfølgende eksempler.

Objektet der oprettes er en "spiller", som har et navn, antal point, kan være aktiv osv.

Eksemplerne forklares i undervisningen og så kan du jo kopiere koderne for at teste i din egen editor.

### Lad os se på eksempel 1
```javascript
/*
Simpleste måde at oprette objeker, dog er et ikke hensigtsmæssigt
når der skal være flere objekter af samme type.
Vi har brug for en skabelon (næste eksempel)
*/

const spiller_1 = {
    fornavn: 'Jens',
    efternavn: 'Hansen',
    aktiv: false,
    point: 0,
    skiftAktiv() {
        this.aktiv = !this.aktiv;
    },
    givPoint(antal) {
        this.point += antal;
    },
    profil() {
        return `${this.fornavn} ${this.efternavn} har ${this.point} point ${this.aktiv ? '(aktiv)' : '(ikke aktiv)'}`;
    },
}

spiller_1.skiftAktiv();
spiller_1.givPoint(5);

// console.log(spiller_1.fornavn, "- aktiv:", spiller_1.aktiv);
// console.log(spiller_1.fornavn, ":", spiller_1.point, "point")
console.log(spiller_1.profil());
```
### Eksempel 2
```javascript
/*
Her oprettes en anonym funktionen svarende en klasse i OOP.
Funktionen kan instantieres til objekter med det reserverede ord new
Bemærk at der i dette eksempel anvnedes "komma" som adskiller de enkelte "members"
- Det kan undlades eller erstattes af et "semikolon"
- Jeg mener at semicolon er best practies (næste eksempel)
*/

const spiller = function (fornavn, efternavn) {
    this.Fornavn = fornavn,
    this.Efternavn = efternavn,
    this.Aktiv = false,
    this.Point = 0,
    this.SkiftAktiv() {
        this.Aktiv = !this.Aktiv;
    },
    this.GivPoint(antal) {
        this.Point += antal;
    },
    this.Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
    }
}

spiller_1 = new spiller("Palle", "Olsen");
spiller_2 = new spiller("Tina", "Jensen");

spiller_1.SkiftAktiv();
spiller_1.GivPoint(5);

spiller_2.GivPoint(10);

console.log(spiller_1.Profil());
console.log(spiller_2.Profil());
```
### Eksempel 3
```javascript
/*
Dette eksempel er magen til forrige, dog med semikolon efter hver member
*/

const spiller = function (fornavn, efternavn) {
  this.Fornavn = fornavn;
  this.Efternavn = efternavn;
  this.Aktiv = false;
  this.Point = 0;
  this.SkiftAktiv() {
        this.Aktiv = !this.Aktiv;
  };
  this.GivPoint(antal) {
        this.Point += antal;
  };
  this.Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
  };
}

spiller_1 = new spiller("Palle", "Olsen");
spiller_2 = new spiller("Tina", "Jensen");

spiller_1.SkiftAktiv();
spiller_1.GivPoint(5);

spiller_2.GivPoint(10);

console.log(spiller_1.Profil());
console.log(spiller_2.Profil());
```
### Eksempel 4
```javascript
/*
Dette eksempel er med OOP syntaks.
Ændringer i forhold til forrige eksempel:
- funktionen er skiftet ud med en class
- funktionens argumenter er overført til constructoren, som opretter klassens properties
- efter construtorens scope erklæres de tre "methods"
Der findes gåde getter og setter, men da private ikke er en umiddelbar mulighed
giver det ikke mening at anvende dem her og nu.
Private findes i Typescript som vi senere skal se på.
*/

class spiller {
    constructor(fornavn, efternavn) {
        this.Fornavn = fornavn
        this.Efternavn = efternavn;
        this.Aktiv = false;
        this.Point = 0;
    }

    SkiftAktiv() {
        this.Aktiv = !this.Aktiv;
    }

    GivPoint(antal) {
        this.Point += antal;
    }

    Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
    };
}

spiller_1 = new spiller("Palle", "Olsen");
spiller_2 = new spiller("Tina", "Jensen");

spiller_1.SkiftAktiv();
spiller_1.GivPoint(5);

spiller_2.GivPoint(10);

console.log(spiller_1.Profil());
console.log(spiller_2.Profil());
```
### Eksempel 5
```javascript
/*
I dette eksempel bygger vi en liste op af objekter, altså spillere.
Vi opretter ikke instanser som spiller_1 og spiller_2, men pusher
unavngivne objekter til er array. 
*/

class spiller {
    constructor(fornavn, efternavn) {
        this.Fornavn = fornavn
        this.Efternavn = efternavn;
        this.Aktiv = false;
        this.Point = 0;
    }

    SkiftAktiv() {
        this.Aktiv = !this.Aktiv;
    }

    GivPoint(antal) {
        this.Point += antal;
    }

    Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
    }
}

const spillerliste = [];
spillerliste.push(new spiller("Pelle", "Olsson"));
spillerliste.push(new spiller("Tine", "Jonsen"));

spillerliste.forEach(function (spiller) {
    console.log(spiller)
});
```
### Eksempel 6
```javascript
/*
Eksenplet her adskiller sig fra forrige, da der her er oprettet en
metode som genererer en liste af objekter, af typen spiller, altså klassen selv.
Det er en "static method", som betyder at klassen ikke skal instantieres for
at tilgå metoden.
Man kan bruge metoden til at generere "dummy-data", men kan også bruges til at
initialisere listen med data fra f.eks. en json-fil.
*/

class spiller {
    constructor(fornavn, efternavn) {
        this.Fornavn = fornavn
        this.Efternavn = efternavn;
        this.Aktiv = false;
        this.Point = 0;
    }

    SkiftAktiv() {
        this.Aktiv = !this.Aktiv;
    }

    GivPoint(antal) {
        this.Point += antal;
    }

    Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
    }

    static HentSpillerliste() {
        const liste = [];
        liste.push(new spiller("James", "Dean"));
        liste.push(new spiller("Sandre", "Dee"));
        liste.push(new spiller("Sam", "Glee"));
        return liste;
    }
}

const spillerliste = spiller.HentSpillerliste();

spillerliste[1].Point = 10;
spillerliste[1].GivPoint(20);
console.log(spillerliste[1].Point);

console.log(spillerliste);
```
### Eksempel 7
```javascript
/*
Eksempel på søgefunktion med en statisk metode som 
kan søge på navne i spillerlsiten. Metoden returnerer
en ny liste med resultater
*/

class spiller {
    constructor(fornavn, efternavn) {
        this.Fornavn = fornavn
        this.Efternavn = efternavn;
        this.Aktiv = false;
        this.Point = 0;
    }

    SkiftAktiv() {
        this.Aktiv = !this.Aktiv;
    }

    GivPoint(antal) {
        this.Point += antal;
    }

    Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
    }

    static HentSpillerliste() {
        const liste = [];
        liste.push(new spiller("James", "Dean"));
        liste.push(new spiller("Sandre", "Dee"));
        liste.push(new spiller("Sam", "Glee"));
        return liste;
    }

    static FindSpiller(liste = [], search = "") {
        const result = [];
        liste.forEach(function (spiller) {
            if (spiller.Fornavn.toLowerCase()
                .indexOf(search.toLowerCase()) > -1) {
                //console.log(spiller.Profil());
                result.push(spiller)
            }
        })
        return result;
    }
}

const spillerliste = spiller.HentSpillerliste();

console.log(spiller.FindSpiller(spillerliste, "j"));
```
### Eksempel 8
```javascript
/*
Functional programming
*/

/**
 * Creates a Object with user properties
 * @param {string} firstname
 * @param {string} lastname
 * @returns {Object}
 */
const CreatePlayer = (firstname, lastname) => ({
  firstname,
  lastname,
  active: false,
  point: 0,
})

/**
 * Checks if the value is string
 * @param {string} value
 * @returns {String}
 */
const isString = (value) => {
  if (typeof value === 'string' || value instanceof String) return value.toLowerCase()
  return undefined
}

/**
 * Check if the value contains
 * @param {string} value
 * @param {string} search
 * @returns {boolean}
 */
const FindPlayerByFirstname = (value, search) => isString(value.firstname).indexOf(isString(search)) > -1


const players = [
  CreatePlayer('James', 'Dean'),
  CreatePlayer('Sandre', 'Dee'),
  CreatePlayer('Sam', 'Glee'),
]

console.log('Should return player Sandre Dee', players.filter(value => FindPlayerByFirstname(value, 'an')))

```

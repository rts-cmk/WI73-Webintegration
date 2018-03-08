Avanceret Webintegration 2018 / AMO & FRG

# OOP Gallery - Javascript opgave

## Formål

Formålet med opgaven er, at træne **Objekt-Orienteret Programmering** i **Javascript**.
Det handler IKKE om at lave et galleri, som ser godt ud, dog må der ikke være nogen tvivl om, hvordan brugeren skal betjene galleriet.


## Struktur og regler

* Brug en fornuftig filstruktur, fornuftig navngivning af filer, variabler, funktioner, osv.

* Alt Javascript skal ligge i JS-filer. Helst ingen Javascript i HTML'en.

* I Javascript er der flere måder hvorpå man kan definére en funktion. Du bestemmer selv hvilken syntaks du vil bruge.

* Opgaven skal løses vha. objekt(er), som indeholder properties og funktioner.

* Du bestemmer selv om du vil bruge danske eller engelske navne i koden.


## Udleverede filer

Det er ikke absolut nødvendigt at tage udgangspunkt i den udleverede kode. Formålet med de udleverede filer er, at hjælpe dig lidt på vej med hensyn til strukturen. Du får stort set intet Javascript udleveret.
Se evt. afsnittet **"Forslag til funktionsnavne"**, men husk, at det er bare forslag.

### **"oop_gallery.js" filen**

Denne fil må kun indeholde **definitionen på gallery objektet**.<br>
Altså må der ikke stå `"new OOPGallery()"` nogen steder i denne fil.

Hvis en hjemmeside f.eks. har 3 gallerier på samme underside,
så må de 3 gallerier IKKE nævnes specifikt her!

Spørg, hvis du er i tvivl omkring disse regler.

### **"page.js" filen**

Dette er en JS fil, der tilhører en specifik underside, som f.eks. forside, kontaktside, produktside, osv.

I denne fil skal du benytte dig af de **objekter, properties og funktioner**, som du har defineret i **"oop_gallery.js"**.

I **"page.js"** filen er det tilladt at referere til specifikke gallerier, som f.eks. galleri01, galleri02, osv.

Det er ikke tilladt her, at definere funktioner, som direkte har noget med galleri objektet at gøre.

### **"index.html" filen**

Da opgaven ikke omhandler opsætning af HTML og CSS, får du udleveret et eksempel på, hvordan det kunne se ud. Du er velkommen til at lave om i koden.

Lad være at spilde din tid på at tilføje effekter og lignende. Det vil ikke have nogen positiv indflydelse på din karakter. Hold det derfor simpelt, så du kan koncentrere dig om OOP delen.

## Opgaven

Du skal vha. udleverede eksempler og/eller oplæg omkring OOP, programmere et galleri i Javascript.

**Siden må ikke genindlæses** pga. et tryk på en knap eller lignende.

### Der stilles følgende **krav**, set fra en **almindelig brugers** synspunkt:

* **Når siden indlæses**, vises det **første billede** i galleriet.

* Man kan trykke på en knap, som viser **næste billede**.

* Man kan trykke på en knap, som viser **forrige billede**.

* Man kan trykke på en knap, som viser **første billede**.

* Man kan trykke på en knap, som viser **sidste billede**.

* Hvis galleriet viser det **sidste billede** og man trykker **"næste"**, så skal den hoppe tilbage til **første billede**.

* Hvis galleriet viser det **første billede** og man trykker **"forrige"**, så skal den hoppe til **sidste billede**.

* Den skal vise, hvilket **nummer** billedet har og **hvor mange billeder** der er i alt, f.eks:   "3 / 4",  "3 of 4", osv.

* Man skal kunne bruge **flere gallerier samtidig**. De skal være uafhængige af hinanden.

**(Ekstraopgaver)**

* Man kan trykke på en knap, som aktiverer/deaktiverer **"wrap mode"**, hvilket er en indstilling, som bestemmer om galleriet skal **loope**, når man når enden.

* Hvis du har lavet den ekstraopgave, som omhandler **"wrap mode"**, så få dit script til at reagere på, at man er nået **slutningen** eller **starten** af galleriet. Skift f.eks. farve på de knapper brugeren ikke bør benytte sig af (fade "forrige" knappen ud, hvis første billede er vist, osv), men kun **hvis wrap mode er deaktiveret**.

* Man kan trykke på en knap, som viser et **tilfældigt billede**.

* Man kan trykke på en knap, som aktiverer/deaktiverer **"auto mode"**, hvilket er en indstilling, som bestemmer om galleriet skal have lov at **skifte billede automatisk** med et interval på et par sekunder.

### Der stilles følgende programmeringsmæssige **krav**:

* Ovennævnte funktionalitet (gå til forrige billede, næste billede, osv) skal kodes inden i et objekt.

* Du skal så vidt muligt **optimere** din kode. Hvis du kan se en masse **gentagelser**, så skal du vurdere om det ville være en fordel, at **definere en ny funktion**, så du kan **forkorte din kode**.

* Objektet må ikke være for afhængigt af den kode, som står i **EventListeners**, forstået sådan, at udvikleren bl.a. skal kunne skrive følgende i "page.js" filen:
`gallery01.nextImage()` hvilket skifter billedet uden at brugeren har klikket på noget.

* Du skal definere en **funktion** (f.eks. addImage) i objektet, som tager imod en **billedsti + et filnavn** (bare **én string**) og gemmer oplysningerne i objektet. Det skal være muligt at bruge denne funktion selv efter galleriet er blevet skabt og vist på siden.

* Du skal definere en **funktion** (f.eks. addImages) i objektet, som tager imod et **array af billedstier + filnavne** og gemmer oplysningerne i objektet. Det skal være muligt at bruge denne funktion selv efter galleriet er blevet skabt og vist på siden.

* Du skal oprette en **ekstra underside**, som også viser **et eller flere gallerier**. Den nye underside skal indlæse samme **"oop_gallery.js"** fil, som forrige side. Du må ikke oprette flere "oop_gallery.js" filer.

**(Ekstraopgaver)**

* Hvis du har lavet de ekstraopgaver, som omhandler **"wrap mode"** / **"auto mode"**, sørg for at **definere funktioner**, der aktiverer/deaktiverer dem. Udenfor objektet, skal man helst ikke være nødt til at ændre en property direkte.

		gallery.setWrapMode (true); // Indirekte (godt)
		gallery.wrapMode = true;    // Direkte (ikke så godt)


## Forslag til funktionsnavne
At finde på fornuftige navne til variabler, funktioner, osv. kan nogen gange være ret svært. Her er nogle forslag:

	gotoImageFirst ()
	gotoImageLast ()
	gotoImagePrevious ()
	gotoImageNext ()
	updateImage ()
	addImage (string)
	addImages (array)
	
	toggleWrapMode ()
	setWrapMode (bool)
	toggleAutoMode ()
	setAutoMode (bool)
	
	
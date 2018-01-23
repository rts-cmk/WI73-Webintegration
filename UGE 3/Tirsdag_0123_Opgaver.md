
# Tirsdag d. 23/1

## Forudsætninger

Du skal have et **ExpressJS** projekt klar, som bruger en **View Engine**. Det er op til dig, hvilken View Engine du vil bruge (EJS, Pug, Handlebars, osv).

## Opgaver

### Opgave 1: Navigationsmenu på alle undersider

Hvis du ikke allerede har en navigationsmenu, som er **synlig på alle undersider**, så opret én. Du skal gøre det vha. **views** og **partial views** i dit ExpressJS projekt.


---


### Opgave 2: Views, billeder og CSS

I denne opgave skal du vise, at du kan arbejde med views og at du kan gøre visse typer filer offentligt tilgængelige (billeder og CSS). 

1. Opret et **view** kaldet **"billeder"** i dit ExpressJS projekt.

2. Indsæt et par `<img>` tags i dit view (du vælger selv billederne).<br>Test dit view i browseren inden du går videre.

3. Indlæs en CSS fil, som styler billederne (giv dem f.eks. en border).<br>
Inline CSS er <u>ikke</u> tilladt.<br>
Hvis du allerede har indlæst en CSS fil i projektet, så er du velkommen til at bruge dén i stedet for at oprette en ny én.

4. Indsæt et link i din navigationsmenu til ovennævnte underside.


---


### Opgave 3: Server-side vs Client-side Javascript

I denne opgave skal du vise, at du forstår forskellen mellem at afvikle javascript i et view på serveren og at afvikle javascript på client-side.

1. Opret et **view** kaldet **"js-server-vs-client"** i dit ExpressJS projekt.

2. Opret en `<button>` i dit view.

3. Indlæs en client-side javascript fil i dit view.<br>
Kald gerne javascript filen "opgave-3.js" eller "server-vs-client.js"

4. Javascriptet skal indeholde en eventlistener, som lytter på om siden er færdig med at blive indlæst.

5. Når siden er indlæst, skal der tilføjes en eventlistener til knappen, som lytter på om knappen er blevet trykket.<br>
Når der trykkes på knappen skal den bare logge beskeden "Knap trykket".

6. Indsæt et link i din navigationsmenu til ovennævnte underside.